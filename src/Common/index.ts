export const assetsPath = `${process.env.PUBLIC_URL}/assets`;

export enum queriesKey {
	getPages = "getPages",
	getPage = "getPage",
	postNewsletter = "postNewsletter",
}

export interface pagesDTO {
	url: string;
	id: string;
}

export interface imageSection {
	img: string;
	text: string;
	type: string;
}

export interface quoteSection {
	author: string;
	text: string;
	type: string;
}

export interface pageDTO {
	id: string;
	sections: [imageSection, quoteSection];
	url: string;
}
