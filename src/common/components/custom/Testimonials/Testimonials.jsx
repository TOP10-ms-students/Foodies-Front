import React, { useEffect, useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { QuotesIcon } from "~/common/components/icons";

import { getTestimonials } from "~/api/testimonials";

import {
  TestimonialsSection,
  Subtitle,
  Title,
  IconWrapper,
  StyledBlockquote,
  TestimonialText,
  Author,
  SlideWrapper,
} from "./Testimonials.styled.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await getTestimonials();

        setTestimonials(data.testimonials);
      } catch (error) {
        setError("Failed to load testimonials");
      }
    };

    fetchTestimonials();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <TestimonialsSection>
      <Subtitle>What our customer say</Subtitle>
      <Title>TESTIMONIALS</Title>
      <IconWrapper>
        <QuotesIcon />
      </IconWrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <SlideWrapper>
              <StyledBlockquote>
                <TestimonialText>{testimonial.testimonial}</TestimonialText>
                <Author>{testimonial.owner?.name}</Author>
              </StyledBlockquote>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsSection>
  );
};
