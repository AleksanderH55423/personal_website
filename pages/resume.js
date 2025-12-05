import Base from "@layouts/Baseof";

export default function ResumePage() {
  return (
    <Base>
      <div className="section container">
        <h1 className="text-5xl font-bold mb-8 text-center">Resume</h1>

        {/* Embedded PDF viewer */}
        <div className="flex justify-center mb-8">
          <iframe
            src="/files/resume.pdf#view=FitH"
            className="w-full max-w-4xl h-[800px] border"
            title="Resume Preview"
          />
        </div>

        {/* Download button */}
        <div className="text-center">
          <a
            href="/files/resume.pdf"
            download
            className="btn btn-primary text-lg px-6 py-3 inline-block"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile fallback message */}
        <p className="text-center mt-4 text-gray-600">
          If the preview doesn’t load,{" "}
          <a href="/files/resume.pdf" download className="text-primary underline">
            click here to download the resume
          </a>.
        </p>
      </div>
    </Base>
  );
}
