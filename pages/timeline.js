import Base from "@layouts/Baseof";

export default function WorkHistory() {
  const jobs = [
    {
      title: "Software Engineering Intern — Oliasoft",
      date: "May 2024 – August 2024",
      logo: "/images/logos/oliasoft.png",
      bullets: [
        "Built AI-powered document intelligence pipelines using OpenAI + Azure OCR.",
        "Developed a Node.js/TypeScript backend to extract structured data from PDFs, images, and spreadsheets.",
        "Improved processing speed by 40% through optimized preprocessing and batching.",
      ],
    },
    {
      title: "Software Engineer Intern — Marine Technologies",
      date: "January 2023 – May 2023",
      logo: "/images/logos/marine_technologies.jpg",
      bullets: [
        "Developed automation scripts for embedded testing systems.",
        "Created diagnostics tools to detect hardware faults during manufacturing.",
        "Integrated Python-based testing with real hardware boards.",
      ],
    },
    {
      title: "Team Member — Dunkin'",
      date: "June 2022 – August 2022",
      logo: "/images/logos/dunkin.png",
      bullets: [
        "Opened and closed store during morning shifts, ensuring equipment readiness and cleanliness.",
        "Demonstrated strong reliability through consistent attendance and shift coverage.",
        "Maintained inventory levels and restocked supplies to support continuous operations.",
        "Proactively identified and resolved issues related to workflow and customer satisfaction.",
      ],
    },
    {
      title: "Software Engineer Intern — Frontier International",
      date: "June 2021 – July 2021",
      logo: "/images/logos/frontier.jpg",
      bullets: [
        "Analyzed and visualized complex datasets with Python, NumPy, and matplotlib.",
        "Developed interactive dashboards with React and Node.js.",
        "Integrated visualization tools into production systems to improve data accessibility.",
      ],
    },
  ];

  return (
    <Base>
      <div className="section container">
        <h1 className="text-5xl font-bold mb-12 text-center">Work History</h1>

        <div className="relative border-l-4 border-primary ml-4">

        {jobs.map((job, i) => (
          <div key={i} className="mb-12 ml-6 relative">

            {/* Timeline Dot */}
            <div className="absolute -left-3.5 mt-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>

            {/* Main row: text left, logo right */}
            <div className="flex justify-between items-start">

              {/* TEXT CONTENT */}
              <div className="pr-6">
                <h2 className="text-2xl font-bold">{job.title}</h2>
                <p className="text-primary text-lg mb-3">{job.date}</p>

                <ul className="list-disc ml-6 text-lg leading-relaxed">
                  {job.bullets.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* LOGO */}
              {job.logo && (
                <img
                  src={job.logo}
                  alt={`${job.title} logo`}
                  className="w-36 h-36 object-contain ml-6"
                />
              )}
            </div>

          </div>
        ))}


        </div>
      </div>
    </Base>
  );
}
