"use client";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface IItem {
  src: string[];
  liked: boolean;
  title: string;
  author: string;
  price: number;
  stars: number;
  taxBill: string | null; // url;
}
const tmp_item: IItem = {
  src: [
    "https://d2v80xjmx68n4w.cloudfront.net/gigs/ISMi31661921795.jpg",
    "https://d2v80xjmx68n4w.cloudfront.net/gigs/ywZXy1661921825.jpg",
    "https://d2v80xjmx68n4w.cloudfront.net/gigs/3Wnyl1661921833.jpg",
    "https://d2v80xjmx68n4w.cloudfront.net/gigs/fdead1661921846.jpg",
  ],
  liked: false,
  title: "트렌디한 캐릭터 일러스트 로고 디자인 해드립니다.",
  price: 80000,
  stars: 5.0,
  taxBill: null,
  author: "글리밍스튜디오",
};

const itemList: IItem[] = [
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
  tmp_item,
];

const MasterTooltipMessage = () => (
  <span className="tooltip">
    누적 판매300건 이상
    <br />
    또는 8,000만원 이상
    <br />
    만족도 4.7이상
  </span>
);

const ItemImage = (item: IItem) => {
  const [index, setIndex] = useState(0);
  const offsetWidth = [0, -214, -428, -642];
  return (
    <>
      <div className="img_list" style={{ left: offsetWidth[index] }}>
        {item.src.map((src) => (
          <div key={src} className="img_item">
            <img src={src} height="160px" width="214px" />
          </div>
        ))}
      </div>
      <div className="dots">
        {item.src.map((val, i) =>
          i === index ? (
            <span key={val} className="small filled"></span>
          ) : (
            <span key={val} className="small"></span>
          )
        )}
      </div>
      <button
        className="icon_left"
        onClick={() => {
          setIndex((prev) => (prev + item.src.length - 1) % item.src.length);
        }}
      >
        <KeyboardArrowLeftIcon />
      </button>
      <button
        className="icon_right"
        onClick={() => {
          setIndex((prev) => (prev + 1) % item.src.length);
        }}
      >
        <KeyboardArrowRightIcon />
      </button>
    </>
  );
};

const RelativeSection = () => {
  return (
    <div className="section_service_container">
      <h3>관심사가 비슷한 회원들이 본 서비스</h3>
      <div className="section_service_item_container">
        {itemList.map((item) => (
          <div key={item.title} className="section_service_item">
            <div className="section_service_img_container">
              <ItemImage {...item} />
              <div onClick={() => {}} className="liked_icon">
                {item.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </div>
            </div>
            <div className="author">
              <span>
                MASTER
                <MasterTooltipMessage />
              </span>
              {item.author}
            </div>
            <div className="title">{item.title}</div>
            <div className="price">{item.price}원~</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelativeSection;
