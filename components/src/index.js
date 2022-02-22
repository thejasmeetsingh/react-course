import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {`${faker.name.firstName()} ${faker.name.lastName()}`}
          </a>
          <div className="metadata">
            <span className="date">{faker.date.past(2).toString()}</span>
          </div>
          <div className="text">{faker.lorem.sentence()}</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
