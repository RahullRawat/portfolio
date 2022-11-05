import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Logo from "../public/assets/logo.png";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener("scroll", handleShadow);
	}, []);

	return (
		<div
			className={
				shadow
					? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]"
					: "fixed w-full h-20 z-[100] bg-[#ecf0f3]"
			}
		>
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Link href="/">
					<Image src={Logo} alt="/" width={100} />
				</Link>
				<div>
					<ul className="hidden md:flex items-center">
						<Link href="/">
							<li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
								About
							</li>
						</Link>
						<Link href="/#skills">
							<li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
								Skills
							</li>
						</Link>
						<Link href="/#projects">
							<li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5]">
								Projects
							</li>
						</Link>
						<Link
							href="https://drive.google.com/file/d/1FE60fpGyDb2qQ-pj1mgu0ooLD9mV7FP6/view?usp=sharing"
							target="_blank"
						>
							<button className="py-2 px-4 ml-4">Download CV</button>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* mobile menu */}

			<div
				className={
					nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
				}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image src={Logo} alt="/" width={90} onClick={handleNav} />
							</Link>
							<div
								onClick={handleNav}
								className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let’s build something legendary together.
							</p>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase" onClick={handleNav}>
							<Link href="/">
								<li className="py-4 text-sm">Home</li>
							</Link>
							<Link href="/#about">
								<li className="py-4 text-sm">About</li>
							</Link>
							<Link href="/#skills">
								<li className="py-4 text-sm">Skills</li>
							</Link>
							<Link href="/#projects">
								<li className="py-4 text-sm">Projects</li>
							</Link>
							<Link
								href="https://drive.google.com/file/d/1FE60fpGyDb2qQ-pj1mgu0ooLD9mV7FP6/view?usp=sharing"
								target="_blank"
							>
								<button className="py-2 px-4">Download CV</button>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Let’s connect
							</p>
							<div className="flex items-center my-4 w-full sm:w-[80%]">
								<Link
									href="https://www.linkedin.com/in/rahul-rawat-1492b71bb/"
									target="_blank"
								>
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
										<FaLinkedinIn />
									</div>
								</Link>
								<Link href="https://github.com/rahullrawat" target="_blank">
									<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-4 hover:scale-105 ease-in duration-300 ">
										<FaGithub />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
