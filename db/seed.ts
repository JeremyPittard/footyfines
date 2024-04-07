"Use Client";

import { db, Players, Fines, Payments } from "astro:db";
// https://astro.build/db/seed
export default async function () {
  await db
    .insert(Players)
    .values([
      { id: 1, name: "midge" },
      { id: 2, name: "midgery" },
      { id: 3, name: "midgerine", isPeanut: true },
      { name: "xavier" },
      { name: "Fred" },
      { name: "Donovan" },
      { name: "Mitch" },
      { name: "Warner" },
      { name: "Monty" },
      { name: "ranga" },
      { name: "mandy" },
      { name: "sandy" },
      { name: "billie" },
      { name: "bob" },
      { name: "joe" },
      { name: "tom" },
      { name: "dick" },
      { name: "harry" },
      { name: "harvey" },
      { name: "krist" },
      { name: "anthony" },
      { name: "Jim" },
      { name: "Scholveon" },
    ]);
  await db.insert(Fines).values([
    {
      id: 1,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 1,
    },
    {
      id: 2,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 1,
    },
    {
      id: 3,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 3,
    },
    {
      id: 4,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 2,
    },
    {
      id: 5,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 2,
    },
    {
      id: 6,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 2,
    },
    {
      id: 7,
      amount: 5,
      reason: "stupid shit",
      date: new Date(),
      playerId: 2,
    },
  ]);
  await db.insert(Payments).values([
    {
      id: 1,
      amount: 2,
      date: new Date(),
      playerId: 1,
    },
    {
      id: 2,
      amount: 1,
      date: new Date(),
      playerId: 1,
    },
    {
      id: 3,
      amount: 1,
      date: new Date(),
      playerId: 3,
    },
  ]);
}
