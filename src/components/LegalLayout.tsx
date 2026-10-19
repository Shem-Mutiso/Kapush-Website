import { Link, useLocation } from 'react-router-dom'
import { useEffect, type ReactNode } from 'react'
import Nav from "./Nav.tsx";

interface LegalLayoutProps {
  title: string
  subtitle?: string
  badge: string
  badgeColor?: 'gold' | 'cyan'
  lastUpdated: string
  notice?: string
  children: ReactNode
  opposite: { href: string; label: string }
}

export default function LegalLayout({
  title, subtitle, badge, badgeColor = 'gold',
  lastUpdated, notice, children, opposite,
}: LegalLayoutProps) {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  const accentClass = badgeColor === 'cyan'
    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
    : 'bg-gold/10 text-gold border-gold/25'

  const noticeClass = badgeColor === 'cyan'
    ? 'bg-cyan-500/5 border-cyan-500/20 text-muted'
    : 'bg-gold/5 border-gold/20 text-muted'

  return (
    <>
      {/* Minimal nav */}
      <Nav />

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <span className={`inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border mb-4 ${accentClass}`}>
            {badge}
          </span>
          <h1
            className="font-display text-4xl md:text-5xl text-white leading-tight mb-3 [&_em]:italic [&_em]:text-gold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && <p className="text-muted text-sm font-light">{subtitle}</p>}
          <div className="text-xs text-muted/60 mt-3 font-light">Last Updated: {lastUpdated}</div>
          {notice && (
            <div className={`mt-4 p-4 rounded-xl border text-sm font-light leading-relaxed ${noticeClass}`}>
              {notice}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-0">{children}</div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
          <Link to={opposite.href} className="hover:text-gold transition-colors">{opposite.label} →</Link>
          <span className="text-xs text-muted/50">© {new Date().getFullYear()} Kapush. All rights reserved.</span>
          <Link to="/" className="hover:text-white transition-colors">← Back to Home</Link>
        </div>
      </div>
    </>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

export function Section({ id, num, title, children }: { id: string; num: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="py-8">
      <h2 className="flex items-baseline gap-3 font-display text-2xl text-white mb-5">
        <span className="text-sm font-sans font-semibold text-gold/70 tabular-nums">{num}</span>
        {title}
      </h2>
      <div className="space-y-3 text-sm text-muted font-light leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_h3]:text-white [&_h3]:font-semibold [&_h3]:text-sm [&_h3]:mt-5 [&_h3]:mb-2 [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-cyan-400 [&_a]:underline-offset-2 [&_a]:hover:underline">
        {children}
      </div>
    </div>
  )
}

export function SubBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
      <div className="text-xs font-semibold text-white/80 mb-1.5 tracking-wide">{label}</div>
      <p className="text-sm text-muted font-light leading-relaxed">{children}</p>
    </div>
  )
}

export function Divider() {
  return <div className="h-px bg-white/8 my-2" />
}

export function Toc({ items, accentColor = 'gold' }: { items: [string, string][]; accentColor?: 'gold' | 'cyan' }) {
  const hoverClass = accentColor === 'cyan' ? 'hover:text-cyan-400' : 'hover:text-gold'
  const numClass = accentColor === 'cyan' ? 'text-cyan-500/50' : 'text-gold/50'
  return (
    <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 mb-10">
      <div className="text-xs font-bold tracking-widest uppercase text-muted mb-4">Contents</div>
      <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
        {items.map(([href, label], i) => (
          <li key={href}>
            <a href={href} className={`flex items-center gap-2.5 text-sm text-muted transition-colors ${hoverClass}`}>
              <span className={`text-xs tabular-nums font-semibold ${numClass}`}>{String(i + 1).padStart(2, '0')}</span>
              {label}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Notice({ children, color = 'gold' }: { children: ReactNode; color?: 'gold' | 'cyan' }) {
  const cls = color === 'cyan'
    ? 'bg-cyan-500/5 border-cyan-500/20'
    : 'bg-gold/5 border-gold/20'
  return (
    <div className={`mt-4 p-4 rounded-xl border text-sm text-muted font-light leading-relaxed ${cls}`}>
      {children}
    </div>
  )
}

export function HighlightBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 p-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-muted font-light leading-relaxed [&_strong]:text-white [&_a]:text-cyan-400">
      {children}
    </div>
  )
}
