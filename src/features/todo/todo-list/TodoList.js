import { useRef, useEffect } from "react";
import TodoItem from "./todo-item/TodoItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TodoList({
  highPriority,
  mediumPriority,
  lowPriority,
  onDelete,
  openEditModal,
}) {
  const highPriorityEleRef = useRef(null);
  useEffect(() => {
    console.log(highPriorityEleRef);
  }, []);
  return (
    <Row>
      <Col md="4" lg="4">
        <h5 ref={highPriorityEleRef}>High priority</h5>
        {highPriority.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            openEditModal={openEditModal}
          />
        ))}
      </Col>
      <Col md="4" lg="4">
        <h5>Medium priority</h5>
        {mediumPriority.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            openEditModal={openEditModal}
          />
        ))}
      </Col>
      <Col md="4" lg="4">
        <h5>Low priority</h5>
        {lowPriority.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            openEditModal={openEditModal}
          />
        ))}
      </Col>
    </Row>
  );
}

export default TodoList;
