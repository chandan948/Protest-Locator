"use client";

import {
    MapPinned,
    CalendarDays,
    Filter,
    RotateCcw,
} from "lucide-react";

export default function FilterSidebar() {
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

                    <select className="h-12 w-full rounded-xl border border-slate-200 px-4">
                        <option>All States</option>
                        <option>Delhi</option>
                        <option>Punjab</option>
                        <option>Haryana</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-600">
                        Status
                    </label>

                    <select className="h-12 w-full rounded-xl border border-slate-200 px-4">
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
                        className="h-12 w-full rounded-xl border border-slate-200 px-4"
                    />
                </div>

                <button className="mt-3 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 font-semibold text-white hover:bg-blue-700">
                    <MapPinned size={18} />
                    Apply Filters
                </button>

                <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 hover:bg-slate-50">
                    <RotateCcw size={18} />
                    Reset
                </button>

            </div>
        </aside>
    );
}