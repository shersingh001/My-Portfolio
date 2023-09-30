import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
	return (
		<section
			className="testimonial container section"
			id="testimonial"
		>
			<h2 className="section__title">My Clients say</h2>
			<span className="section__subtitle">Testimonial</span>

			<Swiper
				loop={true}
				spaceBetween={40}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
				}}
				modules={[Pagination, Autoplay, Navigation]}
				className="testimonial__container"
			>
				{Data.map(({ id, image, title, description }) => {
					return (
						<SwiperSlide
							key={id}
							className="testimonial__card"
						>
							<img
								src={image}
								alt={title}
								className="testimonial__img"
							/>
							<h3 className="testimonial__name">{title}</h3>
							<p className="testimonial__description">{description}</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
