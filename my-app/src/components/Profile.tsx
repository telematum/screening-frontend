import { getRandomColor } from "../helper/random";

export const Profile = ({ text, mobNo }: { text: string; mobNo: string }) => {
	return (
		<td>
			<div className="flex gap-3 items-center">
				<div
					className="profile-image"
					style={{ backgroundColor: getRandomColor() }}
				>
					{" "}
				</div>
				<div>
					<div className="font-semibold text-black text-base">
						{text}
					</div>
					<div className=" text-[13px]">{mobNo}</div>
				</div>
			</div>
		</td>
	);
};
