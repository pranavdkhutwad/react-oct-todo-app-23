import Container from "react-bootstrap/Container";
import Header from "../components/shared/header/Header";
import Todo from "../features/todo/Todo";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Container className="mt-3">
        <Todo />
      </Container>
    </>
  );
}

export default App;
