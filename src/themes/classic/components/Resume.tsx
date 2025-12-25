import { Avatar, Checkbox, Fieldset, Tab, Tabs } from "@react95/core";

function Resume() {
  return (
    <Tabs defaultActiveTab="Genesis">
      {/* ----------------------------------------
        TAB 1 — INTRO
      ---------------------------------------- */}
      <Tab title="Genesis">
        <h3>Hey, [~_~] I’m Lavish Kumar Varshney</h3>

        <Avatar src="images/sdp.jpeg" alt="Lavish Avatar" size="140px" />

        <p>Full-Stack Developer (MERN) • UI/Animation Enthusiast</p>

        <Fieldset legend="About Me">
          <p>
            I am a full-stack MERN developer who builds fast, modern, and
            interactive applications. I combine strong frontend engineering with
            solid backend architecture using Node, Express, MongoDB, and
            API-driven development. I focus heavily on design, animations, user
            experience, and building clean, scalable digital products.
          </p>
        </Fieldset>
      </Tab>

      {/* ----------------------------------------
        TAB 2 — PROJECTS
      ---------------------------------------- */}
      <Tab title="Projects">
        <Fieldset legend="Smart Medical Record System [SMRS]">
          <Checkbox readOnly checked>
            Full-stack medical record system with secure PDF uploads.
          </Checkbox>
          <Checkbox readOnly checked>
            Backend: Node.js, Express, Firebase Storage, Firestore.
          </Checkbox>
          <Checkbox readOnly checked>
            Frontend: React, Firebase Auth, Tailwind.
          </Checkbox>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            <strong>Live:</strong>{" "}
            <a href="https://medical-frontend-three.vercel.app" target="_blank">
              medical-frontend
            </a>
          </p>
        </Fieldset>

        <Fieldset
          style={{ marginTop: 10 }}
          legend="Leads Tracker – Chrome Extension"
        >
          <Checkbox readOnly checked>
            Chrome extension to save text, snippets, and tabs.
          </Checkbox>
          <Checkbox readOnly checked>
            Built with JS, MV3, Chrome APIs, localStorage persistence.
          </Checkbox>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            <strong>Source:</strong>{" "}
            <a
              href="https://github.com/IIKirito-kunII/leads-tracker-extension"
              target="_blank"
            >
              GitHub Repo
            </a>
          </p>
        </Fieldset>

        <Fieldset
          style={{ marginTop: 10 }}
          legend="Luminous Quotes – GSAP Lamp UI"
        >
          <Checkbox readOnly checked>
            Interactive lamp animation with inspirational quotes.
          </Checkbox>
          <Checkbox readOnly checked>
            GSAP animations, CSS variables, API integration.
          </Checkbox>
          <p style={{ marginTop: 10, marginBottom: 0 }}>
            <strong>Live:</strong>{" "}
            <a href="https://lampquote.netlify.app" target="_blank">
              lampquote.netlify.app
            </a>
          </p>
        </Fieldset>
      </Tab>

      {/* ----------------------------------------
        TAB 3 — SKILLS (Compact + now 4 groups)
      ---------------------------------------- */}
      <Tab title="Skills">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <Fieldset legend="Frontend">
            <ul>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
              <li>GSAP</li>
            </ul>
          </Fieldset>

          <Fieldset legend="Backend & Database">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Supabase</li>
              <li>REST APIs</li>
            </ul>
          </Fieldset>

          <Fieldset legend="Tools & Workflow">
            <ul>
              <li>Git & GitHub</li>
              <li>Chrome Extensions (MV3)</li>
              <li>Docker</li>
              <li>n8n Automation</li>
              <li>Vercel / Netlify</li>
            </ul>
          </Fieldset>

          {/* NEW FIELDSET — SOFT SKILLS */}
          <Fieldset legend="Soft Skills">
            <ul>
              <li>Problem Solving</li>
              <li>Team Collaboration</li>
              <li>Communication</li>
              <li>Fast Learning Ability</li>
              <li>Attention to Detail</li>
              <li>Time Management</li>
            </ul>
          </Fieldset>
        </div>
      </Tab>

      {/* ----------------------------------------
        TAB 4 — EXPERIENCE
      ---------------------------------------- */}
      <Tab title="Experience">
        <Fieldset
          style={{ marginTop: 10 }}
          legend="IBM SkillsBuild (CSRBOX) — Front-End Web Developer Intern (Jun–Aug 2024)"
        >
          <Checkbox readOnly checked>
            Built responsive web components and user interfaces using ReactJS
            and CSS.
          </Checkbox>
          <Checkbox readOnly checked>
            Completed modules in Web Development and Project Management.
          </Checkbox>
          <Checkbox readOnly checked>
            Collaborated with team members to implement features and tested
            components responsiveness.
          </Checkbox>
        </Fieldset>
        <Fieldset
          style={{ marginTop: 10 }}
          legend="Bharat Intern (now Orbitor) — Full-Stack Developer Intern (Aug-Sept 2023)"
        >
          <Checkbox readOnly checked>
            Built a Content Management and Project Management Tool.
          </Checkbox>
          <Checkbox readOnly checked>
            Designed responsive UI & optimized React flow.
          </Checkbox>
        </Fieldset>
      </Tab>

      {/* ----------------------------------------
        TAB — VOLUNTEER EXPERIENCE
      ---------------------------------------- */}
      <Tab title="Volunteer Experience">
        <Fieldset legend="Cyber Crime Awareness Session — Jawahar Navodaya Vidyalaya, Haridwar (21 Dec 2025)">
          <Checkbox readOnly checked>
            Co-facilitated a cyber crime awareness session for Class IX
            students, contributing as a speaker and managing the digital
            presentation setup.
          </Checkbox>
          <Checkbox readOnly checked>
            Explained real-life cyber crime cases through interactive
            discussions to improve digital safety awareness.
          </Checkbox>
        </Fieldset>
        <Fieldset
          legend="Technical Awareness Session - Gurukula Kangri Vishwavidyalaya, Haridwar (17 Nov 2025)"
          style={{ marginTop: 10 }}
        >
          <Checkbox readOnly checked>
            Co-facilitated a technical session covering NIXI, IPv4/IPv6, DNS,
            DNSSEC, and India’s Internet infrastructure.
          </Checkbox>
          <Checkbox readOnly checked>
            Engaged 1st-year B.Tech students through interactive Q&A on MERN
            stack and full-stack development pathways.
          </Checkbox>
        </Fieldset>
      </Tab>

      {/* ----------------------------------------
        TAB 5 — EDUCATION
      ---------------------------------------- */}
      <Tab title="Education">
        <Fieldset legend="B.Tech — Computer Science">
          <p style={{ margin: 0 }}>
            <strong>Gurukula Kangri Vishwavidyalaya</strong>, Haridwar,
            Uttarakhand
          </p>
          <p style={{ margin: "4px 0" }}>Nov 2022 – Present</p>
          <p style={{ margin: "4px 0" }}>
            Latest SGPA: <strong>8.32</strong>
          </p>
        </Fieldset>

        <Fieldset style={{ marginTop: 10 }} legend="Senior Secondary (XII)">
          <p style={{ margin: 0 }}>
            <strong>Gayatri Public School</strong>, Agra, Uttar Pradesh — CBSE
            Board
          </p>
          <p style={{ margin: "4px 0" }}>Science Stream</p>
          <p style={{ margin: "4px 0" }}>Completed: March 2021</p>
        </Fieldset>

        <Fieldset style={{ marginTop: 10 }} legend="Academic Achievement">
          <p style={{ margin: 0 }}>
            <strong>GATE 2025 — Computer Science</strong>
          </p>
          <p style={{ margin: "4px 0" }}>AIR 20150 • Score 360</p>
          <p style={{ margin: "4px 0" }}>Qualified in 3rd year of B.Tech</p>
        </Fieldset>
      </Tab>

      {/* ----------------------------------------
        TAB 6 — WHO I AM  (with <br/> fixes)
      ---------------------------------------- */}
      <Tab title="Who I Am">
        <Fieldset legend="My Approach">
          <p>
            As a full-stack developer, I focus on clean architectures, scalable
            backend logic, and polished frontend experiences.
            <br />
            I love solving problems and experimenting with UI concepts.
            <br />
            I enjoy delivering modern, responsive, and meaningful products.
            <br />
          </p>
        </Fieldset>

        <Fieldset style={{ marginTop: 10 }} legend="Certificates">
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Checkbox readOnly checked />
            <a
              href="https://www.freecodecamp.org/certification/iikiritoii/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
            >
              Front End Development Libraries V8 — FreeCodeCamp (Dec 2024)
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Checkbox readOnly checked />
            <a
              href="https://www.freecodecamp.org/certification/iikiritoii/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
            >
              JavaScript Algorithms & Data Structures V8 — FreeCodeCamp (Aug
              2024)
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Checkbox readOnly checked />
            <a
              href="https://www.freecodecamp.org/certification/iikiritoii/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Legacy Responsive Web Design V8 — FreeCodeCamp (Jul 2024)
            </a>
          </div>
        </Fieldset>
      </Tab>
    </Tabs>
  );
}

export default Resume;
