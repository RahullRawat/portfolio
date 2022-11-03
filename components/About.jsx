import Image from "next/image";
import React from "react";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="text-xl tracking-widest text-[#5651e5] uppercase">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I’m a FrontEnd Developer with experience in building
						high-performing, responsive, beautiful web applications to deliver a
						unique, intuitive user experience. I enjoy being challenged and
						working on projects that require me to step outside of my comfort
						zone.
					</p>
					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my latest projects.
					</p>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} alt="/" className="rounded-xl" />
				</div>
			</div>
		</div>
	);
};

export default About;
