import React from "react";

export interface Props {
	style?: React.CSSProperties;
}

const inlineStyles = {
	border: "1px solid #F1F0F0",
	width: "100%",
};

export const Divider = ({style}: Props) => <div style={{...style, ...inlineStyles}} />;
