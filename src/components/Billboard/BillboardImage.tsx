import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
	images: {
		color: string;
		src: string;
	}[];
	imageIndex: number;
	setImageIndex: (index: React.SetStateAction<number>) => void;
}
const offsetLeftList = [0, 540, 1080, 1620];
const BillboardImage = ({ images, imageIndex, setImageIndex }: Props) => {
	const isActiveImgLoop = useRef<boolean>(true);
	useEffect(() => {
		const interval = setInterval(() => {
			if (isActiveImgLoop.current) {
				setImageIndex((prev) => prev + 1);
			}
		}, 4000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const onMouseEnter = () => {
		isActiveImgLoop.current = false;
	};

	const onMouseLeave = () => {
		isActiveImgLoop.current = true;
	};

	return (
		<>
			<div className="img_container">
				<div
					className="img_layout"
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
					style={{
						left: -offsetLeftList[imageIndex % offsetLeftList.length],
					}}
				>
					{images.map((val) => (
						<img key={val.src} src={val.src} height={380} />
					))}
				</div>
				<div className="img_index">{`${(imageIndex % images.length) + 1}/${
					images.length
				}`}</div>
			</div>
			<button
				className="arrow_left"
				onClick={() => {
					setImageIndex((prev) => prev + images.length - 1);
				}}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<KeyboardArrowLeftIcon />
			</button>
			<button
				className="arrow_right"
				onClick={() => {
					setImageIndex((prev) => prev + 1);
				}}
			>
				<KeyboardArrowRightIcon />
			</button>
		</>
	);
};

export default BillboardImage;
