"use client";

import Link from "next/link";
import { Bell, Menu, MapPinned } from "lucide-react";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <MapPinned className="h-7 w-7 text-blue-600" />
                    <span className="text-xl font-bold text-gray-900">
                        Protest Locator
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>

                    <Link href="/map" className="hover:text-blue-600">
                        Map
                    </Link>

                    <Link href="/latest" className="hover:text-blue-600">
                        Latest
                    </Link>

                    <Link href="/about" className="hover:text-blue-600">
                        About
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    <button className="rounded-full p-2 hover:bg-gray-100">
                        <Bell size={20} />
                    </button>

                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        Admin
                    </button>

                    <button className="md:hidden">
                        <Menu />
                    </button>
                </div>
            </div>
        </header>
    );
}