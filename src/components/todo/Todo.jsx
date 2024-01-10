import React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ImageList } from "@mui/material";

export const Todo = () => {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = React.useState(localData);

  React.useEffect(() => {
    (async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (res.ok) {
        const data = await res.json();
        setTodo(data);
        localStorage.setItem("todo", JSON.stringify(data));
      }
    })();
  }, []);

  return <div>
     <ImageList cols={4} rowHeight={450}>
        {todo.map(item => (
            <li
            style={{
              border: "1px solid rgb(81, 81, 250)",
              backgroundColor: "#fff",
            }}
          >
            <React.Fragment>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.id}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </React.Fragment>
          </li>
        ))}
      </ImageList>
  </div>;
};
