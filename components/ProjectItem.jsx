import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, desc, backgroundImg, liveUrl, githubLink }) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
			<Image
				src={backgroundImg}
				alt="/"
				className="rounded-xl group-hover:opacity-10"
			/>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full">
				<h3 className="text-2xl text-white tracking-wider text-center">
					{title} <small>({desc})</small>
				</h3>
				<p className="pb-4 pt-2 text-white text-center">React JS</p>
				<div className="flex items-center justify-center">
					<Link href={githubLink} target="_blank">
						<p className="text-center p-3 m-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
							Github
						</p>
					</Link>
					<Link href={liveUrl} target="_blank">
						<p className="text-center p-3 m-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
							Demo
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProjectItem;
