import React from "react";
import {assetsPath} from "Common";
import {quoteSection} from "Common";

export interface Props {
	section: quoteSection;
}

export const QuoteSection = ({section: {author, text}}: Props) => (
	<div
		style={{
			backgroundColor: "#231E1E",
			paddingTop: 128,
			paddingBottom: 128,
			paddingLeft: 172,
			paddingRight: 280,
		}}>
		<div>
			<img alt="quotation mark" src={`${assetsPath}/quotation-mark.svg`} />
			<p style={{color: "#F1F0F0", fontSize: 24, lineHeight: "40px"}}>{text}</p>
			<p style={{lineHeight: "29px", color: "#989898", marginTop: 96, textAlign: "left"}}>
				{author}
			</p>
		</div>
	</div>
);

export default QuoteSection;
