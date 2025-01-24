import { NavLink } from "react-router-dom";

type HeaderProps = {
    totalProducts: number;
};

export default function Header({ totalProducts }: HeaderProps) {
    return (
        <header className="fixed z-50 w-full bg-white">
            <div className="mx-auto flex max-w-screen-xl items-center justify-between border-b border-gray-200 py-6 px-4 xl:px-0">
                <NavLink to={"/"} className="text-2xl font-bold">
                    everything.
                </NavLink>
                <nav>
                    <ul className="flex items-center gap-4">
                        <li>
                            <NavLink
                                to={"/products"}
                                className={({ isActive }) =>
                                    isActive ? "stroke-2 font-bold" : ""
                                }
                            >
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={"/cart"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "relative stroke-2 font-bold"
                                        : "relative"
                                }
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    ></path>
                                    <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                    <path d="M17 17h-11v-14h-2"></path>
                                    <path d="M6 5l14 1l-1 7h-13"></path>
                                </svg>
                                {totalProducts > 0 && (
                                    <div className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-700 text-xs font-bold text-white">
                                        {totalProducts}
                                    </div>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
