interface Props {
	tags: string[];
}

const BillboardTag = ({ tags }: Props) => {
	return (
		<div className="billboard_tag_container">
			{tags.map((tag) => (
				<a key={tag} href={"#"} className="billboard_tag">
					#{tag}
				</a>
			))}
		</div>
	);
};

export default BillboardTag;
