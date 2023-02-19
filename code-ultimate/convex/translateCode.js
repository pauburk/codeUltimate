import { query } from "./_generated/server";

export default query(async ({ db }) => {
    return await db.query("messages").order("desc").take(1);
});