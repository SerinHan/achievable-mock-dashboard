const tasks = [
    { title: "Finish Lesson 4: Linear Functions", time: "15 min", subject: "math", color: "#4F46E5" },
    { title: "Review missed Writing questions", time: "10 min", subject: "writing", color: "#F59E0B" },
    { title: "Take a short vocab quiz", time: "5 min", subject: "reading", color: "#22C55E" },
];

const data = [
    { name: "math", color: "#4F46E5" },
    { name: "Reading", color: "#22C55E" },
    { name: "Writing", color: "#F59E0B" },
    { name: "Remaining", color: "#E5E7EB" },
];

export default function TasksList() {
    return (
        <div className="bg-white dark:bg-zinc-700 p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Recommended Tasks</h2>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task.title}
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-500 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 hover:dark:bg-zinc-600 cursor-pointer transition"
                    >
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                            <span
                                className="inline-block w-3 h-3 rounded-full mr-1"
                                style={{ background: task.color }}
                            />
                            {task.title}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{task.time} • Suggested</p>

                    </div>
                ))}
            </div>
        </div>
    );
}
