import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useContactModal } from '../context/ContactModalContext'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openContact } = useContactModal()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#133e71]/95 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Brand */}
              <Link to="/" className="flex items-center gap-2 group shrink-0">
                <Logo size={window.innerWidth < 768 ? 44 : 52} />
                <div className="flex flex-col leading-tight">
                  <span className="font-extrabold text-2xl sm:text-3xl text-[#f9bc00] tracking-tight">KAPUSH</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium">
                {isHome && (
                    <>
                      <a href="#how" className="nav-link-center text-white hover:text-[#f9bc00] transition-colors">How it works</a>
                      <a href="#mission" className="nav-link-center text-white hover:text-[#f9bc00] transition-colors">Our mission</a>
                    </>
                )}
                {!isHome && (
                    <Link to="/" className="nav-link-center text-white hover:text-[#f9bc00] transition-colors">Home</Link>
                )}
                <button onClick={openContact} className="nav-link-center text-white hover:text-[#f9bc00] transition-colors">
                  Partner with us
                </button>
                <a
                    href="https://play.google.com/store/apps/details?id=co.ke.kapush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-center text-white flex items-center gap-2 hover:text-[#f9bc00] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l11.65-11.65L12 8.49 3.18 23.76zM20.9 10.46l-2.8-1.6-3.36 3.36 3.36 3.36 2.82-1.62c.8-.46.8-1.54-.02-2z"/>
                    <path d="M2.4.44C2.1.72 2 1.14 2 1.64v20.72c0 .5.1.92.42 1.2l.06.06 11.6-11.6v-.14L2.46.38 2.4.44zM15.77 8.49l-3.36-3.36L.76.24C.44.06.1.12-.18.42l13.6 13.6 2.35-2.35-.28-.28.28.28z"/>
                  </svg>
                  Mobile App
                </a>
              </div>

              <button
                  onClick={openContact}
                  className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#f9bc00] px-5 py-2.5 text-sm font-extrabold text-[#133e71] shadow-lg shadow-[#f9bc00]/10 hover:-translate-y-0.5 transition-transform"
              >
                Get started <span>→</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center text-white/80 hover:text-white"
                  aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
                  <span className={`block h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
            className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-[#133e71] shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <span className="font-extrabold text-xl text-[#f9bc00]">Menu</span>
              <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-6 px-4 overflow-y-auto">
              <div className="space-y-1">
                {isHome ? (
                    <>
                      <a
                          href="#how"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                    <span className="w-5 h-5 flex items-center justify-center text-white/40 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    </span>
                        <span className="font-medium">How it works</span>
                      </a>
                      <a
                          href="#mission"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                    <span className="w-5 h-5 flex items-center justify-center text-white/40 shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12" />
                      </svg>
                    </span>
                        <span className="font-medium">Our mission</span>
                      </a>
                    </>
                ) : (
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                  <span className="w-5 h-5 flex items-center justify-center text-white/40 shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>
                      <span className="font-medium">Home</span>
                    </Link>
                )}

                <button
                    onClick={() => { setIsMenuOpen(false); openContact() }}
                    className="flex items-center gap-3 px-4 py-3.5 w-full text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                <span className="w-5 h-5 flex items-center justify-center text-white/40 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </span>
                  <span className="font-medium">Partner with us</span>
                </button>

                <a
                    href="https://play.google.com/store/apps/details?id=co.ke.kapush"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                <span className="w-5 h-5 flex items-center justify-center text-white/40 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l11.65-11.65L12 8.49 3.18 23.76zM20.9 10.46l-2.8-1.6-3.36 3.36 3.36 3.36 2.82-1.62c.8-.46.8-1.54-.02-2z"/>
                    <path d="M2.4.44C2.1.72 2 1.14 2 1.64v20.72c0 .5.1.92.42 1.2l.06.06 11.6-11.6v-.14L2.46.38 2.4.44zM15.77 8.49l-3.36-3.36L.76.24C.44.06.1.12-.18.42l13.6 13.6 2.35-2.35-.28-.28.28.28z"/>
                  </svg>
                </span>
                  <span className="font-medium">Mobile App</span>
                  <span className="ml-auto text-xs px-2 py-1 bg-[#f9bc00]/20 text-[#f9bc00] rounded-full">New</span>
                </a>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="p-5 border-t border-white/10">
              <p className="text-center text-xs text-white/40">Download on Play Store</p>
            </div>
          </div>
        </div>

        {/* Spacer for fixed nav */}
        <div className="h-16 md:h-20" />
      </>
  )
}