import React from 'react';
import Task, { props } from '../components/task';
import { Story } from '@storybook/react/types-6-0';

export default {
    component : Task,
    title : 'Task'
}


const Template : Story<props> = (args) => <Task {...args}/>
export const DefaultTask = Template.bind({})
DefaultTask.args = {
    task : {
        id : "1",
        title : "Task1",
        state : "Default"
    }
}

