import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import TodoEdit from "./todo-edit/TodoEdit";

import { getCategoriesByPriority } from "./utils/todo";

function Todo() {
  const [highPriorityList, setHighPriorityList] = useState([]);
  const [mediumPriorityList, setMediumPriorityList] = useState([]);
  const [lowPriorityList, setLowPriorityList] = useState([]);
  const [show, setShow] = useState(false);
  const [todoItem, setTodoItem] = useState({});

  useEffect(() => {
    fetchTodoList();
  }, []);

  const updateTodoLayout = (data) => {
    const { highPriority, mediumPriority, lowPriority } =
      getCategoriesByPriority(data);

    setHighPriorityList(highPriority);
    setMediumPriorityList(mediumPriority);
    setLowPriorityList(lowPriority);
  };

  const fetchTodoList = async () => {
    const { data } = await axios.get("http://localhost:9000/todos");
    updateTodoLayout(data);
  };
  const createTodoItem = async (task) => {
    await axios.post("http://localhost:9000/todos", task);
    fetchTodoList();
  };
  const handleEdit = async (newTodo, id) => {
    await axios.put(`http://localhost:9000/todos/${id}`, { ...newTodo, id });
    fetchTodoList();
  };

  const deleteTodoItem = async (id) => {
    await axios.delete(`http://localhost:9000/todos/${id}`);
    fetchTodoList();
  };
  const handleAdd = async (task) => {
    await createTodoItem(task);
  };
  const openEditModal = (todo) => {
    setTodoItem(todo);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <TodoEdit
          onEdit={handleEdit}
          todoItem={todoItem}
          show={show}
          onClose={handleClose}
        />
      )}
      <Row>
        <Col md="4" lg="4">
          <TodoForm onAdd={handleAdd} />
        </Col>
        <Col md="8" lg="8">
          <TodoList
            highPriority={highPriorityList}
            mediumPriority={mediumPriorityList}
            lowPriority={lowPriorityList}
            onDelete={deleteTodoItem}
            openEditModal={openEditModal}
          />
        </Col>
      </Row>
    </>
  );
}

export default Todo;
