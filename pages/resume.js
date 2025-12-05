import Base from "@layouts/Baseof";

export default function ResumePage() {
  return (
    <Base>
      <div className="section container text-center">
        <h1 className="text-5xl font-bold mb-6">Resume</h1>
        <a
          className="text-primary underline text-xl"
          href="/files/Resume Hovland.pdf"
          download
        >
          Download Resume
        </a>
      </div>
    </Base>
  );
}