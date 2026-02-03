export interface Alumni {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote?: string;
}

export const alumniData: Alumni[] = [
  {
    id: "grace-kipa",
    name: "Grace Kipa",
    role: "Software Engineer",
    company: "Synergy Wellness",
    image: "/alumni/grace.avif",
    quote: "The training transformed my career trajectory completely.",
  },
  {
    id: "campbell-davies-webb",
    name: "Campbell Davies-Webb",
    role: "Software Developer",
    company: "Linebooker",
    image: "/alumni/campbell.avif",
    quote: "I gained practical skills that I use every single day.",
  },
  {
    id: "alexis-desani-gono",
    name: "Alexis Desani-Gono",
    role: "Software Developer",
    company: "Tech Innovators",
    image: "/alumni/alexis.avif",
    quote: "The mentorship and guidance were invaluable.",
  },
  {
    id: "lehlogonolo-shai",
    name: "Lehlogonolo Shai",
    role: "Cloud Developer",
    company: "ProcureSense",
    image: "/alumni/lehlogonolo.avif",
    quote: "From learner to cloud specialist in months.",
  },
  {
    id: "mbali-kutlwano-puso",
    name: "Mbali (Kutlwano) Puso",
    role: "Full Stack Developer",
    company: "Kickass Collective",
    image: "/alumni/mbali.avif",
    quote: "The hands-on approach made all the difference.",
  },
  {
    id: "rethabile-mohapi",
    name: "Rethabile Mohapi",
    role: "Business/System Analyst",
    company: "Integrove",
    image: "/alumni/rethabile.avif",
    quote: "I discovered my true potential through this program.",
  },
];
