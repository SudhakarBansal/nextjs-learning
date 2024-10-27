"use server";
import sql from "better-sqlite3";

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
  console.log(meal);
}
