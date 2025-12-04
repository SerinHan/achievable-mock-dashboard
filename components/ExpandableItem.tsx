'use client';

import { useState, ReactNode } from "react";

interface ExpandableItemProps {
    title: string;
    children?: ReactNode;
    className?: string;
}

export default function ExpandableItem({
    title,
    children,
    className = "",
}: ExpandableItemProps) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <>
            <button
                className={`w-full text-left flex justify-between items-center cursor-pointer ${className}`}
                onClick={() => setExpanded(!isExpanded)}
            >
                {title}
                <span>{isExpanded ? "-" : "+"}</span>
            </button>
            {isExpanded && (
                <ul className="w-full">
                    {children}
                </ul>
            )}
        </>
    );
}
