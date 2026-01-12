
import { CategoriesSection } from "@/components/CategoriesSection";
import { ChallengeCard } from "@/components/ChallengeCard";
import { CTASection } from "@/components/CTASection";
import { FailureCard } from "@/components/FailureCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Leaderboard } from "@/components/Leaderboard";
import { ProfileCard } from "@/components/ProfileCard";
import { SuccessCard } from "@/components/SuccessCard";
import { Badge } from "@/components/ui/badge";
import { Flame, Trophy, Clock } from "lucide-react";

// Mock data for demonstration
const mockChallenges = [
    {
        title: "Run 100km in 30 days",
        author: {
            name: "Alex Chen",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
            username: "alexruns",
        },
        category: "Fitness",
        deadline: "Jan 25, 2026",
        status: "active" as const,
        progress: 68,
        proofType: "GPS Data",
        stakes: "Reputation",
        isHot: true,
    },
    {
        title: "Ship my SaaS MVP",
        author: {
            name: "Sarah Dev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
            username: "sarahbuilds",
        },
        category: "Career",
        deadline: "Feb 1, 2026",
        status: "active" as const,
        progress: 45,
        proofType: "Link",
        stakes: "$100 Donation",
    },
    {
        title: "Read 12 books this year",
        author: {
            name: "Marcus Book",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
            username: "marcusreads",
        },
        category: "Study",
        deadline: "Dec 31, 2026",
        status: "active" as const,
        progress: 25,
        proofType: "Photo",
        stakes: "Reputation",
    },
];

const mockLeaderboard = [
    {
        rank: 1,
        name: "Emma Champion",
        username: "emmawins",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
        successRate: 98,
        challenges: 47,
        level: "Legend",
    },
    {
        rank: 2,
        name: "James Strong",
        username: "jamesfit",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
        successRate: 95,
        challenges: 52,
        level: "Elite",
    },
    {
        rank: 3,
        name: "Mia Rising",
        username: "miarises",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mia",
        successRate: 94,
        challenges: 38,
        level: "Elite",
    },
    {
        rank: 4,
        name: "David Go",
        username: "davidgoes",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
        successRate: 91,
        challenges: 29,
        level: "Verified",
    },
    {
        rank: 5,
        name: "Sophia True",
        username: "sophiatrue",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
        successRate: 89,
        challenges: 33,
        level: "Verified",
    },
];

const Home = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero */}
            <HeroSection />

            {/* How It Works */}
            <HowItWorks />

            {/* Categories */}
            <CategoriesSection />

            {/* Live Feed Preview */}
            <section className="py-20" id="feed">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <Badge className="mb-4">
                                <Flame className="mr-1 h-3 w-3" /> Live Feed
                            </Badge>
                            <h2 className="font-display text-3xl font-bold text-foreground">
                                Trending Challenges
                            </h2>
                            <p className="mt-2 text-muted-foreground">
                                Watch promises being made — and broken — in
                                real-time
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Badge
                                variant="outline"
                                className="cursor-pointer hover:bg-secondary"
                            >
                                <Clock className="mr-1 h-3 w-3" /> Recent
                            </Badge>
                            <Badge
                                variant="outline"
                                className="cursor-pointer hover:bg-secondary"
                            >
                                <Flame className="mr-1 h-3 w-3" /> Hot
                            </Badge>
                            <Badge
                                variant="outline"
                                className="cursor-pointer hover:bg-secondary"
                            >
                                <Trophy className="mr-1 h-3 w-3" /> Top
                            </Badge>
                        </div>
                    </div>

                    {/* Feed Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mockChallenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="opacity-0 animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <ChallengeCard {...challenge} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success vs Failure Showcase */}
            <section className="py-20 bg-card/30">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                            The Stakes Are Real
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Every challenge ends with one of two outcomes. Which
                            side will you be on?
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                        <SuccessCard
                            title="Lost 20 pounds in 3 months"
                            author={{
                                name: "Jordan Fit",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jordan",
                                username: "jordanfit",
                            }}
                            completedDate="Jan 5, 2026"
                            achievementBadge="Unstoppable"
                            proofPreview="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                        />
                        <FailureCard
                            title="Wake up at 5am for 30 days"
                            author={{
                                name: "Mike Late",
                                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
                                username: "mikelate",
                            }}
                            deadline="Jan 8, 2026"
                            sarcasticCaption="The snooze button remains undefeated"
                        />
                    </div>
                </div>
            </section>

            {/* Leaderboard & Profile Preview */}
            <section className="py-20" id="leaderboard">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                            Hall of Accountability
                        </h2>
                        <p className="text-muted-foreground">
                            The most consistent promise-keepers on the platform
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Leaderboard */}
                        <div className="lg:col-span-2">
                            <Leaderboard entries={mockLeaderboard} />
                        </div>

                        {/* Featured Profile */}
                        <div id="profile">
                            <ProfileCard
                                name="Emma Champion"
                                username="emmawins"
                                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
                                bio="Professional promise-keeper. Fitness enthusiast. Never backing down from a challenge."
                                level="Legend"
                                successRate={98}
                                totalChallenges={47}
                                followers={12400}
                                following={234}
                                badges={["Legend", "Top 1%", "Unstoppable"]}
                                isVerified={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
