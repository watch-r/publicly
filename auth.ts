import NextAuth, { User } from "next-auth";
import { UpstashRedisAdapter } from "@auth/upstash-redis-adapter";
import { redis_db } from "./lib/db";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: UpstashRedisAdapter(redis_db),
    providers: [
        Google,
    ],
});
