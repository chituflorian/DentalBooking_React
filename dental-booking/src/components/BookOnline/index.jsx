import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./BookOnline.css"; // import the CSS file

function BookOnline() {
  const navigate = useNavigate();
  const path = "/user-selection";

  function handleClick() {
    navigate(path);
  }

  return (
    <div className="book-online-container">
      <Button onClick={handleClick} type="primary" shape="round" size="large">
        Book online
      </Button>
    </div>
  );
}

export default BookOnline;
