// Booking Page Testimonials
export interface Testimonial {
    quote: string;
    author: string;
    role: string;
    revenue: string;
    result?: string;
}

export const bookingTestimonials: Testimonial[] = [
    {
        quote: "We went from 8 qualified calls/month to 23 in 6 weeks. The AI system runs while we sleep and feels like we hired 3 SDRs without the payroll.",
        author: "Marcus T.",
        role: "B2B SaaS Agency",
        revenue: "$18k/month",
        result: "8 → 23 calls/month"
    },
    {
        quote: "I was skeptical about AI being 'too robotic,' but their approach kept our voice and actually improved reply rates. Saved me 12+ hours/week on manual outreach.",
        author: "Sarah K.",
        role: "Marketing Agency Owner",
        revenue: "$32k/month",
        result: "12+ hours saved/week"
    }
];

export const trustStats = {
    clientCount: "50+ B2B agencies",
    description: "Trusted to automate outbound without losing the human touch"
};
