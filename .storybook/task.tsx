import React, { FC } from 'react';
import "../App.css";
export interface props {
    task : {id : string, title : string, state : any},
    onArchive : void,
    
}
 const Task : FC<props> = ({task : {id, title,  state}}) => {
    return (
        <div className = "maintask">
       
      </div>
    )
}

export default Task;