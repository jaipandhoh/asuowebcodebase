import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const asuoSeal = "/2024-ASUO-Seal-BLK.png";

const navSections = [
  {
    label: "About",
    links: [
      { label: "About Us", to: "/about-us" },
      { label: "Meet Officers", to: "/our-directors" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { label: "Events", to: "/#events" },
      { label: "Calendar", to: "/#calendar" },
      {
        label: "Apply on Handshake",
        href: "https://uoregon.joinhandshake.com/job-search/10112227?query=ASUO&per_page=25&sort=relevance&page=1",
      },
      {
        label: "SPCC Project Proposal",
        href: "https://docs.google.com/forms/d/1NzqRZh6Ng9_5_lcw5BrjxLxgEP3jCOa0r1-j4SsLlRY/viewform",
      },
    ],
  },
  {
    label: "Branches",
    links: [
      { label: "Executive", to: "/executive-branch" },
      { label: "Legislative", to: "/legislative-branch" },
      { label: "Judicial", to: "/judicial-branch" },
      { label: "PFC", to: "/pfc" },
      { label: "DFC", to: "/dfc" },
      { label: "CFC", to: "/cfc" },
      { label: "Passed Resolutions", to: "/passed-resolutions" },
    ],
  },
  {
    label: "I Am",
    links: [
      { label: "Current Student", to: "/current-student" },
      { label: "Student Worker", to: "/student-worker" },
      { label: "Non-Traditional Student", to: "/non-traditional-student" },
      { label: "Alumni", to: "/alumni" },
      { label: "Student Parent", to: "/student-parent" },
      { label: "Current Officer", to: "/current-officer" },
      { label: "Student Org Leader", to: "/student-org-leader" },
    ],
  },
];

const primaryLinks = [
  { label: "Immigration Toolkit", to: "/immigration-toolkit" },
  { label: "Contact", to: "/contact" },
  { label: "SGES", to: "/sges" },
];

const NavLinkItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm font-medium transition ${
        isActive ? "text-asuo-green" : "text-slate-700 hover:text-slate-900"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-asuo-green">
          <img src={asuoSeal} alt="ASUO Logo" className="h-9 w-auto" />
          ASUO
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {primaryLinks.map((link) => (
            <NavLinkItem key={link.label} to={link.to}>
              {link.label}
            </NavLinkItem>
          ))}
          {navSections.map((section) => (
            <div key={section.label} className="group relative">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-900"
              >
                {section.label}
                <span className="text-xs">▾</span>
              </button>
              <div className="invisible absolute left-0 top-10 min-w-[220px] translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 text-sm shadow-soft opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="flex flex-col gap-2">
                  {section.links.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink
                        key={link.label}
                        to={link.to}
                        className="rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        {link.label}
                      </NavLink>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 lg:hidden"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-4 py-4">
            {primaryLinks.map((link) => (
              <NavLinkItem key={link.label} to={link.to}>
                {link.label}
              </NavLinkItem>
            ))}
            {navSections.map((section) => (
              <div key={section.label} className="rounded-2xl border border-slate-100 p-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {section.label}
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  {section.links.map((link) =>
                    link.href ? (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-700"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLinkItem key={link.label} to={link.to}>
                        {link.label}
                      </NavLinkItem>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
