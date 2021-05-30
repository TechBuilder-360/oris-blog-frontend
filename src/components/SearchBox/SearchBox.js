
import React, { useState } from "react";
import classes from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { on_search, search_result } from "../../store/actions/blogAction";

const SearchBox = () => {
  const posts = useSelector((state) => state.blog.post);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function triggerSearch(e) {
    setValue(e);
    if (e.length > 0) {
      dispatch(on_search(true));
      var data = posts.filter((post) =>
        post.header.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(search_result(data));
    } else {
      dispatch(on_search(false));
    }
  }

  return (
    <div className={classes.search_elements}>
      {/* Search Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${classes.icon}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        value={value}
        className={classes.input_field}
        type="text"
        placeholder="search"
        onChange={(event) => triggerSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
