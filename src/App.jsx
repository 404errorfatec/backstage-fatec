import { useState } from 'react'
import './App.css'
import projectsData from './data/projects.json'
import banner from './assets/banner.png'

function App() {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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
        <nav id="menu" className={menuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Professores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* WELCOME */}
      <section className="welcome">
        <h1>Transformando ideias em projetos reais.</h1>
        <p>
          Bem-vindo ao portfólio da Turma do 4º ADS. Explore nossos projetos e veja o que podemos construir.
        </p>
      </section>

      {/* GRID */}
      <main className="container">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card cursor-pointer"
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
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
                <span>Prof. {Array.isArray(project.professor) ? project.professor.join(', ') : project.professor}</span>
                <span className="view-project-btn">Detalhes →</span>
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
        <p>© 2026 error404fatec - Disciplina de Gestão da Produção / Programação Web</p>
      </footer>

      {/* MODAL DE FOCO */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>

            {/* Topo com Imagem */}
            <div className="modal-banner-wrapper">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            </div>

            <div className="modal-body">
              <div className="tags" style={{ marginBottom: '16px' }}>
                {selectedProject.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <h2>{selectedProject.title}</h2>
              <p className="modal-description">{selectedProject.description}</p>


              {selectedProject.autores && (
                <div className="modal-authors-box">
                  <strong>Integrantes do Grupo:</strong>
                  <p>
                    {Array.isArray(selectedProject.autores)
                      ? selectedProject.autores.join(', ')
                      : selectedProject.autores}
                  </p>
                </div>
              )}


              <div className="modal-actions-footer">
                <span>
                  <strong>Orientador:</strong> Prof. {Array.isArray(selectedProject.professor) ? selectedProject.professor.join(', ') : selectedProject.professor}
                </span>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App