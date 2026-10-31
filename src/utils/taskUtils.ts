import type {Task} from '../types'


export default function sortTask(tasks:Task[],sortByDate?:'date-asc'|'date-desc'){
    if(!sortByDate){
        return tasks;
    }else{
        return[...tasks].sort((a,b)=>{
            const dateA=new Date(a.dueDate);
            const dateB=new Date(b.dueDate)
            if(sortByDate==='date-asc'){
                console.log('date-asc')
                return dateA<dateB ? -1:dateA> dateB?1:0;
            }else{
                console.log('date-desc')
                return dateA > dateB ? -1 : dateA < dateB ? 1 : 0
            }
        });
    };

}

export function search(tasks:Task[]=[], searchTask:string=""):Task[]{
    if(!tasks) return [];
    if(!searchTask){
        console.log('Task not found');
        return tasks;
    }
    const lowerSearchTask = searchTask.toLowerCase();
      return tasks.filter((task)=>{
            return task.title.toLowerCase().includes(lowerSearchTask)
        }

        
    )

}