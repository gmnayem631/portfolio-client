const ResumeButton = () => {
  return (
    <a
      href="/path-to-your-resume.pdf"
      download
      className="inline-block px-3 py-2 bg-[#08A79A] text-white font-semibold rounded-md hover:bg-[#7B5E7D] transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
};

export default ResumeButton;
