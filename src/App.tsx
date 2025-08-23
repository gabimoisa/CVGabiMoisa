import React from "react"
import GabiPhoto from "./assets/GabiPhoto.jpeg"

type CVData = {
  name: string
  title: string
  contacts: { label: string; value: string }[]
  about: string
  skills: string[]
  hobbies: string[]
  experience: { role: string; company: string; location: string; years: string; bullets: string[] }[]
  education: { school: string; degree: string; years: string; location?: string }[]
  photoUrl: string
}

const cvData: CVData = {
  name: "Gabriel Moisa",
  title: "Software Engineer",
  contacts: [
    { label: "Location", value: "Timisoara, 300109" },
    { label: "Phone", value: "0745600895" },
    { label: "Email", value: "gabriel.moisa@yahoo.com" },
  ],
  about:
    "Results-driven Software Engineer with ~4 years of progressive experience, from intern to Software Engineer at OPSWAT. Focused on clean code, security, performance, and shipping quality software in agile teams.",
  skills: ["TypeScript", "React.js", "Tailwind CSS", "GatsbyJS", "AWS", "Chrome Extension", "JavaScript", "Team Collaboration"],
  hobbies: ["Travel", "Gym", "Running"],
  experience: [
    {
      role: "Software Engineer",
      company: "OPSWAT",
      location: "Timisoara",
      years: "Dec 2023 – Present",
      bullets: [
        "Build responsive and interactive UIs for cybersecurity products using HTML, CSS, JavaScript, TypeScript, Tailwind, Gatsby, AWS, React.",
        "Collaborated with design teams to ensure UI scalability, security, and performance across platforms.",
        "Wrote unit tests with Jest and integrated RESTful APIs to manage data effectively.",
        "Participated in Agile ceremonies: sprint planning, daily stand-ups, retrospectives."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "OPSWAT",
      location: "Timisoara",
      years: "May 2022 – Nov 2023",
      bullets: [
        "Focused on frontend development with HTML, CSS, JavaScript, TypeScript, React, Tailwind, Gatsby, AWS.",
        "Improved UI performance and scalability across multiple platforms.",
        "Wrote unit tests in Jest and integrated RESTful APIs.",
        "Collaborated with team members in Agile projects to deliver reliable software."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "OPSWAT",
      location: "Timisoara",
      years: "Nov 2021 – Apr 2022",
      bullets: [
        "Assisted in building user interfaces with HTML, CSS, JavaScript, React, Node.js, AWS.",
        "Gained hands-on experience in both frontend and backend tasks.",
        "Supported the team in creating secure and scalable features."
      ]
    }
  ],
  education: [
    {
      school: "Universitatea Politehnica Timisoara",
      degree: "B.Sc. — Automatics and Computers, System Engineering",
      years: "2018 – 2021",
      location: "Timisoara"
    },
    {
      school: "Liceul Teoretic Traian Vuia",
      degree: "High School Diploma — Mathematics-Informatics, Intensive English",
      years: "2017",
      location: "Resita"
    }
  ],
  photoUrl: GabiPhoto
}

export const CVDark = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: cvData.name,
    jobTitle: cvData.title,
    description: cvData.about,
    image: cvData.photoUrl,
    email: "mailto:gabriel.moisa@yahoo.com",
    telephone: "0745600895",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Timisoara",
      postalCode: "300109",
      addressCountry: "RO"
    },
    worksFor: {
      "@type": "Organization",
      name: "OPSWAT"
    },
    alumniOf: cvData.education.map(ed => ({
      "@type": "CollegeOrUniversity",
      name: ed.school,
      address: ed.location
    })),
    knowsAbout: cvData.skills
  }

  return (
    <div className="min-h-dvh w-full bg-[#0b1220] text-slate-100">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="w-full px-6 md:px-10 py-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-slate-800">
              <img
                src={cvData.photoUrl}
                alt={`Portrait of ${cvData.name}, ${cvData.title}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-cyan-400">{cvData.name}</h1>
            <p className="text-slate-300">{cvData.title}</p>

            <div className="space-y-2 text-sm">
              {cvData.contacts.map((c, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-cyan-400">{c.label}:</span>
                  <span className="text-slate-300">{c.value}</span>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-lg font-semibold text-cyan-300">Skills</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {cvData.skills.map(s => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded border border-cyan-700/60 bg-[#111827] text-cyan-300 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-cyan-300">Hobbies</h2>
              <p className="mt-2 text-slate-300">{cvData.hobbies.join(", ")}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-3">
            <h2 className="text-lg font-semibold text-cyan-300">About Me</h2>
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
              <p className="text-slate-300">{cvData.about}</p>
            </div>

            <h2 className="text-lg font-semibold text-cyan-300">Experience</h2>
            <div className="grid gap-3">
              {cvData.experience.map((e, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
                  <div className="flex flex-wrap justify-between gap-2 text-sm">
                    <h3 className="font-medium text-slate-100">{e.role} — {e.company}</h3>
                    <time className="text-slate-400">{e.years}</time>
                  </div>
                  <p className="mt-1 text-slate-400">{e.location}</p>
                  {e.bullets.length > 0 && (
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {e.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-cyan-400/80"></span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-cyan-300">Education</h2>
            <div className="grid gap-3">
              {cvData.education.map((ed, i) => (
                <div key={i} className="rounded-2xl border border-slate-800 bg-[#111827] p-5">
                  <div className="flex flex-wrap justify-between gap-2 text-sm">
                    <h3 className="font-medium text-slate-100">{ed.degree}</h3>
                    <time className="text-slate-400">{ed.years}</time>
                  </div>
                  <p className="mt-1 text-slate-300">
                    {ed.school}{ed.location ? ` — ${ed.location}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
