"use client";

import {
    MapPinned,
    Filter,
    RotateCcw,
} from "lucide-react";
import { protests } from "@/lib/protests";
import { useMapContext } from "@/context/MapContext";

export default function FilterSidebar() {
    const {
        stateFilter, setStateFilter,
        statusFilter, setStatusFilter,
        dateFilter, setDateFilter,
        resetFilters,
    } = useMapContext();
    const states = [...new Set(protests.map((protest) => protest.state))].sort();
    return (
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2">
                <Filter className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-slate-900">
                    Filters
                </h3>
            </div>

            <div className="space-y-5">

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                        State
                    </label>

                    <select value={stateFilter} onChange={(event) => setStateFilter(event.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none">
                        <option>All States</option>
                        {states.map((state) => <option key={state}>{state}</option>)}
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                        Status
                    </label>

                    <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none">
                        <option>All</option>
                        <option>Active</option>
                        <option>Upcoming</option>
                        <option>Completed</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                        Date
                    </label>

                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(event) => setDateFilter(event.target.value)}
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-slate-900 [color-scheme:light] transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                </div>

                <button className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 active:translate-y-0">
                    <MapPinned size={18} />
                    Apply Filters
                </button>

                <button onClick={resetFilters} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50">
                    <RotateCcw size={18} />
                    Reset
                </button>

            </div>
        </aside>
    );
}
