import { Flame, Twitter, Github, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-card/50">
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <a href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 shadow-lg shadow-primary/30">
                                <Flame className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="font-display text-xl font-bold text-foreground">
                                PUBLICLY
                            </span>
                        </a>
                        <p className="text-sm text-muted-foreground mb-4">
                            Turn personal promises into public social content.
                            Stay accountable or get exposed.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href="#"
                                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-semibold text-foreground mb-4">
                            Platform
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Challenges
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Leaderboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Creators
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-foreground mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    API
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-semibold text-foreground mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    DMCA
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © 2026 PUBLICLY. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Made with 🔥 for accountability
                    </p>
                </div>
            </div>
        </footer>
    );
}
