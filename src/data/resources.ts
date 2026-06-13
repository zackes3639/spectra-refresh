import { siteLinks } from "./site";

export interface Resource {
	title: string;
	type: "free-download" | "course" | "article" | "quiz" | "favorite";
	summary: string;
	href: string;
	sourceSite: "spectra" | "dr-lisa";
	ctaLabel: string;
}

export const resources: Resource[] = [
	{
		title: "Foundational Audit",
		type: "free-download",
		summary: "A starting point for noticing the signals your body is already giving you",
		href: siteLinks.drLisaResources,
		sourceSite: "dr-lisa",
		ctaLabel: "Start the audit",
	},
	{
		title: "Becoming a Biohacker",
		type: "free-download",
		summary: "An approachable guide to thinking about biohacking with more context and less noise",
		href: "https://www.drlisakoche.com/wp-content/uploads/2022/10/Dr-Lisa-Koche-Becoming-A-Biohacker.pdf",
		sourceSite: "dr-lisa",
		ctaLabel: "Read the guide",
	},
	{
		title: "Supplement Guide",
		type: "free-download",
		summary: "A curated educational resource for discussing supplements with a qualified clinician",
		href: siteLinks.drLisaResources,
		sourceSite: "dr-lisa",
		ctaLabel: "View resource",
	},
	{
		title: "Ultimate Gift Guide",
		type: "favorite",
		summary: "Dr. Lisa's everyday wellness favorites and product categories, hosted externally",
		href: siteLinks.drLisaFavorites,
		sourceSite: "dr-lisa",
		ctaLabel: "Explore favorites",
	},
	{
		title: "Transform Your Health",
		type: "free-download",
		summary: "A gentle entry point into Dr. Lisa's education ecosystem and root-cause language",
		href: siteLinks.drLisaResources,
		sourceSite: "dr-lisa",
		ctaLabel: "Get the resource",
	},
	{
		title: "LIT Questionnaire",
		type: "quiz",
		summary: "A reflective questionnaire intended to help people identify where they may want more support",
		href: siteLinks.drLisaResources,
		sourceSite: "dr-lisa",
		ctaLabel: "Open questionnaire",
	},
	{
		title: "The LIT Journey",
		type: "course",
		summary: "Dr. Lisa's guided learning pathway for people who want a structured education experience",
		href: siteLinks.drLisaCourses,
		sourceSite: "dr-lisa",
		ctaLabel: "View course",
	},
	{
		title: "Foundational Framework",
		type: "course",
		summary: "A course pathway focused on the core foundations that support long-term health",
		href: siteLinks.drLisaCourses,
		sourceSite: "dr-lisa",
		ctaLabel: "Explore course",
	},
	{
		title: "Hydration and Nutrient Education",
		type: "article",
		summary: "A Spectra Wellness article for visitors who want a practical orientation point",
		href: "https://spectrawellness.com/how-long-does-iv-therapy-last/",
		sourceSite: "spectra",
		ctaLabel: "Read article",
	},
	{
		title: "The Gut-Brain Connection",
		type: "article",
		summary: "An article topic connecting digestion, nervous system signaling, and whole-person context",
		href: "https://spectrawellness.com/the-gut-brain-connection/",
		sourceSite: "spectra",
		ctaLabel: "Read article",
	},
	{
		title: "Get Lit with Dr. Lisa Koche",
		type: "article",
		summary: "An article pathway into Dr. Lisa's teaching language and public education work",
		href: "https://spectrawellness.com/get-lit-with-dr-lisa-koche/",
		sourceSite: "spectra",
		ctaLabel: "Read article",
	},
];

export const featuredResources = resources.slice(0, 8);
export const articleResources = resources.filter((resource) => resource.type === "article");
