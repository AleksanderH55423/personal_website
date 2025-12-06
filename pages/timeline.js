import Base from "@layouts/Baseof";

export default function WorkHistory() {
  const jobs = [
    {
      title: "Software Engineering Intern — Oliasoft",
      date: "May 2024 – August 2024",
      bullets: [
        "Built AI-powered document intelligence pipelines using OpenAI + Azure OCR.",
        "Developed a Node.js/TypeScript backend to extract structured data from PDFs, images, and spreadsheets.",
        "Improved processing speed by 40% through optimized preprocessing and batching.",
      ],
    },
    {
      title: "Software Engineer Intern — Marine Technologies",
      date: "January 2023 – May 2023",
      bullets: [
        "Developed automation scripts for embedded testing systems.",
          "Created diagnostics tools to detect hardware faults during manufacturing.",
          "Integrated Python-based testing with real hardware boards.",
      ],
    },
     {
      title: "Team Member — Dunkin'",
      date: "June 2022 – August 2022",
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
      bullets: [
        "Analyzed and visualized complex datasets with Python libraries (NumPy, pandas) and matplotlib, providing insights that informed key project decisions.",
          "Developed interactive data dashboards with React and Node.js, allowing users to easily explore and interpret data trends and patterns in real-time",
          "Collaborated with cross-functional teams to integrate data visualization tools into existing applications, enhancing user experience and data accessibility.",
      ],
    },
  ];

  return (
    <Base>
      <div className="section container">
        <h1 className="text-5xl font-bold mb-12 text-center">Work History</h1>

        <div className="relative border-l-4 border-primary ml-4">

          {jobs.map((job, i) => (
            <div key={i} className="mb-12 ml-6">
              {/* Dot */}
              <div className="absolute -left-3.5 mt-1 w-4 h-4 bg-primary rounded-full border-2 border-white"></div>

              {/* Content */}
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p className="text-primary text-lg mb-3">{job.date}</p>

              <ul className="list-disc ml-6 text-lg leading-relaxed">
                {job.bullets.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </Base>
  );
}
