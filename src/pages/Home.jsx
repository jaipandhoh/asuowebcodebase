import { useEffect, useMemo, useState } from "react";

const slideOne = "/asuo media day 3-17.jpg";
const slideTwo = "/asuo media day 3-20.jpg";
const slideThree = "/asuo media day 3-25.jpg";
const slideFour = "/front of office.jpg";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/1gfu3GyIrpyA3CxvfuJNf938VZNAoyaVhimbs3Q1k7WE/export?format=csv&gid=0";

const filters = ["all", "academic", "social", "wellness", "clubs"];

const slides = [
  {
    src: slideOne,
    title: "Student Leadership",
    subtitle: "Empowering voices across campus",
  },
  {
    src: slideTwo,
    title: "Representing Students",
    subtitle: "Advocating for positive change",
  },
  {
    src: slideThree,
    title: "Community Building",
    subtitle: "Creating connections across campus",
  },
  {
    src: slideFour,
    title: "ASUO Office",
    subtitle: "Visit us at EMU Room 004",
  },
];

const parseCSV = (text) => {
  const rows = [];
  let cur = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i + 1];

    if (c === '"') {
      if (inQuotes && next === '"') {
        cur += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === "," && !inQuotes) {
      row.push(cur);
      cur = "";
    } else if ((c === "\n" || c === "\r") && !inQuotes) {
      if (cur !== "" || row.length) {
        row.push(cur);
        rows.push(row);
        row = [];
        cur = "";
      }
      if (c === "\r" && next === "\n") i++;
    } else {
      cur += c;
    }
  }
  if (cur !== "" || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows;
};

const normalizeHeader = (value) =>
  (value || "")
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w]/g, "");

const parseRows = (csvText) => {
  const rows = parseCSV(csvText);
  if (!rows.length) return [];
  const header = rows.shift().map(normalizeHeader);

  return rows
    .map((r) => {
      const obj = {};
      header.forEach((key, i) => {
        obj[key] = (r[i] || "").trim();
      });
      return obj;
    })
    .filter((o) => Object.values(o).some((v) => v && v.length));
};

const toEvent = (row) => {
  const get = (k) => row[k] || row[k?.toLowerCase?.()] || "";
  const tags = (get("tags") || "")
    .split(/[,|]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const category = (get("category") || tags[0] || "all").toLowerCase();

  return {
    id: get("id") || (get("title") + get("start")).replace(/\s+/g, "-").toLowerCase(),
    title: get("title"),
    start: get("start"),
    end: get("end"),
    location: get("location"),
    tags,
    url: get("url") || get("link"),
    description: get("description") || get("details") || "",
    category,
    image: get("image") || "",
  };
};

const fmtDateRange = (startISO, endISO) => {
  if (!startISO) return "";
  const s = new Date(startISO);
  const e = endISO ? new Date(endISO) : null;
  const optsDate = { year: "numeric", month: "short", day: "numeric" };
  const optsTime = { hour: "numeric", minute: "2-digit" };
  if (isNaN(s)) return startISO;
  if (e && !isNaN(e)) {
    if (s.toDateString() !== e.toDateString()) {
      return `${s.toLocaleDateString([], optsDate)} ${s.toLocaleTimeString(
        [],
        optsTime
      )} – ${e.toLocaleDateString([], optsDate)} ${e.toLocaleTimeString([], optsTime)}`;
    }
    return `${s.toLocaleDateString([], optsDate)} ${s.toLocaleTimeString(
      [],
      optsTime
    )} – ${e.toLocaleTimeString([], optsTime)}`;
  }
  return `${s.toLocaleDateString([], optsDate)} ${s.toLocaleTimeString([], optsTime)}`;
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Fetch failed");
        const text = await res.text();
        const rows = parseRows(text);
        const parsed = rows.map(toEvent).filter((e) => e.title && e.start);
        if (isMounted) setEvents(parsed);
      } catch (err) {
        console.error("[Events loader]", err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredEvents = useMemo(() => {
    const q = query.toLowerCase().trim();
    return events
      .filter((event) => {
        if (activeFilter !== "all" && event.category !== activeFilter) return false;
        if (!q) return true;
        const hay = [event.title, event.location, event.description, event.tags.join(" ")]
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .sort((a, b) => {
        const as = new Date(a.start).getTime();
        const bs = new Date(b.start).getTime();
        return (isNaN(as) ? Infinity : as) - (isNaN(bs) ? Infinity : bs);
      });
  }, [events, query, activeFilter]);

  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          {/* Animated background shapes */}
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-asuo-gold/20 blur-3xl animate-float-aurora" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl animate-float-aurora-delay" />
          <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-asuo-gold/15 blur-3xl animate-float-aurora-slow" />
          <div className="absolute top-1/3 right-1/3 h-80 w-80 rounded-full bg-asuo-green/20 blur-3xl animate-float-aurora-delay-2" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-asuo-green/10 via-asuo-gold/5 to-asuo-green/10 animate-gradient-shift-aurora" />
          
          {/* Moving wave patterns */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-asuo-gold/10 to-transparent animate-wave-horizontal" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-asuo-green/10 to-transparent animate-wave-vertical" />
          </div>
        </div>
        <div className="container-page relative py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                ASUO Student Government
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Serving As The Recognized Student Government Since 1900
              </h1>
              <p className="mt-5 max-w-xl text-base text-white/70">
                ASUO supports University of Oregon students with resources, advocacy, and
                opportunities to get involved.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#i-fee" className="btn-primary">
                  Learn More
                </a>
                <a href="/sges" className="btn-secondary">
                  SGES
                </a>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
                <a
                  href="https://www.instagram.com/asuogov?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/asuo/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="glass overflow-hidden shadow-glow">
                <img
                  src={slides[activeSlide].src}
                  alt={slides[activeSlide].title}
                  className="h-80 w-full object-cover md:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-2xl font-semibold">{slides[activeSlide].title}</h2>
                  <p className="text-sm text-white/80">{slides[activeSlide].subtitle}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full ${
                      index === activeSlide ? "bg-asuo-gold" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Office Hours</h2>
            <p className="mt-3 text-slate-600">
              Meet with ASUO leadership and get your questions answered.
            </p>
            <a
              className="btn-primary mt-6"
              href="https://docs.google.com/spreadsheets/d/1Lv6Qag_fVtIpUmC_kAx1WdnGxP1y3bTJKApPuUYavok/edit?gid=1375568540#gid=1375568540"
              target="_blank"
              rel="noreferrer"
            >
              View Office Hours
            </a>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-slate-900">Student Organization Leaders</h2>
            <p className="mt-3 text-slate-600">
              Share your experience to improve support and resources for student groups.
            </p>
            <a
              className="btn-secondary mt-6"
              href="https://forms.gle/LBn96TJrZyhZ9ydW7"
              target="_blank"
              rel="noreferrer"
            >
              Student Org Experience Survey
            </a>
          </div>
          <div className="card p-8">
            <h2 className="text-2xl font-semibold text-slate-900">SPCC Project Proposal</h2>
            <p className="mt-3 text-slate-600">
              Submit a capital project proposal for the Student Planning and Construction Committee to review.
            </p>
            <a
              className="btn-secondary mt-6"
              href="https://docs.google.com/forms/d/1NzqRZh6Ng9_5_lcw5BrjxLxgEP3jCOa0r1-j4SsLlRY/viewform"
              target="_blank"
              rel="noreferrer"
            >
              Submit Proposal
            </a>
          </div>
        </div>
      </section>

      <section id="events" className="container-page py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="section-title">What’s Happening on Campus</h2>
            <p className="section-subtitle">Find events, RSVP fast, and bring a friend.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                  activeFilter === filter
                    ? "bg-asuo-green text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3">
          <span className="text-slate-400">🔍</span>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search events, orgs, or locations…"
            className="w-full bg-transparent text-sm text-slate-700 outline-none"
          />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {loading &&
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="card h-56 animate-pulse bg-slate-100" />
            ))}
          {!loading &&
            filteredEvents.map((event) => (
              <article key={event.id} className="card overflow-hidden">
                {event.image ? (
                  <img src={event.image} alt={event.title} className="h-40 w-full object-cover" />
                ) : (
                  <div className="flex h-40 items-center justify-center bg-slate-100 text-3xl">
                    📅
                  </div>
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
                    {(event.tags || []).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{event.title}</h3>
                  {event.description && (
                    <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                  )}
                  <div className="mt-4 space-y-2 text-sm text-slate-500">
                    <div>🕒 {fmtDateRange(event.start, event.end)}</div>
                    {event.location && <div>📍 {event.location}</div>}
                  </div>
                  {event.url && (
                    <a
                      className="btn-primary mt-5 w-full"
                      href={event.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </article>
            ))}
        </div>
        {!loading && !error && filteredEvents.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center text-slate-600">
            No events match your filters. Try clearing filters or check back later.
          </div>
        )}
        {error && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-10 text-center text-red-600">
            We couldn’t load events right now. Please try again soon.
          </div>
        )}
      </section>

      <section id="calendar" className="container-page py-12">
        <div className="card p-8">
          <h2 className="section-title">Live Calendar</h2>
          <p className="section-subtitle">
            Stay up to date with all upcoming ASUO events and meetings.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="ASUO calendar"
              src="https://calendar.google.com/calendar/embed?src=NTFhMzBlZWYwZDMxNzJhOTA2OWEwMmZjMGZlY2YwMjM2N2FlNGQ0YzZjM2U4M2E1OTE5NjJjYzQ5NDNkNWQyM0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&ctz=America/Los_Angeles"
              className="h-[500px] w-full border-0"
              scrolling="no"
            />
          </div>
        </div>
      </section>

      <section id="i-fee" className="container-page py-12">
        <div className="card p-8">
          <h2 className="section-title">About the Incidental Fee (I-Fee)</h2>
          <p className="section-subtitle">
            The I-Fee is a mandatory student fee determined annually by the ASUO through an
            open, democratic process. The current budget is ~9 million dollars and funds
            student programs and services.
          </p>
          <a href="/abouttheI-Fee" className="btn-primary mt-6">
            Learn More About I-Fee
          </a>
        </div>
      </section>

      <section id="contact" className="container-page pb-16">
        <div className="card p-8">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or feedback? We’d love to hear from you.
          </p>
          <p className="mt-6 text-sm text-slate-600">
            EMU 004 University of Oregon, Eugene, OR 97403
          </p>
        </div>
      </section>
    </div>
  );
}
