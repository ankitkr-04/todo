import React from "react";

const TodoCard = ({ id, title, description, completed, onToggle}) => { // added onToggleComplete prop
    return (
        <li className={`todo-card ${completed ? "completed" : "incomplete"}`}>
            <h3 className="todo-card-title"><span>{id}. </span>{title}</h3>
            <p className="todo-card-description">{description}</p>
            <p className="todo-card-status">{completed ? "Complete" : "Incomplete"}</p>
            <button className="todo-card-button" onClick={() => onToggle(id)}>
                {completed ? "Mark Incomplete" : "Mark Complete"}
            </button>
        </li>
    );
};

export default TodoCard;
