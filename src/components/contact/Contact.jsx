import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
	const form = useRef();

	const sendEmail = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				"service_x0uyet8",
				"template_9n2g0pm",
				form.current,
				"qnc6J-g7xf5u6fneU"
			)
			.then((result) => {
				toast.success("Email sent Successfully!", {
					position: "top-center",
					autoClose: 2000,
					pauseOnHover: false,
				});
				console.log(result.text);
			})
			.catch((err) => {
				toast.error("Email failed to sent!", {
					position: "top-center",
					autoClose: 2000,
					pauseOnHover: false,
				});
				console.log(err.text);
			});
		event.target.reset();
	};
	return (
		<section
			className="contact section"
			id="contact"
		>
			<h2 className="section__title">Get in touch</h2>
			<span className="section__subtitle">Contact Me</span>

			<div className="contact__container container grid">
				<div className="contact__content">
					<h3 className="contact__title">Talk to me</h3>

					<div className="contact__info">
						<div className="contact__card">
							<i className="bx bx-mail-send contact__card-icon"></i>

							<h3 className="contact__card-title">Email</h3>
							<span className="contact__card-data">singhsher937@gmail.com</span>

							<a
								href="mailto:singhsher937@gmail.com"
								className="contact__button"
							>
								Write me{" "}
								<i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>

						<div className="contact__card">
							<i className="bx bxl-whatsapp contact__card-icon"></i>

							<h3 className="contact__card-title">WhatsApp</h3>
							<span className="contact__card-data">+91-7733-034201</span>

							<a
								href="https://api.whatsapp.com/send?phone=7733034201&text=Hello, more information!"
								className="contact__button"
							>
								Write me{" "}
								<i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>

						<div className="contact__card">
							<i className="bx bxl-instagram contact__card-icon"></i>

							<h3 className="contact__card-title">Instagram</h3>
							<span className="contact__card-data">Sher_rj19</span>

							<a
								href="https://instagram/sher_rj19"
								className="contact__button"
							>
								Write me{" "}
								<i className="bx bx-right-arrow-alt contact__button-icon"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="contact__content">
					<h3 className="contact__title">Write me your project</h3>

					<form
						ref={form}
						onSubmit={sendEmail}
						className="contact__form"
					>
						<div className="contact__form-div">
							<label className="contact__form-tag">Name</label>
							<input
								type="text"
								name="name"
								className="contact__form-input"
								placeholder="Type here name..."
							/>
						</div>

						<div className="contact__form-div">
							<label className="contact__form-tag">Email</label>
							<input
								type="email"
								name="email"
								className="contact__form-input"
								placeholder="Type here email..."
							/>
						</div>

						<div className="contact__form-div contact__form-area">
							<label className="contact__form-tag">Project</label>
							<textarea
								name="project"
								className="contact__form-input"
								cols="30"
								rows="10"
								placeholder="Write your project"
							></textarea>
						</div>
						<button className="button button--flex">
							Send Message
							<svg
								width="25px"
								height="25px"
								viewBox="0 0 1024 1024"
								class="icon"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M633.319 722.634L429 860.298V672.034z"
									fill="#996C11"
								/>
								<path
									d="M446.662 681.407l388.442 104.557L960 163.702l-159.706 99.826L64 723.667z"
									fill="#FCB814"
								/>
								<path
									d="M446.662 681.407L960 163.702l-159.706 99.826L64 723.667z"
									fill="#020202"
								/>
							</svg>
						</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default Contact;
