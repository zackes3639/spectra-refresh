import { siteLinks } from "./site";

export interface TeamMember {
	name: string;
	credentials: string;
	role: string;
	slug?: string;
	summary: string;
	acceptsInsurance?: boolean;
	bookingLabel: string;
	bookingHref: string;
	specialties: string[];
	image: { src?: string; alt: string; needed: string; width?: number; height?: number };
}

export const teamMembers: TeamMember[] = [
	{
		name: "Lisa Saff Koche",
		credentials: "MD, ABAARM, FAAMFM",
		role: "Triple board-certified physician and clinical founder",
		slug: "lisa-koche",
		summary:
			"Triple board-certified physician, educator, and speaker. Dr. Lisa brings her clinical vision together across functional medicine, longevity, performance, and patient education",
		acceptsInsurance: false,
		bookingLabel: "Book a discovery call",
		bookingHref: siteLinks.discoveryCall,
		specialties: ["Functional medicine", "Longevity strategy", "Root-cause care", "Physician education"],
		image: {
			src: "/images/dr-lisa-koche-headshot.jpeg",
			alt: "Dr. Lisa Koche",
			needed: "Approved Dr. Lisa portrait",
			width: 2560,
			height: 1280,
		},
	},
	{
		name: "Rodney Morillo",
		credentials: "MSN, APRN, FNP-C",
		role: "Family Nurse Practitioner",
		summary:
			"Primary care and functional medicine provider supporting patients with thoughtful, whole-person guidance and longer-form care conversations",
		acceptsInsurance: true,
		bookingLabel: "Ask about scheduling",
		bookingHref: "/contact",
		specialties: ["Primary care", "Functional medicine", "Patient education", "Care continuity"],
		image: { alt: "Rodney Morillo, nurse practitioner", needed: "Approved provider headshot" },
	},
	{
		name: "George E. Springer, Jr",
		credentials: "DC, NMD, DCBCN",
		role: "Applied Kinesiology and Root-Cause Assessment",
		summary:
			"Experienced clinician known for a systems-based approach to functional assessment, structural care, nutrition, and complementary root-cause investigation",
		acceptsInsurance: false,
		bookingLabel: "Schedule applied kinesiology",
		bookingHref: "/services/applied-kinesiology",
		specialties: ["Applied kinesiology", "Functional assessment", "Nutrition", "Structural patterns"],
		image: { alt: "Dr. George Springer", needed: "Approved provider headshot" },
	},
	{
		name: "Angeline Galiano",
		credentials: "MD, ABAARM, FAAMFM",
		role: "Functional and Primary Care Physician",
		summary:
			"Physician provider supporting patients through primary care, functional medicine, prevention, and individualized wellness planning",
		acceptsInsurance: true,
		bookingLabel: "Ask about scheduling",
		bookingHref: "/contact",
		specialties: ["Primary care", "Functional medicine", "Prevention", "Hormone support"],
		image: { alt: "Dr. Angeline Galiano", needed: "Approved provider headshot" },
	},
	{
		name: "Emily Zink Ebaugh",
		credentials: "MSN, APRN, FNP-C",
		role: "Family Nurse Practitioner",
		summary:
			"Care partner for patients seeking comprehensive, compassionate support across primary care, functional medicine, and wellness planning",
		acceptsInsurance: false,
		bookingLabel: "Contact the practice",
		bookingHref: "/contact",
		specialties: ["Functional medicine", "Primary care support", "Patient guidance", "Follow-up care"],
		image: { alt: "Emily Zink Ebaugh", needed: "Approved provider headshot" },
	},
	{
		name: "Christine Britt",
		credentials: "DC",
		role: "Chiropractic Care",
		summary:
			"Chiropractic provider with an integrative lens on structural function, upper cervical care, and whole-body nervous system support",
		acceptsInsurance: false,
		bookingLabel: "Explore chiropractic care",
		bookingHref: "/services/chiropractic-care",
		specialties: ["Upper cervical care", "Structural support", "Pediatric-informed care", "Webster technique"],
		image: { alt: "Dr. Christine Britt", needed: "Approved provider headshot" },
	},
	{
		name: "Susan Bucci",
		credentials: "CCP",
		role: "Care and Coaching Partner",
		summary:
			"Wellness support partner helping patients navigate coaching, continuity, and practical steps between provider visits",
		acceptsInsurance: false,
		bookingLabel: "Contact the practice",
		bookingHref: "/contact",
		specialties: ["Health coaching", "Care coordination", "Lifestyle support", "Patient follow-through"],
		image: { alt: "Susan Bucci", needed: "Approved team headshot" },
	},
];
