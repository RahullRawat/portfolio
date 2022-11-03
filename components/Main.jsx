import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
	return (
		<div id="main" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						Let’s build something together.
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I’m <span className="text-[#5651e5]">Rahul</span>
					</h1>
					<h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I’m focused on building responsive front-end web applications
						integrating back-end technologies.
					</p>
					<div className="flex items-center justify-between max-w-[160px] m-auto py-4 ">
						<Link
							href="https://www.linkedin.com/in/rahul-rawat-1492b71bb/"
							target="_blank"
						>
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
								<FaLinkedinIn />
							</div>
						</Link>
						<Link href="https://github.com/rahullrawat" target="_blank">
							<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
								<FaGithub />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
