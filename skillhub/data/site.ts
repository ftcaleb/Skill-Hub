export const siteConfig = {
  name: "Trajlon Group",
  tagline: "Global Training & Capacity Building",
  description: "Trajlon Group is a leading provider of professional training, capacity building, and organizational development solutions serving clients globally across multiple industries.",
  
  // Contact Information
  contact: {
    email: "info@trajlongroup.com",
    phone: "+971 4 XXX XXXX",
    address: "Dubai World Trade Centre, Sheikh Zayed Road",
    city: "Dubai",
    country: "United Arab Emirates",
    postalCode: "P.O. Box XXXXX"
  },

  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/company/trajlongroup",
    twitter: "https://twitter.com/trajlongroup",
    facebook: "https://facebook.com/trajlongroup"
  },

  // Navigation Links
  navigation: {
    main: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { 
        label: "Courses", 
        href: "/courses",
        hasDropdown: true
      },
      { 
        label: "Events", 
        href: "/events",
        hasDropdown: true
      },
      { label: "Contact", href: "/contact" }
    ],
    footer: {
      company: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about#team" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" }
      ],
      services: [
        { label: "All Courses", href: "/courses" },
        { label: "Upcoming Events", href: "/events" },
        { label: "Corporate Training", href: "/courses?category=corporate" },
        { label: "Consulting", href: "/services/consulting" }
      ],
      resources: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Brochures", href: "/brochures" },
        { label: "FAQs", href: "/faqs" }
      ]
    }
  }
};

// =========================================
// VALUE PROPOSITIONS - For homepage
// =========================================
export const valuePropositions = [
  {
    title: "Global Reach",
    description: "Delivering training excellence across 50+ countries on six continents.",
    icon: "globe"
  },
  {
    title: "Expert Facilitators",
    description: "World-class trainers with deep industry experience and academic credentials.",
    icon: "users"
  },
  {
    title: "Practical Training",
    description: "Hands-on learning with real-world case studies and actionable takeaways.",
    icon: "briefcase"
  },
  {
    title: "Multiple Industries",
    description: "Specialized programs for oil & gas, finance, government, and more.",
    icon: "building"
  },
  {
    title: "Flexible Delivery",
    description: "In-person, virtual, and hybrid options to suit your organization's needs.",
    icon: "monitor"
  },
  {
    title: "Certified Programs",
    description: "Internationally recognized certifications and accredited courses.",
    icon: "award"
  }
];

// =========================================
// ACCREDITATIONS - Logo placeholders
// =========================================
export const accreditations = [
  { name: "PMI Authorized Training Partner", logo: "/images/accreditations/pmi.png" },
  { name: "HRCI Approved Provider", logo: "/images/accreditations/hrci.png" },
  { name: "CPD Certified", logo: "/images/accreditations/cpd.png" },
  { name: "ISO 9001:2015", logo: "/images/accreditations/iso.png" },
  { name: "IACET Accredited", logo: "/images/accreditations/iacet.png" }
];

// =========================================
// ABOUT PAGE CONTENT
// =========================================
export const aboutContent = {
  hero: {
    title: "About Trajlon Group",
    subtitle: "Empowering Organizations Through Excellence in Training"
  },
  overview: {
    title: "Who We Are",
    content: [
      "Trajlon Group is a premier provider of professional training, capacity building, and organizational development solutions. Founded with a vision to transform how organizations develop their human capital, we have grown to serve clients across six continents.",
      "Our comprehensive portfolio of courses and events addresses the evolving needs of modern organizations. From leadership development to technical skills training, we deliver programs that create measurable impact.",
      "With a team of expert facilitators drawn from leading organizations worldwide, we bring real-world experience and academic rigor to every program we deliver."
    ]
  },
  mission: {
    title: "Our Mission",
    content: "To empower individuals and organizations to achieve their full potential through world-class training and development solutions."
  },
  vision: {
    title: "Our Vision",
    content: "To be the global partner of choice for organizations seeking transformational learning experiences that drive sustainable success."
  },
  industries: [
    "Oil & Gas",
    "Banking & Finance",
    "Government & Public Sector",
    "Healthcare",
    "Technology",
    "Construction & Engineering",
    "Telecommunications",
    "Manufacturing"
  ],
  stats: [
    { value: "50+", label: "Countries Served" },
    { value: "10,000+", label: "Professionals Trained" },
    { value: "200+", label: "Corporate Clients" },
    { value: "15+", label: "Years Experience" }
  ]
};
