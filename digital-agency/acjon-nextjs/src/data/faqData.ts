export interface FaqItem {
    id: string;
    question: string;
    answer: string;
    show: boolean;
}
export interface FaqGroup {
    common: FaqItem[];
    faq: FaqItem[];
}

export const faqData: FaqGroup = {
    common: [
        {
            id: 'collapseOne',
            question: 'What kind of businesses do you work with?',
            answer:
                'We work with startups, ecommerce brands, SaaS companies, and modern businesses looking to scale digitally.',
            show: true,
        },
        {
            id: 'collapseTwo',
            question: 'Do you only build MVPs',
            answer:
                'No. We help businesses across the entire 0-100 journey including strategy, launch, growth, and optimization.',
            show: false,
        },
        {
            id: 'collapseThree',
            question: 'Can Cognitive Monks handle both product and growth?',
            answer:
                'Yes. Our approach combines product strategy, engineering, AI systems, and growth execution under one team.',
            show: false,
        },
        {
            id: 'collapseFour',
            question: 'How fast can you launch an MVP?',
            answer:
                'Depending on complexity, most MVPs can be designed and launched within a few weeks.',
            show: false,
        },
        {
            id: 'collapseFive',
            question: 'Do you provide AI integration services?',
            answer:
                'Yes. We build AI powered workflows, automation systems, internal tools,',
            show: false,
        },
    ],
    faq: [
        {
            id: "one",
            question: "What services does your agency offer?",
            answer:
                "Our team blends creativity with a deep understanding of start-up dynamics. We prioritize innovation, data driven decisions, and user-focused designs while offering a collaborative.",
            show: true,
        },
        {
            id: "two",
            question: "Do you provide custom website solutions?",
            answer:
                "Our team blends creativity with a deep understanding of start-up dynamics. We prioritize innovation, data driven decisions, and user-focused designs while offering a collaborative.",
            show: false,
        },
        {
            id: "three",
            question: "Can you redesign my existing website?",
            answer:
                "Our team blends creativity with a deep understanding of start-up dynamics. We prioritize innovation, data driven decisions, and user-focused designs while offering a collaborative.",
            show: false,
        },
        {
            id: "four",
            question: "Do you offer digital marketing solutions?",
            answer:
                "Our team blends creativity with a deep understanding of start-up dynamics. We prioritize innovation, data driven decisions, and user-focused designs while offering a collaborative.",
            show: false,
        },
        {
            id: "five",
            question: "Is there a consultation fee?",
            answer:
                "Our team blends creativity with a deep understanding of start-up dynamics. We prioritize innovation, data driven decisions, and user-focused designs while offering a collaborative.",
            show: false,
        },
    ]
};