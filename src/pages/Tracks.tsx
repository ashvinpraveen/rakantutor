import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Paintbrush, Lightbulb, Monitor, Settings, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.05;

const tracksData = [
    {
        id: "computing",
        title: "Computing",
        icon: <Monitor className="w-8 h-8" />,
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-500/10",
        borderColor: "border-cyan-500/20",
        overview: "Prepare a high-quality pipeline and train an AI model that can make reliable predictions from thousands of retinal fundus images with a realistic setting where lighting, blurring, camera differences, and class imbalance are common.",
        theme: "Smart City Healthcare - Diabetic Retinopathy (DR) Screening",
        whoIsThisFor: "Enthusiastic participants who want to get hands-on with real-world medical data and push the limits of AI technologies.",
        deliverables: "Inference/Testing Script, Model Weights/Saved Model, and a Short Technical Write-Up.",
        examples: [
            "Inference script that outputs required CSV and confusion matrix",
            "Model weights with architecture details and preprocessing config"
        ],
        judging: [
            { title: "Performance (55%)", description: "Accuracy, F1 Score, Precision, Recall, Confusion Matrix performance." },
            { title: "Model Design (20%)", description: "Architecture choice, handling imbalance, and generalization methods." },
            { title: "Data Strategy (15%)", description: "Pipeline quality, preprocessing, and validation split strategy." },
            { title: "Additional Features (10%)", description: "Working demo/dashboard/app showing inference and outputs." }
        ]
    },
    {
        id: "engineering",
        title: "Engineering",
        icon: <Settings className="w-8 h-8" />,
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        overview: "Design AI-powered engineering solutions that make cities more efficient, sustainable, and people-friendly. Use technology to solve real Malaysian urban challenges.",
        theme: "Smart City Initiatives",
        whoIsThisFor: "Problem-solvers interested in robotics, automation, and the hardware-software interface of AI for urban living.",
        deliverables: "Proposal report, system design workflow, and a proof-of-concept prototype (hardware or software simulation).",
        examples: [
            "AI-predictive Traffic Management System",
            "Smart Waste-sorting Sensors for Residential Areas"
        ],
        judging: [
            { title: "Problem Understanding", description: "Clarity of the defined problem and its relevance." },
            { title: "AI-Enabled Solution", description: "Quality of solution and effectiveness of AI integration." },
            { title: "Prototype & Impact", description: "Demonstration of core idea and potential impact." }
        ]
    },
    {
        id: "innovation",
        title: "Innovation",
        icon: <Lightbulb className="w-8 h-8" />,
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/20",
        overview: "Design disruptive AI solutions targeting the UN Sustainable Development Goals. Focus on conceptual design, scalability, and measurable social impact.",
        theme: "AI-driven Solutions for Sustainable Cities & Communities (SDG 11)",
        whoIsThisFor: "Visionaries and problem-solvers interested in the social impact of AI. No technical build or coding required.",
        deliverables: "An innovation proposal (slide deck/report), product mockups or wireframes, and an impact roadmap.",
        examples: [
            "AI-driven App to Reduce Urban Food Desert effects",
            "Community Safety Platform using AI-enhanced Predictive Mapping"
        ],
        judging: [
            { title: "Problem Statement", description: "Depth of understanding and importance of the challenge." },
            { title: "Feasibility", description: "Practicality and scalability of the proposed solution." },
            { title: "Innovation", description: "Uniqueness and creative application of AI technology." }
        ]
    },
    {
        id: "art",
        title: "Generated Art",
        icon: <Paintbrush className="w-8 h-8" />,
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
        overview: "Use AI as a creative partner to explore the intersection of human imagination and machine-generated beauty within the Malaysian context.",
        theme: "Visualising Malaysia's Biodiversity & Cultural Heritage",
        whoIsThisFor: "Artists and creative thinkers looking to push the boundaries of visual storytelling with generative AI tools.",
        deliverables: "A portfolio of 3-5 high-resolution AI artworks, a process document including prompts, and an artist statement.",
        examples: [
            "Digital Tapestry of Malaysia's Endangered Rainforest Species",
            "Reimagining Traditional Architecture through a Cyberpunk Lens"
        ],
        judging: [
            { title: "Creativity", description: "Originality of concept and visual impact of the work." },
            { title: "Design Process", description: "Depth of exploration and prompt refinement." },
            { title: "Storytelling", description: "Connection to theme and clarity of artistic narrative." }
        ]
    },
    {
        id: "architecture",
        title: "Architecture",
        icon: <Building2 className="w-8 h-8" />,
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        overview: "Reimagine the classroom as a space for future learning, informed by pedagogy, flexibility, technology, and human comfort.",
        theme: "Re-Designing the Classroom: Spaces for Future Learning",
        whoIsThisFor: "Visionaries interested in architecture, spatial design, and sustainable environments using AI tools.",
        deliverables: "One A1 design board (PDF) including visuals, spatial diagrams (plan/section), and a design story.",
        examples: [
            "Inclusivity-focused Classroom for Diverse Learning Styles",
            "Biophilic Classroom Design for Student Well-being"
        ],
        judging: [
            { title: "Design Process", description: "AI prompts, sketches, and clarity of design thinking." },
            { title: "Creativity & Innovation", description: "Originality and response to sustainability/inclusivity." },
            { title: "Storytelling", description: "Clarity of purpose and connection to the theme." }
        ]
    }
];

const TracksPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />

            <main className="pt-32 pb-20 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    {/* Hero Section */}
                    <BlurFade delay={BLUR_FADE_DELAY}>
                        <div className="text-center mb-20">
                            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">
                                National AI Competition 2026
                            </h2>
                            <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
                                Tracks <span className="text-primary">Overview</span>
                            </h1>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
                                Explore our five distinct competition tracks for 2026. Find the path that best matches your passion and skills.
                            </p>
                        </div>
                    </BlurFade>

                    {/* Navigation between tracks */}
                    <BlurFade delay={BLUR_FADE_DELAY * 2}>
                        <div className="flex flex-wrap justify-center gap-4 mb-20">
                            {tracksData.map((track) => (
                                <a
                                    key={track.id}
                                    href={`#${track.id}`}
                                    className="px-6 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
                                >
                                    {track.title}
                                </a>
                            ))}
                        </div>
                    </BlurFade>

                    {/* Tracks Content */}
                    <div className="space-y-32">
                        {tracksData.map((track, index) => (
                            <section id={track.id} key={track.id} className="scroll-mt-32">
                                <BlurFade delay={BLUR_FADE_DELAY * (index + 3)}>
                                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                                        <div className="space-y-8">
                                            <div className="inline-flex items-center gap-4 p-3 rounded-2xl bg-primary/10 text-primary mb-2">
                                                {track.icon}
                                                <h2 className="text-3xl font-bold tracking-tight uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>{track.title}</h2>
                                            </div>

                                            <div className="space-y-6">
                                                <div>
                                                    <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-3">Challenge Overview</h3>
                                                    <p className="text-xl leading-relaxed text-foreground/90">
                                                        {track.overview}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-3">Who is this for</h3>
                                                    <p className="text-lg text-muted-foreground">
                                                        {track.whoIsThisFor}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="text-lg font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Deliverables</h3>
                                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                                        {track.deliverables}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-8">
                                            <div className={`p-8 rounded-3xl border ${track.borderColor} ${track.bgColor} backdrop-blur-sm`}>
                                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                                    Example Submission
                                                </h3>
                                                <div className="grid gap-4">
                                                    {track.examples.map((example, i) => (
                                                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50">
                                                            <div className="mt-1">
                                                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                                            </div>
                                                            <p className="font-medium">{example}</p>
                                                        </div>
                                                    ))}
                                                </div>

                                                <h3 className="text-xl font-bold mt-10 mb-6">Judging Criteria</h3>
                                                <div className="grid gap-6">
                                                    {track.judging.map((criterion, i) => (
                                                        <div key={i} className="flex gap-4">
                                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                                                {i + 1}
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold">{criterion.title}</h4>
                                                                <p className="text-sm text-muted-foreground">{criterion.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-8 rounded-3xl bg-primary dark:bg-zinc-950 border border-primary/20 dark:border-zinc-800 text-primary-foreground dark:text-white shadow-2xl overflow-hidden relative group">
                                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
                                                    {track.icon}
                                                </div>
                                                <h3 className="text-xl font-bold mb-4">{track.theme ? "Track Theme" : "Theme for 2026"}</h3>
                                                <div className="text-primary-foreground/80 dark:text-zinc-400 mb-8 leading-relaxed">
                                                    {track.theme ? (
                                                        <p className="text-2xl font-bold italic text-white animate-in fade-in slide-in-from-bottom-2 duration-700">
                                                            "{track.theme}"
                                                        </p>
                                                    ) : (
                                                        <p>
                                                            The specific competition topic will be announced exclusively to registered teams on March 19, 2026.
                                                        </p>
                                                    )}
                                                </div>
                                                <Button asChild className="w-full bg-background text-foreground hover:bg-background/90 rounded-full py-6 text-lg font-bold uppercase transition-transform hover:scale-[1.02]">
                                                    <Link to="/register">
                                                        Register now <ArrowRight className="ml-2 w-5 h-5" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </BlurFade>
                                {index < tracksData.length - 1 && (
                                    <div className="mt-32 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                                )}
                            </section>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                        <div className="mt-40 text-center p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-primary/10 to-transparent border border-primary/20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Ready to make your mark?</h2>
                            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                                Join hundreds of students across Malaysia in the largest student AI competition.
                            </p>
                            <Button asChild size="lg" className="rounded-full px-12 py-8 text-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                <Link to="/register">Register Your Team</Link>
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TracksPage;
