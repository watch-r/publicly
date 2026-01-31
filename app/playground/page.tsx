import { Button } from "@/components/ui/button";
import { redis_db } from "@/lib/db";
import Link from "next/link";

const PlaygroudPage = async () => {
    // await redis_db.set("this is key", "this is value");

    return (
        <main>
            <div>PlaygroudPage</div>
            <Button>
                <Link href="/api/auth/signin">Sign In</Link>
            </Button>
        </main>
    );
};

export default PlaygroudPage;
