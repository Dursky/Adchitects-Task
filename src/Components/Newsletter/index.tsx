import React, {useState} from "react";
import {Button} from "Components/Button";
import {useNewsletter} from "queries";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email("Not a proper email").required("E-mail is required"),
});

export const Newsletter = () => {
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const {refetch, isSuccess, isError, isLoading} = useNewsletter(email);

	const handleSubmit = () => {
		schema
			.validate({
				email,
			})
			.then((valid) => {
				if (valid) refetch();
				setError("");
			})
			.catch((err) => setError(err.message));
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				paddingLeft: 388,
				paddingRight: 388,
				paddingTop: 128,
				paddingBottom: 128,
			}}>
			<p
				style={{
					color: "#231E1E",
					fontSize: 40,
					textAlign: "center",
					lineHeight: "56px",
				}}>
				Sign up for Newsletter
			</p>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 20,
					justifyContent: "center",
				}}>
				<input
					placeholder="Type your email"
					style={{
						backgroundColor: "#F1F0F0",
						borderRadius: 24,
						padding: 14,
						border: "none",
						color: "black",
						width: "100%",
						marginRight: 16,
					}}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<div style={{width: 192}}>
					<Button content="Submit" onClick={handleSubmit} loading={isLoading} />
				</div>
			</div>
			{isSuccess && !error && (
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
			)}
			{(isError || error) && (
				<p
					style={{
						color: "red",
						textAlign: "center",
						marginTop: 48,
						fontSize: 14,
						lineHeight: "22px",
					}}>
					{error ? error : "Not correct e-mail"}
				</p>
			)}
		</div>
	);
};
