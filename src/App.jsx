import { useState } from "react";
import "./App.css";
import projectsData from "./data/projects.json";
import contactsData from "./data/contacts.json";
import banner from "./assets/banner.png";

function App() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = projectsData.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.professor.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* HERO */}
      <section className="hero-glitch">
        <img src={banner} alt="Banner error404 fatec" />
      </section>

      {/* HEADER */}
      <header className="header-overlay">
        <div className="header-content">
          <div className="actions flex items-center w-full">
            <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn">
              ☰
            </button>

            <input
              className="ml-auto px-3 py-1 rounded bg-gray-800 border border-gray-700 focus:outline-none"
              type="text"
              placeholder="Buscar projeto ou professor..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* MENU */}
        <nav id="menu" className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Projetos</a>
            </li>
            <li>
              <a href="#">Professores</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 🔥 WELCOME (NOVO BLOCO) */}
      <section className="welcome">
        <h1>Transformando ideias em projetos reais.</h1>

        <p>
          Bem-vindo ao portfólio da Turma do 4º ADS. Explore nossos projetos e
          veja o que podemos construir.
        </p>
      </section>

      {/* GRID */}
      <main className="container">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="card-content">
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="card-footer">
                <span>Prof. {project.professor}</span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto →
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* CARD EXTRA */}
        <div className="card empty">
          <p>Seu projeto aqui?</p>
          <span>Abra um Pull Request</span>
        </div>
      </main>

      {/* CONTACTS */}
      <section id="contato" className="contact-section container">
        <div className="contact-content">
          {/* CONTACT LIST */}
          <div className="contact-list">
            {contactsData.map((c, i) => (
              <div key={i} className="contact-item">
                {c.type === "email" && (
                  <a
                    href={`mailto:${c.value}`}
                    aria-label={`Enviar email para ${c.label}`}
                  >
                    <span className="icon" aria-hidden>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8.5V18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 6.5V7l-9 6-9-6v-.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </a>
                )}
                {c.type === "whatsapp" && (
                  <a
                    href={`https://wa.me/${c.value.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${c.label}`}
                  >
                    <span className="icon" aria-hidden>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 12.08A9 9 0 1 1 11.92 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22l-4.35-1.15A8.94 8.94 0 0 1 3 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 11.5c.5.8 1.6 1.6 2.7 1.8.8.1 1.6 0 2.2-.3.6-.3 1.2-.5 1.8-.1.5.3.8.9.4 1.6-.3.6-1 1.8-2.1 2.3-1 .5-1.7.5-2.8.2-1.1-.3-3-1-4.4-2.4C6 13.9 6 12 6.8 10.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </a>
                )}
                {c.type === "linkedin" && (
                  <a
                    href={c.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${c.label}`}
                  >
                    <span className="icon" aria-hidden>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8.5 11.5V17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <circle cx="8.5" cy="8" r="1" fill="currentColor" />
                        <path
                          d="M12 12.5v4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 9.5c1 0 1.5.6 1.5 1.7V12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <span className="contact-label">{c.label}</span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form">
            <h3>Envie uma mensagem</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="w-full mb-2 p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                className="w-full mb-2 p-2 rounded bg-gray-800 border border-gray-700"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Mensagem"
                className="w-full mb-2 p-2 rounded bg-gray-800 border border-gray-700"
              />
              <button className="px-4 py-2 rounded bg-red-600 hover:bg-red-700">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer>
        <p>
          © 2026 error404fatec - Disciplina de Gestão da Produção / Programação
          Web
        </p>
      </footer>
    </div>
  );
}

export default App;
