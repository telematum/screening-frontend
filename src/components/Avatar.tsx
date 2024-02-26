import { cn, getRandomColor } from "@/utils";

type Props = {
  firstName: string;
  lastName: string;
};

export default function Avatar({ firstName, lastName }: Props) {
  return (
    <div
      className={cn("rounded-full h-10 w-10 grid place-content-center", {
        [getRandomColor()]: true,
      })}
    >
      <span className="text-white font-bold">
        {firstName[0]}
        {lastName[0]}
      </span>
    </div>
  );
}
