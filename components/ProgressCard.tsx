"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const math = 62;
const reading = 45;
const writing = 55;

const overall = Math.round((math + reading + writing) / 3);
const remaining = 100 - overall;

const data = [
    { name: "Math", value: math, color: "#4F46E5" },
    { name: "Reading", value: reading, color: "#22C55E" },
    { name: "Writing", value: writing, color: "#F59E0B" },
    { name: "Remaining", value: remaining, color: "#E5E7EB" },
];

interface CustomTooltipPayload {
    name: string;
    value: number;
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: {
        payload: CustomTooltipPayload;
        name: string;
        value: number;
    }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0];

        return (
            <div className="bg-white dark:bg-zinc-700 shadow-md px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-500">
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{value}%</p>
            </div>
        );
    }
    return null;
};

export default function ProgressCard() {
    return (
        <div className="bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Overall Progress</h2>

            <div className="flex items-center gap-6">
                <div className="w-36 h-36">
                    <ResponsiveContainer width={144} height={144}>
                        <PieChart>
                            <Tooltip content={<CustomTooltip />} />

                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={35}
                                outerRadius={55}
                                paddingAngle={2}
                                startAngle={90}
                                endAngle={-270}
                            >
                                {data.map((entry, i) => (
                                    <Cell key={i} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="space-y-1">
                    <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">{overall}%</p>
                    <p className="text-gray-600 dark:text-gray-300">Study plan completed</p>

                    <div className="mt-3 space-y-1">
                        {data.map((seg, i) => (
                            <div key={seg.name} className="flex items-center gap-2">
                                <span
                                    className="inline-block w-3 h-3 rounded-full"
                                    style={{ background: seg.color }}
                                />
                                <p className="text-sm text-gray-700 dark:text-gray-400">
                                    {seg.name}: {seg.value}%
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
