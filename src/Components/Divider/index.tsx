import React from "react";

export interface Props {
	style?: React.CSSProperties;
}

const styles = {
	border: "1px solid #F1F0F0",
	width: "100%",
};

export const Divider = ({style}: Props) => <div style={style ? {...styles, ...style} : styles} />;
