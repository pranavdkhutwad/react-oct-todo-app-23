import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function TodoEdit({ todoItem, show, onClose, onEdit }) {
  const [task, setTask] = useState({
    name: "",
    desc: "",
    priority: "",
  });

  useEffect(() => {
    setTask({
      name: todoItem.name,
      desc: todoItem.desc,
      priority: todoItem.priority,
    });
  }, []);

  const handleNameChange = (event) => {
    setTask({ ...task, name: event.target.value });
  };
  const handleDescChange = (event) => {
    setTask({ ...task, desc: event.target.value });
  };
  const handlePriorityChange = (event) => {
    setTask({ ...task, priority: event.target.value });
  };

  const handleUpdate = () => {
    onEdit(task, todoItem.id);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button onClick={handleUpdate} variant="primary">
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TodoEdit;
