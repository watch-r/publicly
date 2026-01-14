import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessCardProps {
    title: string;
    author: {
        name: string;
        avatar: string;
        username: string;
    };
    completedDate: string;
    achievementBadge: string;
    proofPreview?: string;
}

export function SuccessCard({
    title,
    author,
    completedDate,
    achievementBadge,
    proofPreview,
}: SuccessCardProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-success-50 bg-linear-to-br from-success-10 to-background p-6 shadow-xl shadow-success/20">
            {/* Success glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-success/20 blur-3xl" />

            {/* Header */}
            <div className="relative mb-4 flex items-center gap-3">
                <div className="relative">
                    <Avatar className="h-12 w-12 border-2 border-success/50">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback className="bg-secondary font-display">
                            {author.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-success text-success-foreground">
                        <Star className="h-3 w-3" />
                    </div>
                </div>
                <div>
                    <p className="font-display font-semibold text-foreground">
                        {author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        @{author.username}
                    </p>
                </div>
            </div>

            {/* Promise */}
            <div className="relative mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-success mb-1">
                    Promise Kept
                </p>
                <h3 className="font-display text-xl font-bold text-foreground">
                    "{title}"
                </h3>
            </div>

            {/* Success badge */}
            <div className="relative mb-4 flex items-center justify-center">
                <Badge
                    variant="success"
                    className="px-6 py-2 text-base font-bold"
                >
                    <Trophy className="mr-2 h-4 w-4" />
                    {achievementBadge}
                </Badge>
            </div>

            {/* Proof preview placeholder */}
            {proofPreview && (
                <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-secondary">
                    <img
                        src={proofPreview}
                        alt="Proof"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background-80 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-sm font-semibold text-foreground">
                        Verified Proof ✓
                    </p>
                </div>
            )}

            {/* Meta */}
            <div className="relative flex items-center justify-between border-t border-border/10 pt-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Completed: {completedDate}
                </span>
                <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs gap-1 text-success hover:text-success"
                >
                    <Share2 className="h-3 w-3" />
                    Flex this
                </Button>
            </div>
        </div>
    );
}
