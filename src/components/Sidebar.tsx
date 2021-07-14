import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { AUTH_LOGOUT } from "../gql/mutations/logout";
import getAuthenticatedUser from "../utils/getAuthenticatedUser";
import routes from '../routes';
import React from "react";

const Sidebar = () => {

	const [logout] = useMutation(AUTH_LOGOUT);

	const token = getAuthenticatedUser() ? getAuthenticatedUser() : '';

	return (
		<div className="hidden min-h-screen h-full bg-gray-800 md:flex md:flex-shrink-0">
			<div className="flex flex-col w-64">
				<div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
					<div className="flex items-center flex-shrink-0 px-4">
						<span className="text-white text-3xl font-medium">iDojo</span>
					</div>
					<div className="mt-5 flex-1 flex flex-col">
						<nav className="flex-1 flex flex-col px-3 space-y-1">
							{
								token ? (
									<div
										onClick={(event: React.MouseEvent<HTMLElement>) => logout({ variables: {token: token} })}
										className={`text-gray-200 border-b border-transparent hover:border-gray-300 group mx-3 py-2 text-lg font-medium`}
									>
										Logout
									</div>
								) : (
									<Link
										to={`/login`}
										className={`text-gray-200 border-b border-transparent hover:border-gray-300 group mx-3 py-2 text-lg font-medium`}
									>
										Login
									</Link>
								)
							}
							{routes.filter((route) => route.sidebar).map(({path, name}, key) => (
								<Link
									key={key}
									to={path}
									className={`text-gray-200 border-b border-transparent hover:border-gray-300 group mx-3 py-2 text-lg font-medium`}
								>
									{name}
								</Link>
							))}
						</nav>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar;
