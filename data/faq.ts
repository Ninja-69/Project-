// Booking Page FAQ / Objections
export interface FAQItem {
    question: string;
    answer: string;
    priority: number; // 1-3, where 1 is most important
}

export const bookingFAQ: FAQItem[] = [
    {
        question: "Is this just a sales pitch?",
        answer: "No. This is a strategy session first. You'll get a concrete action plan whether you hire us, build in-house, or do nothing. If there's a fit and you want to explore working together, we'll cover that in the last 2 minutes. Zero pressure.",
        priority: 1
    },
    {
        question: "What if I'm not technical?",
        answer: "Perfect—most of our clients aren't. We handle the technical setup, integrations, and AI training. You focus on reviewing the output and closing deals.",
        priority: 1
    },
    {
        question: "Will this work in my specific niche/industry?",
        answer: "We've built AI outbound systems for SaaS, agencies, consultants, and B2B service companies. On the call, we'll diagnose if your niche has enough signal for AI to work (some verticals don't—and we'll tell you honestly).",
        priority: 2
    },
    {
        question: "How long is the call?",
        answer: "20 minutes. If we're moving fast and you're getting value, we might go 25. We respect your time.",
        priority: 1
    },
    {
        question: "What happens after the call?",
        answer: "You'll get an email recap with your custom roadmap and recommended next steps. If you want to move forward with done-for-you, we'll send a proposal. If not, you still keep the roadmap—no strings.",
        priority: 2
    },
    {
        question: "Do I need to prepare anything?",
        answer: "Nope. Just bring your main bottleneck (e.g., \"We can't keep up with follow-ups\" or \"Cold email reply rates are tanking\"). We'll take it from there.",
        priority: 3
    }
];
