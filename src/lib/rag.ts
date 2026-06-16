import fs from "fs";
import path from "path";
import { getProjects, getCaseStudies } from "./content";
import { siteConfig, skillsData } from "./site-config";

export interface KnowledgeChunk {
  id: string;
  source: string;
  content: string;
  keywords: string[];
}

function buildKnowledgeBase(): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];

  chunks.push({
    id: "about",
    source: "profile",
    content: `${siteConfig.name} is a UI/UX Designer and Frontend Developer. ${siteConfig.subheading} Education: ${siteConfig.education.degree} at ${siteConfig.education.university} (${siteConfig.education.period}). Email: ${siteConfig.email}. ${siteConfig.availability}. Passionate about creating intuitive, user-centered digital experiences with strong problem-solving mindset. Active in hackathons, design challenges, and collaborative projects.`,
    keywords: ["who", "about", "apoorv", "designer", "developer", "education", "background"],
  });

  chunks.push({
    id: "hire",
    source: "profile",
    content: `Why hire Apoorv Patel? He combines UI/UX design skills (Figma, research, prototyping, design systems) with frontend development (HTML, CSS, JavaScript, React, responsive design). He thinks in user problems, validates with research, and ships with code. He has hands-on project experience (ShopBazaar e-commerce Website design, Campus Connect student platform), participates in hackathons, mentors peers, and is eager to learn in fast-paced teams. Available for UI/UX and Frontend internships.`,
    keywords: ["hire", "why", "internship", "recruit", "candidate", "strengths"],
  });

  const skillText = skillsData
    .map((g) => `${g.category}: ${g.skills.map((s) => s.name).join(", ")}`)
    .join(". ");
  chunks.push({
    id: "skills",
    source: "skills",
    content: `Apoorv's skills include: ${skillText}. Technical: C, C++, HTML5, CSS3, JavaScript, React, TypeScript, Next.js, Tailwind CSS. Design: Figma, wireframing, prototyping, user research, user flows, design systems. Tools: Git, GitHub, VS Code, Framer, Behance.`,
    keywords: ["skills", "tools", "figma", "javascript", "frontend", "design"],
  });

  const projects = getProjects();
  projects.forEach((project) => {
    chunks.push({
      id: `project-${project.id}`,
      source: "projects",
      content: `Project: ${project.title}. Category: ${project.category}. ${project.description} Tags: ${project.tags.join(", ")}.${project.liveLink ? ` Live: ${project.liveLink}.` : ""}${project.githubLink ? ` GitHub: ${project.githubLink}.` : ""}`,
      keywords: ["project", project.id, project.title.toLowerCase(), ...project.tags.map((t) => t.toLowerCase())],
    });
  });

  const caseStudies = getCaseStudies();
  caseStudies.forEach((study) => {
    chunks.push({
      id: `case-${study.id}`,
      source: "case-studies",
      content: `Case Study: ${study.title}. ${study.overview} Role: ${study.role}. Timeline: ${study.timeline}. Tools: ${study.tools.join(", ")}. Problem: ${study.sections.problem.content} Impact: ${study.sections.impact.content}`,
      keywords: ["case study", study.id, study.title.toLowerCase(), "research", "design"],
    });
  });

  try {
    const resumePath = path.join(process.cwd(), "public/resume/apoorv-patel.pdf");
    if (fs.existsSync(resumePath)) {
      chunks.push({
        id: "resume",
        source: "resume",
        content:
          "Resume highlights: Aspiring UI/UX Designer and Frontend Developer. BE Computer Science at Chandigarh University (2024-2028). Projects: ShopBazaar (e-commerce Website design with Figma, user research, wireframing, prototyping), Campus Connect (responsive student community platform with HTML, CSS, JavaScript). Leadership: hackathons, design challenges, event organization, peer mentoring.",
        keywords: ["resume", "cv", "experience", "qualification"],
      });
    }
  } catch {
    // Resume optional at build time
  }

  return chunks;
}

let cachedKnowledge: KnowledgeChunk[] | null = null;

export function getKnowledgeBase(): KnowledgeChunk[] {
  if (!cachedKnowledge) {
    cachedKnowledge = buildKnowledgeBase();
  }
  return cachedKnowledge;
}

export function retrieveContext(query: string, limit = 4): KnowledgeChunk[] {
  const knowledge = getKnowledgeBase();
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  const scored = knowledge.map((chunk) => {
    let score = 0;
    const contentLower = chunk.content.toLowerCase();

    queryWords.forEach((word) => {
      if (contentLower.includes(word)) score += 2;
      if (chunk.keywords.some((k) => k.includes(word) || word.includes(k))) score += 3;
    });

    if (queryLower.includes("who") && chunk.id === "about") score += 10;
    if (queryLower.includes("project") && chunk.source === "projects") score += 5;
    if (queryLower.includes("skill") && chunk.id === "skills") score += 10;
    if ((queryLower.includes("hire") || queryLower.includes("why")) && chunk.id === "hire") score += 10;

    return { chunk, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.chunk);
}

export function generateResponse(query: string): string {
  const contexts = retrieveContext(query);

  if (contexts.length === 0) {
    return "I can help you learn about Apoorv's background, projects, skills, and why he'd be a great hire. Try asking: 'Who is Apoorv?', 'What projects has he worked on?', 'What skills does he have?', or 'Why should I hire him?'";
  }

  const queryLower = query.toLowerCase();

  if (queryLower.includes("who") || queryLower.includes("about")) {
    const about = contexts.find((c) => c.id === "about");
    return about?.content ?? contexts[0].content;
  }

  if (queryLower.includes("project")) {
    const projectChunks = contexts.filter((c) => c.source === "projects");
    if (projectChunks.length > 0) {
      return `Here are Apoorv's projects:\n\n${projectChunks.map((c) => `• ${c.content}`).join("\n\n")}`;
    }
  }

  if (queryLower.includes("skill")) {
    const skills = contexts.find((c) => c.id === "skills");
    return skills?.content ?? contexts[0].content;
  }

  if (queryLower.includes("hire") || queryLower.includes("why")) {
    const hire = contexts.find((c) => c.id === "hire");
    return hire?.content ?? contexts[0].content;
  }

  return contexts.map((c) => c.content).join("\n\n");
}
