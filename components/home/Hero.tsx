import { ArrowRight, MapPinned } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
            <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center">

                <div className="mb-6 flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
                    <MapPinned className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">
                        Real-Time Protest Information Across India
                    </span>
                </div>

                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
                    Stay Updated with
                    <span className="text-blue-600"> Public Protests </span>
                    Across India
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                    Track active, upcoming, and completed protests with
                    live updates, verified information, and an interactive map.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                        View Live Map
                    </button>

                    <button className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold transition hover:bg-gray-100">
                        Learn More
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
}