import React, { FC } from 'react';
import "../App.css";
export interface props {
    task : {id : string, title : string, state : any},
    onArchive : void,
    
}
 const Task : FC<props> = ({task : {id, title,  state}}) => {
    return (
        <div className = "maintask">
        <label>
        <input type = "checkbox"  />
        </label>
        <div className = "title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>
      <i className="icon-star"></i>
      </div>
    )
}

export default Task;