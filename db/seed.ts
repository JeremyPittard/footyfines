import { db, Players, Fines, Payments } from "astro:db";
// https://astro.build/db/seed
export default async function () {
  await db.insert(Players).values([
    { id: 1, name: "midge" },
    { id: 2, name: "midgery" },
    { id: 3, name: "midgerine" },
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
