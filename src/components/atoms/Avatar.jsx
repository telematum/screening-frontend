import { getInitials } from "../../utils";

export default function Avatar({ name }) {
    return (
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{getInitials(name)}</span>
        </div>
    );
}