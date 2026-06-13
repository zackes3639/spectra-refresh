import { siteLinks } from "./site";

export type ServiceCategory = "medical" | "performance" | "structural" | "aesthetics" | "specialty";

export interface Service {
	title: string;
	slug: string;
	eyebrow: string;
	summary: string;
	heroCopy: string;
	category: ServiceCategory;
	source: string[];
	primaryCta: { label: string; href: string };
	secondaryCta?: { label: string; href: string };
	who: string[];
	benefits: string[];
	sections: { eyebrow?: string; title: string; copy: string; items?: string[] }[];
	related: string[];
	seo: { title: string; description: string };
	image: { src?: string; alt: string; needed: string };
}

export const serviceCategories: Record<ServiceCategory, { label: string; copy: string }> = {
	medical: {
		label: "Medical & Functional Care",
		copy: "Physician-led care that connects history, diagnostics, lifestyle, and goals",
	},
	performance: {
		label: "Performance & Recovery",
		copy: "Advanced wellness therapies for recovery, circulation, resilience, and vitality",
	},
	structural: {
		label: "Structural & Physical Medicine",
		copy: "Hands-on support for alignment, movement, nervous system balance, and function",
	},
	aesthetics: {
		label: "Aesthetics & Regenerative Wellness",
		copy: "Whole-person aesthetic care that pairs skin vitality with internal health context",
	},
	specialty: {
		label: "Specialty Experiences",
		copy: "Focused offerings for patients seeking deeper support, privacy, or complementary care",
	},
};

export const services: Service[] = [
	{
		title: "Functional Medicine",
		slug: "functional-medicine",
		eyebrow: "Medical & Functional Care",
		summary: "Root-cause medical care that listens longer, looks deeper, and personalizes the next step",
		heroCopy:
			"Functional medicine through Dr. Lisa's Tampa practice is designed for patients who want more context than a rushed visit can offer. The team considers symptoms, history, lifestyle, environment, labs, and goals before shaping a plan",
		category: "medical",
		source: ["Live functional medicine page", "Live homepage"],
		primaryCta: { label: "Schedule a Discovery Call", href: siteLinks.discoveryCall },
		secondaryCta: { label: "Explore Care Model", href: "/membership" },
		who: [
			"Patients who feel unheard, rushed, or left with incomplete answers",
			"People who want to understand patterns behind energy, hormones, digestion, inflammation, and resilience",
			"Adults seeking a proactive care relationship that can adapt over time",
		],
		benefits: ["Longer clinical context", "Advanced diagnostic review", "Personalized care planning"],
		sections: [
			{
				eyebrow: "Patient First",
				title: "A deeper conversation before a plan is made",
				copy:
					"The work begins with a wider view of the patient. Dr. Lisa's clinical team reviews the full story, looks for patterns, and explains options in plain language so the plan feels grounded and usable",
				items: ["Health history and symptom timeline", "Lab and diagnostic context", "Lifestyle, nutrition, sleep, and stress review"],
			},
			{
				eyebrow: "Bioindividual",
				title: "Personalized to your biology and your real life",
				copy:
					"Plans may include nutrition, targeted supplementation, medication when appropriate, coaching, performance therapies, referrals, and follow-up. Recommendations vary by individual clinical review",
			},
			{
				eyebrow: "Care Note",
				title: "Root-cause care without overpromising",
				copy:
					"The goal is clarity and support, not a guaranteed outcome. Functional medicine can complement conventional care and does not replace urgent or emergency medical evaluation",
			},
		],
		related: ["membership", "performance-longevity", "hormone-replacement", "iv-nutrition", "preventive-cardiology"],
		seo: {
			title: "Functional Medicine in Tampa | Dr. Lisa Koche",
			description:
				"Root-cause functional medicine in Tampa Bay with advanced diagnostics, personalized care planning, and physician-led support for long-term health",
		},
		image: {
			alt: "Functional medicine provider reviewing a wellness plan with a patient",
			needed: "Approved clinic or provider consultation photography",
		},
	},
	{
		title: "Performance & Longevity Center",
		slug: "performance-longevity",
		eyebrow: "Performance & Recovery",
		summary: "Advanced therapies organized to support recovery, balance, circulation, and vitality",
		heroCopy:
			"The Performance & Longevity Center brings together biohacking and restorative wellness therapies in a medically aware environment. Some services require clearance and individualized guidance",
		category: "performance",
		source: ["Live Performance & Longevity Center"],
		primaryCta: { label: "Book With Mindbody", href: siteLinks.mindbody },
		secondaryCta: { label: "Ask About Therapies", href: "/contact" },
		who: [
			"Patients interested in recovery, energy, circulation, or nervous system regulation support",
			"People exploring advanced wellness technologies with a team-guided approach",
			"Members who want to pair functional care with consistent restorative therapies",
		],
		benefits: ["Recovery support", "Nervous system balance", "Tiered therapy access"],
		sections: [
			{
				eyebrow: "How It Works",
				title: "Three tiers, one calmer path into advanced wellness",
				copy:
					"The tier system groups therapies by intensity and access level so patients can start with foundational support and move toward more advanced services when medically appropriate",
				items: ["Tier 1 - foundational recovery therapies", "Tier 2 - restorative cellular support", "Tier 3 - advanced therapies requiring clearance"],
			},
			{
				eyebrow: "Therapies",
				title: "A curated menu for recovery and resilience",
				copy:
					"Offerings may include red light therapy, compression, PEMF, salt booth, oxygen therapy, Flowpresso, hydrogen therapy, hyperbaric oxygen, HOCATT, and related performance technologies when appropriate",
			},
			{
				eyebrow: "Safety",
				title: "Advanced does not mean one-size-fits-all",
				copy:
					"Some therapies require provider review or medical clearance. The team confirms fit, timing, and contraindications before treatment",
			},
		],
		related: ["membership", "iv-nutrition", "functional-medicine", "destination-health"],
		seo: {
			title: "Performance & Longevity Center | Dr. Lisa Koche",
			description:
				"Advanced wellness therapies for recovery, cellular health, circulation, nervous system regulation, and long-term vitality through Dr. Lisa's Tampa clinical home",
		},
		image: {
			alt: "Performance and longevity therapy room",
			needed: "Approved Performance Center therapy imagery",
		},
	},
	{
		title: "IV Nutrition",
		slug: "iv-nutrition",
		eyebrow: "Performance & Recovery",
		summary: "Medically supervised IV vitamin therapy for hydration, replenishment, recovery, and wellness support",
		heroCopy:
			"The practice offers IV nutrition in a medically supervised setting with trained team members. Drip selection should be matched to goals, history, and provider guidance",
		category: "performance",
		source: ["Live IV Nutrition page"],
		primaryCta: { label: "Book IV Therapy", href: siteLinks.mindbody },
		secondaryCta: { label: "Contact the Practice", href: "/contact" },
		who: [
			"Patients seeking hydration and nutrient replenishment support",
			"People interested in recovery support after travel, training, or high-demand seasons",
			"Members pairing IV support with broader functional medicine care",
		],
		benefits: ["Hydration support", "Nutrient replenishment", "Recovery and energy support"],
		sections: [
			{
				eyebrow: "Why IV",
				title: "A supervised way to replenish and refuel",
				copy:
					"IV therapy can support hydration and deliver nutrients directly into the bloodstream. Protocols should be selected with clinical judgment and patient-specific context",
				items: ["Hydration and electrolyte support", "General wellness and recovery support", "Mental clarity and energy support"],
			},
			{
				eyebrow: "Popular Options",
				title: "Drips are described carefully and selected individually",
				copy:
					"Common categories include Myers-style nutrient drips, performance recovery blends, replenishment support, and immune-supportive wellness options described with measured, wellness-focused language",
			},
			{
				eyebrow: "Related",
				title: "NAD+ and advanced protocols require additional review",
				copy:
					"Advanced IV options should be discussed with the office team so dosing, timing, and appropriateness are clear before scheduling",
			},
		],
		related: ["performance-longevity", "membership", "functional-medicine", "aesthetics-regenerative-wellness"],
		seo: {
			title: "IV Nutrition Therapy in Tampa | Dr. Lisa Koche",
			description:
				"Medically supervised IV vitamin therapy in Tampa Bay for hydration, nutrient replenishment, energy support, recovery, and wellness",
		},
		image: {
			alt: "IV nutrition therapy setup",
			needed: "Approved IV therapy room or infusion detail photography",
		},
	},
	{
		title: "Applied Kinesiology",
		slug: "applied-kinesiology",
		eyebrow: "Root-Cause Assessment",
		summary: "Complementary functional assessment that considers the body as an interconnected system",
		heroCopy:
			"Applied kinesiology in Dr. Lisa's clinical ecosystem is positioned as a non-invasive functional assessment approach. It may help guide complementary care planning, but it does not replace conventional diagnostics or emergency care",
		category: "specialty",
		source: ["Live Applied Kinesiology page"],
		primaryCta: { label: "Schedule Applied Kinesiology", href: "/contact" },
		secondaryCta: { label: "Meet the Team", href: "/team" },
		who: [
			"Patients interested in non-invasive functional pattern assessment",
			"People exploring how structure, stress, digestion, and regulation may interact",
			"Patients who want complementary support alongside medical care when appropriate",
		],
		benefits: ["Non-invasive assessment", "Whole-system patterning", "Complementary care planning"],
		sections: [
			{
				eyebrow: "Method",
				title: "A systems-based assessment model",
				copy:
					"Applied kinesiology uses muscle response testing and clinical observation to explore functional patterns. Findings should be interpreted as part of a broader care conversation",
				items: ["Functional pattern review", "Muscle response testing", "Nutrition, structure, and lifestyle context"],
			},
			{
				eyebrow: "Provider",
				title: "Root-cause assessment with experienced clinicians",
				copy:
					"Care may involve Dr. George Springer and approved associates with experience in whole-system functional assessment",
			},
			{
				eyebrow: "Disclaimer",
				title: "Complementary, not a replacement for medical evaluation",
				copy:
					"This service should not be used for urgent symptoms, emergency concerns, or as a substitute for indicated diagnostic testing",
			},
		],
		related: ["functional-medicine", "chiropractic-care", "membership", "healing-arts-collective"],
		seo: {
			title: "Applied Kinesiology in Tampa | Dr. Lisa Koche",
			description:
				"Non-invasive applied kinesiology and root-cause assessment through Dr. Lisa's Tampa clinical team",
		},
		image: {
			alt: "Applied kinesiology assessment",
			needed: "Approved applied kinesiology or provider assessment photography",
		},
	},
	{
		title: "Chiropractic Care",
		slug: "chiropractic-care",
		eyebrow: "Structural & Physical Medicine",
		summary: "Integrative structural care focused on alignment, movement, and brain-body communication",
		heroCopy:
			"Chiropractic care supports structural function and nervous system communication through an integrative lens. Care plans vary by patient evaluation",
		category: "structural",
		source: ["Live Chiropractic Care page"],
		primaryCta: { label: "Schedule Chiropractic Care", href: "/contact" },
		secondaryCta: { label: "Patient Information", href: "/patients" },
		who: [
			"Patients seeking structural support as part of whole-person wellness",
			"People interested in upper cervical or integrative chiropractic care",
			"Families looking for provider-guided pediatric or prenatal-related structural care information",
		],
		benefits: ["Structural alignment", "Movement support", "Nervous system balance"],
		sections: [
			{
				eyebrow: "Approach",
				title: "Structural care with whole-body context",
				copy:
					"Care may focus on upper cervical alignment, posture, mobility, and the relationship between structure and function. Clinical details are confirmed by the provider team",
			},
			{
				eyebrow: "Provider",
				title: "Meet the chiropractic care team",
				copy:
					"Patients can ask about provider fit, training, and scheduling options before beginning chiropractic care",
			},
			{
				eyebrow: "Visit",
				title: "What to expect before scheduling",
				copy:
					"New patients can contact the practice, review patient information, and confirm current packages or visit types before booking",
			},
		],
		related: ["applied-kinesiology", "functional-medicine", "healing-arts-collective", "membership"],
		seo: {
			title: "Upper Cervical Chiropractic Care in Tampa | Dr. Lisa Koche",
			description:
				"Integrative upper cervical chiropractic care and structural support through Dr. Lisa's Tampa practice",
		},
		image: {
			alt: "Chiropractic care room",
			needed: "Approved chiropractic or structural care photography",
		},
	},
	{
		title: "Hormone Replacement",
		slug: "hormone-replacement",
		eyebrow: "Medical & Functional Care",
		summary: "Personalized hormone support guided by labs, symptoms, history, and provider review",
		heroCopy:
			"The practice takes an individualized approach to hormone support, considering symptoms, lab context, health history, goals, and treatment options before recommendations are made",
		category: "medical",
		source: ["Live Hormone Replacement page"],
		primaryCta: { label: "Start a Patient Inquiry", href: "/contact" },
		secondaryCta: { label: "Explore Functional Medicine", href: "/services/functional-medicine" },
		who: [
			"Patients navigating energy, sleep, mood, libido, or body composition changes",
			"People who want hormone patterns reviewed alongside metabolic and lifestyle context",
			"Patients seeking options that are discussed carefully with a clinician",
		],
		benefits: ["Lab-guided review", "Individualized options", "Follow-up refinement"],
		sections: [
			{
				eyebrow: "Approach",
				title: "Hormones are interpreted in context",
				copy:
					"Evaluation may include symptoms, lab work, health history, medication review, and discussion of options such as topical, compounded, natural pharmaceutical, or pellet-based support when appropriate",
			},
			{
				eyebrow: "Support Areas",
				title: "Care may support vitality, sleep, mood, and strength",
				copy:
					"Messaging should remain measured: hormone care may support areas such as energy, sleep, mood, libido, muscle tone, body composition, and bone health, but outcomes vary",
			},
			{
				eyebrow: "Review",
				title: "Treatment decisions belong in a clinical visit",
				copy:
					"Every protocol requires individualized provider review, follow-up, and monitoring. This page is educational and should not be read as medical advice",
			},
		],
		related: ["functional-medicine", "membership", "preventive-cardiology", "iv-nutrition"],
		seo: {
			title: "Hormone Replacement Therapy in Tampa | Dr. Lisa Koche",
			description:
				"Personalized hormone support and bioidentical hormone therapy options through Dr. Lisa's Tampa practice",
		},
		image: {
			alt: "Provider reviewing hormone support options with a patient",
			needed: "Approved clinical consultation photography",
		},
	},
	{
		title: "Aesthetics & Regenerative Wellness",
		slug: "aesthetics-regenerative-wellness",
		eyebrow: "Functional Aesthetics",
		summary: "A whole-body approach to skin vitality, regenerative treatments, and natural-looking aesthetic care",
		heroCopy:
			"Functional aesthetics in Dr. Lisa's clinical ecosystem connects skin, hormones, gut health, nutrients, inflammation, and cellular vitality with conservative aesthetic artistry",
		category: "aesthetics",
		source: ["Live Functional Aesthetics page"],
		primaryCta: { label: "Schedule a Consultation", href: "/contact" },
		secondaryCta: { label: "Explore IV Nutrition", href: "/services/iv-nutrition" },
		who: [
			"Patients seeking natural-looking aesthetic support",
			"People who want skin and aging concerns considered with internal health context",
			"Patients interested in regenerative and cosmetic options with medical guidance",
		],
		benefits: ["Whole-body skin context", "Regenerative options", "Conservative aesthetic planning"],
		sections: [
			{
				eyebrow: "Inside Out",
				title: "Beauty starts with the terrain beneath the surface",
				copy:
					"Skin changes can connect with hydration, hormones, gut health, inflammation, nutrients, and stress. The approach pairs aesthetic care with broader wellness context",
			},
			{
				eyebrow: "Services",
				title: "A curated aesthetic and regenerative menu",
				copy:
					"Offerings may include customized supplements, IV support, injectables, microneedling, exosomes or PDGF, hair restoration, hormone optimization, and longevity therapies when appropriate",
			},
			{
				eyebrow: "Safety",
				title: "Tailored, conservative, medically guided care",
				copy:
					"The emphasis is natural-looking results, appropriate candidacy, and careful review of risks, benefits, and alternatives",
			},
		],
		related: ["iv-nutrition", "hormone-replacement", "performance-longevity", "membership"],
		seo: {
			title: "Functional Aesthetics in Tampa | Dr. Lisa Koche",
			description:
				"Functional aesthetics and regenerative wellness in Tampa, combining skin vitality, hormone and gut health, IV support, microneedling, injectables, and regenerative treatments",
		},
		image: {
			alt: "Functional aesthetics treatment room",
			needed: "Approved aesthetics or regenerative skincare photography",
		},
	},
	{
		title: "Destination Health Immersion",
		slug: "destination-health",
		eyebrow: "Specialty Experience",
		summary: "A private, physician-guided health immersion for focused diagnostics, strategy, and wellness support",
		heroCopy:
			"Destination Health is positioned as a private, in-person experience for people seeking focused time with Dr. Lisa's clinical and wellness team. Package details should be confirmed directly with the practice",
		category: "specialty",
		source: ["Live Destination Health Immersion page"],
		primaryCta: { label: "Take the First Step", href: siteLinks.discoveryCall },
		secondaryCta: { label: "Contact", href: "/contact" },
		who: [
			"Out-of-town guests seeking a focused wellness experience in Tampa",
			"Individuals who want privacy, depth, and a coordinated care schedule",
			"Patients looking for a premium reset guided by clinical context",
		],
		benefits: ["Private scheduling", "Focused diagnostics", "Coordinated therapy access"],
		sections: [
			{
				eyebrow: "Concept",
				title: "Not a retreat. A physician-guided health immersion",
				copy:
					"The experience is described as a coordinated, multi-day visit shaped around goals, diagnostics, and medically appropriate wellness therapies",
			},
			{
				eyebrow: "Package Details",
				title: "Package levels are confirmed directly with the office",
				copy:
					"Ask the practice about current package names, inclusions, pricing, and booking workflow before making travel or care decisions",
			},
		],
		related: ["functional-medicine", "performance-longevity", "membership", "iv-nutrition"],
		seo: {
			title: "Destination Health Immersions | Dr. Lisa Koche",
			description:
				"Private, physician-guided health immersions in Tampa with personalized diagnostics, longevity therapies, and focused wellness support",
		},
		image: {
			alt: "Private wellness immersion consultation",
			needed: "Approved luxury wellness or clinic imagery",
		},
	},
	{
		title: "Preventive Cardiology",
		slug: "preventive-cardiology",
		eyebrow: "Medical & Functional Care",
		summary: "A proactive, root-cause lens on heart-health risk, diagnostics, and long-term support",
		heroCopy:
			"Preventive cardiology in this care model emphasizes proactive risk context, lifestyle, advanced diagnostics when appropriate, and collaboration with cardiology partners",
		category: "medical",
		source: ["Live Preventive Cardiology page"],
		primaryCta: { label: "Call to Book", href: "/contact" },
		secondaryCta: { label: "Explore Functional Medicine", href: "/services/functional-medicine" },
		who: [
			"Patients with family history or risk concerns who want a proactive conversation",
			"People seeking more context around metabolism, inflammation, and cardiovascular health",
			"Patients who may benefit from collaboration between functional medicine and cardiology partners",
		],
		benefits: ["Proactive risk context", "Lifestyle and lab review", "Collaborative care planning"],
		sections: [
			{
				eyebrow: "Approach",
				title: "Heart health belongs in the whole-person picture",
				copy:
					"Care may consider metabolism, inflammation, blood pressure, family history, lifestyle, nutrition, sleep, stress, and diagnostics",
			},
			{
				eyebrow: "Diagnostics",
				title: "Advanced testing should be described accurately",
				copy:
					"Any CCTA, AI-driven analysis, referral, or partnership language should be confirmed directly with the practice so ownership and workflow are accurate",
			},
		],
		related: ["functional-medicine", "hormone-replacement", "membership", "performance-longevity"],
		seo: {
			title: "Preventive Cardiology | Dr. Lisa Koche",
			description:
				"Advanced diagnostics and functional medicine strategies for proactive heart-health support through Dr. Lisa's clinical team",
		},
		image: {
			alt: "Provider reviewing preventive cardiology plan with a patient",
			needed: "Approved diagnostic or care planning imagery",
		},
	},
	{
		title: "Healing Arts Collective",
		slug: "healing-arts-collective",
		eyebrow: "Specialty Experience",
		summary: "A curated collective of independent holistic and integrative practitioners in one trusted space",
		heroCopy:
			"The Healing Arts Collective creates room for rotating practitioners and complementary modalities. Booking should happen directly with each practitioner unless the office confirms otherwise",
		category: "specialty",
		source: ["Live Healing Arts Collective page"],
		primaryCta: { label: "Browse Practitioners", href: "/contact" },
		secondaryCta: { label: "Explore Services", href: "/services" },
		who: [
			"Patients interested in complementary care in a trusted setting",
			"People seeking bodywork, physical therapy, or holistic support from independent practitioners",
			"Practitioners who may align with Dr. Lisa's integrative care environment",
		],
		benefits: ["Rotating practitioners", "Complementary modalities", "Direct booking model"],
		sections: [
			{
				eyebrow: "Collective",
				title: "One trusted space, many healing modalities",
				copy:
					"The collective can introduce independent practitioners who use dedicated space on rotating days. Each profile clarifies credentials, modality, and booking ownership",
			},
			{
				eyebrow: "Practitioner Roster",
				title: "The roster is confirmed through current practice information",
				copy:
					"Patients and practitioners can contact the office to understand current collective availability and direct booking details",
			},
		],
		related: ["chiropractic-care", "applied-kinesiology", "functional-medicine", "membership"],
		seo: {
			title: "Healing Arts Collective | Dr. Lisa Koche",
			description:
				"A curated collective of independent holistic and integrative practitioners offering rotating one-on-one care in Dr. Lisa's Tampa clinical environment",
		},
		image: {
			alt: "Healing arts treatment space",
			needed: "Approved collective practitioner or treatment room imagery",
		},
	},
];

export const priorityServiceSlugs = [
	"functional-medicine",
	"performance-longevity",
	"iv-nutrition",
	"applied-kinesiology",
	"chiropractic-care",
	"hormone-replacement",
	"aesthetics-regenerative-wellness",
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export const getRelatedServices = (slugs: string[]) =>
	slugs.map((slug) => getService(slug)).filter((service): service is Service => Boolean(service));
