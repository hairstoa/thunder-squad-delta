import React from "react";
import BookRow from "../BookRow";
import "./Library.css";

function Library({ book_arrays, headings, headingLinks, leftStart = true }) {
  return (
    <>
      {book_arrays.map((book_array, index) => (
        <div key={index} className="libraryRow">
          <BookRow
            books={book_array}
            heading={headings[index]}
            headingLink={headingLinks ? headingLinks[index] : null}
            {...{ leftStart }}
          />
        </div>
      ))}
    </>
  );
}

export default Library;
