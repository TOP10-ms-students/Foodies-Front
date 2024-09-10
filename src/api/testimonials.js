import { api } from "./ApiService";

export const getTestimonials = () => api.get("testimonials/");
