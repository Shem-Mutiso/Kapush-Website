import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 gap-4 relative z-10">
      <Logo size={48} />
      <div className="font-display text-[8rem] text-gold/25 leading-none mt-2">404</div>
      <h1 className="font-display text-3xl text-white">Page not found</h1>
      <p className="text-muted font-light text-sm max-w-xs">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-2 bg-gold hover:bg-gold-light text-navy font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
      >
        ← Back to Home
      </Link>
    </div>
  )
}
