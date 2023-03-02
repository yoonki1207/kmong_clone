import "./Billboard.scss";
import { useEffect, useState, useRef } from "react";
import BillboardSearchQuery from "./BillboardSearchQuery";
import BillboardImage from "./BillboardImage";
import BillboardTag from "./BillboardTag";

const ImageList = [
	// {
	//   color: "#E27A00",
	//   src: "https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fcurated_contents%2Fl5edU_curated_content_item_main_desktop_1020.jpg&w=2880&q=75",
	// },
	{
		color: "rgb(159, 112, 251)",
		src: "https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fcurated_contents%2FgP0uM_curated_content_item_main_desktop_1167.png&w=2880&q=75 1x",
	},
	{
		color: "rgb(255, 142, 134)",
		src: "https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fcurated_contents%2FnhKVf_curated_content_item_main_desktop_1119.png&w=2880&q=75",
	},
	{
		color: "rgb(0, 39, 206)",
		src: "https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fcurated_contents%2F0q6YO_curated_content_item_main_desktop_1174.png&w=2880&q=75",
	},
	{
		color: "rgb(55, 17, 108)",
		src: "https://kmong.com/_next/image?url=https%3A%2F%2Fd2v80xjmx68n4w.cloudfront.net%2Fassets%2Fimages%2Fcurated_contents%2FpuAh7_curated_content_item_main_desktop_719.jpg&w=2880&q=75",
	},
];

const billboard_tags = ["로그", "블로그", "상세페이지", "명함", "로고디자인"];

export enum EAnimate {
	READY,
	TYPING,
	DELAY,
	ERASING,
	STOP,
}

// 쇼핑몰 전자책 홈페이지 VOD 심리상담
const Billboard = () => {
	const [imageIndex, setImageIndex] = useState(0);
	return (
		<section
			className={"billboard"}
			style={{
				backgroundColor: ImageList[imageIndex % ImageList.length].color,
			}}
		>
			<div className="billboard_left">
				<h1>
					프리랜서 마켓 No.1 크몽에서
					<br /> 원하는 전문가를 찾아보세요!
				</h1>
				<BillboardSearchQuery />
				<BillboardTag tags={billboard_tags} />
			</div>
			<div className="billboard_right">
				<BillboardImage
					images={ImageList}
					imageIndex={imageIndex}
					setImageIndex={setImageIndex}
				/>
			</div>
		</section>
	);
};

export default Billboard;
/*
#E27A00
rgb(159, 112, 251)
rgb(255, 142, 134)
rgb(0, 39, 206)
rgb(55, 17, 108)*/
