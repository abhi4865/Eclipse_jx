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
    tag: 'Live',
    title: 'Helio+',
    stack: 'MERN · JWT · MongoDB · Firebase · Gemini AI · Python · Streamlit · LangChain',
    description:
      'AI-powered healthcare companion for health guidance, reminders, medical document analysis, calendar notes, and government scheme discovery.',
    links: [{ label: 'Live', href: 'https://healthgpt-90b51.web.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/Healio-Plus' }],
  },
  {
    id: '04',
    tag: 'Live',
    title: 'RAG-Based Document Q&A System',
    stack: 'Python · Streamlit · LangChain · FAISS · Gemini API',
    description:
      'Retrieval-Augmented Generation app for querying PDF documents in natural language. Extracts and chunks PDF text, generates Gemini embeddings, indexes them in a local FAISS vector store, and retrieves the most relevant chunks to ground Gemini-generated answers — with source chunks and page numbers shown alongside each response.',
    links: [{ label: 'Live', href: 'https://doc-ques.streamlit.app/' },
      { label: 'GitHub', href: 'https://github.com/abhi4865/RAG-Project' }],
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
    org: 'CME ("A" Class Govt. Contractor)',
    desc: 'Built a role-based full-stack attendance and payroll management system with separate admin and employee dashboards. Designed a RESTful backend with Node.js, Express and MongoDB (Mongoose), JWT auth and role-scoped middleware. Deployed frontend on Vercel and backend on Render with zero-downtime redeploys on every push.',
    tech: 'React, Node.js, Express, MongoDB, JWT, Vercel, Render',
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
  { label: 'Contact', href: '#contact' },
]