import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="about-us-page bg-gradient-to-b from-slate-50 via-white to-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="about-hero relative h-[70vh] min-h-[600px] md:h-[60vh] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="hero-background absolute inset-0 bg-gradient-to-br from-asuo-green to-emerald-800 z-0" />
        <div className="hero-gradient absolute inset-0 z-[1]">
          <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-asuo-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-[30%] right-[20%] w-96 h-96 bg-asuo-gold/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-asuo-gold/10 rounded-full blur-3xl" />
        </div>
        <div className="hero-shapes absolute inset-0 z-[1] overflow-hidden">
          <div className="shape shape-1 absolute -top-48 -left-48 w-96 h-96 bg-asuo-gold/10 rounded-full animate-float" />
          <div className="shape shape-2 absolute -bottom-36 right-[10%] w-72 h-72 bg-asuo-gold/10 rounded-full animate-float-delay-1" />
          <div className="shape shape-3 absolute top-[40%] -right-24 w-48 h-48 bg-asuo-gold/10 rounded-full animate-float-delay-2" />
        </div>
        <div className="hero-content relative z-[2] text-center text-white px-8 max-w-4xl animate-fade-in-up">
          <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
            <span className="inline-block animate-fade-in-up">About</span>{" "}
            <span className="inline-block text-asuo-gold animate-fade-in-up-delay">ASUO</span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl font-light mb-12 opacity-95 animate-fade-in-up-delay-2">
            Your student government, your voice, your campus
          </p>
          <div className="hero-stats flex justify-center gap-8 md:gap-16 flex-wrap animate-fade-in-up-delay-3">
            <div className="stat-item text-center">
              <div className="stat-number font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-gold block mb-2 drop-shadow-md">
                $9M+
              </div>
              <div className="stat-label text-base opacity-90 uppercase tracking-wider font-medium">
                Annual Budget
              </div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-gold block mb-2 drop-shadow-md">
                3
              </div>
              <div className="stat-label text-base opacity-90 uppercase tracking-wider font-medium">
                Branches
              </div>
            </div>
            <div className="stat-item text-center">
              <div className="stat-number font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-gold block mb-2 drop-shadow-md">
                100+
              </div>
              <div className="stat-label text-base opacity-90 uppercase tracking-wider font-medium">
                Programs Funded
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="about-main relative z-[1] max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        {/* I-Fee Section */}
        <section className="about-section i-fee-section my-16 sm:my-24">
          <div className="section-container max-w-5xl mx-auto">
            <div className="section-header-modern text-center mb-16">
              <div className="section-icon w-20 h-20 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-xl">
                <i className="fas fa-dollar-sign text-3xl text-asuo-gold" />
              </div>
              <h2 className="section-title-modern font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-green mb-4 relative inline-block">
                The Incidental Fee (I-Fee)
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green rounded-full" />
              </h2>
              <p className="section-subtitle-modern text-lg sm:text-xl text-slate-600 mt-8 font-normal">
                Your investment in campus life
              </p>
            </div>

            <div className="content-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="info-card card-gradient bg-white rounded-3xl p-10 shadow-lg border-2 border-slate-200 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-asuo-gold">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green bg-[length:200%_100%] animate-gradient-shift" />
                <div className="card-glow absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-asuo-gold/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="card-header flex items-center gap-4 mb-6">
                  <i className="fas fa-info-circle text-3xl text-asuo-gold" />
                  <h3 className="font-display text-2xl font-bold text-asuo-green m-0">What is the I-Fee?</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  The Incidental Fee (I-Fee) is a mandatory fee charged to all University of Oregon students. It's
                  designed to support student programs, services, and activities that enhance the campus experience and
                  build community.
                </p>
                <div className="card-highlight flex flex-col items-center p-6 bg-gradient-to-br from-asuo-gold/10 to-asuo-green/10 rounded-2xl mt-6">
                  <span className="highlight-number font-display text-4xl font-bold text-asuo-green block mb-2">
                    ~$9 Million
                  </span>
                  <span className="highlight-label text-sm text-slate-600 uppercase tracking-wider">
                    Annual Budget
                  </span>
                </div>
              </div>

              <div className="info-card card-gradient bg-white rounded-3xl p-10 shadow-lg border-2 border-slate-200 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-asuo-gold">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green bg-[length:200%_100%] animate-gradient-shift" />
                <div className="card-glow absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-asuo-gold/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="card-header flex items-center gap-4 mb-6">
                  <i className="fas fa-users text-3xl text-asuo-gold" />
                  <h3 className="font-display text-2xl font-bold text-asuo-green m-0">How is it Determined?</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Each year, ASUO coordinates a democratic process where students have input into how the I-Fee budget
                  is allocated. This ensures that student priorities and needs are reflected in funding decisions
                  through transparent, student-led processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Fund Section */}
        <section className="about-section funding-section my-16 sm:my-24">
          <div className="section-container max-w-5xl mx-auto">
            <div className="section-header-modern text-center mb-16">
              <div className="section-icon w-20 h-20 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-xl">
                <i className="fas fa-hand-holding-usd text-3xl text-asuo-gold" />
              </div>
              <h2 className="section-title-modern font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-green mb-4 relative inline-block">
                What We Fund
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green rounded-full" />
              </h2>
              <p className="section-subtitle-modern text-lg sm:text-xl text-slate-600 mt-8 font-normal">
                Building a vibrant campus community
              </p>
            </div>

            <div className="funding-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { icon: "fa-users", title: "Student Organizations", desc: "Supporting 300+ student clubs and organizations that create connections and build community" },
                { icon: "fa-calendar-alt", title: "Campus Events", desc: "Programming events, workshops, and activities that enrich student life throughout the year" },
                { icon: "fa-graduation-cap", title: "Student Services", desc: "Resources and services that support student success, wellness, and academic achievement" },
                { icon: "fa-building", title: "Facility Improvements", desc: "Enhancing campus spaces and infrastructure to better serve the student community" },
                { icon: "fa-trophy", title: "Leadership Development", desc: "Programs that develop leadership skills and prepare students for future success" },
                { icon: "fa-heart", title: "Student Support", desc: "Services addressing basic needs, mental health, and resources for student success" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="funding-card bg-white rounded-2xl p-10 text-center shadow-md border-2 border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl hover:border-asuo-gold relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-asuo-green to-asuo-gold scale-x-0 transition-transform duration-300 hover:scale-x-100" />
                  <div className="funding-icon w-16 h-16 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-lg">
                    <i className={`fas ${item.icon} text-2xl text-asuo-gold`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-asuo-green mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branches Section */}
        <section className="about-section branches-section my-16 sm:my-24">
          <div className="section-container max-w-5xl mx-auto">
            <div className="section-header-modern text-center mb-16">
              <div className="section-icon w-20 h-20 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-xl">
                <i className="fas fa-balance-scale text-3xl text-asuo-gold" />
              </div>
              <h2 className="section-title-modern font-display text-3xl sm:text-4xl md:text-5xl font-bold text-asuo-green mb-4 relative inline-block">
                Our Branches of Government
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green rounded-full" />
              </h2>
              <p className="section-subtitle-modern text-lg sm:text-xl text-slate-600 mt-8 font-normal">
                Three branches working together for students
              </p>
            </div>

            <div className="branches-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mt-12">
              {/* Executive Branch */}
              <div className="branch-card executive-card bg-white rounded-3xl p-10 shadow-lg border-2 border-slate-200 relative overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:border-asuo-gold flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold to-asuo-green" />
                <div className="branch-card-glow absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-asuo-gold/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none z-0" />
                <div className="branch-header flex items-center gap-4 mb-6">
                  <div className="branch-icon w-14 h-14 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-lg">
                    <i className="fas fa-gavel text-xl text-asuo-gold" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-asuo-green m-0">Executive Branch</h3>
                </div>
                <p className="branch-description text-slate-600 leading-relaxed text-lg mb-6">
                  Led by the ASUO President and Vice President, who are elected annually by the student body. They
                  oversee an executive cabinet of up to 24 appointed leaders.
                </p>

                <div className="branch-features flex flex-col gap-3 mb-6">
                  {["Represent student interests", "Manage I-Fee budget", "Coordinate campus initiatives"].map(
                    (feature, idx) => (
                      <div key={idx} className="feature-item flex items-center gap-3 text-slate-600">
                        <i className="fas fa-check-circle text-asuo-gold" />
                        <span>{feature}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="branch-leadership p-5 bg-gradient-to-br from-asuo-gold/8 to-asuo-green/8 rounded-xl mb-6 mt-auto">
                  <strong className="text-asuo-green font-semibold block mb-2">Current Leadership:</strong>
                  <p className="text-slate-600 text-sm m-0 leading-relaxed">
                    President: Prissila Moreno
                    <br />
                    Vice President: Jordan Ackeman
                  </p>
                </div>

                <Link
                  to="/executive-branch"
                  className="branch-link inline-flex items-center gap-3 text-asuo-green no-underline font-semibold text-base px-6 py-3 bg-slate-50 border-2 border-slate-200 rounded-full transition-all duration-300 hover:bg-gradient-to-br hover:from-asuo-green hover:to-emerald-800 hover:text-asuo-gold hover:border-asuo-green hover:translate-x-1 mt-auto w-fit relative z-10 group"
                >
                  Learn More <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Legislative Branch */}
              <div className="branch-card legislative-card bg-white rounded-3xl p-10 shadow-lg border-2 border-slate-200 relative overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:border-asuo-gold flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-asuo-gold via-asuo-green to-asuo-gold" />
                <div className="branch-card-glow absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-asuo-gold/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none z-0" />
                <div className="branch-header flex items-center gap-4 mb-6">
                  <div className="branch-icon w-14 h-14 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-lg">
                    <i className="fas fa-file-alt text-xl text-asuo-gold" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-asuo-green m-0">Legislative Branch</h3>
                </div>
                <p className="branch-description text-slate-600 leading-relaxed text-lg mb-6">
                  The ASUO Senate serves as the legislative body, consisting of elected senators representing different
                  constituencies across campus.
                </p>

                <div className="branch-features flex flex-col gap-3 mb-6">
                  {["Pass legislation & resolutions", "Approve I-Fee budget", "Provide oversight"].map(
                    (feature, idx) => (
                      <div key={idx} className="feature-item flex items-center gap-3 text-slate-600">
                        <i className="fas fa-check-circle text-asuo-gold" />
                        <span>{feature}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="branch-structure p-5 bg-gradient-to-br from-asuo-gold/8 to-asuo-green/8 rounded-xl mb-6 mt-auto">
                  <strong className="text-asuo-green font-semibold block mb-2">Senate Structure:</strong>
                  <p className="text-slate-600 text-sm m-0 leading-relaxed">
                    Academic Senators • At-Large Senators • Special Interest Senators
                  </p>
                </div>

                <Link
                  to="/legislative-branch"
                  className="branch-link inline-flex items-center gap-3 text-asuo-green no-underline font-semibold text-base px-6 py-3 bg-slate-50 border-2 border-slate-200 rounded-full transition-all duration-300 hover:bg-gradient-to-br hover:from-asuo-green hover:to-emerald-800 hover:text-asuo-gold hover:border-asuo-green hover:translate-x-1 mt-auto w-fit relative z-10 group"
                >
                  Learn More <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Judicial Branch */}
              <div className="branch-card judicial-card bg-white rounded-3xl p-10 shadow-lg border-2 border-slate-200 relative overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl hover:border-asuo-gold flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-asuo-green via-asuo-gold via-asuo-green to-asuo-green" />
                <div className="branch-card-glow absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-radial-gradient from-asuo-gold/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none z-0" />
                <div className="branch-header flex items-center gap-4 mb-6">
                  <div className="branch-icon w-14 h-14 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-lg">
                    <i className="fas fa-balance-scale text-xl text-asuo-gold" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-asuo-green m-0">Judicial Branch</h3>
                </div>
                <p className="branch-description text-slate-600 leading-relaxed text-lg mb-6">
                  The Student Court interprets the ASUO Constitution and Bylaws, resolves disputes, and ensures student
                  government operates within its legal framework.
                </p>

                <div className="branch-features flex flex-col gap-3 mb-6">
                  {["Interpret Constitution", "Resolve disputes", "Ensure legal governance"].map((feature, idx) => (
                    <div key={idx} className="feature-item flex items-center gap-3 text-slate-600">
                      <i className="fas fa-check-circle text-asuo-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="branch-structure p-5 bg-gradient-to-br from-asuo-gold/8 to-asuo-green/8 rounded-xl mb-6 mt-auto">
                  <strong className="text-asuo-green font-semibold block mb-2">Court Structure:</strong>
                  <p className="text-slate-600 text-sm m-0 leading-relaxed">
                    Chief Justice • Associate Justices • Court Clerk
                  </p>
                </div>

                <Link
                  to="/judicial-branch"
                  className="branch-link inline-flex items-center gap-3 text-asuo-green no-underline font-semibold text-base px-6 py-3 bg-slate-50 border-2 border-slate-200 rounded-full transition-all duration-300 hover:bg-gradient-to-br hover:from-asuo-green hover:to-emerald-800 hover:text-asuo-gold hover:border-asuo-green hover:translate-x-1 mt-auto w-fit relative z-10 group"
                >
                  Learn More <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section my-16 sm:my-24 py-12 sm:py-16 px-4 sm:px-8 bg-gradient-to-br from-asuo-green to-emerald-800 rounded-[2rem] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-asuo-gold/15 rounded-full blur-3xl" />
            <div className="absolute bottom-[30%] right-[20%] w-96 h-96 bg-asuo-gold/10 rounded-full blur-3xl" />
          </div>
          <div className="cta-container max-w-3xl mx-auto relative z-[1]">
            <div className="cta-content text-center text-white">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md">Want to Get Involved?</h2>
              <p className="text-lg sm:text-xl opacity-95 mb-8">Join ASUO and help shape the student experience at UO</p>
              <div className="cta-buttons flex flex-col sm:flex-row justify-center items-center gap-6 flex-wrap">
                <Link
                  to="/#events"
                  className="btn-primary-modern inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base no-underline bg-asuo-gold text-asuo-green border-2 border-asuo-gold shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-yellow-400 w-full sm:w-auto max-w-[300px]"
                >
                  <i className="fas fa-calendar" />
                  View Events
                </Link>
                <Link
                  to="/our-directors"
                  className="btn-outline-modern inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base no-underline bg-transparent text-white border-2 border-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-asuo-green w-full sm:w-auto max-w-[300px]"
                >
                  <i className="fas fa-users" />
                  Meet Officers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
