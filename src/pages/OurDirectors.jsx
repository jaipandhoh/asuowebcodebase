const officers = [
  {
    name: "Prissila Moreno",
    title: "President",
    email: "asuopres@uoregon.edu",
    image: "/Prissila Moreno.jpg",
    imagePosition: "center 80%",
  },
  {
    name: "Jordan Ackeman",
    title: "Vice President",
    email: "asuovp@uoregon.edu",
    image: "/Jordan Ackeman.jpg",
    imagePosition: "center 60%",
  },
  {
    name: "Daphne Patrick",
    title: "Chief of Staff",
    email: "asuocos@uoregon.edu",
    image: "/Daphne Patrick.jpg",
    imagePosition: "center 60%",
  },
  {
    name: "Andrew Ducharme",
    title: "Chief of Strategy",
    email: "asuoexternal@uoregon.edu",
    image: "/Andrew Ducharme.jpg",
    imagePosition: "center 70%",
  },
  {
    name: "Jai Pandhoh",
    title: "Director of Communications",
    email: "asuocomm@uoregon.edu",
    image: "/jai pandhoh.jpg",
    imagePosition: "center 70%",
  },
  {
    name: "Justin Begley",
    title: "Director of Finance",
    email: "asuofindirector@uoregon.edu",
    image: "/Justin Begley.jpg",
    imagePosition: "center 30%",
  },
  {
    name: "Cash Kowaleski",
    title: "Director of Student Engagement",
    email: "asuoprog@uoregon.edu",
    image: "/Cash Kowaleski.jpg",
    imagePosition: "center 60%",
  },
  {
    name: "Amaya Peralta",
    title: "Director of Advocacy",
    email: "asuoadvocacy01@uoregon.edu",
    image: "/Amaya Peralta.jpg",
    imagePosition: "center 65%",
  },
  {
    name: "Blaise Malczewski",
    title: "Director of Organizing",
    email: "asuointernal@uoregon.edu",
    image: "/Blaise Malczewski.jpg",
    imagePosition: "center 65%",
  },
];

export default function OurDirectors() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <main className="main-content max-w-6xl mx-auto px-4 sm:px-8 pt-24 pb-16">
        <section className="section mb-20">
          <div className="directors-section bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            <div className="section-header text-center mb-12">
              <h2 className="section-title font-display text-4xl sm:text-5xl font-semibold text-asuo-green mb-4">
                Our Directors
              </h2>
              <div className="office-hours-button-container mt-6">
                <a
                  href="https://docs.google.com/spreadsheets/d/1Lv6Qag_fVtIpUmC_kAx1WdnGxP1y3bTJKApPuUYavok/edit?gid=1375568540#gid=1375568540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="office-hours-button inline-flex items-center gap-2 bg-asuo-gold text-asuo-green no-underline px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:bg-asuo-green hover:text-asuo-gold hover:-translate-y-0.5 hover:shadow-md border-2 border-asuo-gold hover:border-asuo-green shadow-sm"
                >
                  <i className="fas fa-clock text-lg" />
                  Office Hours
                </a>
              </div>
            </div>
            <div className="directors-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-start">
              {officers.map((officer, index) => (
                <div
                  key={index}
                  className="director-card bg-slate-50 rounded-2xl shadow-sm p-6 text-center w-full max-w-[280px] transition-all duration-300 border border-slate-200 hover:-translate-y-2 hover:shadow-lg"
                >
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="director-photo w-[120px] h-[120px] rounded-full mx-auto mb-4 border-4 border-asuo-gold object-cover shadow-sm transition-all duration-300 hover:scale-[1.08] hover:shadow-md"
                    style={{ objectPosition: officer.imagePosition }}
                  />
                  <div className="director-name font-display font-semibold text-lg text-asuo-green mb-2">
                    {officer.name}
                  </div>
                  <div className="director-title text-slate-600 text-sm font-normal mb-3">
                    {officer.title}
                  </div>
                  <div className="director-email text-sm text-asuo-green">
                    <a
                      href={`mailto:${officer.email}`}
                      className="text-asuo-green no-underline font-medium transition-all duration-300 px-4 py-2 rounded-full bg-white border border-slate-200 inline-block hover:text-asuo-green hover:bg-asuo-gold hover:-translate-y-0.5 hover:shadow-md"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
