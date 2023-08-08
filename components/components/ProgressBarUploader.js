import React, { useState, useRef } from "react";
import { useProvider, useSigner } from "wagmi";
import { WebBundlr } from "@bundlr-network/client";
import fileReaderStream from "filereader-stream";
import Editeur from '@/components/pages/post/FormPost' 
const ProgressBarUploader = () => {
	const [message, setMessage] = useState("");
	const [uploadedURL, setUploadedURL] = useState("");
	const [progress, setProgress] = useState(0);
	const [fileToUpload, setFileToUpload] = useState();
	const [fileType, setFileType] = useState();
	const [fileSize, setFileSize] = useState(0);
	const totalChunks = useRef(0);

	const rainbowKitProvider = useProvider();
	const { data: rainbowKitSigner, isError, isLoading } = useSigner();

	const handleFile = async (e) => {
		const newFiles = e.target.files;
		if (newFiles.length === 0) return;
		setFileToUpload(newFiles[0]);
		setFileType(newFiles[0]["type"]);
	};

	const upload = async () => {
		if (!rainbowKitSigner) {
			setMessage("Please connect your wallet first.");
			return;
		}
		if (!fileToUpload) {
			setMessage("Please select a file first.");
			return;
		}
		// Reset the progress bar
		setProgress(0);
		// use method injection to add the missing function
		rainbowKitProvider.getSigner = () => rainbowKitSigner;
		// create a WebBundlr object
		const bundlr = new WebBundlr("https://devnet.bundlr.network", "matic", rainbowKitProvider, {
			providerUrl: "https://matic-mumbai.chainstacklabs.com",
		});

		await bundlr.ready();
	console.log(bundlr)
		const uploader = bundlr.uploader.chunkedUploader;
		// Change the batch size to 1 to make testing easier (default is 5)
		uploader.setBatchSize(1);
		// Change the chunk size to something small to make testing easier (default is 25MB)
		const chunkSize = 2000000;
		uploader.setChunkSize(chunkSize);
		// get a create a streamed reader
		const dataStream = fileReaderStream(fileToUpload);
		// save a reference to the file size
		setFileSize(dataStream.size);
		// divide the total file size by the size of each chunk we'll upload
		if (dataStream.size < chunkSize) totalChunks.current = 1;
		else {
			totalChunks.current = Math.floor(dataStream.size / chunkSize);
		}

		/** Register Event Callbacks */
		// event callback: called for every chunk uploaded
		uploader.on("chunkUpload", (chunkInfo) => {
			console.log(chunkInfo);
			console.log(
				`Uploaded Chunk number ${chunkInfo.id}, offset of ${chunkInfo.offset}, size ${chunkInfo.size} Bytes, with a total of ${chunkInfo.totalUploaded} bytes uploaded.`,
			);

			const chunkNumber = chunkInfo.id + 1;
			// update the progress bar based on how much has been uploaded
			if (chunkNumber >= totalChunks) setProgress(100);
			else setProgress((chunkNumber / totalChunks.current) * 100);
		});

		// event callback: called if an error happens
		uploader.on("chunkError", (e) => {
			console.error(`Error uploading chunk number ${e.id} - ${e.res.statusText}`);
		});

		// event callback: called when file is fully uploaded
		uploader.on("done", (finishRes) => {
			console.log(`Upload completed with ID ${finishRes.id}`);
			// set the progress bar to 100
			setProgress(100);
		});

		// upload the file
		await uploader
			.uploadData(dataStream, {
				tags: [{ name: "Content-Type", value: fileType }],
			})
			.then((res) => {
				setMessage(`Upload Success:`);
				setUploadedURL("https://arweave.net/" + res.data.id);
			})
			.catch((e) => {
				setMessage("Upload error ", e.message);
				console.log("error on upload, ", e);
			});
	};

	return (
		<div className="flex flex-col py-5 ml-10">
			
			<Editeur handleFile={handleFile} handlIsValid={upload} fileName={fileToUpload ? fileToUpload.name :"no image "} />
		</div>
	);
};

export default ProgressBarUploader;
