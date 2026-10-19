import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-4 md:py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-4 gap-y-2 text-sm">
                    {/* Left - Brand and Copyright */}
                    <div className="flex items-center gap-2">
                        <Logo size={20} />
                        <span className="text-white/40 whitespace-nowrap text-xs sm:text-sm">
                            © {new Date().getFullYear()} Kapush
                        </span>
                    </div>

                    {/* Center/Right - Legal Links */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/privacy-policy"
                            className="text-xs sm:text-sm text-white/40 hover:text-[#f9bc00] transition-colors whitespace-nowrap"
                        >
                            Privacy
                        </Link>
                        <span className="text-white/20 text-xs">•</span>
                        <Link
                            to="/terms-and-conditions"
                            className="text-xs sm:text-sm text-white/40 hover:text-[#f9bc00] transition-colors whitespace-nowrap"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}