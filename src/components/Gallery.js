import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "./../light-box-styles.css"; // Import your CSS styles

export default function Gallery({ images, className }) {
  const [gallery, setGallery] = useState(images);
  const [index, setIndex] = useState(-1);
  const slides = gallery.map((image) => {
    const imgSrc = require(`./../../images/${image}`);

    return {
      src: imgSrc,
      width: `auto`,
      height: `auto`,
    };
  });

  const handleClick = (i, item) => {
    setIndex(i);
  };

  return (
    <div style={{ width: "100%" }} className={className}>
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        on={{
          view: ({ index: i }) => {
            setIndex(i);
          },
        }}
        close={(e) => {
          setIndex(-1);
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {gallery.map((image, i) => {
          const imgSrc = require(`./../../images/${image}`);

          console.log({ image, imgSrc });

          return (
            <div
              onClick={(e) => {
                e.stopPropagation();
                handleClick(i);
              }}
              style={{
                cursor: "pointer",
                position: "relative",
                width: "80px", // Adjust width as needed
                height: "80px", // Adjust height as needed
                borderRadius: "8px", // Adjust border radius as needed
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
              }}
              id={i}
              key={i}
            >
              <img alt="account" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
