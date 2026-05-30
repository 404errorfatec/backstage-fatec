import { useState } from 'react'
import './App.css'
import projectsData from './data/projects.json'
import banner from './assets/banner.png'

function App() {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const filteredProjects = projectsData.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.professor.toLowerCase().includes(search.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
  )


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

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="menu-btn"
            >
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
        <nav id="menu" className={menuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* 🔥 WELCOME (NOVO BLOCO) */}
      <section className="welcome">
        <h1>
          Transformando ideias em projetos reais.
        </h1>

        <p>
          Bem-vindo ao portfólio da Turma do 4º ADS. Explore nossos projetos e veja o que podemos construir.
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
                {project.tags.map(tag => (
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

      {/* FOOTER */}
      <footer>
        <p>
          © 2026 error404fatec - Disciplina de Gestão da Produção / Programação Web
        </p>
      </footer>

    </div>
  )
}

export default App