import React from 'react';
import { FC } from 'react';
import Task from './task';
import {task} from '../components/task'
export interface prop {
    loading?: boolean;
    tasks?: task[] | undefined;
    onArchiveTask : (id : string) => void;
    onPinnedTask : (id : string) => void;
}
 const TaskList : FC<prop> = ({loading, tasks, onArchiveTask, onPinnedTask}) => {

    const events= {onArchiveTask,onPinnedTask};

    if (loading) {
        return <div>loading..</div>
    }

    if (tasks?.length === 0) {
        return <div>You have no task</div>
    }
    console.log(tasks);
    return (
        <div> 
       {tasks?.map(respectivetasks => {
           return <Task  key = {respectivetasks.id} task = {respectivetasks} {...events} />
       })}     
        </div>
    )
}

TaskList.defaultProps = {
    tasks: [
      { id: "1", title: "Task 1", state: "TASK_INBOX" },
      { id: "2", title: "Task 2", state: "TASK_INBOX" },
      { id: "3", title: "Task 3", state: "TASK_INBOX" },
      { id: "4", title: "Task 4", state: "TASK_INBOX" },
      { id: "5", title: "Task 5", state: "TASK_INBOX" },
      { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ],}
export default TaskList;