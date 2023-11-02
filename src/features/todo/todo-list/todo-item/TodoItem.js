import Card from "react-bootstrap/Card";

function TodoItem({ todo }) {
  return (
    <Card className="mt-3">
      <Card.Header>{todo.name}</Card.Header>
      <Card.Body>
        <Card.Text>{todo.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
