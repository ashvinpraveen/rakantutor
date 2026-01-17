import BlurFade from "@/components/ui/blur-fade";
import sunwayLogo from "@/assets/sunway-logo.png";
import rakanTutorLogo from "@/assets/rakan-tutor-logo.png";
const OrganisersV2 = () => {
  return <section className="relative py-16 md:py-24 px-4 bg-black border-t border-cyan-500/10">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />

            <div className="container max-w-6xl mx-auto">
                <BlurFade inView>
                    <div className="flex flex-col items-center gap-12 my-[22px]">
                        {/* Title */}
                        <div className="text-center">
                            <p className="text-xs md:text-sm font-black text-cyan-500/50 uppercase tracking-[0.3em] mb-2" style={{
              fontFamily: "'Share Tech Mono', monospace"
            }}>
                                Organised By
                            </p>
                            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                        </div>

                        {/* Logos */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                            <a href="https://rakantutor.org" target="_blank" rel="noreferrer" className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                <div className="relative bg-white rounded-2xl px-8 py-6 border border-white/10 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                                    <img src={rakanTutorLogo} alt="Rakan Tutor" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </a>

                            <a href="https://sunway.edu.my" target="_blank" rel="noreferrer" className="group relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                                <div className="relative bg-white rounded-2xl px-8 py-6 border border-white/10 hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                                    <img src={sunwayLogo} alt="Sunway University" className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                                </div>
                            </a>
                        </div>
                    </div>
                </BlurFade>
            </div>
        </section>;
};
export default OrganisersV2;