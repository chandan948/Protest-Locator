import { ArrowRight, MapPinned, ShieldCheck } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
            {/* Background Blur */}
            <div className="animate-float absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-24 text-center">

                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">
                        Verified Public Protest Information Across India
                    </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
                    Stay Updated with{" "}
                    <span className="text-blue-600">
                        Public Protests
                    </span>
                    <br />
                    Across India
                </h1>

                {/* Subtitle */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Discover live protests, public demonstrations, strikes, and civic
                    events with verified updates, interactive maps, and real-time
                    information.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                    <a href="#live-map" className="animate-pulse-ring flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-700">
                        <MapPinned size={20} />
                        View Live Map
                    </a>

                    <a href="/about" className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-200 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600">
                        Learn More
                        <ArrowRight size={18} />
                    </a>

                </div>

                {/* Search */}
                <div className="mt-14 w-full max-w-6xl">
                    <SearchBar />
                </div>

            </div>
        </section>
    );
}
