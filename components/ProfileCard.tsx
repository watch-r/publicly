import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Target, Flame, TrendingUp } from "lucide-react";

interface ProfileCardProps {
    name: string;
    username: string;
    avatar: string;
    bio: string;
    level: string;
    successRate: number;
    totalChallenges: number;
    followers: number;
    following: number;
    badges: string[];
    isVerified?: boolean;
}

export function ProfileCard({
    name,
    username,
    avatar,
    bio,
    level,
    successRate,
    totalChallenges,
    followers,
    following,
    badges,
    isVerified,
}: ProfileCardProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            {/* Header */}
            <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary/30 shadow-xl shadow-primary/20">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback className="bg-secondary font-display text-2xl">
                            {name[0]}
                        </AvatarFallback>
                    </Avatar>
                    {isVerified && (
                        <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <Trophy className="h-4 w-4" />
                        </div>
                    )}
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground">
                    {name}
                </h2>
                <p className="mb-2 text-muted-foreground">@{username}</p>

                <Badge variant="elite" className="mb-4">
                    {level}
                </Badge>

                <p className="mb-4 text-sm text-muted-foreground max-w-xs">
                    {bio}
                </p>
            </div>

            {/* Stats */}
            <div className="relative mb-6 grid grid-cols-3 gap-4 rounded-xl bg-secondary/50 p-4">
                <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">
                        {successRate}%
                    </p>
                    <p className="text-xs text-muted-foreground">
                        Success Rate
                    </p>
                </div>
                <div className="text-center border-x border-border">
                    <p className="font-display text-2xl font-bold text-foreground">
                        {totalChallenges}
                    </p>
                    <p className="text-xs text-muted-foreground">Challenges</p>
                </div>
                <div className="text-center">
                    <p className="font-display text-2xl font-bold text-foreground">
                        {followers}
                    </p>
                    <p className="text-xs text-muted-foreground">Followers</p>
                </div>
            </div>

            {/* Badges */}
            <div className="relative">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Achievements
                </h4>
                <div className="flex flex-wrap gap-2">
                    {badges.map((badge, index) => (
                        <Badge
                            key={index}
                            variant="secondary"
                            className="flex items-center gap-1"
                        >
                            {badge === "Legend" && (
                                <Flame className="h-3 w-3 text-orange-400" />
                            )}
                            {badge === "Top 1%" && (
                                <TrendingUp className="h-3 w-3 text-primary" />
                            )}
                            {badge === "Unstoppable" && (
                                <Target className="h-3 w-3 text-success" />
                            )}
                            {badge}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}
