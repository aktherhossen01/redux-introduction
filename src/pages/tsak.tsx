import { DialogDemo } from '@/components/ui/module/tasks/addTaskModel';
import TaskCard from '@/components/ui/module/tasks/taskCard';
import { useAppSelector } from '@/redux/hook';

import React from 'react';

const Tsak = () => {
    const tasks = useAppSelector((state)=>state.todo.tasks)
    console.log(tasks);
    
    return (
        <div className='mx-auto max-w-7xl px-5 mt-5'>
            <h1><DialogDemo/></h1>
          
           {tasks.map((task)=>(

           <TaskCard task={task} key={task.id}/>
           ))}
        </div>
    );
};

export default Tsak;