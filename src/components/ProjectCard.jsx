function ProjectCard({ project }) {
  const isColdStart = project.link?.includes("onrender.com");

  return (
    <div className="bg-secondary-dark rounded-xl shadow-xl overflow-hidden transform transition duration-500 card-hover border-t-4 border-acent">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={`${project.title} Preview`}
        />
      </div>
      <div className="p-6">
        {project.internal && (
          <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 bg-primary-dark/90 rounded-full text-accent border border-accent">
            Internal tool
          </span>
        )}
        <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>

        <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2 py-1 bg-gray-700 rounded-full text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link ? (
          <>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-accent hover:text-accent font-semibold transition duration-300"
            >
              View &rarr;
            </a>
            {isColdStart && (
              <p className="text-xs text-gray-500 mt-2">
                Hosted on a free tier — may take ~30s to wake up on first load.
              </p>
            )}
          </>
        ) : (
          <p className="text-sm text-gray-500 italic">
            Built for internal company use — not publicly deployed.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
