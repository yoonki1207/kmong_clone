interface IItem {
	src: string[];
	liked: boolean;
	title: string;
	author: string;
	price: number;
	stars: number;
	taxBill: string | null; // url;
}
const itemList: IItem[] = [
	{
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
	},
	{
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
	},
	{
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
	},
	{
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
	},
];

const RelativeSection = () => {
	return (
		<div className="section_service_container">
			<h1>관심사가 비슷한 회원들이 본 서비스</h1>
			<div className="section_service_item_container">
				{itemList.map((item) => (
					<div key={item.title} className="section_service_item">
						<div className="section_service_img_container">
							<div>
								{item.src.map((src) => (
									<img src={src} height="160px" />
								))}
							</div>
						</div>
						<div>{item.author}</div>
						<div>{item.title}</div>
						<div>{item.price}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default RelativeSection;
