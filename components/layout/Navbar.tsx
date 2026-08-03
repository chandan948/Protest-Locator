"use client";

import Link from "next/link";
import { Menu, MapPinned } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="rounded-xl bg-blue-600 p-2 text-white">
                        <MapPinned size={20} />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold text-slate-900">
                            Protest Locator
                        </h1>

                        <p className="text-xs text-slate-500">
                            India
                        </p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#live-map"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Live Map
                    </Link>

                    <Link
                        href="/updates"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        Updates
                    </Link>

                    <Link
                        href="/about"
                        className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                    >
                        About
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <button className="hidden rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:block">
                        Report Protest
                    </button>

                    <button className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden">
                        <Menu size={22} />
                    </button>
                </div>
            </div>
        </header>
    );
}