import { SiteHeader } from "@/components/home/site-header";
import { AnnouncementBar, SiteFooter } from "@/components/home/site-chrome";
import { Container, Eyebrow } from "@/components/home/primitives";

type LegalPageProps = {
  title: string;
  paragraphs: string[];
};

/** Narrow-measure legal/prose page inside the standard site chrome. All three
 * legal pages are launch-review placeholders pending counsel approval. */
export function LegalPage({ title, paragraphs }: LegalPageProps) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <section className="bg-[var(--porcelain)] py-20 sm:py-24">
          <Container className="max-w-[820px]">
            <Eyebrow>Legal review placeholder</Eyebrow>
            <h1 className="font-serif text-4xl leading-[1.04] font-[380] text-[var(--ink)] sm:text-5xl">
              {title}
            </h1>
            {paragraphs.map((paragraph) => (
              <p
                className="mt-6 text-base leading-8 text-[var(--muted)] sm:text-lg"
                key={paragraph.slice(0, 32)}
              >
                {paragraph}
              </p>
            ))}
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
