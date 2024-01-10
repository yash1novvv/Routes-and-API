import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ImageList } from "@mui/material";

export const Post = () => {
  const localData = JSON.parse(localStorage.getItem("post")) || [];
  const [post, setPost] = React.useState(localData);
  console.log(post);

  React.useEffect(() => {
    (async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (res.ok) {
        const data = await res.json();
        setPost(data);
        localStorage.setItem("post", JSON.stringify(data));
      }
    })();
  }, []);

  return (
    <div>
      <ImageList cols={4} rowHeight={450}>
        {post.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://picsum.photos/id/${item.id}/345`}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </ImageList>
    </div>
  );
};
