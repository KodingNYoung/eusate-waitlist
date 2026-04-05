import Typography from "@/components/shared/atoms/Typography";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Multi-Source Content Integration",
    description:
      "Your documentation exists. Knowledge Base adapts to you without forcing migration. Upload documents, paste URLs, or write in the editor. Our system parses and indexes content for AI retrieval. No manual tagging needed, but you can add it. Document uploads (PDF, DOCX, TXT, MD, RTF), URL linking, custom articles, FAQ imports, API connections, and spreadsheet data.",
  },
  {
    id: 2,
    title: "Semantic Search and Retrieval",
    description:
      "AI-powered search understands intent, not just keywords. It ranks contextual relevance based on query intent, supports multi-language search, and recognizes question variations. SATE retrieves relevant information, synthesizes answers, and scores confidence. Low confidence prompts human escalation. Semantic search ensures SATE finds the right answer, regardless of phrasing.",
  },
  {
    id: 3,
    title: "Content Analytics and Optimization",
    description:
      "Control visibility of sensitive information. Tag content with access levels. SATE respects permissions—customers don’t see internal docs, free users miss premium content, and regional restrictions apply. Granular control ensures the right info reaches the right people.",
  },
  {
    id: 4,
    title: "Granular Access Control",
    description:
      "Understand which content performs, identify gaps, and optimize continuously.Every search, every retrieval, and every resolution feeds analytics. The system identifies which articles resolve issues effectively and which queries have no good answers. Optimization recommendations highlight content needing updates or creation.",
  },
];

export const KBFeatures = () => {
  return (
    <section className="bg-black p-16 max-h-[720px] overflow-auto rounded-[40px] mx-4">
      <div className="flex container justify-between ">
        <Features />
        <div className="sticky w-[540px] h-[540px]">
          <Image alt="kb-feature-1" src="/images/kb-feature-1.webp" fill />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <div className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-gray-800">
      <div className="space-y-[240px] -translate-x-[8px] pt-36">
        {features.map(({ id, title, description }) => (
          <div key={id} className="flex items-start gap-4 max-w-[500px]">
            <span className="w-24 h-4 bg-brand-gradient"></span>
            <div className="space-y-8">
              <Typography
                variant="semibold-base"
                className="text-white leading-none"
              >
                {title}
              </Typography>
              <Typography variant="regular-sm" className="text-white/50">
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
