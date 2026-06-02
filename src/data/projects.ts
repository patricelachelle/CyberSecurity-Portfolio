import {
  AlertTriangle,
  BookOpenCheck,
  Bot,
  ClipboardCheck,
  FileWarning,
  Gamepad2,
  GraduationCap,
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
    title: "Network Traffic Analysis with Wireshark",
    category: "Network Security",
    status: "Placeholder",
    tools: ["Wireshark", "Tcpdump", "Packet Capture", "TCP/IP"],
    shortDescription:
      "A planned packet-analysis project focused on reading traffic patterns and documenting network observations.",
    detailedDescription:
      "Use this placeholder for a lab that explains the traffic captured, what normal and unusual behavior looked like, and how the findings connect to network security fundamentals.",
    keySkills: ["Packet analysis", "Network troubleshooting", "Protocol review", "Technical reporting"],
    icon: Network,
  },
  {
    title: "Vulnerability Assessment Report",
    category: "Risk & Mitigation",
    status: "Placeholder",
    tools: ["Nmap", "Vulnerability Scanning", "Risk Matrix", "Remediation Planning"],
    shortDescription:
      "A planned report that identifies security weaknesses, assigns risk levels, and recommends practical mitigations.",
    detailedDescription:
      "Replace this with a structured vulnerability assessment that includes scope, findings, severity, business impact, remediation steps, and evidence screenshots where appropriate.",
    keySkills: ["Risk identification", "Vulnerability assessment", "Mitigation planning", "Executive communication"],
    icon: FileWarning,
  },
  {
    title: "Incident Response Case Study",
    category: "Incident Response",
    status: "Placeholder",
    tools: ["NIST CSF", "Incident Handler Journal", "Timeline Documentation"],
    shortDescription:
      "A planned case study for documenting an incident from detection through recovery recommendations.",
    detailedDescription:
      "Use this project to show how you organize incident notes, determine scope, communicate impact, and document containment, eradication, recovery, and lessons learned.",
    keySkills: ["Incident response", "Root-cause analysis", "Recovery planning", "Process improvement"],
    icon: AlertTriangle,
  },
  {
    title: "Security Awareness Training Program",
    category: "Training & Awareness",
    status: "Placeholder",
    tools: ["Presentation Design", "Policy Communication", "Phishing Awareness"],
    shortDescription:
      "A planned training artifact for translating security practices into clear guidance for everyday users.",
    detailedDescription:
      "Replace this with a training plan, slide deck, or awareness campaign that demonstrates your ability to teach secure behavior and communicate with non-technical audiences.",
    keySkills: ["Security awareness", "Training delivery", "Plain-language communication", "Leadership"],
    icon: GraduationCap,
  },
  {
    title: "Compliance and Risk Assessment Project",
    category: "Compliance",
    status: "Placeholder",
    tools: ["NIST CSF", "PCI DSS", "GDPR", "SOC 1/SOC 2"],
    shortDescription:
      "A planned compliance-focused project for mapping controls, identifying gaps, and recommending improvements.",
    detailedDescription:
      "Use this placeholder for a controls review or audit-style project that explains the framework used, the risks discovered, and the practical steps recommended to reduce exposure.",
    keySkills: ["Compliance review", "Control mapping", "Gap analysis", "Stakeholder reporting"],
    icon: ClipboardCheck,
  },
];
