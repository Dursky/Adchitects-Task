import React from "react";
import {Header} from "Components/Header";
import {ImageSection} from "Components/ImageSection";
import {QuoteSection} from "Components/QuoteSection";
import {Newsletter} from "Components/Newsletter";
import {usePage} from "queries";
import {imageSection, quoteSection} from "Common";
import {Loading} from "Components/Loading";

export interface Props {
	id: string;
}

export const HomePage = ({id}: Props) => {
	const {data, isLoading} = usePage(id);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<>
			<Header />
			{data?.sections.map((section, key) =>
				"img" in section ? (
					<ImageSection section={section as imageSection} key={key} />
				) : (
					<QuoteSection section={section as quoteSection} key={key} />
				),
			)}

			<Newsletter />
		</>
	);
};
