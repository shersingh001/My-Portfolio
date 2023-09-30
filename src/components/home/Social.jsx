import React from "react";

const Social = () => {
	return (
		<div className="home__social">
			<a
				href="https://www.instagram.com/"
				rel="noreferrer"
				className="home__social-icon"
				target="_blank"
				title="Instagram"
			>
				<i class="uil uil-instagram"></i>
			</a>

			<a
				href="www.linkedin.com/in/sher-singh-rajpurohit-189746238"
				rel="noreferrer"
				className="home__social-icon"
				target="_blank"
				title="Linkedin"
			>
				<i class="uil uil-linkedin"></i>
			</a>

			<a
				href="https://github.com/login"
				rel="noreferrer"
				className="home__social-icon"
				target="_blank"
				title="Github"
			>
				<i class="uil uil-github"></i>
			</a>
		</div>
	);
};

export default Social;
