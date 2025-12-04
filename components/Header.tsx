'use client';

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";


export default function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <Sidebar isOpen={sidebarOpen} onToggleSidebar={handleToggleSidebar} />
            <header className="px-4 py-4 md:pl-75 w-full fixed md:static z-1 flex items-center justify-between gap-4 bg-white dark:bg-zinc-800 shadow-sm">
                <button
                    onClick={handleToggleSidebar}
                    className={`md:hidden text-2xl dark:text-gray-200 leading-none cursor-pointer`}
                >
                    ☰
                </button>
                <div className="flex-1 min-w-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white truncate">
                        Welcome back, Alex
                    </h1>
                    <p className="text-gray-600 dark:text-gray-200 text-sm sm:text-base mt-1 truncate">
                        You’re halfway through your SAT journey — keep going!
                    </p>
                </div>
                <div className="shrink-0">
                    <ThemeToggle />
                </div>
            </header>
        </>
    );
}