import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {statusChanged} from "../redux/filters/action";

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return 'No Task.'
        case 1:
            return  "One Task."
        default:
            return `${no_of_todos} Tasks.`

    }
}

const Footer = () => {
    const todos = useSelector((state)=> state.todos)
    const filters = useSelector((state) => state.filters)
    const taskRemaining = todos.filter(todo => !todo.completed).length;
    const dispatch = useDispatch();

    const {status, colors} = filters;


    const handleStatusChanged = (status) => {
        dispatch(statusChanged(status));
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(taskRemaining)}</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${status === 'All' &&  'font-bold'} `} onClick={()=>handleStatusChanged('All')}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'}  `} onClick={()=>handleStatusChanged('Incomplete')}>Incomplete</li>
                <li>|</li>
                <li  className={`cursor-pointer ${status === 'Complete' &&  'font-bold'} `} onClick={()=>handleStatusChanged('Complete')}>Complete</li>
                <li></li>
                <li></li>
                <li
                    className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
                ></li>
                <li
                    className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
                ></li>
                <li
                    className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
                ></li>
            </ul>
        </div>
    );
};

export default Footer;