import React from "react";
import {Header} from "Components/Header";
import {ImageSection} from "Components/ImageSection";
import {QuoteSection} from "Components/QuoteSection";
import {Newsletter} from "Components/Newsletter";
import {usePage} from "queries";
import {imageSection, quoteSection} from "Common";

export interface Props {
	id: string;
}

export const HomePage = ({id}: Props) => {
	const {data, isLoading} = usePage(id);
	console.log(data, isLoading);

	//TODO: Add loading screen
	if (isLoading) {
		return <h1>...Loading</h1>;
	}

	return (
		<>
			<Header />
			{data?.sections.map((section) =>
				"img" in section ? (
					<ImageSection section={section as imageSection} />
				) : (
					<QuoteSection section={section as quoteSection} />
				),
			)}

			<Newsletter />
		</>
	);
};
