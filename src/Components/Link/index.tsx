import React from "react";
import {useNavigate} from "react-router-dom";

export interface Props {
	content: string;
}
export const Link = ({content}: Props) => {
	const navigate = useNavigate();

	const handleSuccess = () => {
		navigate(content, {replace: true});
		window.location.reload();
	};

	return (
		<p
			style={{color: "#231E1E", fontSize: 16, fontWeight: 500, lineHeight: "24px"}}
			onClick={handleSuccess}>
			{content}
		</p>
	);
};

export default Link;
