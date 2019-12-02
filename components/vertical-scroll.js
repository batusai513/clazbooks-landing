import React from 'react';

export default function VerticalScroll({ images }) {
  const length = images.length;
  return (
    <div className="grid-wrapper">
      <div className="grid-scroll">
        <div className="grid-styled grid">
          <div className="col-left">
            {images
              .slice(0, Math.ceil(length / 2))
              .concat(images.slice(0, Math.ceil(length / 2)))
              .map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className="book-item"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}></div>
                );
              })}
          </div>
          <div className="col-right">
            {images
              .slice(Math.ceil(length / 2))
              .concat(images.slice(Math.ceil(length / 2)))
              .map((image, idx) => {
                return (
                  <div
                    key={idx}
                    className="book-item"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
