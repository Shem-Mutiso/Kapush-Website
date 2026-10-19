interface ContactModalProps {
    open: boolean
    onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-[#1e2f42] border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-7"
                onClick={e => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
                    aria-label="Close"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="font-display text-xl text-white mb-1">Get in Touch</h2>
                    <p className="text-white/40 text-sm font-light">We'd love to hear from you.</p>
                </div>

                {/* Contact items */}
                <div className="space-y-3">
                    {/* Email */}
                    <a
                        href="mailto:info@kapush.co.ke"
                        className="flex items-center gap-4 p-4 bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 rounded-xl transition-colors group"
                    >
                        <div className="w-9 h-9 rounded-full bg-[#f0b429]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0b429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="M2 7l10 7 10-7" />
                            </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[11px] text-white/35 font-light tracking-wider uppercase mb-0.5">Email</span>
                            <span className="text-sm text-white/80 group-hover:text-white transition-colors truncate">info@kapush.co.ke</span>
                        </div>
                    </a>

                    {/* Phone */}
                    <div className="flex items-center gap-4 p-4 bg-white/[0.04] border border-white/8 rounded-xl">
                        <div className="w-9 h-9 rounded-full bg-[#f0b429]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0b429" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div className="flex flex-col min-w-0 gap-1">
                            <span className="text-[11px] text-white/35 font-light tracking-wider uppercase">Phone</span>
                            <a href="tel:+254114746139" className="text-sm text-white/80 hover:text-white transition-colors">0114 746 139</a>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/254140777700"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/[0.04] hover:bg-white/[0.07] border border-white/8 rounded-xl transition-colors group"
                    >
                        <div className="w-9 h-9 rounded-full bg-[#25d366]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-[11px] text-white/35 font-light tracking-wider uppercase mb-0.5">WhatsApp & Phone</span>
                            <span className="text-sm text-white/80 group-hover:text-white transition-colors">0140 777 700</span>
                        </div>
                    </a>
                </div>

                {/* Footer note */}
                <p className="text-center text-xs text-white/25 mt-5 font-light">Mon – Fri · 8:00 AM – 6:00 PM EAT</p>
            </div>
        </div>
    )
}