import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import Article from "../Article/Article";

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
      <h2>Today's hottest news:</h2>
      <ul>
        {todaysArticles.map((art, i) => {
          return <Article key={i} art={art} />;
        })}
      </ul>
    </>
  );
};

export default HomePage;
