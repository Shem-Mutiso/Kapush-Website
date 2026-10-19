import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

interface ContactModalContextType {
    openContact: () => void
    closeContact: () => void
    isOpen: boolean
}

const ContactModalContext = createContext<ContactModalContextType | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ContactModalContext.Provider value={{
            isOpen,
            openContact: () => setIsOpen(true),
            closeContact: () => setIsOpen(false),
        }}>
            {children}
        </ContactModalContext.Provider>
    )
}

export function useContactModal() {
    const ctx = useContext(ContactModalContext)
    if (!ctx) throw new Error('useContactModal must be used within ContactModalProvider')
    return ctx
}
