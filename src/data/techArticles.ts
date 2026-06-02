const techArticles: {
	desc: string;
	title: string;
	href: string;
	date: string;
	source: string;
	author: string;
}[] = [	
    {
        title: "The Internet Has Become Too American to Trust",
        desc: "Trump and Big Tech have fused into a new kind of threat",
        href: "https://thewalrus.ca/the-internet-has-become-too-american-to-trust",
        date: "May, 2026",
        author: "Cory Doctrow",
        source: "thewalrus.ca",
    },
    {
        title: "🌻 notes on AI, labor, and China",
        desc: "an expansion pack for my NYT story on the \"permanent underclass\"",
        href: "https://jasmi.news/p/party-in-the-permanent-underclass",
        date: "May, 2026",
        author: "Jasmine Sun",
        source: "jasmi.news",
    },
    {
        title: "The Shared Feeling of Being Harvested by the Future",
        desc: "In the United States, Silicon Valley tech elites identify as high agency, while the rest of us are bots condemned to the permanent underclass.",
        href: "https://www.nytimes.com/2026/05/12/opinion/us-china-ai-future.html",
        date: "May, 2026",
        author: "Yi-Ling Liu",
        source: "New York Times",
    },
    {
        title: "The era of AI malaise",
        desc: "AI is everywhere, all at once. How does that make you feel?",
        href: "https://www.technologyreview.com/2026/04/21/1135921/ai-malaise-artificial-intelligence-public-sentiment/",
        date: "April, 2026",
        author: "Mat Honan",
        source: "MIT Technology Review",
    },
    {
        title: "Dreams of Stability",
        desc: "Tech's New Corporate & the status in safety nets.",
        href: "https://www.workingtheorys.com/p/stability",
        date: "February, 2026",
        author: "Anu Atluru",
        source: "workingtheorys.com",
    },
    {
        title: "The AI-Powered Web Is Eating Itself",
        desc: "Without a framework of “Artificial Integrity,” AI search platforms risk collapsing the information commons that made the web possible.",
        href: "https://www.noemamag.com/the-ai-powered-web-is-eating-itself",
        date: "January, 2026",
        author: "Hamilton Mann",
        source: "noemamag.com",
    },
    {
        title: "12 Principles of Animation",
        desc: "Great animation is purposeful, subtle, and rooted in the principles that have guided designers for decades.",
        href: "https://www.userinterface.wiki/12-principles-of-animation",
        date: "April, 2025",
        author: "Raphael Salaja",
        source: "serinterface.wiki/",
    },
    {
        title: "Using AI as a design engineer",
        desc: "I don't use AI to come up with ideas or to replace my own thinking. I use it to accelerate my workflow.",
        href: "https://jakub.kr/work/using-ai-as-a-design-engineer",
        date: "January, 2026",
        author: "Jakub Krehel",
        source: "jakub.kr",
    },
    {
        title: "Stop turning everything into arrays and do less work instead",
        desc: "Iterator helpers in JavaScript gives us a native, lazy alternative that’s especially relevant for dealing with large datasets, streams, and UI-driven logic.",
        href: "https://allthingssmitty.com/2026/01/12/stop-turning-everything-into-arrays-and-do-less-work-instead/",
        date: "January, 2026",
        author: "Matt Smith",
        source: "allthingssmitty.com",
    },
    {
        title: "The State of CSS 2025",
        desc: "Yearly survey on the state of CSS.",
        href: "https://2025.stateofcss.com/en-US/features/",
        date: "January, 2026",
        author: "",
        source: "2025.stateofcss.com",
    },
    {
        title: "Static Icons feel dead now",
        desc: "A collection of smooth, high-quality animated icons for your next project. Copy and paste directly into your app.",
        href: "https://www.itshover.com/icons",
        date: "January, 2026",
        author: "",
        source: "itshover.com",
    },
    {
        title: "Gas Town’s Agent Patterns, Design Bottlenecks, and Vibecoding at Scale",
        desc: "On agent orchestration patterns, why design and critical thinking are the new bottlenecks, and whether we should let go of looking at code.",
        href: "https://maggieappleton.com/gastown",
        date: "January, 2026",
        author: "Maggie Appleton",
        source: "maggieappleton.com",
    },
    {
        title: "Chrome DevTools for Debugging Web Performance",
        desc: "This is a step-by-step guide on how I use Chrome DevTools (DevTools from now on) to detect Web Performance issues on a website, as well as validate hypotheses to fix some of the problems found.",
        href: "https://calendar.perfplanet.com/2025/chrome-devtools-for-debugging-web-performance/",
        date: "December, 2025",
        author: "Joan León",
        source: "perfplanet.com",
    },
    {
        title: "::target-text:",
        desc: "An easy way to style text fragments",
        href: "https://webkit.org/blog/17628/target-text-an-easy-way-to-style-text-fragments",
        date: "December, 2025",
        author: "Saron Yitbarek",
        source: "webkit.org",
    },
    {
        title: "The JavaScript Bundler Grand Prix",
        desc: "Recently, several companies have stepped up to address this challenge by supercharging their JavaScript bundlers.",
        href: "https://redmonk.com/kholterhoff/2025/12/16/javascript-bundler-grand-prix/",
        date: "December, 2025",
        author: "Kate Holterhoff",
        source: "redmonk.com",
    },
	{
		title: "Responsive Letter Spacing",
		desc: "How to only apply the letter-spacing above a certain font-size.",
		href: "https://cloudfour.com/thinks/responsive-letter-spacing/",
		date: "November, 2025",
		author: "Tyler Sticka",
		source: "cloudfour.com",
	},
    {
        title: "You can style alt text like any other text.",
        desc: "One of those finer details is making the experience of an image not loading a little better.",
        href: "https://piccalil.li/blog/you-can-style-alt-text-like-any-other-text/",
        date: "May, 2025",
        author: "Andy Bell",
        source: "piccalil.li",
    },
    {
        title: "12 Principles of Animation",
        desc: "Great animation is purposeful, subtle, and rooted in the principles that have guided designers for decades.",
        href: "https://www.userinterface.wiki/12-principles-of-animation",
        date: "April, 2025",
        author: "Raphael Salaja",
        source: "userinterface.wiki",
    },
];

/** filter out draft posts based on the environment */
export async function getAllTechArticles() {
	return techArticles
}