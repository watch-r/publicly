import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    ArrowRight,
    Flame,
    Target,
    Trophy,
    Users,
    TrendingUp,
    CheckCircle,
    XCircle,
    Zap,
} from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background effects */}
            <div className="absolute inset-0 bg-linear-to-b from-background via-background to-card" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-150 w-150 rounded-full bg-primary/5 blur-[120px]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />

            {/* Floating elements */}
            <div className="absolute top-32 left-[15%] animate-float opacity-60">
                <Badge variant="success" className="shadow-lg">
                    <CheckCircle className="mr-1 h-3 w-3" /> Promise Kept
                </Badge>
            </div>
            <div className="absolute top-48 right-[20%] animate-float animation-delay-200 opacity-60">
                <Badge variant="failure" className="shadow-lg">
                    <XCircle className="mr-1 h-3 w-3" /> Exposed
                </Badge>
            </div>
            <div className="absolute bottom-40 left-[25%] animate-float animation-delay-400 opacity-40">
                <Badge variant="trending" className="shadow-lg">
                    <Flame className="mr-1 h-3 w-3" /> Trending
                </Badge>
            </div>

            <div className="container relative mx-auto px-4 py-20 text-center">
                {/* Pre-headline */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">
                        Social Accountability Platform
                    </span>
                </div>

                {/* Headline */}
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl opacity-0 animate-fade-in">
                    Make Promises.{" "}
                    <span className="text-gradient-primary">Keep Them.</span>
                    <br />
                    <span className="text-muted-foreground">
                        Or Get Exposed.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
                    Turn personal commitments into viral social content. When
                    you succeed, you flex. When you fail, everyone knows. The
                    internet never forgets.
                </p>

                {/* CTA Buttons */}
                <div className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-300">
                    <Button variant="hero" size="xl" className="group gap-2">
                        Start Your Challenge
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" size="xl" className="gap-2">
                        <Target className="h-5 w-5" />
                        Browse Challenges
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 opacity-70">
                    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Target className="h-5 w-5 text-primary" />
                        </div>
                        <p className="font-display text-3xl font-bold text-foreground">
                            50K+
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Active Challenges
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Trophy className="h-5 w-5 text-success" />
                        </div>
                        <p className="font-display text-3xl font-bold text-foreground">
                            78%
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Success Rate
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Flame className="h-5 w-5 text-failure" />
                        </div>
                        <p className="font-display text-3xl font-bold text-foreground">
                            12K+
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Public Failures
                        </p>
                    </div>
                    <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Users className="h-5 w-5 text-accent" />
                        </div>
                        <p className="font-display text-3xl font-bold text-foreground">
                            200K+
                        </p>
                        <p className="text-sm text-muted-foreground">Users</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
