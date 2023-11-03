import Card from "react-bootstrap/Card";
import { getBorderClass } from "../../utils/todo";
import { Trash, Pencil } from "react-bootstrap-icons";

import "./TodoItem.css";

function TodoItem({ todo, openEditModal, onDelete }) {
  return (
    <Card className={`mt-3 ${getBorderClass(todo.priority)}`}>
      <Card.Header className="d-flex justify-content-between">
        <div>{todo.name}</div>
        <div>
          <Pencil
            onClick={() => openEditModal(todo)}
            className="text-info me-3 font-icon"
          />
          <Trash
            onClick={() => onDelete(todo.id)}
            className="text-danger font-icon"
          />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{todo.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
