export interface Testimonial {
	name: string;
	excerpt: string;
	theme: "root-cause" | "heard" | "team" | "functional" | "structural";
}

export const testimonials: Testimonial[] = [
	{
		name: "Patient",
		theme: "heard",
		excerpt:
			"Patients often describe the difference as feeling heard, with more time to explain their story and understand what the clinical team is considering.",
	},
	{
		name: "Functional medicine patient",
		theme: "root-cause",
		excerpt:
			"Many testimonials center on the relief of having symptoms reviewed as part of a larger pattern instead of being treated as isolated complaints.",
	},
	{
		name: "Practice visitor",
		theme: "team",
		excerpt:
			"Patients frequently mention a warm, thoughtful team experience and an office culture that feels collaborative rather than rushed.",
	},
	{
		name: "Structural care patient",
		theme: "structural",
		excerpt:
			"Structural and chiropractic care stories often point to clearer education, practical recommendations, and steady support over time.",
	},
	{
		name: "Care patient",
		theme: "functional",
		excerpt:
			"Care feedback emphasizes continuity: a plan, follow-up, coaching, and the ability to adjust care as life and health needs change.",
	},
];
