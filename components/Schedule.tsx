const tests = [
    { name: "Practice Test #3", date: "Saturday" },
    { name: "Review Test #2", date: "Needs Review" },
];

export default function TestSchedule() {
    return (
        <div className="bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Upcoming Practice</h2>

            <div className="space-y-3">
                {tests.map((test) => (
                    <div
                        key={test.name}
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-zinc-800"
                    >
                        <p className="font-medium text-gray-800 dark:text-gray-200">{test.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{test.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
