import React from "react";
import {Button} from "Components/Button";
import {Link} from "Components/Link";
import {assetsPath} from "Common";
import {Divider} from "Components/Divider";

export const Header = () => (
	<>
		<div style={{display: "flex", justifyContent: "space-between", marginTop: 24}}>
			<div style={{height: 48, display: "flex", alignItems: "center"}}>
				<img
					alt="logo"
					style={{paddingLeft: 64, height: 33, width: 89}}
					src={`${assetsPath}/logo.svg`}
				/>
				<div style={{display: "flex", justifyContent: "space-between", gap: 48, marginLeft: 97}}>
					<Link content="Products" />
					<Link content="Solutions" />
					<Link content="Resources" />
					<Link content="About" />
				</div>
			</div>
			<Button
				content="Contact us"
				style={{
					marginRight: 64,
				}}
			/>
		</div>
		<Divider style={{marginTop: 24}} />
	</>
);

export default Header;
