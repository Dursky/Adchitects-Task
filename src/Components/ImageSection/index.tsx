import React from "react";

export const ImageSection = () => (
	<div
		style={{
			display: "flex",
			paddingLeft: 172,
			paddingRight: 172,
			alignItems: "center",
			marginTop: 128,
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
				In oculis quidem rerum facilis est et aperta.
			</p>
		</div>
		<div
			style={{
				background:
					'url("https://marvel-live.freetls.fastly.net/canvas/2021/12/6200eedd9afa4115a6b4fe0b5e611b5f?quality=95&fake=.png")',
				width: "100%",
				height: 384,
				backgroundPosition: "center center",
				backgroundSize: "cover",
			}}
		/>
	</div>
);
