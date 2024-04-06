import { defineDb } from "astro:db";
import { Fines, Payments, Players, Sessions, Users } from "./tables";

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Sessions,
    Players,
    Fines,
    Payments,
  },
});
