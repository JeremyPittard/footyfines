import { NOW, column, defineTable } from "astro:db";

export const Users = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    password_hash: column.text(),
  },
});

export const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    userId: column.text({ references: () => Users.columns.id, notNull: true }),
    expiresAt: column.number(),
  },
});

export const Players = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    name: column.text(),
    isPeanut: column.boolean({ default: false, optional: true }),
  },
});

export const Fines = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    amount: column.number(),
    reason: column.text({ optional: true }),
    date: column.date({ default: NOW }),
    playerId: column.number({ references: () => Players.columns.id }),
  },
});

export const Payments = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true, autoIncrement: true }),
    amount: column.number(),
    date: column.date({ default: NOW }),
    playerId: column.number({ references: () => Players.columns.id }),
  },
});
