import reactStringReplace from "react-string-replace";

export const text = str =>
  reactStringReplace(str, /(q[0-9]{1,3}[a-e]?\.png)/gi, (match, i) => {
    const image = require("./images/"+match);
    return <img className="img-fluid" src={image} alt={match} />
  }
  );
