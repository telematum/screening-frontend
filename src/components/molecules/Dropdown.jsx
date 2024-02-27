export default function Dropdown({ isOpen, onToggle }) {
    const toggleDropdown = () => {
        onToggle(!isOpen);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className="three-dot-menu flex flex-col items-center justify-center"
                onClick={toggleDropdown}
            >
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
            </div>

            {isOpen && (
                <div
                    className="z-50 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-34 dark:bg-gray-700 mt-1"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleDropdown}
                            >
                                Edit
                            </a>
                        </li>
                        <li>
                            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleDropdown}
                            >
                                Delete
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}