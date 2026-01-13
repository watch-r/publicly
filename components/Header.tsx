"use client";
import { Button } from "@/components/ui/button";
import { Flame, Menu, X, Bell, Plus, User } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ui/toggleTheme";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 shadow-lg shadow-primary/30">
                        <Flame className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="font-display text-xl font-bold text-foreground">
                        PUBLICLY
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <a
                        href="#feed"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Feed
                    </a>
                    <a
                        href="#challenges"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Challenges
                    </a>
                    <a
                        href="#leaderboard"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Leaderboard
                    </a>
                    <a
                        href="#profile"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Profile
                    </a>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-failure text-[10px] font-bold text-failure-foreground">
                            3
                        </span>
                    </Button>
                    <Button variant="hero" size="sm" className="gap-2">
                        <Plus className="h-4 w-4" />
                        New Challenge
                    </Button>
                    <ThemeToggle />
                    <Button variant="outline" size="icon">
                        <User className="h-5 w-5" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
                    <nav className="container mx-auto flex flex-col gap-2 p-4">
                        <a
                            href="#feed"
                            className="rounded-lg px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                        >
                            Feed
                        </a>
                        <a
                            href="#challenges"
                            className="rounded-lg px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                        >
                            Challenges
                        </a>
                        <a
                            href="#leaderboard"
                            className="rounded-lg px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                        >
                            Leaderboard
                        </a>
                        <a
                            href="#profile"
                            className="rounded-lg px-4 py-3 text-foreground hover:bg-secondary transition-colors"
                        >
                            Profile
                        </a>
                        <hr className="my-2 border-border" />
                        <Button variant="hero" className="w-full gap-2">
                            <Plus className="h-4 w-4" />
                            New Challenge
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
