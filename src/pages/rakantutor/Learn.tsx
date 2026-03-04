import { useEffect, useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurFade from "@/components/ui/blur-fade";
import DitheredBackground from "@/components/DitheredBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    fallbackTitle: "Llens: The lens to see inside AI",
    fallbackDescription:
      "LLens is an interactive, browser-based tool that lets you see exactly how a language model tokenizes text, predicts next tokens, and generates text",
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
  const [resources, setResources] = useState<UnfurledResource[]>(
    LEARN_RESOURCES.map(fallbackFromResource)
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const unfurlResources = async () => {
      const results = await Promise.all(
        LEARN_RESOURCES.map(async (resource) => {
          try {
            const response = await fetch(
              `https://api.microlink.io/?url=${encodeURIComponent(resource.url)}&screenshot=false`,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                },
              }
            );

            if (!response.ok) {
              throw new Error(`Unfurl failed for ${resource.url}`);
            }

            const payload = await response.json();
            const data = payload?.data;

            return {
              url: data?.url || resource.url,
              title: data?.title || resource.fallbackTitle,
              description: data?.description || resource.fallbackDescription,
              siteName:
                data?.publisher ||
                data?.author ||
                getHostname(data?.url || resource.url),
              image: data?.image?.url,
            } satisfies UnfurledResource;
          } catch {
            return fallbackFromResource(resource);
          }
        })
      );

      if (isMounted) {
        setResources(results);
        setIsLoading(false);
      }
    };

    unfurlResources();

    return () => {
      isMounted = false;
    };
  }, []);

  const subtitle = useMemo(
    () =>
      isLoading
        ? "Fetching live previews for each resource..."
        : "Curated AI resources with live link previews.",
    [isLoading]
  );

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
              <p className="text-xl lg:text-2xl text-muted-foreground">{subtitle}</p>
            </BlurFade>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-background">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <BlurFade key={resource.url} delay={0.05 + index * 0.04}>
                  <Card className="h-full overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
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

                    <CardContent className="pt-0 mt-auto space-y-4">
                      <p className="text-sm text-muted-foreground">{resource.siteName}</p>
                      <Button asChild className="w-full">
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          Open Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
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
