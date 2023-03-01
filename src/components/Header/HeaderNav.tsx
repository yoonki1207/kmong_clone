import "./Header.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

interface TNavFirstMenu {
  name: string;
  tooltip: JSX.Element;
  href: string;
}
const NavFisrtMenu: TNavFirstMenu[] = [
  {
    name: "Prime",
    tooltip: (
      <span>
        <b>TOP 2%전문가</b>의 서비스를 만나보세요.
      </span>
    ),
    href: "#",
  },
  {
    name: "엔터프라이즈",
    tooltip: (
      <span>
        <b>기업 외주,상주,정부지원사업</b>전용 솔루션입니다.
      </span>
    ),
    href: "#",
  },
  {
    name: "전자책,VOD",
    tooltip: (
      <span>
        <b>세상 모든 노하우</b>를 배울 수 있는 곳
      </span>
    ),
    href: "#",
  },
];

const HeaderNav = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <section className="header_nav header_container">
      <div className="menu_left_container">
        <div className="dropdown" ref={dropdownRef} onMouseEnter={() => {}}>
          <MenuIcon />
          <span>전체 카테고리</span>
          <ArrowDropDownIcon />
        </div>
        <ul>
          {NavFisrtMenu.map((val) => (
            <li key={val.name}>
              <a href="">{val.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu_right_container">
        <span>
          원하는 서비스를 못 찾겠다면, <b>프로젝트 의뢰</b>하세요!
        </span>
        <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
      </div>
    </section>
  );
};

export default HeaderNav;
