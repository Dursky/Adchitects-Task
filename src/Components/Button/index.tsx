import React from "react";

export interface Props {
	content: string;
	style?: React.CSSProperties;
}
export const Button = ({content, style}: Props) => <button style={style}>{content}</button>;
