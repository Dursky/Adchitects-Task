import React from "react";
import ReactLoading from "react-loading";
import {assetsPath} from "Common";

export const Loading = () => (
	<div
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		}}>
		<ReactLoading type="bars" color="#000000" height={100} width={100} />
	</div>
);

export const LoadingSpinner = () => (
	<img src={`${assetsPath}/spinner.svg`} alt="loading spinner" style={{height: "100%"}} />
);

export default Loading;
