// Update your server import like this:
import { query, mutation } from "./_generated/server";

// ...

// Add the following function to the file:
export const getMessages = query({
  args: {},
  handler: async (ctx) => {
    // Get most recent messages first
    const messages = await ctx.db.query("messages").order("desc").take(50);
    // Reverse the list so that it's in a chronological order.
    return messages.reverse();
  },
});