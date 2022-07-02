import React from "react";
//
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import { ListItemText } from "@mui/material";
import { matchRoutes } from "react-router-dom";
//
const Article = ({ art }) => {
  return (
    <ListItem>
      <Card variant="outlined" sx={{ mb: "10px" }}>
        <a href={art.url} style={{ textDecoration: "none" }} target="__blank">
          <img src={art.urlToImage} alt={art.title} style={{ width: "100%" }} />
          <ListItemText sx={{ color: "black" }}>{art.title}</ListItemText>
        </a>
      </Card>
    </ListItem>
  );
};

export default Article;
// Komponent Article.js
// 1. Card
// 2. ListItem
// 3. a
// 4. img
// 5. ListItemText

// mb
// mt
// ml
// mr
// mx
// my
// m
