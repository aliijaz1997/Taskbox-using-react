import React from 'react';
import Task, { props } from '../components/tasks/index';
import { Story } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import store from '../ReduxStore/redux';
export default {
    component : Task,
    title : 'Task',
    decorators: [(story: () => React.ReactNode) => <Provider store = {store} >{story()}</Provider>],
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

export const PinnedTask = Template.bind({})
PinnedTask.args = {
    task : {
        id : "1",
        title : "Task1",
        state : "Pinned"
    }
}

export const ArchievedTask = Template.bind({})
ArchievedTask.args = {
    task : {
        id : "1",
        title : "Task1",
        state : "Archieved"
    }
}
