import { useEffect, useRef, useState } from "react";
import { toKorChars } from "../../utils/Utils";
import { EAnimate } from "./Billboard";

const messages: string[] = ["쇼핑몰", "전자책", "홈페이지", "VOD", "심리상담"];
interface Props {
	animateState: any;
	setAnimateState: any;
}
const TypingAnimation = ({ animateState, setAnimateState }: Props) => {
	const messageIndex = useRef(0);
	const [searchKeyword, setSearchKeyword] = useState("");
	useEffect(() => {
		if (animateState === EAnimate.READY) {
			setAnimateState(EAnimate.TYPING);
			const msg = messages[messageIndex.current % messages.length]
				.split("")
				.map((val) => toKorChars(val));
			var isStart = false;
			const msgRecursive = (msg: string[][]) => {
				if (msg && msg.length >= 1) {
					const c = msg[0][0];
					const isLongC = msg[0].length > 1;
					if (isStart) {
						setSearchKeyword((prev) => prev.substring(0, prev.length - 1) + c);
						msg[0].splice(0, 1);
						if (msg[0].length === 0) {
							isStart = false;
							msg.splice(0, 1);
						}
					} else if (isLongC) {
						if (!isStart) {
							setSearchKeyword((prev) => prev + c);
							msg[0].splice(0, 1);
							isStart = true;
						}
					} else {
						setSearchKeyword((prev) => prev + c);
						msg.splice(0, 1);
					}
				} else {
					clearInterval(interval);
					setAnimateState(EAnimate.DELAY);
					messageIndex.current++;
				}
			};
			const interval = setInterval(() => msgRecursive(msg), 50);
		}
		if (animateState === EAnimate.DELAY) {
			setTimeout(() => {
				setAnimateState(EAnimate.ERASING);
			}, 2500);
		}
		if (animateState === EAnimate.ERASING) {
			var index = searchKeyword.length;
			const erasing = () => {
				if (index > 0) {
					setSearchKeyword((prev) => prev.substring(0, prev.length - 1));
				} else {
					clearInterval(erase);
					setAnimateState(EAnimate.READY);
				}
				index--;
			};
			const erase = setInterval(erasing, 100);
		}
	}, [animateState]);

	return <>{searchKeyword}</>;
};

export default TypingAnimation;
