import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        image=""
        date="Today At 5:55 AM"
        description="Lorem Ipsum"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
