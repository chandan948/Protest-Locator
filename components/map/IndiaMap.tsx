"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
    ssr: false,
    loading: () => (
        <div className="flex h-[650px] items-center justify-center rounded-3xl border bg-gray-100">
            Loading Map...
        </div>
    ),
});

export default function IndiaMap() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold">
                        Live Protest Map
                    </h2>

                    <p className="mt-3 text-gray-600">
                        View protests happening across India.
                    </p>
                </div>

                <div className="overflow-hidden rounded-3xl border shadow-lg">
                    <LeafletMap />
                </div>
            </div>
        </section>
    );
}