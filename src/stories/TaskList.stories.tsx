import React from 'react';
import * as TaskStories from './task.stories';
import TaskList from '../components/taskList';
import { Story } from '@storybook/react/types-6-0';
import {prop} from '../components/taskList';
export default {
    component : TaskList,
    title : "Task List",
}
const Template : Story<prop> = args => <TaskList {...args} />

export const Default = Template.bind({});


export const withonetaskpinned = Template.bind({});

withonetaskpinned.args = {
    tasks : [
        {...TaskStories.DefaultTask.args.task, id : '1', title : "Task1", state : "Default"},
        {...TaskStories.DefaultTask.args.task, id : '2', title : "Task2", state : "Default"},
        {...TaskStories.DefaultTask.args.task, id : '3', title : "Task3", state : "Default"},
        {...TaskStories.DefaultTask.args.task, id : '4', title : "Task4", state : "Default"},
        {...TaskStories.DefaultTask.args.task, id : '5', title : "Task5", state : "Default"},
        {...TaskStories.DefaultTask.args.task,id : '6', title : "Task 6", state : "Pinned"}
    ]
}