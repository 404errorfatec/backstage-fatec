import { 
  LayoutGrid, 
  Users, 
  Info, 
  ChevronRight,
  FileText,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: FileText, label: 'Readme', href: '#' ,},
    { icon: LayoutGrid, label: 'GitHub Org', href: '#',},
    { icon: Users, label: 'Fatec', href: '#' },
    { icon: Info, label: 'Teams', href: '#' },
  ];

  return (
    <>
      {/* Botão Hamburger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 p-2 bg-red-600 rounded-lg text-white shadow-lg hover:bg-red-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Principal */}
      <aside className={`
        fixed top-0 left-0 h-full z-40
        w-72 bg-gray-900 border-r border-gray-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          
          {/* Logo / Header da Sidebar */}
          <div className="p-8 pt-20"> {/* pt-20 para não bater no botão hamburger quando aberto */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20">
                <span className="font-black text-xl italic text-white">404</span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tighter text-white">
                  backstage<span className="text-red-500">fatec</span>
                </h2>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Painel de Projetos</p>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <nav className="flex-1 px-4 py-4">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className={`
                      flex items-center justify-between px-4 py-3 rounded-xl transition-all group
                      ${item.active 
                        ? 'bg-red-600/10 text-red-500 border border-red-500/20' 
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon size={20} className={item.active ? 'text-red-500' : 'text-gray-500 group-hover:text-white'} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.active && <ChevronRight size={16} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Simples */}
          <div className="p-6 border-t border-gray-800">
            <p className="text-center text-[10px] text-gray-600 font-medium">
              error404fatec • 2026
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
