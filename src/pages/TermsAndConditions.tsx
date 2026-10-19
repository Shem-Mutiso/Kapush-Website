import LegalLayout, {
  Section,
  SubBlock,
  Divider,
  Toc,
  Notice,
} from '../components/LegalLayout'

const TOC_ITEMS: [string, string][] = [
  ['#s1',  'Definitions'],
  ['#s2',  'Eligibility'],
  ['#s3',  'Advance Limits'],
  ['#s4',  'Processing Fee'],
  ['#s5',  'Application Process'],
  ['#s6',  'Repayment Terms'],
  ['#s7',  'Employment Termination'],
  ['#s8',  'Data Protection'],
  ['#s9',  'Your Responsibilities'],
  ['#s10', 'Prohibited Activities'],
  ['#s11', 'Limitation of Liability'],
  ['#s12', 'Amendments'],
  ['#s13', 'Governing Law'],
  ['#s14', 'Contact'],
]

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms &amp; <em>Conditions</em>"
      subtitle="Kapush Salary Advance Facilities"
      badge="Legal Document"
      badgeColor="gold"
      lastUpdated="December 30, 2024"
      notice="Please read these terms carefully before using Kapush salary advance services. By submitting a request, you acknowledge that you have read, understood, and agree to be bound by these terms."
      opposite={{ href: '/privacy-policy', label: 'Privacy Policy' }}
    >
      <Toc items={TOC_ITEMS} />

      <Section id="s1" num="01" title="Definitions and Interpretation">
        <SubBlock label="Kapush">The salary advance facility service provided through this platform.</SubBlock>
        <SubBlock label="Employee / You">The eligible employee requesting and receiving salary advances.</SubBlock>
        <SubBlock label="Employer">The company that has partnered with Kapush to offer this service to its employees.</SubBlock>
        <SubBlock label="Advance / Facility">The salary advance amount disbursed to the Employee.</SubBlock>
        <SubBlock label="Processing Fee">The 3% fee charged on the advance amount.</SubBlock>
      </Section>
      <Divider />

      <Section id="s2" num="02" title="Eligibility Criteria">
        <p>To be eligible for Kapush salary advance facilities, you must:</p>
        <ul>
          <li>Be a full-time employee of a company partnered with Kapush</li>
          <li>Have an active employment contract with your Employer</li>
          <li>Receive a regular monthly salary through your Employer&apos;s payroll system</li>
          <li>Have completed any probationary period as required by your Employer</li>
          <li>Be at least 18 years of age</li>
          <li>Provide accurate and complete information during the application process</li>
          <li>Have a valid M-PESA account for disbursements</li>
        </ul>
      </Section>
      <Divider />

      <Section id="s3" num="03" title="Advance Limits and Terms">
        <SubBlock label="3.1 Advance Limit">Your advance limit is determined as a percentage of your monthly gross salary, as configured by your Employer. The default limit is 40% of your monthly salary, with a maximum of 50%.</SubBlock>
        <SubBlock label="3.2 Multiple Advances">You may request multiple advances, provided the total outstanding amount does not exceed your approved limit.</SubBlock>
        <SubBlock label="3.3 Repayment Period">All advances must be repaid within 1 to 6 months from the disbursement date, as approved by your HR and Admin teams.</SubBlock>
        <SubBlock label="3.4 Limit Adjustments">Your Employer reserves the right to adjust your advance limit at any time based on your employment status, salary changes, or repayment history.</SubBlock>
      </Section>
      <Divider />

      <Section id="s4" num="04" title="Processing Fee and Costs">
        <SubBlock label="4.1 Processing Fee">A processing fee of 3% of the requested advance amount will be charged for each advance facility. This fee is non-refundable.</SubBlock>
        <SubBlock label="4.2 Fee Calculation">Total repayment = advance amount + 3% fee. For example, an advance of KSh 10,000 incurs a fee of KSh 300, making the total repayment KSh 10,300.</SubBlock>
        <SubBlock label="4.3 No Hidden Charges">The 3% processing fee is the only charge applied. There are no additional interest charges, late payment fees, or hidden costs.</SubBlock>
        <SubBlock label="4.4 M-PESA Charges">Standard M-PESA transaction charges may apply during disbursement and are borne by the Employee.</SubBlock>
      </Section>
      <Divider />

      <Section id="s5" num="05" title="Application and Approval Process">
        <SubBlock label="5.1 Application">You may submit advance requests through the Kapush platform by providing the required amount and reason.</SubBlock>
        <SubBlock label="5.2 HR Approval">All requests are first reviewed and approved by your company&apos;s Human Resources department.</SubBlock>
        <SubBlock label="5.3 Admin Approval">Following HR approval, requests require final approval from your company&apos;s Admin team.</SubBlock>
        <SubBlock label="5.4 Disbursement">Upon final approval, funds will be disbursed to your registered M-PESA number within 24 hours, subject to system availability.</SubBlock>
        <SubBlock label="5.5 Right to Refuse">Kapush and your Employer reserve the right to refuse any advance request without providing reasons.</SubBlock>
      </Section>
      <Divider />

      <Section id="s6" num="06" title="Repayment Terms">
        <SubBlock label="6.1 Automatic Deduction">You hereby authorize your Employer to deduct the monthly repayment amount from your salary at the end of each month until the advance is fully repaid.</SubBlock>
        <SubBlock label="6.2 Deduction Priority">Salary deductions are processed after statutory deductions (tax, NSSF, NHIF) per your Employer&apos;s payroll hierarchy.</SubBlock>
        <SubBlock label="6.3 Monthly Installments">The total repayment amount will be divided into equal monthly installments over the approved repayment period (1–6 months).</SubBlock>
        <SubBlock label="6.4 Early Repayment">You may request to repay your advance earlier than scheduled. No penalties apply for early repayment.</SubBlock>
        <SubBlock label="6.5 Insufficient Salary">If your monthly salary is insufficient to cover the deduction, the full available amount will be deducted and the remaining balance carried forward.</SubBlock>
      </Section>
      <Divider />

      <Section id="s7" num="07" title="Employment Termination">
        <SubBlock label="7.1 Immediate Repayment">In the event of employment termination, any outstanding advance balance becomes immediately due and payable in full.</SubBlock>
        <SubBlock label="7.2 Final Settlement">You authorize your Employer to deduct the full outstanding balance from your final salary payment, terminal benefits, or any other payments owed to you.</SubBlock>
        <SubBlock label="7.3 Shortfall Recovery">If final payments are insufficient to cover the outstanding balance, you agree to pay the remaining amount within 30 days. Kapush reserves the right to pursue legal action.</SubBlock>
        <SubBlock label="7.4 Notice Period">You agree to notify Kapush and settle any outstanding advances before tendering resignation.</SubBlock>
      </Section>
      <Divider />

      <Section id="s8" num="08" title="Data Protection and Privacy">
        <SubBlock label="8.1 Data Collection">By using Kapush services, you consent to the collection, processing, and storage of your personal information including name, employee number, salary details, phone number, and advance history.</SubBlock>
        <SubBlock label="8.2 Data Sharing">Your information may be shared with your Employer, HR department, and necessary third parties (such as M-PESA) to facilitate advance processing and repayment.</SubBlock>
        <SubBlock label="8.3 Data Security">Kapush implements industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse.</SubBlock>
        <SubBlock label="8.4 Compliance">Kapush complies with the Kenya Data Protection Act, 2019, and all applicable data protection regulations.</SubBlock>
      </Section>
      <Divider />

      <Section id="s9" num="09" title="Your Responsibilities">
        <p>As a Kapush user, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information during advance applications</li>
          <li>Use advances responsibly and for legitimate purposes</li>
          <li>Maintain active employment with your Employer throughout the repayment period</li>
          <li>Keep your M-PESA account active and accessible for disbursements</li>
          <li>Notify Kapush immediately of any changes to your employment status</li>
          <li>Not attempt to manipulate or abuse the advance facility system</li>
          <li>Maintain sufficient salary balance to cover monthly deductions</li>
        </ul>
      </Section>
      <Divider />

      <Section id="s10" num="10" title="Prohibited Activities">
        <p>The following activities are strictly prohibited:</p>
        <ul>
          <li>Providing false or misleading information in advance applications</li>
          <li>Requesting advances with the intent to resign or terminate employment</li>
          <li>Sharing your Kapush account credentials with others</li>
          <li>Attempting to circumvent the advance limit or approval process</li>
          <li>Using advances for illegal or prohibited purposes</li>
          <li>Making fraudulent claims or misrepresenting your employment status</li>
        </ul>
        <Notice>
          Violation may result in immediate suspension of advance privileges,
          employment disciplinary action, legal proceedings, and/or recovery of
          all outstanding amounts.
        </Notice>
      </Section>
      <Divider />

      <Section id="s11" num="11" title="Limitation of Liability">
        <SubBlock label="11.1 Service Availability">While Kapush strives to maintain continuous availability, we do not guarantee uninterrupted access.</SubBlock>
        <SubBlock label="11.2 Disbursement Delays">Kapush is not liable for delays caused by M-PESA system failures, network issues, or other third-party disruptions.</SubBlock>
        <SubBlock label="11.3 Financial Advice">Kapush does not provide financial advice. The decision to request an advance is your sole responsibility.</SubBlock>
        <SubBlock label="11.4 Employer Relationship">Kapush is not responsible for any disputes between you and your Employer regarding employment terms, salary payments, or termination.</SubBlock>
      </Section>
      <Divider />

      <Section id="s12" num="12" title="Amendments to Terms">
        <SubBlock label="12.1 Right to Modify">Kapush reserves the right to modify these Terms and Conditions at any time without prior notice.</SubBlock>
        <SubBlock label="12.2 Notification">Material changes will be communicated through the platform, email, or other appropriate channels.</SubBlock>
        <SubBlock label="12.3 Continued Use">Your continued use of Kapush services after any modifications constitutes acceptance of the updated terms.</SubBlock>
      </Section>
      <Divider />

      <Section id="s13" num="13" title="Governing Law and Dispute Resolution">
        <SubBlock label="13.1 Governing Law">These Terms and Conditions shall be governed by the laws of the Republic of Kenya.</SubBlock>
        <SubBlock label="13.2 Jurisdiction">Any disputes shall be subject to the exclusive jurisdiction of the Kenyan courts.</SubBlock>
        <SubBlock label="13.3 Dispute Resolution">Before initiating legal proceedings, parties agree to attempt resolution through good-faith negotiations and, if necessary, mediation.</SubBlock>
        <SubBlock label="13.4 Arbitration">If mediation fails, disputes may be referred to arbitration in accordance with the Arbitration Act, 1995 (Kenya).</SubBlock>
      </Section>
      <Divider />

      <Section id="s14" num="14" title="Contact Information">
        <SubBlock label="Kapush Support">
          Email: info@kapush.co.ke · Phone: 0140 711 100 / 0147 468 139 · WhatsApp: 0140 711 100 · Monday–Friday, 8:00 AM–6:00 PM EAT
        </SubBlock>
      </Section>
    </LegalLayout>
  )
}
