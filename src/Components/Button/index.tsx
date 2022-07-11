import React from "react";

export interface Props {
	content: string;
	style?: React.CSSProperties;
}

const inlineStyles = {
	width: 192,
	height: 48,
	backgroundColor: "#DAC2F2",
	borderRadius: 48,
	border: "none",
	fontSize: 16,
};

export const Button = ({content, style}: Props) => (
	<button style={{...style, ...inlineStyles}}>{content}</button>
);
