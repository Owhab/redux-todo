import React, {useState} from 'react';
import noteImage from "../images/notes.png"
import doubleTickImage from "../images/double-tick.png"
import plusImage from "../images/plus.png"
import {useDispatch} from "react-redux";
import {added} from "../redux/todos/action";

const Header = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput('')

    }
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img
                    src={noteImage}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer">
                    <img
                        className="w-4 h-4"
                        src={doubleTickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;