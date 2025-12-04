import ProgressCard from "@/components/ProgressCard";
import TasksList from "@/components/TasksList";
import InsightsList from "@/components/InsightsList";
import TestSchedule from "@/components/Schedule";
import StreakCard from "@/components/StreakCard";

export default function Page() {

  return (
    <main className="grow-1 bg-gray-50 dark:bg-zinc-900 p-8 md:pl-75">
      <div className="max-w-5xl mx-auto space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-6 w-full col-span-1 md:col-span-2 mt-20 md:mt-0">
            <ProgressCard />
            <TasksList />
            <TestSchedule />
          </div>
          <div className="space-y-6 w-full">
            <StreakCard />
            <InsightsList />
          </div>
        </section>
      </div>
    </main>
  );
}
