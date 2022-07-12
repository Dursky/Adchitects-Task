import React from "react";
import {assetsPath} from "Common";

export interface Props {
	content: string;
	style?: React.CSSProperties;
	onClick?: () => void;
	loading?: boolean;
}

const inlineStyles = {
	width: 192,
	height: 48,
	backgroundColor: "#DAC2F2",
	borderRadius: 48,
	border: "none",
	fontSize: 16,
};

export const Button = ({content, style, onClick, loading}: Props) => {
	if (loading) {
		return <img src={`${assetsPath}/spinner.svg`} alt="loading spinner" style={inlineStyles} />;
	}
	return (
		<button style={{...style, ...inlineStyles}} onClick={onClick}>
			{content}
		</button>
	);
};
