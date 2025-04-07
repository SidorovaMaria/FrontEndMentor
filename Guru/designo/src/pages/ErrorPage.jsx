import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div className="h-screen flex flex-col items-center justify-center text-center">
			<h1 className="text-4xl font-bold text-red-600">Oops!</h1>
			<p className="text-lg">Something went wrong.</p>
			<p className="text-gray-500">{error.statusText || error.message}</p>
			<a href="/" className="mt-4 text-blue-500 underline">
				Go Back Home
			</a>
		</div>
	);
};

export default ErrorPage;
