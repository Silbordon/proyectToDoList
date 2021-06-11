import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                         <Todo 
                            todo={todo}  
                            key={todo.id}  
                            setTodos={setTodos}
                            todos={todos}
                        />  
                    ))} 
                </ul>
            </div>
        </div>
    );
};

export default TodoList;