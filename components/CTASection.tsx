import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

export function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px]" />

            <div className="container relative mx-auto px-4 text-center">
                <div className="mx-auto max-w-3xl">
                    {/* Icon */}
                    <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-orange-400 shadow-xl shadow-primary/30">
                        <Flame className="h-10 w-10 text-primary-foreground" />
                    </div>

                    {/* Headline */}
                    <h2 className="mb-6 font-display text-4xl font-bold text-foreground sm:text-5xl">
                        Ready to Put Your
                        <br />
                        <span className="text-gradient-primary">
                            Money Where Your Mouth Is?
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mb-10 text-lg text-muted-foreground">
                        Join thousands who are turning their goals into public
                        commitments. Whether you succeed or fail, at least
                        you're not lying to yourself anymore.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            variant="hero"
                            size="xl"
                            className="group gap-2"
                        >
                            Create Your First Challenge
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Free to start • No credit card required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
