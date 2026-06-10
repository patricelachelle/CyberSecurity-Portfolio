import {
  BookOpenCheck,
  Bot,
  Gamepad2,
  Network,
  SearchCode,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  status: "Placeholder" | "In Progress" | "Completed";
  tools: string[];
  shortDescription: string;
  detailedDescription: string;
  keySkills: string[];
  githubLink?: string;
  screenshots?: {
    src: string;
    alt: string;
  }[];
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    title: "Cyber Study Arena",
    category: "Security Training & Awareness",
    status: "Completed",
    tools: ["React", "Node.js", "Express", "Socket.IO", "Firebase Hosting", "Cloud Run", "Vertex AI"],
    shortDescription:
      "A cybersecurity study game with solo practice, live multiplayer rooms, flashcards, scenarios, and AI-supported interview practice.",
    detailedDescription:
      "Built as a shareable training tool for Google Cybersecurity Certificate study sessions and mentoring. The app supports category-focused review, immediate answer explanations, missed-question review, team play, secure host controls, server-side scoring, and backend cost guardrails for AI-generated practice.",
    keySkills: [
      "Security awareness training",
      "Full-stack deployment",
      "Realtime multiplayer architecture",
      "Backend security controls",
    ],
    githubLink: "https://github.com/patricelachelle/Study-Game",
    screenshots: [
      {
        src: "projects/cyber-study-arena/setup-dashboard.png",
        alt: "Cyber Study Arena study setup screen with category selection and multiplayer room controls",
      },
      {
        src: "projects/cyber-study-arena/active-quiz.png",
        alt: "Cyber Study Arena active SQL quiz question with progress panel",
      },
    ],
    icon: Gamepad2,
  },
  {
    title: "Speak the Word",
    category: "Full-Stack Study App",
    status: "Completed",
    tools: ["React", "Vite", "Firebase Auth", "Firestore", "Firebase Functions", "API.Bible", "Gemini/Vertex AI"],
    shortDescription:
      "A Bible reading, pronunciation, journaling, and reflection app with AI-supported study guidance and privacy-minded social features.",
    detailedDescription:
      "Built to help users search Scripture, hear difficult words pronounced, save favorite verses, journal prayers, ask faith-based study questions, and receive AI-supported reflection while keeping provider secrets backend-only and using username-first social features instead of exposing email addresses.",
    keySkills: [
      "Privacy-first user experience",
      "Backend API integration",
      "Authentication and profile design",
      "AI-assisted study workflow",
    ],
    githubLink: "https://github.com/patricelachelle/Pronounce-Bible-Words-main",
    screenshots: [
      {
        src: "projects/speak-the-word/create-account.png",
        alt: "Speak the Word account creation screen with username-first signup",
      },
      {
        src: "projects/speak-the-word/bible-reader.png",
        alt: "Speak the Word Bible reader screen with passage selection and scripture text",
      },
      {
        src: "projects/speak-the-word/ai-study.png",
        alt: "Speak the Word AI study screen showing verse analysis, historical context, life application, and prayer reflection",
      },
    ],
    icon: BookOpenCheck,
  },
  {
    title: "AI Safety and Prompt Injection Evaluation",
    category: "AI Security",
    status: "Completed",
    tools: ["Python", "Ollama", "Llama 3.2", "Prompt Injection Testing", "OWASP LLM Top 10", "MITRE ATLAS", "NIST AI RMF"],
    shortDescription:
      "A local AI security evaluation sandbox for testing prompt injection, data disclosure risk, and defensive guardrail behavior.",
    detailedDescription:
      "Created a controlled LLM evaluation harness using a local Llama 3.2 model through Ollama. The project compares an unprotected baseline against a hardened gateway design, maps attack vectors to OWASP LLM Top 10 and MITRE ATLAS, and documents inbound prompt filtering plus outbound data loss prevention controls.",
    keySkills: [
      "AI security testing",
      "Prompt injection analysis",
      "Guardrail evaluation",
      "Risk documentation",
    ],
    githubLink: "https://github.com/patricelachelle/AI-Safety-Evaluation",
    screenshots: [
      {
        src: "projects/ai-safety-evaluation/baseline-test.png",
        alt: "AI Safety Evaluation terminal output showing unprotected prompt injection baseline testing",
      },
      {
        src: "projects/ai-safety-evaluation/guardrail-result.png",
        alt: "AI Safety Evaluation terminal output showing protected gateway guardrail results",
      },
      {
        src: "projects/ai-safety-evaluation/evaluation-output.png",
        alt: "AI Safety Evaluation output documenting prompt injection evaluation results",
      },
    ],
    icon: Bot,
  },
  {
    title: "Prompt Validation Project",
    category: "AI Validation & QA",
    status: "Completed",
    tools: ["Python", "Pandas", "SQL", "Prompt Engineering", "OpenPyXL", "Excel QA", "LLM Validation"],
    shortDescription:
      "An AI validation workflow for product-operations triage and benefits-rule auditing using prompts, Python validation harnesses, and SQL reporting.",
    detailedDescription:
      "Built a compact validation project around two enterprise-style scenarios: prompt-governed product operations triage and deterministic benefits-status auditing. The project uses prompt frameworks, Python validation engines, SQL accuracy queries, and artifact-based review to turn vague model behavior into measurable quality signals and business-ready findings.",
    keySkills: [
      "Prompt validation design",
      "Python QA automation",
      "SQL accuracy reporting",
      "LLM output auditing",
    ],
    githubLink: "https://github.com/patricelachelle/Prompt-Validation-Project",
    screenshots: [
      {
        src: "projects/prompt-validation-project/prodops-prompt-design.png",
        alt: "Prompt Validation Project prompt design for bug categorization and product operations triage",
      },
      {
        src: "projects/prompt-validation-project/prodops-validation-output.png",
        alt: "Prompt Validation Project Python validation output showing product operations classification mismatches",
      },
      {
        src: "projects/prompt-validation-project/validation-sql-reporting.png",
        alt: "Prompt Validation Project SQL reporting screenshot showing validation accuracy and failure metrics",
      },
    ],
    icon: Bot,
  },
  {
    title: "Windows Detection Engineering Pack",
    category: "Detection Engineering",
    status: "Completed",
    tools: ["Splunk", "SPL", "Windows Event Logs", "Web Logs", "DNS Logs", "MITRE ATT&CK", "Threat Intelligence"],
    shortDescription:
      "A multi-scenario detection engineering project for validating brute force, PowerShell abuse, web exploitation, registry persistence, and DNS tunneling detections in Splunk.",
    detailedDescription:
      "Built a six-part detection pack around realistic Windows, web, and network attack simulations in a Splunk lab. The project includes ATT&CK-aligned detections, analyst-focused SPL queries, validation evidence, triage guidance, and follow-up threat-intelligence enrichment to show how detection logic supports real SOC workflows.",
    keySkills: [
      "Detection engineering",
      "SPL query development",
      "Threat hunting and triage",
      "ATT&CK-aligned alert validation",
    ],
    githubLink: "https://github.com/patricelachelle/windows-detection-engineering-pack",
    screenshots: [
      {
        src: "projects/windows-detection-engineering-pack/brute-force-detection-results.png",
        alt: "Splunk detection results for brute-force authentication activity in the Windows Detection Engineering Pack",
      },
      {
        src: "projects/windows-detection-engineering-pack/powershell-detection-results.png",
        alt: "Splunk detection results for suspicious PowerShell execution in the Windows Detection Engineering Pack",
      },
      {
        src: "projects/windows-detection-engineering-pack/api-active-lookup.png",
        alt: "Threat intelligence enrichment screenshot from the Windows Detection Engineering Pack automation workflow",
      },
    ],
    icon: SearchCode,
  },
  {
    title: "SIEM Log Analysis Lab",
    category: "Detection & Analysis",
    status: "Completed",
    tools: ["Splunk Cloud", "SPL", "Windows Event Logs", "JSON Logs", "MITRE ATT&CK", "Incident Response"],
    shortDescription:
      "A Splunk Cloud investigation lab for triaging credential spraying, account compromise, and PowerShell-based C2 activity.",
    detailedDescription:
      "Performed an end-to-end SOC-style investigation by ingesting Windows security telemetry, validating event data, writing SPL queries, identifying a credential spraying pattern, confirming the compromised service account, and documenting PowerShell post-exploitation activity with defensive remediation recommendations.",
    keySkills: [
      "SIEM data ingestion",
      "SPL query development",
      "Threat hunting",
      "Incident timeline documentation",
    ],
    githubLink: "https://github.com/patricelachelle/SIEM-Log-Analysis-Lab",
    screenshots: [
      {
        src: "projects/siem-log-analysis-lab/raw-telemetry.png",
        alt: "Splunk Cloud view showing raw incident telemetry ingestion for the SIEM lab",
      },
      {
        src: "projects/siem-log-analysis-lab/failed-logon-statistics.png",
        alt: "Splunk table showing failed logon statistics used to identify credential spraying",
      },
      {
        src: "projects/siem-log-analysis-lab/powershell-execution-audit.png",
        alt: "Splunk search output showing PowerShell execution audit results for post-exploitation analysis",
      },
    ],
    icon: SearchCode,
  },
  {
    title: "Automated OSINT Threat Enrichment Pipeline",
    category: "Threat Intelligence & Automation",
    status: "Completed",
    tools: ["Python", "Regex", "AbuseIPDB API", "Pandas", "CSV Reporting", "OSINT"],
    shortDescription:
      "A Python-based pipeline that parses messy network logs, validates IP data, and enriches indicators with live threat intelligence.",
    detailedDescription:
      "Built an automated workflow for SOC-style threat enrichment by sanitizing unstructured log input, extracting unique IPv4 addresses, querying the AbuseIPDB API for reputation data, and exporting a structured CSV report that supports faster triage and more consistent analyst review.",
    keySkills: [
      "Threat intelligence enrichment",
      "Security automation",
      "Log parsing and validation",
      "Structured reporting",
    ],
    githubLink: "https://github.com/patricelachelle/automated-threat-parser",
    screenshots: [
      {
        src: "projects/automated-threat-parser/messy-data.png",
        alt: "Automated threat parser screenshot showing messy unstructured log data before cleanup",
      },
      {
        src: "projects/automated-threat-parser/terminal-execution.png",
        alt: "Automated threat parser terminal execution showing parsed IPs and threat enrichment alerts",
      },
      {
        src: "projects/automated-threat-parser/csv-report.png",
        alt: "Automated threat parser CSV report showing structured threat intelligence output",
      },
    ],
    icon: Network,
  },
];
