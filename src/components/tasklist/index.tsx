import React from 'react';
import { FC } from 'react';
import Task from '../tasks/index';
import { task } from '../tasks/index';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect } from 'react-redux';
function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export function CircularStatic() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}
export interface prop {
    loading?: boolean,
    tasks?: task[] | undefined
}
 export const TaskList: FC<prop> = ({ loading, tasks}) => {

    if (loading) {
        return <div className="Circularloadingprogress" >
            <CircularStatic />
        </div>
    }

    if (tasks?.length === 0) {
        return <div className="Notask">
            <CheckCircleIcon />
            <h3>
                You have no task
            </h3>
        </div>
    }

    const TaskListwithCorrectOrder = [
        ...tasks!.filter((task) => task.state === 'Pinned'),
        ...tasks!.filter((task) => task.state === 'Default'),
        ...tasks!.filter((task) => task.state === 'Archieved')
    ];
    return (
        <div>
            {TaskListwithCorrectOrder?.map(respectivetasks => {
                return <Task key={respectivetasks.id} task={respectivetasks} />
            })}
        </div>
    )
}

TaskList.defaultProps = {
    tasks: [
        { id: "1", title: "Task 1", state: "Default" },
        { id: "2", title: "Task 2", state: "Default" },
        { id: "3", title: "Task 3", state: "Default" },
        { id: "4", title: "Task 4", state: "Default" },
        { id: "5", title: "Task 5", state: "Default" },
        { id: "6", title: "Task 6", state: "Default" },
    ],
}

export default connect(
    ({ tasks } : any) => ({
      tasks: tasks.filter((t : task) => t.state === 'Default' || t.state === 'Archieved' || t.state === 'Pinned'),
    })
  )(TaskList);