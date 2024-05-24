import React, { useState } from "react";

const TextWithReadMore = ({ text, limit }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="small-font-small-screen">
      {showFullText ? (
        <span>
          {text}

          {text.length > limit && (
            <span
              type="button"
              style={{
                backgroundColor: `transparent`,
                color: `#000`,
                cursor: `pointer`,
                fontSize: `1rem`,
                fontWeight: 600,
              }}
              className={`small-font-smaller-screen`}
              onClick={toggleText}
            >
              {` `}{`   `}{showFullText ? "Read Less" : "Read More"}
            </span>
          )}
        </span>
      ) : (
        <span>
          {text.slice(0, limit)}
          {text.length > limit && <>...</>}
          {text.length > limit && (
            <span
              type="button"
              style={{
                backgroundColor: `transparent`,
                color: `#000`,
                cursor: `pointer`,
                fontSize: `1rem`,
                fontWeight: 600,
              }}
              className={`small-font-smaller-screen`}
              onClick={toggleText}
            >
              {` `} {` `}
              {showFullText ? "Read Less" : "Read More"}
            </span>
          )}
        </span>
      )}
    </div>
  );
};

export default TextWithReadMore;
