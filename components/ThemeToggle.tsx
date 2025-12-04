import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-700 dark:text-white hover:w-12 hover:h-12 transition-all cursor-pointer"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}
