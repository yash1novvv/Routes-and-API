import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ImageList } from "@mui/material";

export const User = () => {
  const localData = JSON.parse(localStorage.getItem("data")) || [];
  const [user, setUser] = React.useState(localData);

  React.useEffect(() => {
    (async function () {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (res.ok) {
        let data = await res.json();
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
    })();
  }, []);

  return (
    <div>
      <ImageList cols={4} rowHeight={450}>
        {user.map(item => (
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
                  {item.email}
                </Typography>
                <Typography variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.username}
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </React.Fragment>
          </li>
        ))}
      </ImageList>
    </div>
  );
};
