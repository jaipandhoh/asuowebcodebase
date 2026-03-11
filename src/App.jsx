import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurDirectors from "./pages/OurDirectors";
import LegacyPage from "./components/LegacyPage";
import { legacyPages } from "./legacy/legacyPages";
import { enhanceAccordion, enhanceToolkit } from "./legacy/enhancers";
import { legacyAssetMap } from "./legacy/assetMap";

const accordionSlugs = new Set([
  "current-student",
  "student-worker",
  "non-traditional-student",
  "student-parent",
  "student-org-leader",
  "alumni",
  "first-generation-student",
  "first-year-student",
  "graduate-student",
  "international-student",
  "law-student",
  "transfer-student",
  "undergraduate",
  "veteran-student",
  "part-time-student",
  "online-student",
  "faculty-staff",
  "doctoral-student",
]);

const legacyRoutes = Object.entries(legacyPages).map(([slug, page]) => ({
  slug,
  ...page,
  enhance:
    slug === "toolkit"
      ? enhanceToolkit
      : accordionSlugs.has(slug)
      ? enhanceAccordion
      : undefined,
}));

export default function App() {
  useEffect(() => {
    const faviconHref = legacyAssetMap["asuo-white-logo.png"];
    if (!faviconHref) return;
    const icons = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');
    icons.forEach((node) => node.setAttribute("href", faviconHref));
  }, []);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-directors" element={<OurDirectors />} />
          {legacyRoutes
            .filter((page) => page.slug !== "about-us" && page.slug !== "our-directors")
            .map((page) => (
              <Route
                key={page.slug}
                path={`/${page.slug}`}
                element={
                  <LegacyPage html={page.html} title={page.title} enhance={page.enhance} />
                }
              />
            ))}
          {legacyRoutes.map((page) => (
            <Route
              key={`${page.slug}-html`}
              path={`/${page.slug}.html`}
              element={<Navigate to={`/${page.slug}`} replace />}
            />
          ))}
          <Route path="/meet-the-directors" element={<Navigate to="/our-directors" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <Analytics />
    </>
  );
}
