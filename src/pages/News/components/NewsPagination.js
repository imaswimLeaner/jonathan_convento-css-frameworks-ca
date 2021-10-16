import React from "react";
import Pagination from "react-bootstrap/Pagination";

function NewsPagination() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination className="my-3">{items}</Pagination>
    </div>
  );
}

export default NewsPagination;