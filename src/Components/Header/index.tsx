import React from "react";
import {Button} from "Components/Button";
import {Link} from "Components/Link";
import {assetsPath} from "Common";
import {Divider} from "Components/Divider";
import {usePages} from "queries";
import {LoadingSpinner} from "Components/Loading";

export const Header = () => {
	const {data, isLoading} = usePages();
	return (
		<>
			<div style={{display: "flex", justifyContent: "space-between", marginTop: 24}}>
				<div style={{height: 48, display: "flex", alignItems: "center"}}>
					<img
						alt="logo"
						style={{paddingLeft: 64, height: 33, width: 89}}
						src={`${assetsPath}/logo.svg`}
					/>
					<div style={{display: "flex", justifyContent: "space-between", gap: 48, marginLeft: 97}}>
						{isLoading && <LoadingSpinner />}
						{!isLoading && data?.map((item, key: number) => <Link content={item.url} key={key} />)}
					</div>
				</div>
				<Button
					content="Contact us"
					style={{
						marginRight: 64,
						lineHeight: "24px",
					}}
				/>
			</div>
			<Divider style={{marginTop: 24}} />
		</>
	);
};

export default Header;
