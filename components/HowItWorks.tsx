import {
    Target,
    Camera,
    Timer,
    Trophy,
    Flame,
    Share2,
    ArrowRight,
} from "lucide-react";

const steps = [
    {
        icon: Target,
        title: "Set Your Challenge",
        description:
            "Make a bold public promise. Be specific about what you'll achieve and by when.",
        color: "text-primary",
        bgColor: "bg-primary/10",
    },
    {
        icon: Timer,
        title: "The Clock Starts",
        description:
            "Your deadline is locked. The pressure is on. Your followers are watching.",
        color: "text-warning",
        bgColor: "bg-warning/10",
    },
    {
        icon: Camera,
        title: "Submit Proof",
        description:
            "Upload verifiable evidence before the deadline. Photo, video, or API verification.",
        color: "text-accent",
        bgColor: "bg-accent/10",
    },
    {
        icon: Trophy,
        title: "Get Verified",
        description:
            "Community or AI verification confirms your achievement. No fake flexing allowed.",
        color: "text-success",
        bgColor: "bg-success/10",
    },
];

export function HowItWorks() {
    return (
        <section className="relative py-24 overflow-hidden" id="how-it-works">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

            <div className="container relative mx-auto px-4">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 font-display text-4xl font-bold text-foreground">
                        How It Works
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Four simple steps to public accountability. Succeed and
                        flex, or fail and face the memes.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative grid gap-8 md:grid-cols-4">
                    {/* Connection line */}
                    <div className="absolute top-12 left-0 right-0 hidden md:block">
                        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="flex flex-col items-center text-center">
                                {/* Icon */}
                                <div
                                    className={`
                  relative mb-6 flex h-24 w-24 items-center justify-center rounded-2xl
                  ${step.bgColor} border border-border
                  transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl
                `}
                                >
                                    <step.icon
                                        className={`h-10 w-10 ${step.color}`}
                                    />
                                    <div className="absolute -bottom-3 flex h-7 w-7 items-center justify-center rounded-full bg-secondary border border-border font-display font-bold text-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>

                            {/* Arrow for desktop */}
                            {index < steps.length - 1 && (
                                <div className="absolute -right-4 top-12 hidden md:block text-muted-foreground/30">
                                    <ArrowRight className="h-6 w-6" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom outcomes */}
                <div className="mt-20 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                    {/* Success */}
                    <div className="group rounded-2xl border border-success/30 bg-success/5 p-6 transition-all hover:border-success/50 hover:shadow-lg hover:shadow-success/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/20">
                                <Trophy className="h-6 w-6 text-success" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold text-foreground">
                                    You Succeed
                                </h3>
                                <p className="text-sm text-success">
                                    Promise Kept Badge
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Earn achievement badges, boost your reputation
                            score, and share your flex with the world.
                        </p>
                    </div>

                    {/* Failure */}
                    <div className="group rounded-2xl border border-failure/30 bg-failure/5 p-6 transition-all hover:border-failure/50 hover:shadow-lg hover:shadow-failure/10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-failure/20">
                                <Flame className="h-6 w-6 text-failure" />
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-bold text-foreground">
                                    You Fail
                                </h3>
                                <p className="text-sm text-failure">
                                    Publicly Exposed
                                </p>
                            </div>
                        </div>
                        <p className="text-muted-foreground">
                            Auto-generated meme poster goes viral. Your failure
                            becomes shareable content. No deleting.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
