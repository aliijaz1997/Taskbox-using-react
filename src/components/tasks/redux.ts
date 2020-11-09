// src/lib/redux.js

// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';
import {task} from '../components/task';
// The actions are the "names" of the changes that can happen to the store
// interface statetype {
//   tasks : task[]
// }
interface actiontype {
  type : string,
  id : string
}
export const actions = {
  ARCHIVE_TASK: 'Archieved',
  PIN_TASK: 'Pinned',
  DELETE_TASK : 'Delete'
};
const InitialTasks = [
  { id: '1', title: 'Something', state: 'Default' },
  { id: '2', title: 'Something more', state: 'Archieved' },
  { id: '3', title: 'Something else', state: 'Pinned' },
  { id: '4', title: 'Something again', state: 'Default' },
];
// The action creators bundle actions with the data required to execute them
export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });
export const deleteTask = (id: string) => ({ type: actions.DELETE_TASK, id });
// All our reducers simply change the state of a single task.
function taskStateReducer(taskState: string) {
  return (state: any , action: actiontype ) => {
    return {
      ...state,
      tasks: state.tasks.map((task:task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state: any, action: actiontype) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('Archieved')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('Pinned')(state, action);
    case actions.DELETE_TASK :
      return taskStateReducer('Delete')(state, action);
    default:
      return state;
  }
};

// We export the constructed redux store
export default createStore(reducer, { tasks: InitialTasks });