import type { TotalFines } from "@/shared/types";
import { db, Players, Fines, Payments } from "astro:db";
const players = await db.select().from(Players);
const fines = await db.select().from(Fines);
const payments = await db.select().from(Payments);

const playerFines: TotalFines[] = players.map(({ name, id, isPeanut }) => {
  const playerFines: any[] = fines.filter((fine: any) => fine.playerId === id);
  const playerPayments: any[] = payments.filter(
    (payment: any) => payment.playerId === id,
  );
  const totalFines: number = playerFines.reduce(
    (total: number, fine: any) => total + fine.amount,
    0,
  );
  const totalPayments: number = playerPayments.reduce(
    (total: number, payment: any) => total + payment.amount,
    0,
  );
  return {
    amountPaid: totalPayments,
    amountFined: totalFines,
    name: name,
    isPeanut: isPeanut ? true : false,
    playerId: id,
  };
});

export const getPlayerFines = () => {
  return playerFines;
};
