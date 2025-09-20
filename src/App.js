import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-slate-100 to-white min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h1 className="text-3xl font-bold mb-2">
              Prashanth Sankar <span className="text-indigo-700">| Technical Support Specialist</span>
            </h1>
            <p className="text-slate-600 mb-4">
              Transforming complex IT challenges into seamless, reliable solutions with 10 years of international expertise.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 transition">
                View My Work
              </a>
              <a href="mailto:prashanthche@gmail.com" className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 font-semibold hover:bg-indigo-50 transition">
                Contact Me
              </a>
              <a href="/Resume_Prashanth_Sankar_Updated.pdf" download className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition">
                <FaFileAlt /> Download My Resume
              </a>
            </div>
          </div>
          <div className="rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <img src="/DSC_1081 (2).jpg" alt="Prashanth Sankar" className="w-full h-auto" />
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">About Me</h2>
          <p>
            I am an <strong>IT Infrastructure & Technical Support Specialist</strong> with over 10 years of international experience across Europe and Asia. Skilled in Windows, VMware, Active Directory, and IT monitoring tools, I bring creativity and corporate discipline to ensure uptime, resilience, and seamless user experiences.
          </p>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Skills & Expertise</h2>
          {[ 
            { name: "Incident Management", level: "90%" },
            { name: "Monitoring (Kibana, Dynatrace, Splunk)", level: "85%" },
            { name: "Windows/Linux Administration", level: "82%" },
            { name: "SQL & Databases", level: "78%" },
            { name: "Collaboration & Tools (Jira, GitHub)", level: "84%" }
          ].map((skill, i) => (
            <div key={i} className="mb-4">
              <p>{skill.name}</p>
              <div className="w-full h-3 bg-slate-200 rounded-lg overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-600 to-cyan-600" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Experience</h2>
          <div className="border-l-4 border-indigo-600 pl-6 space-y-6">
            <div>
              <h4 className="font-semibold">2023 – 2025 | Technical Support Specialist | Malta</h4>
              <p>Delivered end-to-end IT support for gaming platforms; maintained 99.5% uptime; reduced repeat incidents by 20%.</p>
            </div>
            <div>
              <h4 className="font-semibold">2021 – 2023 | IT Engineer | Malta</h4>
              <p>Managed Active Directory, VMware, and backups; restored operations in disaster recovery; improved uptime to 99.9%.</p>
            </div>
            <div>
              <h4 className="font-semibold">2015 – 2021 | IT Support Specialist | India & Malta</h4>
              <p>Supported academic and corporate IT systems; maintained high availability for 1,500+ users; optimized processes improving ticket resolution speed by 30%.</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-indigo-700">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Global IT Infrastructure Migration", desc: "Migrated 300+ systems to a secure cloud environment with zero downtime." },
              { title: "Incident Automation & RCA", desc: "Built automated workflows reducing mean time to resolution by 40%." },
              { title: "System Hardening & Compliance", desc: "Implemented baseline security compliance reducing incidents by 28%." }
            ].map((proj, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition border border-slate-200">
                <h5 className="font-semibold mb-2 text-indigo-700">{proj.title}</h5>
                <p className="text-slate-600">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">Let’s Connect</h2>
          <p className="mb-6">Looking for someone who blends corporate discipline with creative IT solutions? Let’s talk.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="mailto:prashanthche@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 transition"><FaEnvelope /> Email</a>
            <a href="https://www.linkedin.com/in/prashanth-sankar-51a712a8/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 font-semibold hover:bg-indigo-50 transition"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/prashanthche" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-700 font-semibold hover:bg-indigo-50 transition"><FaGithub /> GitHub</a>
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm">
          © <strong>Prashanth Sankar</strong> — IT Infrastructure & Support Specialist | prashanthche@gmail.com
        </footer>
      </div>
    </div>
  );
}
