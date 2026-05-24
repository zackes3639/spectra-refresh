export interface MediaAppearance {
	title: string;
	outlet: string;
	href: string;
	category: "tv" | "podcast" | "article" | "video";
}

export const mediaAppearances: MediaAppearance[] = [
	{
		title: "Tips for Getting a Better Night's Sleep",
		outlet: "WTSP Great Day Live",
		href: "https://www.wtsp.com/article/features/great-day-live/tips-for-getting-a-better-nights-sleep/67-8809c335-14d6-4727-8eae-662123c595a3",
		category: "tv",
	},
	{
		title: "Feeling the Afternoon Slump?",
		outlet: "WTSP Great Day Live",
		href: "https://www.wtsp.com/article/features/great-day-live/feeling-the-afternoon-slump-try-these-tips/67-315c699e-a0d1-405a-b07c-3c54acf948aa",
		category: "tv",
	},
	{
		title: "Creating a Healthier You",
		outlet: "WTSP Great Day Live",
		href: "https://www.wtsp.com/article/features/great-day-live/creating-a-healthier-you/67-a458d0fb-cb3e-4773-bb18-bf572481e004",
		category: "tv",
	},
	{
		title: "Bio-Hack Your Way to Better Health",
		outlet: "WFLA Bloom",
		href: "https://www.wfla.com/bloom/tampa-doctor-helps-patients-biohack-their-way-to-better-health/",
		category: "tv",
	},
	{
		title: "Functional Medicine Approach to Hormones, Thyroid, and Menopause",
		outlet: "WFLA Bloom",
		href: "https://www.wfla.com/bloom-tampa-bay/functional-medicine-approach-to-hormones-thyroid-and-menopause/",
		category: "tv",
	},
	{
		title: "Get Yourself Optimized",
		outlet: "Podcast Interview",
		href: "https://www.youtube.com/watch?v=luaYkcPvlpA",
		category: "podcast",
	},
	{
		title: "Optimizing Energy and Your Mitochondria",
		outlet: "Myers Detox",
		href: "https://myersdetox.com/",
		category: "podcast",
	},
	{
		title: "Light Up Your Mitochondria",
		outlet: "Be Well by Kelly",
		href: "https://kellyleveque.com/",
		category: "podcast",
	},
	{
		title: "Top Strategies for Optimizing Health",
		outlet: "The Energy Blueprint",
		href: "https://www.theenergyblueprint.com/dr-lisa-koche/",
		category: "podcast",
	},
	{
		title: "What Your Armpits Say About Health",
		outlet: "Well+Good",
		href: "https://www.wellandgood.com/",
		category: "article",
	},
	{
		title: "Keto Diet Considerations",
		outlet: "Everyday Health",
		href: "https://www.everydayhealth.com/",
		category: "article",
	},
	{
		title: "Reader's Digest Wellness Feature",
		outlet: "Reader's Digest",
		href: "https://www.rd.com/list/how-to-avoid-germs-when-grocery-shopping/",
		category: "article",
	},
	{
		title: "Bloom Media Appearances and Highlights",
		outlet: "Dr. Lisa Media Library",
		href: "https://drlisakoche.com/media/",
		category: "video",
	},
];
