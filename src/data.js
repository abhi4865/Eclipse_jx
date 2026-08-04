export const profile = {
  name: 'Abhishek Yadav',
  tagline: 'Full-Stack Developer · MERN Enthusiast · Problem Solver',
  blurb:
    'Full-Stack Developer building production-grade MERN applications that solve real operational problems — from AI-driven healthcare platforms to JWT-secured payroll systems.',
  location: 'Ghaziabad, Uttar Pradesh',
  education: 'B.Tech IT · AKGEC (AKTU)',
  stack: 'MERN · JWT · MongoDB · Firebase · Gemini AI',
  email: 'abhishek.ybit@gmail.com',
  phone: '+91 6387121599',
  links: {
    linkedin: 'https://www.linkedin.com/in/abhishek-yadav-ybit6',
    github: 'https://github.com/abhi4865',
    leetcode: 'https://leetcode.com/u/abhishek5353/',
    codolio: 'https://codolio.com/profile/abhishek5353',
  },
}

export const projects = [
  {
    id: '01',
    tag: 'LIVE',
    title: 'ASHA+',
    stack: 'React · Node.js · Firebase · Vercel · Gemini AI · Firestore',
    description:
      'Full-stack, role-based AI healthcare platform for ASHA workers and rural patients. Voice-driven registration via Web Speech API cuts onboarding from ~3 minutes to under 1. A 3-provider AI fallback chain (Gemini, Groq, HuggingFace) handles OCR-based medical document analysis, reducing manual data entry by ~60%.',
    links: [
      { label: 'Live', href: 'https://asha-care-b95ff.web.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/Asha-Plus-AI-Healthcare' },
    ],
  },
  {
    id: '02',
    tag: 'LIVE',
    title: 'CME Payroll',
    stack: 'React · Node.js · Express · MongoDB · JWT',
    description:
      'Role-based attendance & payroll management system for a government electrical contracting firm. RESTful backend with JWT auth and role-scoped middleware, admin CRUD with duplicate-ID validation, and overtime/undertime logic with proportional deduction and color-coded badges.',
    links: [
      { label: 'Live', href: 'https://cmebase.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/CME' },
    ],
  },
  {
    id: '03',
    tag: 'GITHUB',
    title: 'AshaAI Chatbot',
    stack: 'React · Gemini API · Web Speech API · jsPDF',
    description:
      'Bilingual (Hindi/English) health assistant embedded in ASHA+ delivering trustworthy responses to health queries, with voice-input interaction and downloadable PDF summaries of AI suggestions for rural users with low literacy.',
    links: [{ label: 'GitHub', href: 'https://github.com/abhi4865/Asha-Plus-AI-Healthcare' }],
  },
  {
    id: '04',
    tag: 'FREELANCE',
    title: 'Admin Dashboard',
    stack: 'React · Tailwind · Node.js · Mongoose',
    description:
      'Admin CRUD panel powering the CME payroll system. Employee management with duplicate-ID validation, deletion-confirmation modal and real-time net-salary computation covering allowances and deductions across a 20+ employee firm.',
    links: [{ label: 'Live', href: 'https://cmebase.vercel.app/' }],
  },
  {
    id: '05',
    tag: 'PERSONAL PROJECT',
    title: 'DSA Journey',
    stack: 'C++ · LeetCode · GeeksforGeeks · CodeChef',
    description:
      'Solved 500+ DSA problems across LeetCode, GeeksforGeeks and CodeChef. Ranked in the Top 300 nationwide out of 10,000+ participants at the Code for Bharat Season 2 hackathon. Consistent daily practice tracked on Codolio.',
    links: [
      { label: 'Profile', href: 'https://codolio.com/profile/abhishek5353' },
      { label: 'LeetCode', href: 'https://leetcode.com/u/abhishek5353/' },
    ],
  },
]

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'React Router', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'JWT Auth'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Mongoose ODM', 'Schema Design'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Render', 'Railway'] },
  { group: 'Core Fundamentals', items: ['DSA', 'Operating Systems', 'DBMS', 'OOPs', 'Networks'] },
]

export const experience = [
  {
    date: 'May 2026 — Jul 2026',
    title: 'Full-Stack Developer — Freelance',
    org: 'CME (Government Electrical Contractor)',
    desc: 'Built a role-based full-stack attendance and payroll management system with separate admin and employee dashboards. Designed a RESTful backend with Node.js, Express and MongoDB (Mongoose), JWT auth and role-scoped middleware. Deployed frontend on Vercel and backend on Render with zero-downtime redeploys on every push.',
    tech: 'React, Node.js, Express, MongoDB, JWT, Vercel, Render',
  },
  {
    date: '2025 — Present',
    title: 'Independent Full-Stack Developer',
    org: 'ASHA+ AI Healthcare Platform',
    desc: 'Developed a role-based healthcare platform for ASHA workers and rural patients. Voice-driven registration via Web Speech API, serverless backend on Vercel with Firebase Admin SDK across 15+ endpoints and a 3-provider AI fallback chain for OCR-based medical document analysis.',
    tech: 'React, Node.js, Firebase, Gemini AI, Firestore, Vercel',
  },
  {
    date: '2023 — Present',
    title: 'B.Tech in Information Technology',
    org: 'Ajay Kumar Garg Engineering College, AKTU',
    desc: 'Pursuing B.Tech in Information Technology at AKGEC, Ghaziabad. Current CGPA: 7.95. Actively participating in national hackathons and solving competitive programming problems while building production-grade side projects.',
    tech: 'DSA, OS, DBMS, OOPs, Computer Networks',
  },
  {
    date: '2018 — 2022',
    title: 'Higher Secondary (CBSE)',
    org: 'Central Hindu Boys SSS, BHU, Varanasi',
    desc: 'Completed Class 10 with 89.40% and Class 12 with 75.20% from CBSE board at Central Hindu Boys School, Banaras Hindu University, Varanasi.',
    tech: 'Class 10: 89.40% · Class 12: 75.20%',
  },
]

export const achievements = [
  {
    title: 'Top 300 Nationwide',
    desc: 'Code for Bharat Season 2 Hackathon (out of 10,000+ participants).',
    href: 'https://drive.google.com/file/d/17gYe7kwjmRo5QxGif3S6U6frQrP1G6vm/view?usp=sharing',
  },
  {
    title: '500+ DSA Problems Solved',
    desc: 'Across LeetCode, GeeksforGeeks and CodeChef — tracked on Codolio.',
    href: 'https://codolio.com/profile/abhishek5353',
  },
  {
    title: 'Python · DSA Certification',
    desc: 'Python Programming, Data Structures & Algorithms — Infosys Springboard.',
    href: 'https://drive.google.com/drive/folders/1gqmPSRcgxa045VCfiFiRhoRZb2wbsQzB?usp=sharing',
  },
  {
    title: '5-Star in C++',
    desc: 'HackerRank problem solving track — verified profile.',
    href: 'https://www.hackerrank.com/profile/abhi4865',
  },
]

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Résumé', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
