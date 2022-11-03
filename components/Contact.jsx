import Image from "next/image";
import React from "react";
import ContactImg from "../public/assets/contact.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-6 w-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									src={ContactImg}
									alt="/"
									className="rounded-xl hover:scale-105 ease-in duration-300"
								/>
							</div>
							<div>
								<h2 className="py-2">Rahul Rawat</h2>
								<p>Frontend Developer</p>
								<p className="py-4">
									I am available for freelance or full-time positions. Contact
									me and let's talk.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
										<FaLinkedinIn />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
										<FaGithub />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
										<AiOutlineMail />
									</div>
									<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
