import Image from "next/image";
import React from "react";
import aipan from "../public/assets/projects/aipan.png";
import cricket from "../public/assets/projects/cricket.png";
import quizadda from "../public/assets/projects/quizadda.png";
import topnote from "../public/assets/projects/topnote.png";
import ProjectItem from "./ProjectItem";

const data = [
	{
		id: 1,
		title: "Aipan Store",
		backgroundImg: aipan,
		projectUrl: "",
	},
	{
		id: 2,
		title: "Cricket Classics",
		backgroundImg: cricket,
		projectUrl: "",
	},
	{
		id: 3,
		title: "Quiz Adda",
		backgroundImg: quizadda,
		projectUrl: "",
	},
	{
		id: 4,
		title: "TopNote",
		backgroundImg: topnote,
		projectUrl: "",
	},
];

const Projects = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I've Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{data.map((item) => (
						<div key={item.id}>
							<ProjectItem
								title={item.title}
								backgroundImg={item.backgroundImg}
								projectUrl={item.projectUrl}
							/>
						</div>
					))}
					{/* <ProjectItem title='' backgroundImg={ } projectUrl = '/'/>
                    <ProjectItem title='' backgroundImg={ } projectUrl = '/'/>
                    <ProjectItem title='' backgroundImg={ } projectUrl = '/'/>
                    <ProjectItem title='' backgroundImg={ } projectUrl = '/'/> */}
				</div>
			</div>
		</div>
	);
};

export default Projects;
