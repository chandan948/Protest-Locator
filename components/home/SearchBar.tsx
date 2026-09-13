"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { protests } from "@/lib/protests";
import { useMapContext } from "@/context/MapContext";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");

    const {
        setSelectedProtest,
        setMapCenter,
        setMapZoom,
    } = useMapContext();

    const handleSearch = () => {
        const query = search.trim().toLowerCase();

        if (!query) {
            alert("Please enter a city, state, or protest name.");
            return;
        }

        const protest = protests.find((item) => {
            const matchesText =
                item.title?.toLowerCase().includes(query) ||
                item.city?.toLowerCase().includes(query) ||
                item.state?.toLowerCase().includes(query);

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
            Number(protest.latitude),
            Number(protest.longitude),
        ]);

        setMapZoom(12);

        setTimeout(() => {
            document
                .getElementById("live-map")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
        }, 100);
    };

    return (
        <section className="relative z-10 -mt-10 px-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-5 shadow-lg md:p-6">

                <div className="grid gap-3 md:grid-cols-3">

                    {/* Search */}
                    <div className="relative">
                        <Search
                            size={20}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                        />

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
                                pl-11
                                pr-4
                                text-[15px]
                                font-medium
                                text-gray-900
                                placeholder:text-gray-500
                                outline-none
                                transition
                                focus:border-blue-600
                                focus:ring-4
                                focus:ring-blue-100
                            "
                        />
                    </div>

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
                            text-[15px]
                            font-medium
                            text-gray-900
                            outline-none
                            transition
                            focus:border-blue-600
                            focus:ring-4
                            focus:ring-blue-100
                        "
                    >
                        <option value="All Categories">
                            All Categories
                        </option>
                        <option value="Farmers">Farmers</option>
                        <option value="Students">Students</option>
                        <option value="Workers">Workers</option>
                        <option value="Political">Political</option>
                        <option value="Religious">Religious</option>
                        <option value="Environmental">
                            Environmental
                        </option>
                    </select>

                    {/* Button */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="
                            flex
                            h-14
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-6
                            font-semibold
                            text-white
                            shadow-sm
                            transition
                            hover:bg-blue-700
                            hover:shadow-md
                            active:scale-[0.99]
                        "
                    >
                        <Search size={20} />
                        Search Protest
                    </button>

                </div>
            </div>
        </section>
    );
}