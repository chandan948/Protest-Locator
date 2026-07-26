"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <section className="-mt-10 relative z-10 px-4">
            <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">

                <div className="grid gap-4 md:grid-cols-4">

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search city, state or protest..."
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