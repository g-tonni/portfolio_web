function Creative() {
  return (
    <>
      <p className="font-wide-ex font-semibold text-3xl pb-2">
        Creative Coding
      </p>
      <p className="pb-10">The intersection of code, art, and physical interaction</p>
      {/* SKILLS */}
      <p className="font-wide-ex font-medium pb-4 text-lg">Skills</p>
      <ul className="pb-10">
        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Generative Art</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Interaction Design</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Interactive Multimedia Installations</span>
        </li>
      </ul>

      {/* COMPETENZE */}
      <p className="font-wide-ex font-medium pb-4 text-lg">Tools</p>
      <ul className="">
        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Processing</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>p5.js</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Arduino</span>
        </li>
      </ul>
    </>
  );
}

export default Creative