"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { protests } from "@/lib/protests";
import { useMapContext } from "@/context/MapContext";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [date, setDate] = useState("");

    const {
        setSelectedProtest,
        setMapCenter,
        setMapZoom,
    } = useMapContext();

    const handleSearch = () => {
        const query = search.trim().toLowerCase();

        if (!query) return;

        const protest = protests.find((item) => {
            const matchesText =
                item.title.toLowerCase().includes(query) ||
                item.city.toLowerCase().includes(query) ||
                item.state.toLowerCase().includes(query);

            const matchesCategory =
                category === "All Categories" ||
                item.category === category;

            return matchesText && matchesCategory;
        });

        if (!protest) {
            alert("No matching protest found.");
            return;
        }

        setSelectedProtest(protest);

        setMapCenter([
            protest.latitude,
            protest.longitude,
        ]);

        setMapZoom(12);

        document
            .getElementById("live-map")
            ?.scrollIntoView({
                behavior: "smooth",
            });
    };

    return (
        <section className="-mt-10 relative z-10 px-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">

                <div className="grid gap-4 md:grid-cols-4">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search city, state or protest..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleSearch();
                            }
                        }}
                        className="
              h-14
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              text-gray-900
              placeholder:text-gray-500
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-200
              focus:outline-none
            "
                    />

                    {/* Date */}
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="
              h-14
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              text-gray-900
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-200
              focus:outline-none
            "
                    />

                    {/* Category */}
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="
              h-14
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              text-gray-900
              focus:border-blue-600
              focus:ring-2
              focus:ring-blue-200
              focus:outline-none
            "
                    >
                        <option>All Categories</option>
                        <option>Farmers</option>
                        <option>Students</option>
                        <option>Workers</option>
                        <option>Political</option>
                        <option>Religious</option>
                        <option>Environmental</option>
                    </select>

                    {/* Button */}
                    <button
                        onClick={handleSearch}
                        className="
              flex
              h-14
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-blue-600
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
                    >
                        <Search size={20} />
                        Search
                    </button>

                </div>

            </div>
        </section>
    );
}