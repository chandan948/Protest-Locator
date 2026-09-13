"use client";

import {
    AlertTriangle,
    CalendarClock,
    CheckCircle2,
    MapPinned,
    TrendingUp,
} from "lucide-react";
import { protests } from "@/lib/protests";

const stats = [
    {
        title: "Active Protests",
        value: protests.filter((protest) => protest.status === "Active").length,
        change: "+5 Today",
        color: "text-red-500",
        bg: "bg-red-50",
        icon: AlertTriangle,
    },
    {
        title: "Upcoming",
        value: protests.filter((protest) => protest.status === "Upcoming").length,
        change: "+2 Today",
        color: "text-yellow-500",
        bg: "bg-yellow-50",
        icon: CalendarClock,
    },
    {
        title: "Completed",
        value: protests.filter((protest) => protest.status === "Completed").length,
        change: "+14 This Week",
        color: "text-green-500",
        bg: "bg-green-50",
        icon: CheckCircle2,
    },
    {
        title: "States Covered",
        value: new Set(protests.map((protest) => protest.state)).size,
        change: "Growing",
        color: "text-blue-600",
        bg: "bg-blue-50",
        icon: MapPinned,
    },
];

export default function StatsCards() {
    return (
        <section className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Live Protest Statistics
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Updated in real time across India.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-950/10"
                            >
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                                >
                                    <Icon className={item.color} size={28} />
                                </div>

                                <h3 className="mt-6 text-lg font-semibold text-slate-700">
                                    {item.title}
                                </h3>

                                <div className="mt-3 text-5xl font-extrabold text-slate-900">
                                    {item.value}
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-green-600">
                                    <TrendingUp size={16} />
                                    {item.change}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
