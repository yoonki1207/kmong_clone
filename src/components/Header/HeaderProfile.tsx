import Logo from "../Logo";
import "./Header.scss";
import { useRef, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const HeaderProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (inputRef !== null) {
    }
  });

  const onFocus = () => {
    setActive(true);
  };

  const onBlur = () => {
    setActive(false);
  };

  return (
    <section className="header_container header_profile">
      <a href="#">
        <Logo />
      </a>
      <div className="header_profile_right">
        <form className={`search_form ${active ? "active" : ""}`}>
          <div className={`input_container ${active ? "active" : ""}`}>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              ref={inputRef}
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <SearchIcon />
          </div>
        </form>
        <div className="item">메시지</div>
        <div className="item">마이크몽</div>
        <div className="profile item" />
      </div>
    </section>
  );
};

export default HeaderProfile;
