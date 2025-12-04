'use client';

import ExpandableItem from "@/components/ExpandableItem";

export default function Sidebar({ isOpen, onToggleSidebar }: { isOpen: boolean, onToggleSidebar: () => void }) {
    const tests = ["SAT", "ACT", "AP"]


    return (
        <aside className={`h-screen fixed w-64 flex flex-col justify-between z-2 bg-white dark:bg-black text-black dark:text-white shadow-[5px_0px_15px_0px_rgba(0,0,0,0.25)] ${isOpen ? "" : "max-md:hidden"}`}>
            <nav className="flex-1 py-5">
                <ul>
                    <li className="py-2 px-5">
                        <button
                            onClick={onToggleSidebar}
                            className="cursor-pointer md:hidden"
                        >
                            ☰
                        </button>
                    </li>
                    <>
                        <li>
                            <div className="block side-bar-item">
                                Dashboard
                            </div>
                        </li>
                        <li>
                            <div className="block side-bar-item">
                                Profile
                            </div>
                        </li>
                        <li className="side-bar-item">Settings</li>
                        <li>
                            <ExpandableItem title="Tests" className="side-bar-item ">
                                {tests.map((test) =>
                                    <li key={test}>
                                        <div className="block px-10 py-2 w-full hover:bg-zinc-100 hover:dark:bg-zinc-600 cursor-pointer">
                                            {test}
                                        </div>
                                    </li>
                                )}
                            </ExpandableItem>
                        </li>
                    </>
                </ul>
            </nav >
            <div className="px-5 py-4">
                <button
                    className="w-full bg-zinc-100 dark:bg-zinc-700 dark:text-white py-2 rounded hover:bg-zinc-200 dark:hover:bg-zinc-600 cursor-pointer"
                >
                    Sign Out
                </button>
            </div>
        </aside >
    );
}