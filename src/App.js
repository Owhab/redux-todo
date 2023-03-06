import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
        <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
           <Navbar/>


            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">

                <Header/>
                <hr className="mt-4"/>

                <TodoList/>


                <hr className="mt-4"/>

                {/*// <!-- footer -->*/}
                <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <p>2 tasks left</p>
                    <ul className="flex space-x-1 items-center text-xs">
                        <li className="cursor-pointer font-bold">All</li>
                        <li>|</li>
                        <li className="cursor-pointer">Incomplete</li>
                        <li>|</li>
                        <li className="cursor-pointer">Complete</li>
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
            </div>
        </div>
    </div>
  );
}

export default App;
