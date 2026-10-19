import { useState, useEffect, useCallback } from 'react'

interface HowItWorksModalProps {
    open: boolean
    onClose: () => void
}

// ─── Phone screen mockups ─────────────────────────────────────────────────────

function ApplyScreen() {
    return (
        <div className="flex flex-col h-full bg-[#f3f4f6] overflow-hidden">

            {/* Nav bar */}
            <div className="bg-[#14214a] px-4 pt-3 pb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-4">
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d9a820" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    </button>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#d9a820] flex items-center justify-center text-[8px] font-bold text-[#14214a]">K</div>
                        <span className="text-white font-semibold text-[13px]">Ka<span className="text-[#d9a820]">push</span></span>
                    </div>
                    <div className="w-8" />
                </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-3">

                {/* Limit card */}
                <div className="bg-[#14214a] rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#d9a820]/20 flex items-center justify-center flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d9a820" strokeWidth="2" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[#d9a820] text-[10px] font-medium">Available Limit</p>
                        <p className="text-white font-bold text-base leading-tight">KSH 45,000</p>
                    </div>
                    <div className="bg-[#d9a820] rounded-md px-2 py-0.5">
                        <span className="text-[#14214a] text-[9px] font-bold">Eligible</span>
                    </div>
                </div>

                {/* Form card */}
                <div className="bg-white rounded-2xl px-4 py-4 flex flex-col gap-3 shadow-sm">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>
                        <span className="text-[#14214a] font-semibold text-[12px]">Advance Details</span>
                    </div>

                    <div>
                        <p className="text-[#14214a] text-[10px] font-semibold mb-1.5">Advance Amount *</p>
                        <div className="flex border border-gray-200 rounded-xl overflow-hidden">
                            <div className="bg-gray-50 px-3 py-2.5 text-[#14214a] font-bold text-[11px] border-r border-gray-200">KSH</div>
                            <div className="flex-1 px-3 py-2.5 text-[#14214a] font-bold text-[13px]">15,000</div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#14214a] text-[10px] font-semibold mb-1.5">Installments *</p>
                        <div className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2.5">
                            <span className="text-[#14214a] text-[12px]">3 Installments</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#14214a] text-[10px] font-semibold mb-1.5">Advance Reason *</p>
                        <div className="flex items-center justify-between border border-gray-200 rounded-xl px-3 py-2.5">
                            <span className="text-[#14214a] text-[12px]">Education</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                    </div>
                </div>

                {/* Summary card */}
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
                        <span className="text-[#14214a] font-semibold text-[12px]">Advance Summary</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                        <div className="flex justify-between">
                            <span className="text-gray-500 text-[10px]">Principal Amount</span>
                            <span className="text-[#14214a] font-semibold text-[10px]">KSH 15,000</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between items-center">
                            <span className="text-gray-500 text-[10px]">Interest</span>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400 text-[9px]">5%  ·</span>
                                <span className="text-[#14214a] font-semibold text-[10px]">KSH 750</span>
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between">
                            <span className="text-[#14214a] font-bold text-[10px]">Total Repayable</span>
                            <span className="text-[#14214a] font-bold text-[11px]">KSH 15,750</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between">
                            <span className="text-gray-500 text-[10px]">Per Installment</span>
                            <span className="text-[#d9a820] font-bold text-[11px]">KSH 5,250</span>
                        </div>
                    </div>
                </div>

                {/* Terms row */}
                <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-sm">
                    <div className="w-5 h-5 rounded border-2 border-[#14214a] flex items-center justify-center flex-shrink-0">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span className="text-[#14214a] text-[11px]">I agree to the <span className="text-[#d9a820] font-semibold">Terms and Conditions</span></span>
                </div>

                {/* Submit */}
                <div className="bg-[#d9a820] rounded-2xl px-4 py-3 flex items-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span className="flex-1 text-center text-[#14214a] font-bold text-[12px]">Submit Application</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>

            </div>
        </div>
    )
}

function ApprovalScreen() {
    return (
        <div className="flex flex-col h-full bg-[#f3f4f6] overflow-hidden">
            <div className="bg-[#14214a] px-4 pt-3 pb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d9a820" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    </button>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#d9a820] flex items-center justify-center text-[8px] font-bold text-[#14214a]">K</div>
                        <span className="text-white font-semibold text-[13px]">Ka<span className="text-[#d9a820]">push</span></span>
                    </div>
                    <div className="w-8" />
                </div>
            </div>

            <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-3">

                {/* Request summary */}
                <div className="bg-[#14214a] rounded-2xl px-4 py-3">
                    <p className="text-[#d9a820] text-[10px] font-semibold mb-1">Request from Peter Muli</p>
                    <p className="text-white font-bold text-lg leading-tight">KSH 15,000</p>
                    <p className="text-white/50 text-[10px] mt-0.5">Education · 3 installments · KSH 5,250/mo</p>
                </div>

                {/* Approval steps */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2" strokeLinecap="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                        <span className="text-[#14214a] font-semibold text-[12px]">Approval Status</span>
                    </div>

                    {/* HR row */}
                    <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-100">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[#14214a] font-semibold text-[11px]">HR Review</p>
                            <p className="text-gray-400 text-[10px]">Jane M. · HR Manager</p>
                        </div>
                        <div className="bg-green-100 rounded-full px-2.5 py-1">
                            <span className="text-green-700 font-bold text-[9px]">Approved</span>
                        </div>
                    </div>

                    {/* Finance row */}
                    <div className="px-4 py-3 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[#14214a] font-semibold text-[11px]">Finance Review</p>
                            <p className="text-gray-400 text-[10px]">Peter K. · Finance</p>
                        </div>
                        <div className="bg-amber-100 rounded-full px-2.5 py-1">
                            <span className="text-amber-700 font-bold text-[9px]">Pending…</span>
                        </div>
                    </div>
                </div>

                {/* Progress bar card */}
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[#14214a] text-[10px] font-semibold">Progress</span>
                        <span className="text-[#14214a] text-[10px] font-bold">1 / 2 approved</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#d9a820] rounded-full" style={{width:'50%'}} />
                    </div>
                </div>

                {/* Breakdown */}
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <p className="text-gray-400 text-[10px] mb-2">Request breakdown</p>
                    <div className="space-y-1.5">
                        {[['Amount','KSH 15,000'],['Reason','Education'],['Installments','3 months'],['Per month','KSH 5,250']].map(([l,v])=>(
                            <div key={l} className="flex justify-between">
                                <span className="text-gray-400 text-[10px]">{l}</span>
                                <span className="text-[#14214a] font-semibold text-[10px]">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <div className="flex-1 bg-red-50 border border-red-200 rounded-xl py-2.5 text-center">
                        <span className="text-red-600 font-semibold text-[11px]">Decline</span>
                    </div>
                    <div className="flex-1 bg-green-500 rounded-xl py-2.5 text-center">
                        <span className="text-white font-bold text-[11px]">Approve ✓</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

function DisbursementScreen() {
    return (
        <div className="flex flex-col h-full bg-[#f3f4f6] overflow-hidden">
            <div className="bg-[#14214a] px-4 pt-3 pb-4 flex-shrink-0">
                <div className="flex items-center justify-between mb-3">
                    <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d9a820" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                    </button>
                    <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#d9a820] flex items-center justify-center text-[8px] font-bold text-[#14214a]">K</div>
                        <span className="text-white font-semibold text-[13px]">Ka<span className="text-[#d9a820]">push</span></span>
                    </div>
                    <div className="w-8" />
                </div>
            </div>

            <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col gap-3">

                {/* Success banner */}
                <div className="bg-green-500 rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <div>
                        <p className="text-white font-bold text-[12px]">Application Approved!</p>
                        <p className="text-white/80 text-[10px]">Your advance has been submitted successfully!</p>
                    </div>
                </div>

                {/* M-PESA receipt */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#00a651] px-4 py-3 text-center">
                        <p className="text-white/80 font-bold text-[9px] tracking-widest uppercase mb-1">M-PESA</p>
                        <p className="text-white font-bold text-[22px] leading-tight">KSH 14,775</p>
                        <p className="text-white/70 text-[10px] mt-0.5">Received · Service fee deducted</p>
                    </div>
                    <div className="px-4 py-3 space-y-2">
                        {[['From','Kapush Ltd'],['To','+254 7** *** 968'],['Ref','KPH-20240312'],['Date','12 Mar 2024, 10:42']].map(([l,v])=>(
                            <div key={l} className="flex justify-between border-b border-gray-100 pb-1.5 last:border-0 last:pb-0">
                                <span className="text-gray-400 text-[10px]">{l}</span>
                                <span className="text-[#14214a] font-medium text-[10px]">{v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Repayment schedule */}
                <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#14214a" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        <span className="text-[#14214a] font-semibold text-[12px]">Repayment Schedule</span>
                    </div>
                    <div className="space-y-2">
                        {[['Monthly deduction','KSH 5,250',true],['Starts','Next payroll · Apr 2024',false],['Cleared by','June 2024',false]].map(([l,v,highlight])=>(
                            <div key={String(l)} className="flex justify-between">
                                <span className="text-gray-400 text-[10px]">{l}</span>
                                <span className={`font-semibold text-[10px] ${highlight ? 'text-[#d9a820]' : 'text-[#14214a]'}`}>{v}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                        <span className="text-blue-600 text-[10px]">3 automatic deductions · fully cleared by Jun 2024</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

// ─── Step data ────────────────────────────────────────────────────────────────

const STEPS = [
    {
        num: '01',
        label: 'Apply for Advance',
        mobileLabel: 'Apply',
        subtitle: 'Employee requests funds',
        color: '#d9a820',
        colorBg: 'rgba(217,168,32,0.12)',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"/>
                <path d="M8 12h8M12 8v8"/>
            </svg>
        ),
        description: 'Employees log in to the Kapush app and request a salary advance — no paperwork, no queues. Enter the amount, pick installments, select a reason, review the full summary, and submit. Done in under 2 minutes.',
        screen: <ApplyScreen />,
    },
    {
        num: '02',
        label: 'HR & Admin Approval',
        mobileLabel: 'Approve',
        subtitle: 'Two-step verification',
        color: '#34d399',
        colorBg: 'rgba(52,211,153,0.12)',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="9"/>
            </svg>
        ),
        description: 'The request routes to HR for verification, then Finance for final sign-off — all within the platform. Both approvers receive instant notifications and can act within minutes from any device.',
        screen: <ApprovalScreen />,
    },
    {
        num: '03',
        label: 'Disbursed to M-PESA',
        mobileLabel: 'Receive',
        subtitle: 'Money in under 24 hrs',
        color: '#60a5fa',
        colorBg: 'rgba(96,165,250,0.12)',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <path d="M2 10h20"/>
            </svg>
        ),
        description: 'Once fully approved, funds arrive on the employee\'s M-PESA within 24 hours. Repayment is deducted automatically from their monthly salary in equal installments — zero manual follow-up needed.',
        screen: <DisbursementScreen />,
    },
]

// ─── Phone shell ──────────────────────────────────────────────────────────────

function PhoneShell({ screen }: { screen: React.ReactNode }) {
    return (
        <div className="relative mx-auto" style={{ width: 220 }}>
            {/* Outer frame */}
            <div
                className="relative rounded-[36px] overflow-hidden"
                style={{
                    background: '#1a1a2e',
                    padding: '10px',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 24px 48px rgba(0,0,0,0.5), 0 8px 16px rgba(0,0,0,0.3)',
                }}
            >
                {/* Screen */}
                <div className="rounded-[28px] overflow-hidden" style={{ height: 440 }}>

                    {/* Status bar */}
                    <div className="bg-[#14214a] flex items-center justify-between px-5 pt-2 pb-1">
                        <span className="text-white text-[9px] font-medium">9:41</span>
                        {/* Dynamic island */}
                        <div className="w-14 h-4 bg-black rounded-full" />
                        <div className="flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white" opacity="0.8"><path d="M1 1l5.07 5.07A10.5 10.5 0 0 1 12 4c3.3 0 6.25 1.52 8.21 3.9L22 6.16A13 13 0 0 0 12 2C8.25 2 4.86 3.46 2.36 5.86L1 4.5V1zm3.54 3.54L6 6c1.58-1.58 3.76-2.55 6.17-2.55 2.4 0 4.59.97 6.17 2.55l1.46-1.46A10.5 10.5 0 0 0 12 3.45C9.34 3.45 6.92 4.52 5.13 6.31L4.54 5.7z"/></svg>
                            <div className="flex items-center gap-0.5">
                                {[1,2,3].map(i=><div key={i} className="bg-white rounded-sm" style={{width:2,height:4+i*2,opacity:.9}}/>)}
                            </div>
                            <div className="w-5 h-2.5 border border-white/60 rounded-sm relative">
                                <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-white rounded-sm" style={{width:'75%'}}/>
                                <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-0.5 h-1 bg-white/50 rounded-r-sm"/>
                            </div>
                        </div>
                    </div>

                    {/* Screen content */}
                    <div className="h-full">
                        {screen}
                    </div>
                </div>

                {/* Home indicator */}
                <div className="flex justify-center mt-2 mb-1">
                    <div className="w-20 h-1 bg-white/20 rounded-full" />
                </div>
            </div>

            {/* Side buttons */}
            <div className="absolute left-0 top-20 w-1 h-8 bg-white/10 rounded-l-sm -translate-x-1" />
            <div className="absolute left-0 top-32 w-1 h-12 bg-white/10 rounded-l-sm -translate-x-1" />
            <div className="absolute left-0 top-48 w-1 h-12 bg-white/10 rounded-l-sm -translate-x-1" />
            <div className="absolute right-0 top-28 w-1 h-16 bg-white/10 rounded-r-sm translate-x-1" />
        </div>
    )
}

// ─── Main Modal ───────────────────────────────────────────────────────────────

export default function HowItWorksModal({ open, onClose }: HowItWorksModalProps) {
    const [active, setActive] = useState(0)

    // Reset to step 0 when modal opens
    useEffect(() => {
        if (open) setActive(0)
    }, [open])

    const goTo = useCallback((i: number) => setActive(i), [])
    const goNext = useCallback(() => setActive(p => (p + 1) % STEPS.length), [])
    const goPrev = useCallback(() => setActive(p => Math.max(0, p - 1)), [])

    if (!open) return null

    const step = STEPS[active]

    return (
        <div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:px-4 sm:py-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-[#1a2535] border border-white/10 rounded-t-3xl sm:rounded-2xl w-full sm:max-w-2xl overflow-hidden flex flex-col"
                style={{ maxHeight: '92dvh' }}
                onClick={e => e.stopPropagation()}
            >
                {/* Mobile drag handle */}
                <div className="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
                    <div className="w-10 h-1 bg-white/15 rounded-full" />
                </div>

                {/* ── Header ── */}
                <div className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-5 border-b border-white/[0.06] flex-shrink-0">
                    <div>
                        <h2 className="text-white font-semibold text-base sm:text-lg">How Kapush works</h2>
                        <p className="text-white/35 text-xs mt-0.5 font-light">From request to cash — three simple steps</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white/70 transition-all"
                        aria-label="Close"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                {/* ── Step tabs ── */}
                <div className="flex border-b border-white/[0.06] flex-shrink-0">
                    {STEPS.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className="flex-1 flex flex-col items-center gap-0.5 py-3 px-2 relative transition-colors"
                        >
                            {/* Active indicator bar */}
                            <span
                                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300"
                                style={{ background: active === i ? s.color : 'rgba(255,255,255,0.06)' }}
                            />
                            <span
                                className="text-[10px] font-bold tracking-widest transition-colors"
                                style={{ color: active === i ? s.color : 'rgba(255,255,255,0.3)' }}
                            >
                {s.num}
              </span>
                            <span
                                className="text-[11px] font-medium leading-tight transition-colors hidden sm:block"
                                style={{ color: active === i ? '#fff' : 'rgba(255,255,255,0.35)' }}
                            >
                {s.label}
              </span>
                            <span
                                className="text-[11px] font-medium leading-tight transition-colors sm:hidden"
                                style={{ color: active === i ? '#fff' : 'rgba(255,255,255,0.35)' }}
                            >
                {s.mobileLabel}
              </span>
                        </button>
                    ))}
                </div>

                {/* ── Body ── */}
                <div className="flex flex-col sm:flex-row flex-1 min-h-0 overflow-y-auto sm:overflow-hidden">

                    {/* Left pane — description */}
                    <div className="sm:w-[44%] sm:border-r border-white/[0.06] px-5 py-5 sm:px-6 sm:py-6 flex flex-col flex-shrink-0 sm:overflow-y-auto">

                        {/* Icon + label (desktop stacked, mobile side-by-side) */}
                        <div className="flex items-center gap-3 sm:block mb-3 sm:mb-0">
                            <div
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center flex-shrink-0 sm:mb-5"
                                style={{ background: step.colorBg, color: step.color }}
                            >
                                {step.icon}
                            </div>
                            <div className="sm:hidden">
                                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: step.color }}>
                                    Step {step.num}
                                </p>
                                <h3 className="text-white font-semibold text-base leading-snug">{step.label}</h3>
                            </div>
                        </div>

                        <div className="hidden sm:block">
                            <p className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: step.color }}>
                                Step {step.num}
                            </p>
                            <h3 className="text-white font-semibold text-xl mb-1.5 leading-snug">{step.label}</h3>
                            <p className="text-white/30 text-xs font-light mb-5">{step.subtitle}</p>
                        </div>

                        <p className="text-white/55 text-sm font-light leading-relaxed">{step.description}</p>

                        {/* Mobile phone mockup */}
                        <div className="sm:hidden mt-5 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0f1923]">
                            <div className="bg-[#14214a] flex items-center justify-between px-4 py-1.5">
                                <span className="text-white/40 text-[9px]">9:41</span>
                                <div className="w-10 h-3 bg-black rounded-full" />
                                <span className="text-white/40 text-[9px]">100%</span>
                            </div>
                            <div style={{ height: 380 }}>
                                {step.screen}
                            </div>
                        </div>

                        {/* Dot navigation */}
                        <div className="flex items-center gap-2 mt-5 sm:mt-auto sm:pt-6">
                            {STEPS.map((_s, i) => (
                                <button
                                    key={i}
                                    onClick={() => goTo(i)}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: active === i ? 22 : 6,
                                        height: 6,
                                        background: active === i ? step.color : 'rgba(255,255,255,0.15)',
                                    }}
                                    aria-label={`Go to step ${i + 1}`}
                                />
                            ))}
                            <span className="text-white/20 text-[10px] ml-1">{active + 1} of {STEPS.length}</span>
                        </div>
                    </div>

                    {/* Right pane — phone mockup (desktop only) */}
                    <div className="hidden sm:flex flex-1 items-center justify-center bg-white/[0.015] py-8 px-6">
                        <PhoneShell screen={step.screen} />
                    </div>

                </div>

                {/* ── Footer ── */}
                <div className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4 border-t border-white/[0.06] flex-shrink-0">
          <span className="text-white/20 text-[10px] sm:text-xs font-light hidden sm:block">
            Funds arrive within 24 hrs of approval
          </span>
                    <span className="text-white/20 text-[10px] sm:hidden">24 hr disbursement</span>

                    <div className="flex items-center gap-2">
                        {/* Prev */}
                        <button
                            onClick={goPrev}
                            disabled={active === 0}
                            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full border border-white/10 transition-all disabled:opacity-0 disabled:pointer-events-none"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                            Prev
                        </button>

                        {/* Next / Restart */}
                        <button
                            onClick={active < STEPS.length - 1 ? goNext : () => goTo(0)}
                            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all"
                            style={{ background: step.colorBg, color: step.color, border: `1px solid ${step.color}30` }}
                        >
                            {active < STEPS.length - 1 ? (
                                <>
                                    Next
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </>
                            ) : (
                                <>
                                    Start over
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}