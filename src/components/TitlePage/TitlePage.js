import React from "react";
import { Badge } from "react-bootstrap";

const TitlePage = () => {
  return (
    <div>
      <ul>
        <li>
          <h4>Title of the Articles</h4>
        </li>

        <li>
          Likes <Badge variant="secondary"> 44</Badge>{" "}
        </li>
        <li>
          Comments <Badge variant="secondary">66</Badge>{" "}
        </li>
        <li>
          Last Post Update <Badge variant="secondary">55 minutes ago</Badge>
        </li>
      </ul>
    </div>
  );
};
export default TitlePage;
