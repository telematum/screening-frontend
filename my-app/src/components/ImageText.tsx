export const ImageText = ({
	text,
	image,
}: {
	text: string;
	image?: string | undefined;
}) => {
	return (
		<td className="">
			{image && (
				<img
					src={image}
					className="w-[20px] float-left mr-1"
					alt={text}
				/>
			)}
			<span>{text}</span>
		</td>
	);
};