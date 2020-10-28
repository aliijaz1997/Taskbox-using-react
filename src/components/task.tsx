import React, { FC } from 'react';
import "../App.css";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
export interface props {
    task : {id : string, title : string, state : any},
    onArchiveTask : (id : string) => void,
    onPinnedTask : (id : string) => void
    
}
 const Task : FC<props> = ({task : {id, title,  state}, onArchiveTask, onPinnedTask }) => {
    return (
      <div className="maintask">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'Archieved'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>
      <div className="title">
        <input style = {{border : "none"}} type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

      <div className="star" onClick={event => event.stopPropagation()}>
        {state !== 'Archieved' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinnedTask(id)}>
            {state === "Pinned" ? <StarIcon/> : <StarBorderIcon/>}
          </a>
        )}
      </div>
    </div>
    )
}

export default Task;