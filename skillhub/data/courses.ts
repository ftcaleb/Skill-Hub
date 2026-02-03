export interface Course {
  title: string;
  slug: string;
  category: string;
  industry: string;
  duration: string;
  shortDescription: string;
  overview: string;
  outcomes: string[];
  whoShouldAttend: string[];
  image: string;
  featured: boolean;
}

export const coursesData: Course[] = [
  {
    title: "Strategic Leadership & Management Excellence",
    slug: "strategic-leadership-management",
    category: "Leadership",
    industry: "Cross-Industry",
    duration: "5 Days",
    shortDescription: "Develop essential leadership skills to drive organizational success and inspire high-performing teams.",
    overview: "This comprehensive program equips executives and senior managers with cutting-edge leadership strategies. Participants will explore advanced management techniques, strategic thinking frameworks, and transformational leadership principles that drive organizational excellence.",
    outcomes: [
      "Master strategic planning and execution methodologies",
      "Develop emotional intelligence for effective team leadership",
      "Learn change management techniques for organizational transformation",
      "Build high-performance team cultures",
      "Enhance decision-making capabilities under uncertainty"
    ],
    whoShouldAttend: [
      "Senior Executives and Directors",
      "Department Heads and General Managers",
      "Emerging Leaders preparing for senior roles",
      "Project and Program Managers",
      "Entrepreneurs and Business Owners"
    ],
    image: "/images/classof25.jpg",
    featured: true
  },
  {
    title: "Project Management Professional (PMP) Preparation",
    slug: "pmp-preparation",
    category: "Project Management",
    industry: "Cross-Industry",
    duration: "5 Days",
    shortDescription: "Comprehensive preparation for PMP certification with practical project management skills.",
    overview: "Prepare thoroughly for the Project Management Professional (PMP) certification while gaining practical skills applicable to real-world projects. This intensive course covers all knowledge areas and process groups defined by PMI.",
    outcomes: [
      "Understand all PMP examination content areas",
      "Apply project management best practices",
      "Master risk assessment and mitigation strategies",
      "Develop effective stakeholder management skills",
      "Practice with realistic exam simulations"
    ],
    whoShouldAttend: [
      "Aspiring Project Managers",
      "Current Project Managers seeking certification",
      "Team Leaders managing projects",
      "Professionals transitioning to project management",
      "PMO Staff and Coordinators"
    ],
    image: "/images/courses/project-management.jpg",
    featured: true
  },
  {
    title: "Financial Analysis & Corporate Finance",
    slug: "financial-analysis-corporate-finance",
    category: "Finance",
    industry: "Banking & Finance",
    duration: "4 Days",
    shortDescription: "Master financial analysis techniques and corporate finance principles for informed business decisions.",
    overview: "This program provides a comprehensive understanding of financial analysis tools and corporate finance principles. Participants will learn to analyze financial statements, evaluate investment opportunities, and make strategic financial decisions.",
    outcomes: [
      "Analyze financial statements with advanced techniques",
      "Evaluate capital investment decisions",
      "Understand corporate valuation methodologies",
      "Master working capital management",
      "Apply financial risk assessment frameworks"
    ],
    whoShouldAttend: [
      "Finance Managers and Analysts",
      "Investment Professionals",
      "Business Development Managers",
      "Corporate Planning Executives",
      "Accountants seeking financial analysis skills"
    ],
    image: "/images/courses/finance.jpg",
    featured: false
  },
  {
    title: "Human Resources Management & Development",
    slug: "hr-management-development",
    category: "Human Resources",
    industry: "Cross-Industry",
    duration: "5 Days",
    shortDescription: "Transform HR practices with strategic approaches to talent management and organizational development.",
    overview: "Elevate your HR function from administrative to strategic. This course covers modern HR practices including talent acquisition, performance management, employee engagement, and organizational development strategies.",
    outcomes: [
      "Develop strategic HR planning capabilities",
      "Master talent acquisition and retention strategies",
      "Design effective performance management systems",
      "Create impactful learning and development programs",
      "Navigate employment law and compliance"
    ],
    whoShouldAttend: [
      "HR Directors and Managers",
      "Talent Acquisition Specialists",
      "Training and Development Professionals",
      "HR Business Partners",
      "Line Managers with HR responsibilities"
    ],
    image: "/images/courses/hr.jpg",
    featured: true
  },
  {
    title: "Oil & Gas Industry Fundamentals",
    slug: "oil-gas-fundamentals",
    category: "Technical",
    industry: "Oil & Gas",
    duration: "5 Days",
    shortDescription: "Comprehensive introduction to the oil and gas industry value chain and operations.",
    overview: "Gain a thorough understanding of the oil and gas industry from exploration to refining. This course covers upstream, midstream, and downstream operations, providing participants with essential industry knowledge.",
    outcomes: [
      "Understand the complete oil and gas value chain",
      "Learn exploration and production processes",
      "Master refining and petrochemical operations",
      "Navigate industry regulations and safety standards",
      "Analyze market dynamics and pricing mechanisms"
    ],
    whoShouldAttend: [
      "New entrants to the oil and gas sector",
      "Support function professionals in O&G companies",
      "Banking and finance professionals serving the sector",
      "Legal and consulting professionals",
      "Government and regulatory officials"
    ],
    image: "/images/courses/oil-gas.jpg",
    featured: false
  },
  {
    title: "Digital Transformation & Innovation",
    slug: "digital-transformation-innovation",
    category: "Technology",
    industry: "Cross-Industry",
    duration: "3 Days",
    shortDescription: "Lead digital transformation initiatives and foster innovation in your organization.",
    overview: "Navigate the digital landscape with confidence. This program covers digital transformation strategies, emerging technologies, innovation frameworks, and change management for the digital age.",
    outcomes: [
      "Develop a digital transformation roadmap",
      "Understand emerging technologies and their applications",
      "Create an innovation culture within your organization",
      "Manage digital change effectively",
      "Measure and communicate digital transformation ROI"
    ],
    whoShouldAttend: [
      "C-Suite Executives and Board Members",
      "IT Directors and CIOs",
      "Strategy and Innovation Leaders",
      "Digital Transformation Project Managers",
      "Business Unit Leaders"
    ],
    image: "/images/courses/digital.jpg",
    featured: true
  },
  {
    title: "Advanced Negotiation Skills",
    slug: "advanced-negotiation-skills",
    category: "Professional Skills",
    industry: "Cross-Industry",
    duration: "3 Days",
    shortDescription: "Master advanced negotiation techniques for complex business situations.",
    overview: "Elevate your negotiation capabilities with advanced techniques and strategies. This program covers complex multi-party negotiations, cross-cultural considerations, and psychological aspects of negotiation.",
    outcomes: [
      "Master principled negotiation techniques",
      "Navigate multi-party and complex negotiations",
      "Understand cross-cultural negotiation dynamics",
      "Develop persuasion and influence skills",
      "Handle difficult negotiators and deadlocks"
    ],
    whoShouldAttend: [
      "Senior Executives involved in negotiations",
      "Procurement and Supply Chain Managers",
      "Sales and Business Development Directors",
      "Legal Professionals",
      "Contract and Vendor Managers"
    ],
    image: "/images/courses/negotiation.jpg",
    featured: false
  },
  {
    title: "Public Sector Management & Governance",
    slug: "public-sector-management",
    category: "Public Administration",
    industry: "Government",
    duration: "5 Days",
    shortDescription: "Enhance public sector effectiveness through modern management and governance practices.",
    overview: "Strengthen public sector institutions through effective management and governance. This course addresses the unique challenges of public administration while introducing modern management practices.",
    outcomes: [
      "Apply modern management principles in public sector contexts",
      "Enhance public service delivery mechanisms",
      "Strengthen governance and accountability frameworks",
      "Navigate policy development and implementation",
      "Lead organizational change in government settings"
    ],
    whoShouldAttend: [
      "Senior Government Officials",
      "Ministry Directors and Heads of Departments",
      "Public Sector Managers",
      "Policy Advisors and Analysts",
      "Local Government Executives"
    ],
    image: "/images/courses/public-sector.jpg",
    featured: false
  }
];

// =========================================
// COURSE CATEGORIES - For filtering
// =========================================
export const courseCategories = [
  "All Categories",
  "Leadership",
  "Project Management",
  "Finance",
  "Human Resources",
  "Technical",
  "Technology",
  "Professional Skills",
  "Public Administration"
];

export const courseIndustries = [
  "All Industries",
  "Cross-Industry",
  "Banking & Finance",
  "Oil & Gas",
  "Government"
];

export const courseDurations = [
  "All Durations",
  "3 Days",
  "4 Days",
  "5 Days"
];
