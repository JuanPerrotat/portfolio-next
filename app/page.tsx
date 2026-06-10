// ── SVG Icons ─────────────────────────────────────────────────────────────────

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const skills: Record<string, string[]> = {
  Backend: ["C#", ".NET / .NET Core", "ASP.NET WebForms", "WinForms", "SQL Server"],
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  Herramientas: ["Git", "Visual Studio", "VS Code"],
};

const projects = [
  {
    name: "Stocker",
    description:
      "Aplicación web ASP.NET WebForms para gestión de artículos con CRUD completo, arquitectura por capas, base de datos SQL, sistema de login y funcionalidad de email.",
    tags: ["ASP.NET", "WebForms", "SQL Server", "C#"],
    status: "Activo",
    link: "https://github.com/JuanPerrotat",
  },
  {
    name: "Pokémon Web App",
    description:
      "Aplicación web ASP.NET WebForms que consume la PokéAPI, mostrando datos dinámicos con manejo eficiente de peticiones HTTP y caché.",
    tags: ["ASP.NET", "WebForms", "API REST", "C#"],
    status: "Completado",
    link: "https://github.com/JuanPerrotat",
  },
  {
    name: "Gestor de Artículos",
    description:
      "Aplicación de escritorio WinForms con arquitectura por capas, gestión completa de artículos y persistencia en base de datos SQL Server.",
    tags: ["WinForms", "C#", ".NET", "SQL Server"],
    status: "Completado",
    link: "https://github.com/JuanPerrotat",
  },
  {
    name: "Pokémon Desktop App",
    description:
      "Cliente de escritorio WinForms para consumo de la PokéAPI con interfaz gráfica nativa de Windows y manejo de excepciones.",
    tags: ["WinForms", "C#", "API REST"],
    status: "Completado",
    link: "https://github.com/JuanPerrotat",
  },
  {
    name: "Portfolio Web",
    description:
      "Sitio web personal construido con HTML, CSS y Bootstrap. Diseño responsive para presentación profesional.",
    tags: ["HTML", "CSS", "Bootstrap"],
    status: "Completado",
    link: "https://github.com/JuanPerrotat",
  },
];

const education = [
  {
    title: "Tecnicatura Universitaria en Programación",
    institution: "Universidad Tecnológica Nacional",
    period: "Mayo 2026 — Dic. 2028",
    current: true,
  },
  {
    title: "Introducción a HTML y CSS",
    institution: "Todo Code Academy",
    period: "Ene. 2026",
    current: false,
  },
  {
    title: "C# — Nivel 1 al 4",
    institution: "Maxi Programa",
    period: "Nov. 2025 — Feb. 2026",
    current: false,
  },
  {
    title: "Fundamentos de la Programación",
    institution: "Maxi Programa",
    period: "Sept. 2025",
    current: false,
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0e1a", color: "#f0f4ff" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 inset-x-0 z-50 border-b"
        style={{
          backdropFilter: "blur(16px)",
          backgroundColor: "rgba(10,14,26,0.82)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl gradient-text" style={{ fontFamily: "var(--font-fira-code)" }}>
            JP
          </span>
          <div className="hidden sm:flex gap-8 text-sm" style={{ color: "#8892b0" }}>
            {[
              ["Sobre mí", "#sobre-mi"],
              ["Habilidades", "#habilidades"],
              ["Proyectos", "#proyectos"],
              ["Educación", "#educacion"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white transition-colors duration-200">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden"
        style={{ paddingTop: "4rem" }}
      >
        {/* Ambient glow orbs */}
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: "25%", left: "15%", width: 480, height: 480,
            background: "radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            bottom: "20%", right: "10%", width: 400, height: 400,
            background: "radial-gradient(circle, rgba(6,214,160,0.10) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-5"
            style={{ color: "#8892b0", fontFamily: "var(--font-fira-code)" }}
          >
            Hola, soy
          </p>

          <h1 className="text-7xl md:text-9xl font-extrabold mb-4 leading-none tracking-tight gradient-text">
            Juan<br className="sm:hidden" />{" "}
            <span className="sm:ml-2">Perrotat</span>
          </h1>

          <h2 className="text-lg md:text-2xl font-light mb-6" style={{ color: "#8892b0" }}>
            Desarrollador{" "}
            <span className="font-semibold" style={{ color: "#6c63ff" }}>
              .NET
            </span>{" "}
            Full Stack
          </h2>

          <p className="max-w-md mx-auto mb-10 leading-relaxed text-base" style={{ color: "#8892b0" }}>
            Construyo aplicaciones completas con C#, SQL Server y ASP.NET —
            desde la arquitectura hasta la persistencia de datos.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-10">
            <a
              href="#proyectos"
              className="px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-85"
              style={{ background: "linear-gradient(135deg, #6c63ff, #3b82f6)" }}
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-7 py-3 rounded-full text-sm font-semibold transition-colors duration-200 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#8892b0" }}
            >
              Contactar
            </a>
          </div>

          <div className="flex gap-6 justify-center" style={{ color: "#8892b0" }}>
            {[
              { href: "https://github.com/JuanPerrotat", icon: <GitHubIcon />, label: "GitHub" },
              { href: "https://linkedin.com/in/juan-perrotat/", icon: <LinkedInIcon />, label: "LinkedIn" },
              { href: "mailto:juanperrotat@gmail.com", icon: <EmailIcon />, label: "Email" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="hover:text-white transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(136,146,176,0.4)" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-fira-code)" }}>
            scroll
          </span>
          <div
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, rgba(136,146,176,0.5), transparent)" }}
          />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="sobre-mi" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel number="01" text="Sobre mí" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Código que resuelve{" "}
              <span className="gradient-text">problemas reales</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#8892b0" }}>
              <p>
                Soy desarrollador .NET con foco en C#, SQL Server y ASP.NET. Construyo aplicaciones
                completas con persistencia de datos, arquitectura por capas, validaciones sólidas y
                manejo eficiente de datos y excepciones.
              </p>
              <p>
                Cuento con más de una década de experiencia profesional en educación e historia, lo
                que me aportó pensamiento analítico, capacidad de autoaprendizaje y habilidades
                blandas esenciales para trabajar en equipo.
              </p>
              <p>
                Actualmente cursando la{" "}
                <span style={{ color: "#f0f4ff" }} className="font-medium">
                  Tecnicatura Universitaria en Programación en la UTN
                </span>
                , donde consolido mi formación técnica con bases sólidas de ingeniería de software.
              </p>
            </div>
          </div>

          {/* Code snippet card */}
          <div
            className="gradient-border rounded-xl p-6 text-sm leading-relaxed"
            style={{ backgroundColor: "#141c2e", fontFamily: "var(--font-fira-code)" }}
          >
            <div className="flex gap-1.5 mb-5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <p>
              <span style={{ color: "#6c63ff" }}>const</span>{" "}
              <span style={{ color: "#06d6a0" }}>juan</span>{" "}
              <span style={{ color: "#8892b0" }}>=</span>{" "}
              <span style={{ color: "#f0f4ff" }}>{"{"}</span>
            </p>
            {[
              ["rol", "'Desarrollador .NET'", false],
              ["stack", "['C#', 'SQL Server', 'ASP.NET']", false],
              ["arquitectura", "'Por capas'", false],
              ["disponible", "true", true],
              ["ubicación", "'Argentina'", false],
            ].map(([k, v, isBool]) => (
              <p key={k as string} className="pl-6" style={{ color: "#8892b0" }}>
                <span style={{ color: "#f0f4ff" }}>{k}:</span>{" "}
                <span style={{ color: isBool ? "#06d6a0" : "#f59e0b" }}>{v}</span>,
              </p>
            ))}
            <p style={{ color: "#f0f4ff" }}>{"}"}</p>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section
        id="habilidades"
        className="py-28 px-6"
        style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="02" text="Habilidades" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Tecnologías que manejo</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="gradient-border rounded-xl p-6"
                style={{ backgroundColor: "#141c2e" }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "#6c63ff" }}
                >
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#f0f4ff",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="proyectos" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="03" text="Proyectos" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Cosas que construí</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="gradient-border card-hover rounded-xl p-6 flex flex-col"
                style={{ backgroundColor: "#141c2e" }}
              >
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="font-semibold text-lg leading-tight">{project.name}</h3>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap"
                    style={
                      project.status === "Activo"
                        ? { backgroundColor: "rgba(6,214,160,0.12)", color: "#06d6a0" }
                        : { backgroundColor: "rgba(255,255,255,0.06)", color: "#8892b0" }
                    }
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#8892b0" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: "rgba(108,99,255,0.1)",
                        color: "#a89cff",
                        border: "1px solid rgba(108,99,255,0.2)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-white mt-auto"
                  style={{ color: "#8892b0" }}
                >
                  Ver en GitHub <ExternalLinkIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section
        id="educacion"
        className="py-28 px-6"
        style={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="04" text="Educación" />
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Formación</h2>

          <div className="relative max-w-2xl">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-3 bottom-3 w-px"
              style={{ background: "linear-gradient(to bottom, #6c63ff, rgba(108,99,255,0.1))" }}
            />

            <div className="space-y-6 pl-14">
              {education.map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={`absolute -left-[2.625rem] top-5 w-3.5 h-3.5 rounded-full border-2 ${item.current ? "dot-glow" : ""}`}
                    style={{
                      backgroundColor: item.current ? "#6c63ff" : "#141c2e",
                      borderColor: item.current ? "#6c63ff" : "rgba(108,99,255,0.5)",
                    }}
                  />

                  <div
                    className="gradient-border rounded-xl p-5"
                    style={{ backgroundColor: "#141c2e" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm" style={{ color: "#8892b0" }}>{item.institution}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p
                          className="text-xs"
                          style={{ color: "#8892b0", fontFamily: "var(--font-fira-code)" }}
                        >
                          {item.period}
                        </p>
                        {item.current && (
                          <span className="text-xs font-semibold" style={{ color: "#06d6a0" }}>
                            En curso
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionLabel number="05" text="Contacto" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Hablamos?</h2>
          <p className="mb-12 max-w-md" style={{ color: "#8892b0" }}>
            Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones.
            ¡Mandame un mensaje!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 max-w-xl">
            {[
              {
                href: "mailto:juanperrotat@gmail.com",
                icon: <EmailIcon size={22} />,
                label: "Email",
                sub: "juanperrotat@gmail.com",
              },
              {
                href: "https://linkedin.com/in/juan-perrotat/",
                icon: <LinkedInIcon size={22} />,
                label: "LinkedIn",
                sub: "juan-perrotat",
              },
              {
                href: "https://github.com/JuanPerrotat",
                icon: <GitHubIcon size={22} />,
                label: "GitHub",
                sub: "JuanPerrotat",
              },
            ].map(({ href, icon, label, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="gradient-border card-hover rounded-xl p-5 flex flex-col items-center text-center gap-3"
                style={{ backgroundColor: "#141c2e" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(108,99,255,0.1)", color: "#6c63ff" }}
                >
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-sm">{label}</p>
                  <p className="text-xs mt-0.5 break-all" style={{ color: "#8892b0" }}>{sub}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 text-center border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <p className="text-sm" style={{ color: "#8892b0", fontFamily: "var(--font-fira-code)" }}>
          Diseñado y construido por{" "}
          <span style={{ color: "#f0f4ff" }}>Juan Perrotat</span> · 2026
        </p>
      </footer>
    </div>
  );
}

// ── Helper ────────────────────────────────────────────────────────────────────

function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <p
      className="text-xs tracking-[0.3em] uppercase mb-3"
      style={{ color: "#6c63ff", fontFamily: "var(--font-fira-code)" }}
    >
      {number}. {text}
    </p>
  );
}
