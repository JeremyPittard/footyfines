import { db, Users, Sessions, Players, Fines, Payments } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.delete(Sessions);
  await db.delete(Users);
}
