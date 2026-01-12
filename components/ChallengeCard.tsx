import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Flame, Trophy, Target } from "lucide-react";

interface ChallengeCardProps {
    title: string;
    author: {
        name: string;
        avatar: string;
        username: string;
    };
    category: string;
    deadline: string;
    status: "active" | "success" | "failure" | "expired";
    progress?: number;
    proofType: string;
    stakes: string;
    isHot?: boolean;
}

export function ChallengeCard({
    title,
    author,
    category,
    deadline,
    status,
    progress = 0,
    proofType,
    stakes,
    isHot,
}: ChallengeCardProps) {
    const statusConfig = {
        active: {
            badge: "active",
            icon: Target,
            label: "Active",
        },
        success: {
            badge: "success",
            icon: Trophy,
            label: "Completed",
        },
        failure: {
            badge: "failure",
            icon: Flame,
            label: "Failed",
        },
        expired: {
            badge: "warning",
            icon: Target,
            label: "Expired",
        },
    };

    const config = statusConfig[status];
    const StatusIcon = config.icon;

    return (
        <div
            className={`
        group relative overflow-hidden rounded-xl border bg-card p-5 transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${
            status === "success"
                ? "border-success/30 hover:shadow-success/20"
                : ""
        }
        ${
            status === "failure"
                ? "border-failure/30 hover:shadow-failure/20"
                : ""
        }
        ${
            status === "active"
                ? "border-border hover:border-primary/30 hover:shadow-primary/10"
                : ""
        }
        ${status === "expired" ? "border-warning/30 opacity-75" : ""}
      `}
        >
            {/* Hot badge */}
            {isHot && (
                <Badge
                    variant="trending"
                    className="absolute -right-1 -top-1 z-10"
                >
                    <Flame className="mr-1 h-3 w-3" /> HOT
                </Badge>
            )}

            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-border">
                        <AvatarImage src={author.avatar} alt={author.name} />
                        <AvatarFallback className="bg-secondary font-display">
                            {author.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-display font-semibold text-foreground">
                            {author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                            @{author.username}
                        </p>
                    </div>
                </div>
                <Badge
                    variant={config.badge as any}
                    className="flex items-center gap-1"
                >
                    <StatusIcon className="h-3 w-3" />
                    {config.label}
                </Badge>
            </div>

            {/* Challenge Title */}
            <h3 className="mb-3 font-display text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                "{title}"
            </h3>

            {/* Meta info */}
            <div className="mb-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                    {category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                    {proofType}
                </Badge>
                <Badge variant="secondary" className="text-xs">
                    Stakes: {stakes}
                </Badge>
            </div>

            {/* Progress bar for active challenges */}
            {status === "active" && (
                <div className="mb-3">
                    <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-primary">
                            {progress}%
                        </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-500"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-xs text-muted-foreground">
                    Deadline:{" "}
                    <span className="font-medium text-foreground">
                        {deadline}
                    </span>
                </span>
                <button className="text-xs font-semibold text-primary hover:underline">
                    View Details →
                </button>
            </div>

            {/* Failure overlay effect */}
            {status === "failure" && (
                <div className="absolute inset-0 pointer-events-none bg-failure/5" />
            )}
        </div>
    );
}
