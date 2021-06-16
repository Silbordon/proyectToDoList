import {bd} from '../firebase-config';

const Todo = ({ todo, setTodos, todos }) => {


    const deleteHandler = () => {
        // setTodos(todos.filter(tarea => tarea.id !== todo.id))
        bd.collection("todos").doc(todo.id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }


    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (todo.id === item.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
        editarCompleted(todo)
    };


    const editarCompleted = (tarea) =>{
        bd.collection("todos").doc(tarea.id).set({
            ...tarea, completed: !tarea.completed
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button onClick={completeHandler} className={`complete-btn ${todo.completed ? 'completed-icon' : ''}`}>
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;