import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "views/HomePage";
import {usePages} from "queries";

export const RoutesSwitch = () => {
	const {data, isLoading} = usePages();

	//TODO: Add loading screen
	if (isLoading) {
		return <h1>...Loading</h1>;
	}

	return (
		<>
			{data?.map((item) => (
				<Routes>
					<Route path={item.url} element={<HomePage id={item.id} />} />
				</Routes>
			))}
		</>
	);
};
