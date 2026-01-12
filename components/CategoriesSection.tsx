import { Badge } from "@/components/ui/badge";
import {
    Dumbbell,
    BookOpen,
    Briefcase,
    Heart,
    Sparkles,
    TrendingUp,
} from "lucide-react";

const categories = [
    {
        icon: Dumbbell,
        name: "Fitness",
        count: "12.4K",
        trending: true,
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
    },
    {
        icon: BookOpen,
        name: "Study",
        count: "8.2K",
        trending: false,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
    },
    {
        icon: Briefcase,
        name: "Career",
        count: "6.8K",
        trending: true,
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10",
    },
    {
        icon: Heart,
        name: "Health",
        count: "9.1K",
        trending: false,
        color: "text-pink-400",
        bgColor: "bg-pink-400/10",
    },
    {
        icon: Sparkles,
        name: "Fun",
        count: "5.3K",
        trending: true,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
    },
];

export function CategoriesSection() {
    return (
        <section className="py-20" id="categories">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                        Challenge Categories
                    </h2>
                    <p className="text-muted-foreground">
                        Find your arena. Every category has its legends and its
                        fails.
                    </p>
                </div>

                {/* Categories grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`
                group relative overflow-hidden rounded-2xl border border-border bg-card p-6
                transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1
              `}
                        >
                            {category.trending && (
                                <Badge
                                    variant="trending"
                                    className="absolute top-3 right-3 text-[10px] px-2 py-0.5"
                                >
                                    <TrendingUp className="h-2 w-2 mr-1" />
                                    Hot
                                </Badge>
                            )}

                            <div
                                className={`
                mb-4 flex h-14 w-14 items-center justify-center rounded-xl
                ${category.bgColor} transition-transform group-hover:scale-110
              `}
                            >
                                <category.icon
                                    className={`h-7 w-7 ${category.color}`}
                                />
                            </div>

                            <h3 className="font-display font-bold text-foreground mb-1">
                                {category.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {category.count} challenges
                            </p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
