import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Error fetching data...");
  return db.prepare("SELECT * FROM meals").all();
}


export function getMealBySlug(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug =  ?").get(slug);
}