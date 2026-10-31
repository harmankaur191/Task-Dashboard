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