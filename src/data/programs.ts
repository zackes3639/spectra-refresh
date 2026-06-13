export type ProgramAccent = "gold" | "blue" | "lavender" | "coral";

export interface Program {
	title: string;
	slug: string;
	accent: ProgramAccent;
	summary: string;
	benefits: string[];
	who: string[];
	focus: string[];
	included: string[];
	journey: { title: string; copy: string }[];
	outcome: string;
}

export const programs: Program[] = [
	{
		title: "Longevity Optimization",
		slug: "longevity-optimization",
		accent: "gold",
		summary:
			"A strategic program for people who want a deeper view of prevention, performance, resilience, and healthy aging",
		benefits: ["Biological resilience mapping", "Prevention-focused planning", "Long-term optimization strategy"],
		who: [
			"People who want more context than a standard annual visit can provide",
			"High-performing adults interested in prevention, vitality, and sustainable health habits",
			"People seeking a thoughtful framework that connects biomarkers, symptoms, lifestyle, and goals",
		],
		focus: [
			"Metabolic, inflammatory, hormonal, and recovery patterns",
			"Advanced diagnostics interpreted through a whole-person lens",
			"Personalized learning priorities that can be refined as needs and markers change",
		],
		included: [
			"Diagnostics and health history review",
			"Personalized learning map",
			"Nutrition, sleep, movement, and recovery guidance",
			"Education and follow-up support",
		],
		journey: [
			{ title: "Map", copy: "Gather the health story, goals, labs, and lifestyle context" },
			{ title: "Prioritize", copy: "Identify the patterns most relevant to long-term resilience" },
			{ title: "Plan", copy: "Build a clear protocol that respects the whole person" },
			{ title: "Refine", copy: "Adjust recommendations as symptoms, markers, and capacity evolve" },
		],
		outcome:
			"The intended experience is a clearer understanding of your physiology and a practical strategy for supporting long-range health without implying a guaranteed result",
	},
	{
		title: "Nervous System Recovery",
		slug: "nervous-system-recovery",
		accent: "blue",
		summary:
			"A restorative pathway for people navigating stress load, burnout patterns, sleep disruption, and reduced adaptive capacity",
		benefits: ["Stress physiology context", "Recovery rhythm support", "Sleep and resilience planning"],
		who: [
			"People who feel depleted, wired, tired, or slow to recover",
			"People interested in understanding the physiology behind stress, sleep, and fatigue",
			"Adults seeking a measured plan for rebuilding capacity over time",
		],
		focus: [
			"Nervous system load, sleep quality, energy rhythm, and repair signals",
			"Patterns that may connect stress chemistry, inflammation, hormones, and metabolism",
			"Daily practices and practical recommendations that support recovery capacity",
		],
		included: [
			"Recovery-oriented diagnostics",
			"Planning support for stress and sleep patterns",
			"Lifestyle and nervous system recommendations",
			"Education and follow-up support",
		],
		journey: [
			{ title: "Listen", copy: "Understand symptoms, stressors, sleep, history, and current capacity" },
			{ title: "Decode", copy: "Look for patterns that may be keeping the body in a high-demand state" },
			{ title: "Restore", copy: "Create a sustainable plan for rest, rhythm, and repair" },
			{ title: "Adapt", copy: "Refine the plan as recovery tolerance and daily demands shift" },
		],
		outcome:
			"The goal is to help create clearer context around recovery needs and support steadier capacity over time, without promising a specific outcome",
	},
	{
		title: "Women’s Metabolic & Hormonal Health",
		slug: "womens-metabolic-hormonal-health",
		accent: "lavender",
		summary:
			"A thoughtful program for women seeking context around hormonal shifts, metabolism, energy, body composition, and long-term vitality",
		benefits: ["Hormonal pattern review", "Metabolic insight", "Midlife vitality planning"],
		who: [
			"Women navigating energy, sleep, weight, mood, cycle, or midlife transition concerns",
			"Women who want hormonal and metabolic patterns considered together",
			"Women seeking a personalized plan that reflects both data and lived experience",
		],
		focus: [
			"Hormonal, metabolic, inflammatory, and recovery signals",
			"How life stage, stress, nutrition, sleep, and movement influence physiology",
			"Practical recommendations that can support long-term steadiness and vitality",
		],
		included: [
			"Targeted diagnostics and history review",
			"Personalized metabolic and hormonal learning map",
			"Lifestyle recommendations and education",
			"Follow-up support for refinement",
		],
		journey: [
			{ title: "Clarify", copy: "Gather symptoms, timeline, lab context, and life-stage considerations" },
			{ title: "Connect", copy: "Interpret hormones, metabolism, recovery, and lifestyle as a system" },
			{ title: "Support", copy: "Create a plan that is specific, measured, and sustainable" },
			{ title: "Reassess", copy: "Track what changes and adjust thoughtfully" },
		],
		outcome:
			"The intended experience is more context, steadier decision-making, and a learning map designed around the whole physiological picture, not a guaranteed result",
	},
	{
		title: "Precision Prevention",
		slug: "precision-preventive-care",
		accent: "coral",
		summary:
			"A prevention-centered pathway for people who want early insight, root-cause pattern recognition, and proactive health planning",
		benefits: ["Early risk context", "Root-cause patterning", "Preventive strategy"],
		who: [
			"People who want to be proactive before symptoms become disruptive",
			"People with family history or risk patterns who want more personalized context",
			"Adults seeking an organized long-range plan for prevention and health resilience",
		],
		focus: [
			"Early signals across metabolism, inflammation, cardiovascular health, hormones, and recovery",
			"Personal and family history interpreted alongside diagnostics and lifestyle context",
			"Longitudinal planning that can evolve as new information appears",
		],
		included: [
			"Preventive diagnostics and risk-context review",
			"Long-range planning",
			"Lifestyle and education recommendations",
			"Follow-up support for plan updates",
		],
		journey: [
			{ title: "Review", copy: "Understand history, goals, current markers, and areas of concern" },
			{ title: "Pattern", copy: "Identify early signals and connections that may deserve attention" },
			{ title: "Plan", copy: "Translate findings into a clear preventive strategy" },
			{ title: "Monitor", copy: "Use follow-up context to keep the plan relevant" },
		],
		outcome:
			"The goal is to support more informed preventive decisions and a stronger sense of direction, without making guaranteed disease-prevention claims",
	},
];

export const getProgram = (slug: string) => programs.find((program) => program.slug === slug);
