import React from 'react'
import LegalLayout, {
  Section, SubBlock, Divider, Toc, HighlightBox,
} from '../components/LegalLayout'

const TOC_ITEMS: [string, string][] = [
  ['#p1','Introduction'],['#p2','Information We Collect'],['#p3','How We Use Your Data'],
  ['#p4','Data Sharing'],['#p5','Security Measures'],['#p6','Data Retention'],
  ['#p7','Your Rights'],['#p8','Cookies'],['#p9','International Transfers'],
  ['#p10','Contact'],['#p11','Policy Changes'],
]

const RIGHTS: [string, string][] = [
  ['Right to Access','Request a copy of your personal data we hold.'],
  ['Right to Rectification','Correct inaccurate or incomplete information.'],
  ['Right to Erasure','Request deletion of your data (subject to legal retention requirements).'],
  ['Right to Restrict','Temporarily suspend data processing activities.'],
  ['Right to Portability','Transfer your data to another service provider.'],
  ['Right to Object','Object to certain processing activities, including direct marketing.'],
  ['Withdraw Consent','Revoke consent at any time where processing is consent-based.'],
  ['Lodge a Complaint','File a complaint with the Office of the Data Protection Commissioner (ODPC).'],
]

const TRUST_BADGES: { icon: React.ReactNode; label: string; sub: string }[] = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    label: 'AES-256 Encryption',
    sub: 'Bank-level security',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'ODPC Compliant',
    sub: 'Kenya Data Protection Act 2019',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    label: 'Your Rights Protected',
    sub: 'Access, rectify, erase data',
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy <em>Policy</em>"
      subtitle="KAPUSH Data Protection &amp; Privacy"
      badge="Data Protection"
      badgeColor="cyan"
      lastUpdated="December 30, 2024 · Version 1.0"
      notice="This Privacy Policy explains how KAPUSH collects, uses, discloses, and safeguards your personal information in compliance with the Kenya Data Protection Act, 2019."
      opposite={{ href: '/terms-and-conditions', label: 'Terms & Conditions' }}
    >
      <div className="flex flex-wrap gap-3 mb-8">
        {TRUST_BADGES.map(({ icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3">
            <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">{icon}</div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-white leading-none">{label}</span>
              <span className="text-[11px] text-muted font-light">{sub}</span>
            </div>
          </div>
        ))}
      </div>

      <Toc items={TOC_ITEMS} accentColor="cyan" />

      <Section id="p1" num="01" title="Introduction">
        <p>KAPUSH Ltd (<strong>"KAPUSH"</strong>, <strong>"we"</strong>, <strong>"us"</strong>) is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our salary advance platform.</p>
        <p>This policy complies with the <strong>Kenya Data Protection Act, 2019</strong> and applicable international data protection standards.</p>
      </Section>
      <Divider />

      <Section id="p2" num="02" title="Information We Collect">
        <h3>2.1 Personal Identification Data</h3>
        <ul><li>Full legal name</li><li>National ID number, passport number, or government-issued identification</li><li>Email address and phone number (including M-PESA registered number)</li><li>Date of birth</li></ul>
        <h3>2.2 Employment Information</h3>
        <ul><li>Employer name, job title, and department</li><li>Monthly gross salary and employment start date</li><li>Payroll deduction records</li></ul>
        <h3>2.3 Financial Transaction Data</h3>
        <ul><li>Salary advance requests and M-PESA transaction records</li><li>Repayment history and outstanding balances</li><li>Advance eligibility calculations</li></ul>
        <h3>2.4 Technical and Usage Data</h3>
        <ul><li>IP address, device identifiers, and browser information</li><li>Login timestamps, session duration, and pages viewed</li><li>Geolocation data (with your consent)</li></ul>
      </Section>
      <Divider />

      <Section id="p3" num="03" title="How We Use Your Data">
        <SubBlock label="3.1 Service Delivery">Processing salary advances, facilitating M-PESA disbursements, managing payroll deductions, and maintaining your account.</SubBlock>
        <SubBlock label="3.2 Security & Fraud Prevention">Detecting fraudulent transactions, monitoring unusual activity, and enforcing platform policies.</SubBlock>
        <SubBlock label="3.3 Legal Compliance">Meeting tax obligations, complying with labor laws, and responding to legal requests.</SubBlock>
        <SubBlock label="3.4 Service Improvement">Analyzing usage patterns, conducting research and development, and generating analytics to improve our services.</SubBlock>
        <SubBlock label="3.5 Communication">Sending transactional notifications, service updates, and important account information.</SubBlock>
      </Section>
      <Divider />

      <Section id="p4" num="04" title="Data Sharing and Disclosure">
        <p>We may share your personal data with:</p>
        <ul>
          <li><strong>Employer Partners</strong> — For payroll processing, advance approvals, and deduction management</li>
          <li><strong>Safaricom M-PESA</strong> — For payment processing and disbursement services</li>
          <li><strong>Financial Institutions</strong> — For settlement and reconciliation purposes</li>
          <li><strong>Service Providers</strong> — Cloud hosting, IT support, and analytics (under strict confidentiality agreements)</li>
          <li><strong>Legal Authorities</strong> — When required by law, court order, or regulatory request</li>
          <li><strong>Credit Reference Bureaus</strong> — In cases of default or non-payment (as permitted by law)</li>
        </ul>
        <HighlightBox><strong>Important:</strong> We do NOT sell, rent, or trade your personal information to third parties for marketing purposes.</HighlightBox>
      </Section>
      <Divider />

      <Section id="p5" num="05" title="Data Security Measures">
        <SubBlock label="5.1 Encryption">AES-256 encryption for data at rest and TLS 1.3 for data in transit.</SubBlock>
        <SubBlock label="5.2 Access Controls">Role-based access permissions and multi-factor authentication for all system access.</SubBlock>
        <SubBlock label="5.3 Monitoring">24/7 security monitoring with automated threat detection and incident response.</SubBlock>
        <SubBlock label="5.4 Regular Audits">Quarterly security assessments, penetration testing, and vulnerability scans.</SubBlock>
        <SubBlock label="5.5 Incident Response">Documented procedures for data breach notification within 72 hours as required by law.</SubBlock>
      </Section>
      <Divider />

      <Section id="p6" num="06" title="Data Retention">
        <SubBlock label="Active Employees">Personal data retained throughout the employment relationship and active use of services.</SubBlock>
        <SubBlock label="Former Employees">Seven (7) years after employment termination or final advance repayment, as required by Kenyan tax and employment laws.</SubBlock>
        <SubBlock label="Transaction Records">Seven (7) years for audit, compliance, and legal purposes.</SubBlock>
        <SubBlock label="Analytics Data">Indefinitely in anonymized and aggregated form for research and service improvement.</SubBlock>
        <SubBlock label="Deletion">Upon request or after retention period expires, data is securely deleted or anonymized.</SubBlock>
      </Section>
      <Divider />

      <Section id="p7" num="07" title="Your Data Protection Rights">
        <p>Under the Kenya Data Protection Act, 2019, you have the following rights:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          {RIGHTS.map(([title, desc]) => (
            <div key={title} className="bg-white/[0.03] border border-white/8 rounded-xl p-4">
              <div className="text-xs font-semibold text-white/80 mb-1.5">✦ {title}</div>
              <p className="text-xs text-muted font-light leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <HighlightBox>
          <strong>To exercise your rights:</strong> Email{' '}
          <a href="mailto:privacy@kapush.co.ke" className="text-cyan-400 hover:underline">privacy@kapush.co.ke</a>{' '}
          with subject "Data Subject Rights Request". We will respond within 30 days.
        </HighlightBox>
      </Section>
      <Divider />

      <Section id="p8" num="08" title="Cookies and Tracking Technologies">
        <SubBlock label="Essential Cookies">Required for platform functionality, authentication, and security.</SubBlock>
        <SubBlock label="Performance Cookies">Anonymous usage statistics to improve service quality.</SubBlock>
        <SubBlock label="Security Cookies">Fraud detection, prevention, and account protection.</SubBlock>
        <SubBlock label="Cookie Management">You can control cookies through your browser settings, though disabling essential cookies may affect platform functionality.</SubBlock>
      </Section>
      <Divider />

      <Section id="p9" num="09" title="International Data Transfers">
        <p>Your data is primarily stored and processed within Kenya. If we transfer data outside Kenya, we ensure adequate safeguards through standard contractual clauses, transfers to countries with adequate data protection laws, and your explicit consent for specific transfers.</p>
      </Section>
      <Divider />

      <Section id="p10" num="10" title="Contact Information">
        <SubBlock label="Data Protection Officer — KAPUSH Ltd">Email: info@kapush.co.ke · Phone: 0140 711 100 / 0147 468 139 · Nairobi, Kenya</SubBlock>
        <SubBlock label="Office of the Data Protection Commissioner (ODPC)">Website: www.odpc.go.ke · Email: info@odpc.go.ke · Phone: +254 20 2635000</SubBlock>
      </Section>
      <Divider />

      <Section id="p11" num="11" title="Changes to This Privacy Policy">
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Material changes will be communicated through email or prominent notice on our platform at least <strong>30 days</strong> before taking effect.</p>
      </Section>
    </LegalLayout>
  )
}
