export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  project: string;
}
export const testimonials: Testimonial[] = [
  {
    name: "Mitralal Sapkota (Mr. LAL)",
    role: "Lead Trekking Guide",
    company: "Mount Glacier Alpine Adventure Tour And Treks",
    image: "/images/testimonials/mitralal-sapkota.jpg",
    rating: 5,
    text: "I recently had my website built by Sajilo Digital, and I’m extremely satisfied with the results. The team was professional, quick, and very easy to work with. They offered me the best deal and delivered exactly what I needed—clean design, smooth functionality, and great support throughout the process. Highly recommended for anyone looking for quality digital services!",
    project: "Tour And Treks",
  },
  {
    name: "Parash Lamsal",
    role: "Senior Sales",
    company: "Swivt Education",
    image: "/images/testimonials/parash-lamsal.jpg",
    rating: 5,
    text: "Excellent and prompt IT support. The team was knowledgeable and fixed our network issue quickly. Highly recommended for reliable service",
    project: "Educational",
  },
  {
    name: "Daba Sherpa",
    role: "Lead Trekking",
    company: "Mount Glacier Alpine",
    image: "/images/testimonials/daba-sherpa.jpg",
    rating: 5,
    text: "The travel booking platform developed by the team has exceeded all expectations. The itinerary planning, we are extremely satisfied with the outcome and highly recommend their services to anyone seeking reliable and innovative travel technology solutions. Couldn't be happier!",
    project: "Travel Booking Platform",
  },
];
