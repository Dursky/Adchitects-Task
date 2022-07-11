import React from "react";

export interface Props {
	content: string;
	link?: string;
}
export const Link = ({content, link}: Props) => (
	<a href={link} style={{color: "#231E1E", fontSize: 16, fontWeight: 500, lineHeight: "24px"}}>
		{content}
	</a>
);

export default Link;
