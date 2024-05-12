import React from "react";

const TodoCard = ({ id, title, description, completed, onToggleComplete }) => { // added onToggleComplete prop
    return (
        <li className={`todo-item ${completed ? 'completed' : 'incomplete'}`}> 
            <div className="todo-content"> {/* Added a container div */}
                <h3 className="todo-title">{title}</h3>
                <p className="todo-description"><span>{id}</span>{description}</p>
            </div>
            <button>jd</button>
        </li>
    );
};

export default TodoCard;
