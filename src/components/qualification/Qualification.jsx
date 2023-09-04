import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
	const [toggle, setToggle] = useState(1);

	const toggleHandler = (index) => {
		setToggle(index);
	};
	return (
		<section className="qualification section">
			<h2 className="section__title">Qualification</h2>
			<span className="section__subtitle">My personal journey</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div
						className={
							toggle === 1
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleHandler(1)}
					>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Education
					</div>

					<div
						className={
							toggle === 2
								? "qualification__button qualification__active button--flex"
								: "qualification__button button--flex"
						}
						onClick={() => toggleHandler(2)}
					>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experience
					</div>
				</div>

				<div className="qualification__sections">
					<div
						className={
							toggle === 1
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Design</h3>
								<span className="qualification__subtitle">
									JECRC University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Art Director</h3>
								<span className="qualification__subtitle">
									JECRC University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Development</h3>
								<span className="qualification__subtitle">
									JECRC University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">UX Expert</h3>
								<span className="qualification__subtitle">
									JECRC University
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2017 - 2018
								</div>
							</div>
						</div>
					</div>

					<div
						className={
							toggle === 2
								? "qualification__content qualification__content-active"
								: "qualification__content"
						}
					>
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Product Designer</h3>
								<span className="qualification__subtitle">
									Microsoft - Spain
								</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">UX Designer</h3>
								<span className="qualification__subtitle">Google</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>
						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Web Designer</h3>
								<span className="qualification__subtitle">Apple Inc</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2021 - present
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualification;
