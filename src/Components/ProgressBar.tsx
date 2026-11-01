import { displayStatistics } from "../utils/taskUtils"

export default function ProgressBar({tasks}){
    const stats = displayStatistics(tasks || []);

    if (stats.total === 0) {
        console.log(stats.completed)
        console.log(stats.total)
        return (
            <div className="bg-black p-5 rounded-xl border border-slate-200 shadow-sm text-slate-400 text-sm">
                No tasks available for progress tracking.
            </div>
        );
        
    }
    
    const completedTasks=(stats.completed/stats.total)*100;
    console.log(completedTasks)
    const pendingTasks=(stats.pending/stats.total)*100;
    const inProgressTasks=(stats.inProgress/stats.total)*100;
   
    

    return (
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-3 w-full">
            <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                <span>Task Progress Overview</span>
                <span>{stats.total} Total Tasks</span>
            </div>

            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
                <div 
                    style={{ width: `${completedTasks}%` }} 
                    className="bg-emerald-500 transition-all duration-500" 
                    title={`Completed: ${stats.completed}%`}
                />
                <div 
                    style={{ width: `${pendingTasks}%` }} 
                    className="bg-amber-500 transition-all duration-500" 
                    title={`Pending: ${stats.pending}%`}
                />
                <div 
                    style={{ width: `${inProgressTasks}%` }} 
                    className="bg-blue-500 transition-all duration-500" 
                    title={`In Progress: ${stats.inProgress}%`}
                />
            </div>

            {/* 🏷️ Color Legend */}
            <div className="flex items-center gap-6 text-xs text-slate-500 pt-1">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Completed ({stats.completed})</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    <span>Pending ({stats.pending})</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    <span>In Progress ({stats.inProgress})</span>
                </div>
            </div>
        </div>
    );
    
}