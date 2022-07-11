import React from "react";
import {Button} from "Components/Button";

export const Newsletter = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			flexDirection: "column",
			paddingLeft: 388,
			paddingRight: 388,
		}}>
		<p
			style={{
				color: "#231E1E",
				fontSize: 40,
				textAlign: "center",
				lineHeight: "56px",
				paddingTop: 128,
			}}>
			Sign up for Newsletter
		</p>
		<div style={{display: "flex", flexDirection: "row", marginTop: 20}}>
			<input
				placeholder="Type your email"
				style={{
					backgroundColor: "#F1F0F0",
					borderRadius: 24,
					padding: 14,
					border: "none",
					color: "black",
					width: "100%",
				}}
			/>
			<Button content="Submit" />
		</div>
		<p
			style={{
				color: "#5EDC4B",
				textAlign: "center",
				marginTop: 48,
				fontSize: 14,
				lineHeight: "22px",
			}}>
			Thank you for signing up for the Breally newsletter.
		</p>
	</div>
);
