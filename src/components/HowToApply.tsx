import { ArrowRight, UserPlus, GraduationCap, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import BlurFade from "@/components/ui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

const steps = [
  {
    icon: UserPlus,
    title: "Register Team",
    items: [
      "Form a team of 4 (Category A: Secondary | Category B: Pre-U/Uni)",
      "Sign up at naic.rakantutor.org",
      "Deadline: 16 March 2026",
    ],
  },
  {
    icon: GraduationCap,
    title: "Learn & Build",
    items: [
      "Attend Online Masterclass (31 Mar – 2 Apr)",
      "Complimentary training for all registered teams",
      "Refine your project with expert advice",
    ],
  },
  {
    icon: Send,
    title: "Submit & Pitch",
    items: [
      "Submit project proposal by 4 May 2026",
      "Grand Finals at Sunway University on 13 June",
      "Pitch your AI solution to the judges",
    ],
  },
];

const HowToApply = () => {
  return (
    <section id="apply" className="bg-secondary/50 py-20 lg:py-32 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-glow">
            How to Apply
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <BlurFade key={step.title} delay={BLUR_FADE_DELAY * index} inView>
              <Card
                className="group relative border-border/50 bg-background/50 hover:bg-background hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 h-full border-2 hover:border-primary/20"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-500">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-4 w-full">
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <ul className="space-y-3 text-left">
                        {step.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground leading-relaxed flex items-start gap-3"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="h-14 px-10 rounded-full text-lg font-semibold bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <Link to="/register">
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
