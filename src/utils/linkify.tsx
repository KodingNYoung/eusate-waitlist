import { ReactNode } from "react";

// Matches, in priority order: markdown-style [label](url) links, email
// addresses, bare URLs, and bare *.eusate.com subdomains (e.g. app.eusate.com).
// Numbered groups (not named groups) since this project's TS target predates
// ES2018: 1=mdLabel, 2=mdUrl, 3=email, 4=url, 5=domain.
const LINK_PATTERN =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|([\w.+-]+@[\w-]+\.[\w.-]+)|(https?:\/\/\S+)|(\b[a-z0-9-]+\.eusate\.com(?:\/[^\s,.;:!?)]*)?)/gi;

const TRAILING_PUNCTUATION = /[.,;:!?)]+$/;

const splitTrailingPunctuation = (value: string) => {
  const trail = value.match(TRAILING_PUNCTUATION)?.[0] ?? "";
  return { core: trail ? value.slice(0, -trail.length) : value, trail };
};

// Parses answer text and turns any hyperlink-like content into clickable
// <a> tags. Add new link patterns to LINK_PATTERN above as needed — no
// changes required at call sites (e.g. Help Center answers).
export const linkifyText = (text: string): ReactNode => {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of Array.from(text.matchAll(LINK_PATTERN))) {
    const [, mdLabel, mdUrl, email, url, domain] = match;
    const matchStart = match.index ?? 0;

    if (matchStart > lastIndex) {
      nodes.push(text.slice(lastIndex, matchStart));
    }

    if (mdUrl) {
      nodes.push(
        <a key={key++} href={mdUrl} target="_blank" rel="noopener noreferrer">
          {mdLabel}
        </a>,
      );
      lastIndex = matchStart + match[0].length;
      continue;
    }

    const raw = email ?? url ?? domain ?? "";
    const { core, trail } = splitTrailingPunctuation(raw);
    const href = email ? `mailto:${core}` : domain ? `https://${core}` : core;

    nodes.push(
      <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
        {core}
      </a>,
    );
    if (trail) nodes.push(trail);
    lastIndex = matchStart + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length ? nodes : text;
};
