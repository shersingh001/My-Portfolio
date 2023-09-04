import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<footer
			className="footer"
			id="footer"
		>
			<div className="footer__container container">
				<h1 className="footer__title">SherSingh</h1>

				<ul className="footer__list">
					<li>
						<a
							href="#about"
							className="footer__link"
						>
							About
						</a>
					</li>

					<li>
						<a
							href="#services"
							className="footer__link"
						>
							Services
						</a>
					</li>

					<li>
						<a
							href="#testimonial"
							className="footer__link"
						>
							Testimonials
						</a>
					</li>
				</ul>

				<div className="footer__social">
					<a
						href="https://www.facebook.com/"
						rel="noreferrer"
						className="footer__social-link"
						target="_blank"
						title="Instagram"
					>
						<i class="bx bxl-facebook"></i>
					</a>

					<a
						href="https://www.instagram.com/"
						rel="noreferrer"
						className="footer__social-link"
						target="_blank"
						title="Linkedin"
					>
						<i class="bx bxl-instagram"></i>
					</a>

					<a
						href="https://twitter.com/"
						rel="noreferrer"
						className="footer__social-link"
						target="_blank"
						title="Github"
					>
						<i class="bx bxl-twitter"></i>
					</a>
				</div>

				<span className="footer__copy">
					&#169; SherSingh. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
