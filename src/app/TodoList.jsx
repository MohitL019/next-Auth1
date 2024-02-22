
import Task from "./Task";


const ToDoList = ({tasks})=>{
    return (
        <div className="overflow-x-auto">
  <table className="table">
  <thead>
    <tr>
      <th>Task</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task) => (
      <Task key={task.id} task={task} />
    ))}
  </tbody>
</table>

</div>
    )
}

export default ToDoList;