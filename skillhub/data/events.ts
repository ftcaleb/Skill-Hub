export interface Event {
  title: string;
  slug: string;
  category: string;
  location: string;
  city: string;
  country: string;
  startDate: string;
  endDate: string;
  shortDescription: string;
  overview: string;
  objectives: string[];
  agenda: {
    day: string;
    items: string[];
  }[];
  image: string;
  featured: boolean;
}

export const eventsData: Event[] = [
  {
    title: "Global Leadership Summit 2026",
    slug: "global-leadership-summit-2026",
    category: "Conference",
    location: "Dubai World Trade Centre",
    city: "Dubai",
    country: "United Arab Emirates",
    startDate: "2026-03-15",
    endDate: "2026-03-17",
    shortDescription: "Join global leaders for three days of insights, networking, and transformational learning experiences.",
    overview: "The Global Leadership Summit brings together executives, thought leaders, and change-makers from around the world. This premier event features keynote presentations, interactive workshops, and networking opportunities designed to inspire and equip leaders for the challenges ahead.",
    objectives: [
      "Gain insights from world-renowned leadership experts",
      "Network with peers from diverse industries and regions",
      "Explore emerging trends shaping the future of leadership",
      "Participate in interactive workshops and case studies",
      "Develop actionable strategies for organizational transformation"
    ],
    agenda: [
      {
        day: "Day 1 - March 15",
        items: [
          "Registration and Welcome Coffee",
          "Opening Keynote: The Future of Leadership",
          "Panel Discussion: Leading Through Uncertainty",
          "Networking Lunch",
          "Breakout Sessions",
          "Evening Reception"
        ]
      },
      {
        day: "Day 2 - March 16",
        items: [
          "Morning Keynote: Digital Leadership",
          "Workshop: Building High-Performance Teams",
          "Industry Roundtables",
          "Gala Dinner"
        ]
      },
      {
        day: "Day 3 - March 17",
        items: [
          "Leadership Masterclass",
          "Closing Keynote: Leading with Purpose",
          "Certificate Presentation",
          "Closing Remarks"
        ]
      }
    ],
    image: "/images/events/leadership-summit.jpg",
    featured: true
  },
  {
    title: "Project Management Excellence Forum",
    slug: "pm-excellence-forum-2026",
    category: "Forum",
    location: "London ExCeL Centre",
    city: "London",
    country: "United Kingdom",
    startDate: "2026-04-22",
    endDate: "2026-04-23",
    shortDescription: "Elevate your project management capabilities with insights from industry pioneers and practitioners.",
    overview: "The Project Management Excellence Forum is designed for professionals seeking to enhance their project delivery capabilities. Featuring expert speakers, practical workshops, and the latest tools and methodologies.",
    objectives: [
      "Learn cutting-edge project management methodologies",
      "Discover tools for effective project delivery",
      "Share experiences with fellow professionals",
      "Earn PDUs for PMP certification maintenance",
      "Explore agile and hybrid approaches"
    ],
    agenda: [
      {
        day: "Day 1 - April 22",
        items: [
          "Welcome and Industry Overview",
          "Keynote: The Evolution of Project Management",
          "Workshop: Agile at Scale",
          "Networking Sessions"
        ]
      },
      {
        day: "Day 2 - April 23",
        items: [
          "Risk Management Masterclass",
          "Panel: PM in the Digital Age",
          "Closing Keynote and Awards"
        ]
      }
    ],
    image: "/images/events/pm-forum.jpg",
    featured: true
  },
  {
    title: "Finance & Banking Conference Africa",
    slug: "finance-banking-africa-2026",
    category: "Conference",
    location: "Johannesburg Convention Centre",
    city: "Johannesburg",
    country: "South Africa",
    startDate: "2026-05-10",
    endDate: "2026-05-12",
    shortDescription: "Explore the future of finance and banking across the African continent.",
    overview: "This flagship event brings together financial leaders, regulators, and innovators to discuss the transformation of banking and finance in Africa. Topics include fintech innovation, regulatory developments, and sustainable finance.",
    objectives: [
      "Understand regulatory changes affecting African banking",
      "Explore fintech partnerships and innovations",
      "Network with financial sector leaders",
      "Discuss sustainable and inclusive finance",
      "Identify investment opportunities"
    ],
    agenda: [
      {
        day: "Day 1 - May 10",
        items: [
          "Opening Ceremony",
          "Keynote: African Finance Transformation",
          "Regulatory Panel Discussion",
          "Fintech Showcase"
        ]
      },
      {
        day: "Day 2 - May 11",
        items: [
          "Sustainable Finance Workshop",
          "Banking Innovation Awards",
          "Networking Dinner"
        ]
      },
      {
        day: "Day 3 - May 12",
        items: [
          "Investment Opportunities Session",
          "Closing Keynote",
          "Conference Close"
        ]
      }
    ],
    image: "/images/events/finance-africa.jpg",
    featured: false
  },
  {
    title: "HR Innovation Summit",
    slug: "hr-innovation-summit-2026",
    category: "Summit",
    location: "Marina Bay Sands",
    city: "Singapore",
    country: "Singapore",
    startDate: "2026-06-05",
    endDate: "2026-06-06",
    shortDescription: "Discover the future of human resources and talent management strategies.",
    overview: "The HR Innovation Summit showcases the latest trends in human resources management, from AI-powered recruitment to employee experience design. Connect with HR leaders and technology providers shaping the future of work.",
    objectives: [
      "Explore HR technology innovations",
      "Learn employee engagement best practices",
      "Discuss diversity, equity, and inclusion strategies",
      "Network with HR professionals globally",
      "Understand the future of work trends"
    ],
    agenda: [
      {
        day: "Day 1 - June 5",
        items: [
          "Future of Work Keynote",
          "HR Tech Showcase",
          "Workshop: Employee Experience Design",
          "Evening Networking"
        ]
      },
      {
        day: "Day 2 - June 6",
        items: [
          "DEI Leadership Panel",
          "Talent Management Masterclass",
          "Awards Ceremony and Close"
        ]
      }
    ],
    image: "/images/events/hr-summit.jpg",
    featured: true
  },
  {
    title: "Energy Sector Training Week",
    slug: "energy-training-week-2026",
    category: "Training",
    location: "Abu Dhabi National Exhibition Centre",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    startDate: "2026-09-14",
    endDate: "2026-09-18",
    shortDescription: "Intensive training programs covering all aspects of the energy sector.",
    overview: "A week-long intensive training program covering oil and gas operations, renewable energy, and energy transition strategies. Participants can choose from multiple tracks tailored to their professional development needs.",
    objectives: [
      "Gain comprehensive energy sector knowledge",
      "Understand energy transition dynamics",
      "Learn operational excellence practices",
      "Network with industry professionals",
      "Earn professional development credits"
    ],
    agenda: [
      {
        day: "Days 1-2",
        items: [
          "Track A: Upstream Operations",
          "Track B: Renewable Energy Fundamentals",
          "Track C: Energy Economics"
        ]
      },
      {
        day: "Days 3-4",
        items: [
          "Track A: Downstream & Refining",
          "Track B: Energy Transition Strategy",
          "Track C: Project Finance"
        ]
      },
      {
        day: "Day 5",
        items: [
          "Combined Sessions",
          "Certification Ceremony",
          "Networking Event"
        ]
      }
    ],
    image: "/images/events/energy-training.jpg",
    featured: false
  },
  {
    title: "Public Sector Transformation Forum",
    slug: "public-sector-forum-2026",
    category: "Forum",
    location: "Kigali Convention Centre",
    city: "Kigali",
    country: "Rwanda",
    startDate: "2026-07-20",
    endDate: "2026-07-22",
    shortDescription: "Advancing public sector excellence through innovation and good governance.",
    overview: "This forum brings together government officials, development partners, and thought leaders to discuss public sector modernization. Topics include digital government, citizen services, and institutional capacity building.",
    objectives: [
      "Share best practices in public sector management",
      "Explore digital government solutions",
      "Discuss governance and accountability",
      "Foster regional collaboration",
      "Identify capacity building priorities"
    ],
    agenda: [
      {
        day: "Day 1 - July 20",
        items: [
          "Opening by Government Officials",
          "Keynote: Public Sector Innovation",
          "Digital Government Showcase",
          "Official Dinner"
        ]
      },
      {
        day: "Day 2 - July 21",
        items: [
          "Governance Workshop",
          "Citizen Services Panel",
          "Regional Collaboration Session"
        ]
      },
      {
        day: "Day 3 - July 22",
        items: [
          "Capacity Building Strategies",
          "Closing Declaration",
          "Forum Close"
        ]
      }
    ],
    image: "/images/events/public-sector.jpg",
    featured: false
  }
];

// =========================================
// EVENT FILTERS - For filtering
// =========================================
export const eventCategories = [
  "All Categories",
  "Conference",
  "Forum",
  "Summit",
  "Training"
];

export const eventLocations = [
  "All Locations",
  "Dubai",
  "London",
  "Johannesburg",
  "Singapore",
  "Abu Dhabi",
  "Kigali"
];
