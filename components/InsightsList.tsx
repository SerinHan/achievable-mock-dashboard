const insights = [
    { label: "Weakest Area", value: "Command of Evidence" },
    { label: "Strongest Area", value: "Geometry & Trigonometry" },
    { label: "Recent Improvement", value: "+12% in Reading" },
];

export default function InsightsList() {
    return (
        <div className="bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Insights</h2>

            <div className="space-y-3">
                {insights.map((i) => (
                    <div
                        key={i.label}
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-500 bg-gray-50  dark:bg-zinc-800"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-200">{i.label}</p>
                        <p className="font-medium text-gray-800 dark:text-gray-400">{i.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
