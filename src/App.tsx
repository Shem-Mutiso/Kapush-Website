import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import NotFound from './pages/NotFound'
import { ContactModalProvider, useContactModal } from './context/ContactModalContext'
import ContactModal from './components/ContactModal'

function ModalRenderer() {
    const { isOpen, closeContact } = useContactModal()
    return <ContactModal open={isOpen} onClose={closeContact} />
}

export default function App() {
    return (
        <ContactModalProvider>
            <ModalRenderer />
            <Routes>
                <Route path="/"                     element={<Home />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/privacy-policy"       element={<PrivacyPolicy />} />
                <Route path="*"                     element={<NotFound />} />
            </Routes>
        </ContactModalProvider>
    )
}
