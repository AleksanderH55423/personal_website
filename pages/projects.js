import Base from "@layouts/Baseof";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Spotify Wrapped Mobile App",
      description:
        "A full-featured Android application that generates Spotify-style yearly listening analytics using Firebase backend services, real-time sync, and interactive visualizations. Built in a 4-person team for CS 2340.",
      link: "https://sites.google.com/view/2340project2lucas4",
    },
    // ADD MORE PROJECTS HERE
  ];

  return (
    <Base>
      <div className="section container">
        <h1 className="text-5xl font-bold mb-12 text-center">Projects</h1>

        <div className="row">
          {projects.map((project, i) => (
            <div key={i} className="col-12 mb-8 sm:col-6">
              <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="mb-4 text-lg leading-relaxed">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}
