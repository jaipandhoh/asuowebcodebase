export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Questions? We’re here to help.</h3>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p>EMU Room 004</p>
            <p>
              <a
                className="text-asuo-green hover:text-emerald-800"
                href="https://www.instagram.com/asuogov"
                target="_blank"
                rel="noreferrer"
              >
                @asuogov
              </a>
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="/about-us">
                About Us
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="/our-directors">
                Meet Officers
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="/#events">
                Events
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="/passed-resolutions">
                Resolutions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="text-slate-600 hover:text-slate-900"
                href="https://docs.google.com/spreadsheets/d/1Lv6Qag_fVtIpUmC_kAx1WdnGxP1y3bTJKApPuUYavok/edit?gid=1375568540#gid=1375568540"
                target="_blank"
                rel="noreferrer"
              >
                Office Hours
              </a>
            </li>
            <li>
              <a className="text-slate-600 hover:text-slate-900" href="/sges">
                SGES
              </a>
            </li>
            <li>
              <a
                className="text-slate-600 hover:text-slate-900"
                href="https://uoregon.joinhandshake.com/job-search/10112227?query=ASUO&per_page=25&sort=relevance&page=1"
                target="_blank"
                rel="noreferrer"
              >
                Handshake
              </a>
            </li>
            <li>
              <a
                className="text-slate-600 hover:text-slate-900"
                href="https://docs.google.com/forms/d/1NzqRZh6Ng9_5_lcw5BrjxLxgEP3jCOa0r1-j4SsLlRY/viewform"
                target="_blank"
                rel="noreferrer"
              >
                SPCC Project Proposal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        &copy; 2025 Associated Students of the University of Oregon (ASUO)
      </div>
    </footer>
  );
}
