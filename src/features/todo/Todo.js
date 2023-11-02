import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import { getCategoriesByPriority } from "./utils/todo";

function Todo() {
  const [highPriorityList, setHighPriorityList] = useState([]);
  const [mediumPriorityList, setMediumPriorityList] = useState([]);
  const [lowPriorityList, setLowPriorityList] = useState([]);

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
  const handleAdd = async (task) => {
    await createTodoItem(task);
  };
  return (
    <Row>
      <Col md="4" lg="4">
        <TodoForm onAdd={handleAdd} />
      </Col>
      <Col md="8" lg="8">
        <TodoList
          highPriority={highPriorityList}
          mediumPriority={mediumPriorityList}
          lowPriority={lowPriorityList}
        />
      </Col>
    </Row>
  );
}

export default Todo;
