import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import DitheredBackground from "@/components/DitheredBackground";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Terms() {
    const updated = "January 17, 2026";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tableOfContents = [
        { id: "eligibility", title: "Eligibility" },
        { id: "participation", title: "Participation" },
        { id: "top-60-winners", title: "Top 60 Winners" },
        { id: "content-originality", title: "Originality & Rights" },
        { id: "bursary-terms", title: "Bursary Terms" },
        { id: "disputes", title: "Disputes & Changes" },
        { id: "contact", title: "Contact" },
    ];

    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            <Header />

            <main className="relative">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-6 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--hero-bg-from))_0%,hsl(var(--hero-bg-via))_45%,hsl(var(--hero-bg-to))_100%)]">
                        <DitheredBackground className="z-0" />
                    </div>

                    <div className="container relative z-10 max-w-4xl mx-auto text-center">
                        <BlurFade delay={0}>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-display">
                                Terms & Conditions
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.05}>
                            <p className="text-muted-foreground mb-8 font-medium uppercase tracking-[0.2em] text-xs">
                                Last Updated: {updated}
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.1}>
                            <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
                                Please read these terms and conditions carefully before participating in the National AI Competition 2026.
                            </p>
                        </BlurFade>
                    </div>
                </section>

                {/* Content Section */}
                <section className="px-4 md:px-6 py-20 relative z-10">
                    <div className="container max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

                            {/* Table of Contents */}
                            <aside className="hidden lg:block">
                                <div className="sticky top-28 glass p-8 rounded-[2rem] border border-border/50 shadow-sm">
                                    <h3 className="font-bold text-sm uppercase tracking-[0.2em] text-foreground mb-6 font-display">
                                        Sections
                                    </h3>
                                    <nav className="flex flex-col gap-3">
                                        {tableOfContents.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className="text-base text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all py-1 font-light"
                                            >
                                                {item.title}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="space-y-24">
                                {/* Eligibility */}
                                <BlurFade inView delay={0.1}>
                                    <section id="eligibility" className="space-y-8">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Eligibility & Conditions of Entry</h2>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="p-8 rounded-[2rem] bg-secondary/30 border border-border/50">
                                                <h3 className="text-xl font-bold mb-4 font-display">Category A</h3>
                                                <ul className="space-y-2 text-muted-foreground font-light">
                                                    <li>• Form 4 and Form 5 (National/Private Schools)</li>
                                                    <li>• Year 10 and Year 11 (International Schools)</li>
                                                    <li>• Senior Middle 1 and Senior Middle 2 (Chinese Independent Schools)</li>
                                                </ul>
                                            </div>
                                            <div className="p-8 rounded-[2rem] bg-secondary/30 border border-border/50">
                                                <h3 className="text-xl font-bold mb-4 font-display">Category B</h3>
                                                <ul className="space-y-2 text-muted-foreground font-light">
                                                    <li>• Senior Middle 3 / UEC (Chinese Independent Schools)</li>
                                                    <li>• Form 6 / STPM (National Schools)</li>
                                                    <li>• Pre-University students (MQA-accredited)</li>
                                                    <li>• Diploma students (MQA-accredited)</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-8 rounded-[2rem] glass border-cyan-500/20">
                                            <p className="text-lg font-light text-muted-foreground leading-relaxed">
                                                Only those whose graduation date falls after <span className="text-foreground font-semibold">13 June 2026</span> are eligible to participate. This ensures all participants maintain active student status throughout the competition period.
                                            </p>
                                            <p className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-400">
                                                Note: If any one (1) team member falls under Category B, the entire team will be registered under Category B.
                                            </p>
                                        </div>
                                    </section>
                                </BlurFade>

                                {/* Participation */}
                                <BlurFade inView delay={0.1}>
                                    <section id="participation" className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Participation</h2>
                                        <p>
                                            Participation in the National AI Competition (NAIC) 2026 is <span className="text-foreground font-semibold">free of charge</span> for all eligible students.
                                        </p>
                                    </section>
                                </BlurFade>

                                {/* Top 60 Winners */}
                                <BlurFade inView delay={0.1}>
                                    <section id="top-60-winners" className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Conditions for Top 60 Winners</h2>
                                        <ul className="space-y-4">
                                            <li className="flex gap-4">
                                                <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                                                <p>The Organisers will notify Top 60 winners via email to attend the prize-giving ceremony on <span className="text-foreground font-medium">13 June 2026 (Saturday)</span> at Sunway University, Bandar Sunway.</p>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                                                <p>The Organisers reserve the right to request written proof of age and identity of any Competition winner before prizes are collected.</p>
                                            </li>
                                            <li className="flex gap-4">
                                                <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                                                <p>Winners may nominate a representative for prize collection subject to the Organisers’ absolute discretion and submission of proper authorization.</p>
                                            </li>
                                        </ul>
                                    </section>
                                </BlurFade>

                                {/* Content Originality */}
                                <BlurFade inView delay={0.1}>
                                    <section id="content-originality" className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Originality & Usage Rights</h2>
                                        <p>By submitting an entry, participants covenant that:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                "The participant is the author of the submitted work",
                                                "The submitted work is original and unpublished",
                                                "Information provided is true and accurate",
                                                "Agreed to be bound by these terms"
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 rounded-2xl bg-secondary/30 border border-border/50 text-base">
                                                    {item}
                                                </div>
                                            ))}
                                        </ul>
                                        <p className="mt-8">
                                            Teams grant Sunway College, Sunway University, and Rakan Tutor the right to use participants' names, photos, and submitted materials for promotional, educational, and marketing purposes. We reserve the right to display submissions with proper credit.
                                        </p>
                                        <p className="border-l-4 border-cyan-500 pl-6 py-2 italic bg-cyan-500/5">
                                            In compliance with the <Link to="/privacy" className="text-cyan-500 underline underline-offset-4 hover:text-cyan-600 transition-colors">Personal Data Protection Act (PDPA) 2010</Link>, please refer to our Privacy Policy for details on data collection.
                                        </p>
                                    </section>
                                </BlurFade>

                                {/* Bursary Terms */}
                                <BlurFade inView delay={0.1}>
                                    <section id="bursary-terms" className="space-y-8">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Conditions for Bursary</h2>
                                        <p className="text-lg font-light text-muted-foreground leading-relaxed">
                                            Bursaries are awarded as tuition fee waivers for specific programmes at Sunway University or Sunway College (KL).
                                        </p>

                                        <div className="space-y-6">
                                            <div className="p-8 rounded-[2rem] bg-secondary/30 border border-border/50">
                                                <h4 className="font-bold mb-4">Programme Eligibility</h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
                                                    <div>
                                                        <span className="font-bold block mb-2 underline">Category A Winners</span>
                                                        Pre-University or Diploma programmes (except Diploma in Nursing).
                                                    </div>
                                                    <div>
                                                        <span className="font-bold block mb-2 underline">Category B Winners</span>
                                                        Undergraduate Degree programmes (except Doctor of Medicine and Bachelor of Nursing).
                                                    </div>
                                                </div>
                                            </div>

                                            <ul className="space-y-4 text-base font-light text-muted-foreground">
                                                <li className="flex gap-4 items-start">
                                                    <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                                    <p>Awarded in the form of <span className="text-foreground font-medium">tuition fee deduction</span> (not cash). Maximum award is the tuition fee payable for the year.</p>
                                                </li>
                                                <li className="flex gap-4 items-start">
                                                    <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                                    <p>Covers tuition fees ONLY. General fees, deposits, exam fees, and repeat/re-sit fees are excluded.</p>
                                                </li>
                                                <li className="flex gap-4 items-start">
                                                    <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                                    <p>Recipients are entitled to <span className="text-foreground font-medium">ONLY one</span> bursary or scholarship at a time.</p>
                                                </li>
                                                <li className="flex gap-4 items-start">
                                                    <div className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                                                    <p>Disbursement is typically split equally between the first two or three semesters of the academic year.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </BlurFade>

                                {/* Disputes & Changes */}
                                <BlurFade inView delay={0.1}>
                                    <section id="disputes" className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Disputes & Changes</h2>
                                        <p>
                                            Sunway College / Sunway University reserves the right to alter, add, or delete any of the terms, conditions, and the bursary scheme at any time.
                                        </p>
                                        <p>
                                            In the event of a dispute regarding eligibility for the bursary, the decision made by the <span className="text-foreground font-medium">Sunway Bursary Committee</span> is final.
                                        </p>
                                    </section>
                                </BlurFade>

                                {/* Contact */}
                                <BlurFade inView delay={0.1}>
                                    <section id="contact" className="space-y-8 border-t border-border pt-16">
                                        <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">Contact For More Information</h2>
                                        <div className="space-y-6">
                                            <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                                If you have any questions riguardo the bursary or the competition terms, please reach out to:
                                            </p>
                                            <div className="flex flex-col gap-4">
                                                <a
                                                    href="mailto:clement@sunway.edu.my"
                                                    className="text-2xl md:text-3xl font-bold text-cyan-500 hover:text-cyan-600 transition-colors underline underline-offset-[8px] decoration-1"
                                                >
                                                    clement@sunway.edu.my
                                                </a>
                                                <a
                                                    href="mailto:mingjackt@sunway.edu"
                                                    className="text-2xl md:text-3xl font-bold text-cyan-500 hover:text-cyan-600 transition-colors underline underline-offset-[8px] decoration-1"
                                                >
                                                    mingjackt@sunway.edu
                                                </a>
                                            </div>
                                        </div>
                                    </section>
                                </BlurFade>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
