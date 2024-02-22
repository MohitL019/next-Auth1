"use client"
import ToDoList from "../ToDoList";
import { AiOutlinePlus } from "react-icons/ai";
import AddTask from "../AddTask";
import { getAllTodos } from "../../../api";
import Link from "next/link";
export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Learn DSA</h3>
      </div>
      <div className="mb-4">
        <AddTask /> 
            <Link className="mt-5" href={"/profile"}> <button className="btn btn-primary w-full mt-4 ">
            Back 
          </button> </Link>      
      </div>
      <div className="bg-white rounded shadow-md">
        <ToDoList tasks={tasks} />
      </div>
    </main>
  ); 
}
