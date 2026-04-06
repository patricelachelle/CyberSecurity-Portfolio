import { motion, useScroll, useSpring } from "motion/react";
import { 
  Shield, 
  Terminal as TerminalIcon, 
  Lock, 
  Search, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Code, 
  Database, 
  Cpu, 
  Activity,
  User,
  Layers
} from "lucide-react";
import { useState, useEffect } from "react";

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = "I am a dedicated career-changer transitioning into the world of Cybersecurity with over a decade of experience working in data‑sensitive, compliance‑driven environments across education, healthcare, insurance, and social services. Currently completing intensive training with Merit America and the Google Cybersecurity Professional Certificate.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900/80 border border-purple-500/30 rounded-lg overflow-hidden font-mono text-sm shadow-2xl glow-border">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-purple-500/20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-purple-500/50" />
        </div>
        <span className="text-slate-400 text-xs ml-2">patrice@cyber-shell: ~</span>
      </div>
      <div className="p-6 text-purple-400 leading-relaxed">
        <div className="flex gap-2 mb-2">
          <span className="text-purple-500 font-bold">$</span>
          <span>whoami</span>
        </div>
        <div className="mb-4 text-slate-300">
          {text}
          <span className="inline-block w-2 h-4 bg-purple-500 ml-1 animate-pulse" />
        </div>
        <div className="flex gap-2">
          <span className="text-purple-500 font-bold">$</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: "rgba(168, 85, 247, 0.5)" }}
    className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 border border-purple-500/20">
      <Icon className="w-6 h-6 text-purple-400" />
    </div>
    <h3 className="text-lg font-bold text-white mb-3 glow-text">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-2 py-1 text-xs font-mono bg-slate-800 text-purple-400/80 rounded border border-purple-500/10">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectCard = ({ title, description, tags, link, status }: { title: string, description: string, tags: string[], link?: string, status?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
    className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{title}</h3>
        {status && (
          <span className="px-2 py-1 text-[10px] uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded">
            {status}
          </span>
        )}
      </div>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
            #{tag}
          </span>
        ))}
      </div>
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-400 text-sm font-bold hover:gap-3 transition-all"
        >
          VIEW PROJECT <ExternalLink className="w-4 h-4" />
        </a>
      ) : (
        <span className="text-slate-600 text-sm font-mono italic">
          [ ACCESS RESTRICTED / IN PROGRESS ]
        </span>
      )}
    </div>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen relative selection:bg-purple-500/30">
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-purple-500 origin-left z-50" style={{ scaleX }} />

      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-slate-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center">
              <Shield className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white">PATRICE<span className="text-purple-400">BROWN</span></span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Portfolio", "About", "Skills"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-400 hover:text-purple-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://docs.google.com/document/d/1K7lNSrHvaLdha4bucmYh3yoBhdQ2Fyls0sPzIdLN0CQ/edit?usp=sharing" 
              target="_blank"
              className="px-5 py-2 bg-purple-500 text-slate-950 text-xs font-bold rounded hover:bg-purple-400 transition-all uppercase tracking-widest"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
                <Activity className="w-3 h-3 animate-pulse" /> SYSTEM STATUS: OPERATIONAL
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
                Securing the <span className="text-purple-400 glow-text">Digital</span> Frontier.
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                Cybersecurity Professional specializing in threat analysis, incident response, and security frameworks.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-500 font-mono text-sm">
                  <MapPin className="w-4 h-4 text-purple-500" /> McComb, Mississippi
                </div>
                <div className="flex items-center gap-4 ml-auto md:ml-0">
                  <a href="#" className="p-2 text-slate-400 hover:text-purple-400 transition-colors"><Github className="w-5 h-5" /></a>
                  <a href="#" className="p-2 text-slate-400 hover:text-purple-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                  <a href="mailto:patrice.lachelle.brown@gmail.com" className="p-2 text-slate-400 hover:text-purple-400 transition-colors"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-500/10 blur-3xl rounded-full" />
              <Terminal />
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6 bg-slate-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <Cpu className="text-purple-500" /> Technical Arsenal
              </h2>
              <div className="h-1 w-20 bg-purple-500" />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillCard 
                icon={Code} 
                title="Languages" 
                skills={["Python", "SQL (BigQuery, MySQL)", "Bash"]} 
              />
              <SkillCard 
                icon={TerminalIcon} 
                title="Tools" 
                skills={["Linux", "Windows", "Splunk", "Wireshark", "Tcpdump", "Nmap"]} 
              />
              <SkillCard 
                icon={Lock} 
                title="Security" 
                skills={["IDS/IPS (Suricata)", "Vulnerability Assessment", "Threat Analysis", "Log Analysis"]} 
              />
              <SkillCard 
                icon={Layers} 
                title="Frameworks" 
                skills={["NIST CSF", "PCI DSS", "GDPR", "SOC 1 & SOC 2"]} 
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Layers className="text-purple-500" /> Security Projects
                </h2>
                <div className="h-1 w-20 bg-purple-500" />
              </div>
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                [ {new Date().getFullYear()} / REPOSITORY ]
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Security Audit"
                description="Conducted a controls and compliance assessment and provided recommendations to company stakeholders to mitigate risks and avoid fines based on best practices for NIST CSF, PCI DSS, GDPR, SOC 1 & SOC 2."
                tags={["Compliance", "NIST", "Risk-Assessment"]}
                status="In Progress"
              />
              <ProjectCard 
                title="Incident Report"
                description="Identified DDoS attack, scope of incident, potential network vulnerabilities and protection measures, and properly documented analysis and recovery plans in order to restore normal operations and maintain alignment with NIST CSF best practices."
                tags={["DDoS", "Incident-Response", "NIST"]}
                status="In Progress"
              />
              <ProjectCard 
                title="TryHackMe Journal"
                description="Completed 17 TryHackMe rooms, gaining hands-on skills in Linux and Windows fundamentals, log analysis, network troubleshooting with Wireshark, and incident handling with Splunk."
                tags={["Hands-on", "Splunk", "Wireshark"]}
                link="https://docs.google.com/document/d/1l081r6t5fvgtX-h3fn2DrDq3A27JOmzI9WEAozvAxRE/edit?tab=t.0"
              />
              <ProjectCard 
                title="SQL Query Analysis"
                description="Developing complex SQL queries for security log analysis and data extraction to identify suspicious patterns and potential breaches."
                tags={["SQL", "Log-Analysis", "BigQuery"]}
                status="In Progress"
              />
              <ProjectCard 
                title="Vulnerability Assessment"
                description="Systematic review of security weaknesses in information systems to evaluate if the system is susceptible to any known vulnerabilities."
                tags={["Vulnerability", "Scanning", "Assessment"]}
                status="In Progress"
              />
              <ProjectCard 
                title="Incident Handlers Journal"
                description="Documenting incident handling procedures and best practices based on real-world scenarios and training exercises."
                tags={["Documentation", "Procedures", "Journal"]}
                status="In Progress"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-white/5 bg-slate-900/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-slate-950" />
                </div>
                <span className="font-bold text-lg tracking-tighter text-white uppercase">Patrice Brown</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                Building a safer digital world, one project at a time.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="mailto:patrice.lachelle.brown@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
              <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-mono">
                &copy; {new Date().getFullYear()} / PATRICE BROWN / ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
