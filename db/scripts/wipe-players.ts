import { db, Players, Fines, Payments } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.delete(Fines);
  await db.delete(Payments);
  await db.delete(Players);
}
