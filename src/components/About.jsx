import skills from "../data/skills";

function About() {
  return (
    <section id="about" className="section-padding bg-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About Me & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-semibold mb-4 text-accent">
              My Background
            </h3>
            <p className="text-accent mb-4">
              I've transformed complex business requirements into elegant,
              efficient, and scalable software solutions. My journey spans from
              front-end user experience to robust back-end architecture.
            </p>
            <p className="text-accent">
              I thrive in collaborative environments and am constantly learning
              new technologies to stay ahead of the curve. Let's build something
              amazing together!
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-accent">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-primary-dark p-3 rounded-lg text-center shadow-md border border-gray-700 transition duration-300 hover:border-accent"
                >
                  <span className="text-white font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
