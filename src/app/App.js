import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "../components/shared/header/Header";
import Todo from "../features/todo/Todo";
import Contact from "../features/contact/Contact";
import Login from "../features/login/Login";
import ProtectedRoute from "../components/shared/protected-route/ProtectedRoute";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [location]);

  return (
    <>
      {token && <Header />}
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/todo" element={<Todo />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
