import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X, AlertTriangle, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FailureCardProps {
    title: string;
    author: {
        name: string;
        avatar: string;
        username: string;
    };
    deadline: string;
    sarcasticCaption: string;
}

export function FailureCard({
    title,
    author,
    deadline,
    sarcasticCaption,
}: FailureCardProps) {
    return (
        <div className="relative overflow-hidden rounded-2xl border-2 border-failure/50 bg-gradient-to-br from-failure/10 to-background p-6 shadow-xl shadow-failure/20">
            {/* Failure stamp watermark */}
            <div className="absolute -right-8 -top-8 rotate-12 opacity-10">
                <X className="h-40 w-40 text-failure" strokeWidth={4} />
            </div>

            {/* Header */}
            <div className="relative mb-4 flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-failure/50 grayscale">
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

            {/* Promise */}
            <div className="relative mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Broken Promise
                </p>
                <h3 className="font-display text-xl font-bold text-foreground line-through decoration-failure decoration-2">
                    "{title}"
                </h3>
            </div>

            {/* Failure badge */}
            <div className="relative mb-4 flex items-center justify-center">
                <Badge
                    variant="failure"
                    className="px-6 py-2 text-base font-bold animate-pulse"
                >
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    PROMISE BROKEN
                </Badge>
            </div>

            {/* Sarcastic caption */}
            <p className="relative mb-4 text-center italic text-muted-foreground">
                "{sarcasticCaption}"
            </p>

            {/* Meta */}
            <div className="relative flex items-center justify-between border-t border-border/50 pt-4">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Deadline was: {deadline}
                </span>
                <Button variant="ghost" size="sm" className="text-xs gap-1">
                    <Share2 className="h-3 w-3" />
                    Share the shame
                </Button>
            </div>
        </div>
    );
}
