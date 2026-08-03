"use client";

import IndiaMap from "./IndiaMap";
import FilterSidebar from "./FilterSidebar";
import InfoPanel from "./InfoPanel";

export default function MapDashboard() {
    return (
        <section id="live-map" className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Live Protest Map
                    </h2>

                    <p className="mt-3 text-slate-600">
                        Explore verified public protests across India.
                    </p>
                </div>

                {/* Dashboard */}
                <div className="grid gap-6 lg:grid-cols-12">

                    {/* Filter Sidebar */}
                    <div className="lg:col-span-2">
                        <FilterSidebar />
                    </div>

                    {/* Map */}
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-7">
                        <IndiaMap />
                    </div>

                    {/* Info Panel */}
                    <div className="lg:col-span-3">
                        <InfoPanel />
                    </div>

                </div>

            </div>
        </section>
    );
}