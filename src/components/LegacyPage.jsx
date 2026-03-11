import { useEffect, useMemo, useRef } from "react";
import { legacyAssetMap } from "../legacy/assetMap";

const normalizePath = (value) => {
  if (!value) return value;
  if (value.startsWith("http") || value.startsWith("mailto:") || value.startsWith("tel:")) {
    return value;
  }
  if (value.startsWith("#")) return value;
  const cleaned = value.replace(/^\.\//, "");
  const basename = cleaned.split("/").pop();
  if (basename && legacyAssetMap[basename]) {
    return legacyAssetMap[basename];
  }
  if (cleaned.startsWith("index.html#")) return `/#${cleaned.split("#")[1]}`;
  if (cleaned === "index.html") return "/";
  if (cleaned.endsWith(".html")) {
    return `/${cleaned.replace(".html", "")}`;
  }
  if (cleaned.startsWith("/")) return cleaned;
  return `/${cleaned}`;
};

const extractContent = (html) => {
  if (!html) return "";
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const nav = doc.querySelector("nav");
  if (nav) nav.remove();
  const footer = doc.querySelector("footer");
  if (footer) footer.remove();
  doc.querySelectorAll("script").forEach((node) => node.remove());
  doc.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href) link.setAttribute("href", normalizePath(href));
  });
  doc.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (src) img.setAttribute("src", normalizePath(src));
  });
  const main = doc.querySelector("main") || doc.body;
  return main ? main.innerHTML : html;
};

export default function LegacyPage({ html, title, enhance }) {
  const content = useMemo(() => extractContent(html), [html]);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!enhance || !contentRef.current) return undefined;
    return enhance(contentRef.current);
  }, [enhance, content]);

  return (
    <section className="bg-slate-50">
      <div className="container-page py-14">
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-asuo-green/10 via-white to-asuo-gold/20 p-8 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asuo-green">
            ASUO Student Government
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            {title}
          </h1>
        </div>
        <article
          ref={contentRef}
          className="prose prose-slate max-w-none prose-headings:font-display prose-a:text-asuo-green prose-a:no-underline hover:prose-a:text-emerald-800"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
