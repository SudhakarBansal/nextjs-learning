"use server";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
import { redirect } from "next/navigation";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error fetching data...");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMealBySlug(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug =  ?").get(slug);
}

export async function handleShareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(meal);
  redirect("/meals");
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  // Ensure the images directory exists
  const directoryPath = "./public/images";
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  try {
    const bufferedImage = await meal.image.arrayBuffer();
    const imageBuffer = Buffer.from(new Uint8Array(bufferedImage));

    // Write the file synchronously to avoid issues with async stream handling
    fs.writeFileSync(`${directoryPath}/${fileName}`, imageBuffer);

    meal.image = `/images/${fileName}`;

    db.prepare(
      `
      INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(meal);
  } catch (error) {
    throw new Error("Saving Image Failed");
  }
}
