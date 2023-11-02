import { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TodoForm({ onAdd }) {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    priority: "",
  });

  const handleNameChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };
  const handleDescChange = (event) => {
    setTask({ ...task, desc: event.target.value });
  };
  const handlePriorityChange = (event) => {
    setTask({ ...task, priority: event.target.value });
  };

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Task name</Form.Label>
            <Form.Control
              value={task.name}
              onChange={handleNameChange}
              type="text"
              placeholder="Task name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="desc">
            <Form.Label>Task description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Task description"
              rows={3}
              value={task.desc}
              onChange={handleDescChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="priority">
            <Form.Label>Task priority</Form.Label>
            <Form.Control
              value={task.priority}
              type="number"
              placeholder="Task priority"
              onChange={handlePriorityChange}
            />
          </Form.Group>
          <div className="d-grid">
            <Button onClick={() => onAdd(task)} variant="success">
              Add task
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
