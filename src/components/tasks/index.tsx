import React, { FC } from 'react';
import "./task.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { useDispatch } from 'react-redux';
// import { archiveTask, deleteTask, pinTask } from '../../ReduxStore/redux';


//********************************* */
export interface task {
  id : string, title : string, state : any
}
 export interface props {
    task : task,
}
 const Task : FC<props> = ({task : {id, title,  state}}) => {
  const dispatch = useDispatch();
  console.log(dispatch);
  
  return (
      <div className="maintask">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'Archieved'}
          name="checked"
         onClick = {() => dispatch(deleteTask(id))}
        />
        <span className="checkbox-custom" onClick={() => dispatch(archiveTask(id))} />
      </label>
      <div className="title">
        <input style = {{border : "none"}} type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="star" >
        {state !== 'Archieved' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => dispatch(pinTask(id))}>
            {state === "Pinned" ? <StarIcon/> : <StarBorderIcon/>}
          </a>
        )}
      </div>
    </div>
    )
}

export default Task;