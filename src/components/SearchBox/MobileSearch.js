import React, { useState } from "react";
import classes from "./MobileSearch.module.css";
import { useDispatch, useSelector } from "react-redux";
import { on_search, search_result } from "../../store/actions/blogAction";

const MobileSearch = () => {
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

  function openSearch() {
    document.getElementById("overlay").style.height = "40vw";
    document.getElementById("overlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("overlay").style.height = "0";
    document.getElementById("overlay").style.display = "none";
  }
  return (
    <div className={classes.Mobile_Search_Container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${classes.icon}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={openSearch}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <div id="overlay" className={classes.Overlay}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={closeSearch}
          className={`${classes.icon} ${classes.Close_btn}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <div id="overlay_content" className={classes.Overlay_Content}>
          <input
            value={value}
            className={classes.Input_Field}
            type="text"
            onChange={(event) => triggerSearch(event.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${classes.icon} ${classes.form_icon}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={closeSearch}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;
