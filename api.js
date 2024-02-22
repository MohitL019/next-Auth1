const baseUrl = "http://localhost:3000";

export const getAllTodos = async ()=>{
    const res = await fetch(`${baseUrl}/tasks`,{ cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addToDo = async (todo) =>{
    const res = await fetch(`${baseUrl}/tasks`,{
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(todo)
    }
    )
    const newToDo = await res.json();
    return newToDo;
}


export const editToDo = async (todo ) =>{
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`,{
        method : 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(todo)
    }
    )
    const updatedToDo = await res.json();
    return updatedToDo;
}

export const deleteToDo = async (id) =>{
    await fetch(`${baseUrl}/tasks/${id}`,{
        method : 'DELETE',
    }
    )
    
}