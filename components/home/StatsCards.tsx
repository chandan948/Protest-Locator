import {
    AlertTriangle,
    CalendarClock,
    CheckCircle2,
    MapPinned,
} from "lucide-react";

const stats = [
    {
        title: "Active Protests",
        value: "24",
        icon: AlertTriangle,
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        title: "Upcoming",
        value: "12",
        icon: CalendarClock,
        color: "text-yellow-500",
        bg: "bg-yellow-50",
    },
    {
        title: "Completed",
        value: "153",
        icon: CheckCircle2,
        color: "text-green-500",
        bg: "bg-green-50",
    },
    {
        title: "States Covered",
        value: "18",
        icon: MapPinned,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
];

export default function StatsCards() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Live Protest Statistics
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Updated in real time across India.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.title}
                            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div
                                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${stat.bg}`}
                            >
                                <stat.icon className={`h-7 w-7 ${stat.color}`} />
                            </div>

                            <h3 className="text-4xl font-bold">{stat.value}</h3>

                            <p className="mt-2 text-gray-500">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}