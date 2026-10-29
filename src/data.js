export const profile = {
  name: 'Abhishek Yadav',
  tagline: 'Full-Stack Developer · AI/ML · Problem Solver',
  blurb:
    'Full-Stack Developer building production-grade MERN applications that solve real operational problems — from AI-driven healthcare platforms to JWT-secured payroll systems.',
  location: 'Ghaziabad, Uttar Pradesh',
  education: 'B.Tech IT · AKGEC (AKTU)',
  stack: 'MERN · JWT · MongoDB · Firebase · Gemini AI',
  email: 'abhishek.ybit@gmail.com',
  phone: '',
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
    image: '/projects/asha-plus.png',
    links: [
      { label: 'Live', href: 'https://asha-care-b95ff.web.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/Asha-Plus-AI-Healthcare' },
    ],
  },
  {
    id: '02',
    tag: 'LIVE',
    title: 'CME',
    stack: 'React · Node.js · Express · MongoDB · JWT',
    description:
      'Role-based attendance & payroll management system for a government electrical contracting firm. RESTful backend with JWT auth and role-scoped middleware, admin CRUD with duplicate-ID validation, and overtime/undertime logic with proportional deduction and color-coded badges.',
    image: '/projects/cme.png',
    links: [
      { label: 'Live', href: 'https://cmebase.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/CME' },
    ],
  },
  {
    id: '03',
    tag: 'Live',
    title: 'Healio+',
    stack: 'React · Node.js · Express · Firebase · Gemini API',
    description:
      'AI-powered healthcare companion app with a bilingual (English/Hindi) health assistant, OCR-based medical document analysis, reminders, calendar notes, and a government schemes directory. Built with React, Node.js/Express, and Firebase; features a resilient AI fallback chain (Gemini → Groq → Hugging Face).',
    image: '/projects/healio-plus.png',
    links: [
      { label: 'Live', href: 'https://healthgpt-90b51.web.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/Healio-Plus' },
    ],
  },
  {
    id: '04',
    tag: 'Live',
    title: 'QueryRAG',
    stack: 'Python · Streamlit · LangChain · FAISS · Gemini API',
    description:
      'Retrieval-Augmented Generation app for querying PDF documents in natural language. Extracts and chunks PDF text, generates Gemini embeddings, indexes them in a local FAISS vector store, and retrieves the most relevant chunks to ground Gemini-generated answers — with source chunks and page numbers shown alongside each response.',
    image: '/projects/rag-project.png',
    links: [
      { label: 'Live', href: 'https://doc-ques.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/RAG-Project' },
    ],
  },
  {
  id: '05',
  tag: 'Project',
  title: 'Loan Eligibility Engine',
  stack: 'n8n · AWS Lambda · AWS SES · PostgreSQL · React',
  description:
    'Automated loan eligibility pipeline that ingests applicant data from CSV files, stores it in PostgreSQL, and runs n8n workflows to match each applicant against loan products. Eligible applicants are notified through AWS SES emails, and a minimal UI lets users upload data and view the results.',
  image: '/projects/loan-eligibility-engine.png',
  links: [
    { label: 'GitHub', href: 'https://github.com/abhi4865/loan-eligibility-engine' },
  ],
},
]

export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'React Router', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'JWT Auth'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Mongoose ODM', 'Schema Design'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Render', 'Railway'] },
  { group: 'Core Fundamentals', items: ['DSA', 'Operating Systems', 'DBMS', 'OOPs', 'Networks'] },
]

export const experience = [
  {
    date: 'Mar 2026 — Aug 2026',
    title: 'Full-Stack Developer',
    org: 'CME ("A" Class Govt. Contractor)',
    desc: 'Built a role-based full-stack attendance and payroll management system with separate admin and employee dashboards. Designed a RESTful backend with Node.js, Express and MongoDB (Mongoose), JWT auth and role-scoped middleware. Deployed frontend on Vercel and backend on Render with zero-downtime redeploys on every push.',
    tech: 'React, Node.js, Express, MongoDB, JWT, Vercel, Render',
    links: [
      { label: 'Live', href: 'https://cmebase.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/CME' },
    ],
  },
]

export const achievements = [
  {
    title: 'Top 100 Nationwide',
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

export const hackathons = [
  {
    id: '01',
    title: 'Code for Bharat — Season 2',
    meta: 'Tech Masters India · Jul—Aug 2025',
    description:
      'Participated in the Code for Bharat Season 2 hackathon (10,000+ nationwide entrants), placing in the top 100 for innovation in technology.',
    image: '/hackathons/code-for-bharat.png',
    link: {
      label: 'Verify',
      href: 'https://verification.givemycertificate.com/v/97b61086-be4f-439c-9c88-b6d7c28dde40',
    },
  },
  {
    id: '02',
    title: 'ChatGPT Codex Hackathon 2026',
    meta: 'OpenAI · National AI Product-Building Challenge',
    description:
      'Built an AI-powered product using ChatGPT Codex by OpenAI, competing alongside developers, innovators, students, and founders turning ideas into real products.',
    image: '/hackathons/codex-hackathon.png',
    link: {
      label: 'Verify',
      href: 'https://blockseblock.com/certificate_preview/BSB-HKI9FG-MSDJR6SJ',
    },
  },
]

export const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]