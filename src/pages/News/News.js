import React from "react";
import Container from "react-bootstrap/Container";
import NewsPagination from "./components/NewsPagination";
import NewsCards from "./components/NewsCards";

function News() {
  return (
    <>
      <Container className="py-4">
        <h1>News</h1>
        <NewsPagination />
        <NewsCards />
        <NewsPagination />
      </Container>
    </>
  );
}

export default News;