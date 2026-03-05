import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import DitheredBackground from "@/components/DitheredBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type LearnResource = {
  url: string;
  fallbackTitle: string;
  fallbackDescription: string;
};

type UnfurledResource = {
  url: string;
  title: string;
  description: string;
  siteName: string;
  image?: string;
};

const LEARN_RESOURCES: LearnResource[] = [
  {
    url: "https://llens.space/",
    fallbackTitle: "LLens — The lens to see inside AI",
    fallbackDescription:
      "LLens is an interactive, browser-based tool that lets you see exactly how a language model tokenizes text, predicts next tokens, and generates text.",
  },
  {
    url: "https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi/",
    fallbackTitle: "3Blue1Brown — Neural Networks",
    fallbackDescription:
      "An acclaimed video series by 3Blue1Brown that visually explains neural networks from the ground up.",
  },
];

const getHostname = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

const fallbackFromResource = (resource: LearnResource): UnfurledResource => ({
  url: resource.url,
  title: resource.fallbackTitle,
  description: resource.fallbackDescription,
  siteName: getHostname(resource.url),
});

const Learn = () => {
  const [images, setImages] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    let isMounted = true;

    const fetchImages = async () => {
      const entries = await Promise.all(
        LEARN_RESOURCES.map(async (resource) => {
          try {
            const response = await fetch(
              `https://api.microlink.io/?url=${encodeURIComponent(resource.url)}&screenshot=false`,
              { method: "GET", headers: { Accept: "application/json" } }
            );
            if (!response.ok) return [resource.url, undefined] as const;
            const payload = await response.json();
            return [resource.url, payload?.data?.image?.url] as const;
          } catch {
            return [resource.url, undefined] as const;
          }
        })
      );

      if (isMounted) {
        setImages(Object.fromEntries(entries));
      }
    };

    fetchImages();
    return () => { isMounted = false; };
  }, []);

  const resources: UnfurledResource[] = LEARN_RESOURCES.map((r) => ({
    ...fallbackFromResource(r),
    image: images[r.url],
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative min-h-[45vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--hero-bg-from))_0%,hsl(var(--hero-bg-via))_45%,hsl(var(--hero-bg-to))_100%)]">
            <DitheredBackground className="z-0" />
          </div>

          <div className="container relative z-10 max-w-5xl mx-auto text-center">
            <BlurFade delay={0.1}>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                Learn
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="text-xl lg:text-2xl text-muted-foreground">Curated AI resources for different levels.</p>
            </BlurFade>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-background">
          <div className="container max-w-7xl mx-auto">
            <BlurFade delay={0.15}>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10">
                Here are some places to dig deeper into AI:
              </h2>
            </BlurFade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <BlurFade key={resource.url} delay={0.2 + index * 0.06}>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="block h-full group">
                    <Card className="h-full overflow-hidden border border-border group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-lg cursor-pointer">
                      <div className="h-44 bg-muted/40 flex items-center justify-center overflow-hidden">
                        {resource.image ? (
                          <img
                            src={resource.image}
                            alt={resource.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="text-sm text-muted-foreground px-4 text-center font-medium">
                            {resource.siteName}
                          </div>
                        )}
                      </div>

                      <CardHeader>
                        <CardTitle className="line-clamp-2 text-xl">{resource.title}</CardTitle>
                        <CardDescription className="line-clamp-3 text-base">
                          {resource.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 mt-auto space-y-2">
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          {resource.siteName}
                          <ExternalLink className="h-3.5 w-3.5" />
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
