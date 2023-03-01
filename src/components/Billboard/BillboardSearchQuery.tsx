import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { EAnimate } from "./Billboard";
import TypingAnimation from "./TypingAnimation";

const BillboardSearchQuery = () => {
  const [animateState, setAnimateState] = useState(EAnimate.READY);
  const [searchQuery, setSearchQuery] = useState("");
  const [queryActive, setQueryActive] = useState(false);

  return (
    <form>
      <div className="container">
        {queryActive ? null : (
          <>
            <div className="autokeyword">
              <TypingAnimation {...{ animateState, setAnimateState }} />
            </div>
            <div
              className={`cursor ${
                animateState === EAnimate.DELAY ? "blink" : ""
              }`}
            />
          </>
        )}
        <label>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              setQueryActive(true);
            }}
            onBlur={() => {
              if (searchQuery === "") setQueryActive(false);
            }}
          />
        </label>
        <div className="search_icon">
          <SearchIcon />
        </div>
      </div>
    </form>
  );
};

export default BillboardSearchQuery;
