import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import Article from "../Article/Article";
import { Typography } from "@mui/material";
import List from "@mui/material/List";

const HomePage = () => {
  const [todaysArticles, setTodaysArticles] = useState([]);

  useEffect(() => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    axios
      .get(
        `https://newsapi.org/v2/everything?q=world&from=${year}-${
          month < 10 ? `0${month + 1}` : month + 1
        }-${day - 1}&language=en&sortBy=popularity&apiKey=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data.articles);
        setTodaysArticles(response.data.articles);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontSize: "2rem", my: "0.8rem" }}
      >
        Today's hottest news:
      </Typography>
      <List sx={{ width: "100%", alignContent: "center" }}>
        {todaysArticles.map((art, i) => {
          return <Article key={i} art={art} />;
        })}
      </List>
    </>
  );
};

export default HomePage;
