import React from "react";
import {imageSection} from "Common";
export interface Props {
	section: imageSection;
}

export const ImageSection = ({section: {img, text}}: Props) => (
	<div
		style={{
			display: "flex",
			paddingLeft: 172,
			paddingRight: 172,
			alignItems: "center",
			marginTop: 128,
			marginBottom: 152,
		}}>
		<div style={{marginRight: 24, width: "100%"}}>
			<p
				style={{
					color: "#231E1E",
					fontSize: 48,
					textAlign: "left",
					fontWeight: 500,
					lineHeight: "64px",
					paddingRight: 50,
				}}>
				{text}
			</p>
		</div>
		<div
			style={{
				background: `url("${img}")`,
				width: "100%",
				height: 384,
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
		/>
	</div>
);
