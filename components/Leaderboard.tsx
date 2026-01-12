import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, TrendingUp } from "lucide-react";

interface LeaderboardEntry {
    rank: number;
    name: string;
    username: string;
    avatar: string;
    successRate: number;
    challenges: number;
    level: string;
}

interface LeaderboardProps {
    entries: LeaderboardEntry[];
    title?: string;
}

export function Leaderboard({
    entries,
    title = "Top Performers",
}: LeaderboardProps) {
    const getRankStyle = (rank: number) => {
        switch (rank) {
            case 1:
                return "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30";
            case 2:
                return "bg-gradient-to-r from-slate-400 to-slate-300 text-slate-900";
            case 3:
                return "bg-gradient-to-r from-amber-700 to-amber-600 text-white";
            default:
                return "bg-secondary text-secondary-foreground";
        }
    };

    return (
        <div className="rounded-2xl border border-border bg-card p-6">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    {title}
                </h3>
                <Badge variant="outline">This Week</Badge>
            </div>

            <div className="space-y-3">
                {entries.map((entry) => (
                    <div
                        key={entry.rank}
                        className={`
              group flex items-center gap-4 rounded-xl p-3 transition-all duration-300
              hover:bg-secondary/50
              ${entry.rank <= 3 ? "bg-secondary/30" : ""}
            `}
                    >
                        {/* Rank */}
                        <div
                            className={`
                flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-display font-bold text-sm
                ${getRankStyle(entry.rank)}
              `}
                        >
                            {entry.rank}
                        </div>

                        {/* Avatar */}
                        <Avatar className="h-10 w-10 border-2 border-border">
                            <AvatarImage src={entry.avatar} alt={entry.name} />
                            <AvatarFallback className="bg-secondary font-display">
                                {entry.name[0]}
                            </AvatarFallback>
                        </Avatar>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <p className="font-display font-semibold text-foreground truncate">
                                    {entry.name}
                                </p>
                                {entry.rank === 1 && (
                                    <Flame className="h-4 w-4 text-orange-400 animate-pulse" />
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                @{entry.username}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="text-right">
                            <p className="font-display font-bold text-foreground flex items-center gap-1">
                                {entry.successRate}%
                                <TrendingUp className="h-3 w-3 text-success" />
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {entry.challenges} challenges
                            </p>
                        </div>

                        {/* Level badge */}
                        <Badge variant="level" className="hidden sm:flex">
                            {entry.level}
                        </Badge>
                    </div>
                ))}
            </div>
        </div>
    );
}
