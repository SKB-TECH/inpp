import React from "react";
import ProgressBarUploader from "../components/ProgressBarUploader";
import FundNode from "../components/FundNode";
import NodeBalance from "../components/NodeBalance";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const LargeFileUploaderPage = () => {
	return (
		<div name="about" className="w-full h-screen bg-background text-text pt-20">
			<div className="flex flex-col items-start w-full h-full pt-10">
				<div className="pl-5 pr-5 w-full ">
					<FundNode />
					<NodeBalance />
					<ProgressBarUploader />
				</div>
			</div>
		</div>
	);
};
export default LargeFileUploaderPage;
