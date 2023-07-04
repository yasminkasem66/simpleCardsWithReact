

import './ToDo.css'

export const ToDo = (props) => {

    return (
        <ul id="concepts">
            {props.todo.map((todo) =>
                <li className="concept" key={todo.title}>
                    <img src={todo.image} alt={todo.title} />
                    <h2>{todo.title}</h2>
                    <p>{todo.description}</p>
                </li>
            )}
        </ul>
    );
} 