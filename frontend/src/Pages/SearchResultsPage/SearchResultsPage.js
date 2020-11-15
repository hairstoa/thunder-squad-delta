import React from "react";

import BookCover from "../../Assets/BookCover.png";
import { SearchResultRow, SearchSort } from "../../Components";
import "./SearchResultsPage.css";

const book_array = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: BookCover,
    cost: 35,
    condition: "Good",
    giver: "Sally",
  },
  {
    title: "The Bop-it",
    author: "Bert and Ernie",
    cover: BookCover,
    cost: 20,
    condition: "Poor",
    giver: "Joe",
  },
];

function SearchResultsPage() {
  return (
    <div className="searchPageContainer">
      <div className="searchControl">
        <p className="nowShowing">Now showing results for "The Hobbit"</p>
        <div className="sortContainer">
          <p className="sortLabel">Sort Results By: </p>
          <SearchSort className="searchSortStyle" />
        </div>
      </div>

      <div className="rowHolder">
        <>
          {book_array.map(
            ({ cover, title, author, condition, giver, cost }, index) => (
              <SearchResultRow
                {...{ cover }}
                {...{ title }}
                {...{ author }}
                {...{ condition }}
                {...{ giver }}
                {...{ cost }}
                key={index}
              />
            )
          )}
        </>
      </div>
    </div>
  );
}

export default SearchResultsPage;
