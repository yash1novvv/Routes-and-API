import { Container } from "@mui/material";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { User } from "./components/user/User";
import { Todo } from "./components/todo/Todo";
import { Post } from "./components/post/Post";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <ul style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive link" : "link")}
            to="/"
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive link" : "link")}
            to="/todos"
          >
            Todos
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive link" : "link")}
            to="/posts"
          >
            Posts
          </NavLink>
        </ul>

        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/posts" element={<Post />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
