import { useState, useEffect } from "react";
import Form from "../Form/Form";
import Article from "../Article/Article";
import axios from "axios";
import { API_KEY } from "../../helpers/helpers";
import List from "@mui/material/List";
const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (keyword) {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${keyword}&from=2022-06-25&language=en&sortBy=popularity&apiKey=${API_KEY}`
        )
        .then((data) => {
          setArticles(data.data.articles);
        });
    }
  }, [keyword]);

  return (
    <>
      <Form setKeyword={setKeyword} />
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          alignContent: "center",
        }}
      >
        {articles.map((art, i) => {
          return <Article art={art} key={i} />;
        })}
      </List>
    </>
  );
};

export default Search;

// ul=>List
