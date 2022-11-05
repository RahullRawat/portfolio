import Image from "next/image";
import Link from "next/link";
import React from "react";
import aipan from "../public/assets/projects/aipan.png";
import cricket from "../public/assets/projects/cricket.png";
import quizadda from "../public/assets/projects/quizadda.png";
import topnote from "../public/assets/projects/topnote.png";
import ProjectItem from "./ProjectItem";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const data = [
	{
		id: 1,
		title: "Aipan Store",
		desc: "E-commerce",
		backgroundImg: aipan,
		liveUrl: "https://aipan.netlify.app/",
		githubLink: "https://github.com/RahullRawat/aipan-store-react",
	},
	{
		id: 2,
		title: "Cricket Classics",
		desc: "Video Library",
		backgroundImg: cricket,
		liveUrl: "https://aipan.netlify.app/",
		githubLink: "https://github.com/RahullRawat/cricket-classics",
	},
	{
		id: 3,
		title: "Quiz Adda",
		desc: "Quiz App",
		backgroundImg: quizadda,
		liveUrl: "https://quiz-adda.netlify.app/",
		githubLink: "https://github.com/RahullRawat/quiz-adda",
	},
	{
		id: 4,
		title: "TopNote",
		desc: "Notes App",
		backgroundImg: topnote,
		liveUrl: "https://topnote.netlify.app/",
		githubLink: "https://github.com/RahullRawat/topNote",
	},
];

const Projects = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4 text-gray-600">What I’ve Built</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{data.map((item) => (
						<div key={item.id}>
							<ProjectItem
								title={item.title}
								desc={item.desc}
								backgroundImg={item.backgroundImg}
								liveUrl={item.liveUrl}
								githubLink={item.githubLink}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
