import React from "react";

const Article = ({ art }) => {
  return (
    <li>
      <a href={art.url}>
        <img src={art.urlToImage} alt={art.title} style={{ height: "50px" }} />
        <span>{art.title}</span>
      </a>
    </li>
  );
};

export default Article;
