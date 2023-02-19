import { mutation } from "./_generated/server";

export default mutation(async ({ db }, code) => {
  await db.insert("messages", { code } );
});
