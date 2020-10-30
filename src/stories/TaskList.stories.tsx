import React from 'react';
import * as TaskStories from './task.stories';
import TaskList from '../components/taskList';
import { Story } from '@storybook/react/types-6-0';
import {prop} from '../components/taskList';
import {Provider} from 'react-redux';
import store from '../ReduxStore/redux';
export default {
    component : TaskList,
    title : "Task List",
    decorators: [(story: () => React.ReactNode) => <Provider store = {store} ><div style={{ padding: '3rem' }}>{story()}</div></Provider>],
}
const Template : Story<prop> = args => <TaskList {...args} />

export const Default = Template.bind({});


export const WithoneTaskPinned = Template.bind({});

WithoneTaskPinned.args = {
    tasks : [
        {...TaskStories.DefaultTask.args?.task, id : '6', title : "Task6", state : "Pinned"},
        {...TaskStories?.DefaultTask.args?.task, id : '1', title : "Task1", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '2', title : "Task2", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '3', title : "Task3", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '4', title : "Task4", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '5', title : "Task5", state : "Default"},
    ]
}
export const Combinestates = Template.bind({});

Combinestates.args = {
    tasks : [
        {...TaskStories.DefaultTask.args?.task, id : '6', title : "Task6", state : "Pinned"},
        {...TaskStories?.DefaultTask.args?.task, id : '1', title : "Task1", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '2', title : "Task2", state : "Pinned"},
        {...TaskStories.DefaultTask.args?.task, id : '3', title : "Task3", state : "Archieved"},
        {...TaskStories.DefaultTask.args?.task, id : '4', title : "Task4", state : "Default"},
        {...TaskStories.DefaultTask.args?.task, id : '5', title : "Task5", state : "Default"},
    ]
}
export const Loading = Template.bind({});

Loading.args = {
    tasks : [],
    loading : true
}

export const Empty = Template.bind({})

Empty.args = {
    ...Loading.args,
    loading : false
}