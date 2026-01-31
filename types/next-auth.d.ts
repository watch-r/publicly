import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string

declare module "next-auth" {
    interface User {
        id?: UserId | null;
    }

    interface Session {
        user: User & {
            id: UserId;
        };
    }

    interface JWT {
        id?: UserId;
    }
}