import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "views/HomePage";
import {usePages} from "queries";
import {Loading} from "Components/Loading";

export const RoutesSwitch = () => {
	const {data, isLoading} = usePages();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			{data?.map((item, key) => (
				<Routes key={key}>
					<Route path={item.url} element={<HomePage id={item.id} />} />
				</Routes>
			))}
		</>
	);
};
