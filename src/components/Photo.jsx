function Photo() {
  return (
    <>
      <p className="font-wide-ex font-semibold text-3xl pb-2">
        Photography & Video
      </p>
      <p className="pb-10">Capturing and producing visual content</p>
      {/* SKILLS */}
      <p className="font-wide-ex font-medium pb-4 text-lg">Skills</p>
      <ul className="pb-10">
        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Digital Photography</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Video Shooting</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Photo Editing</span>
        </li>
      </ul>

      {/* COMPETENZE */}
      <p className="font-wide-ex font-medium pb-4 text-lg">Software</p>
      <ul className="">
        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Photoshop</span>
        </li>

        <li class="flex items-center">
          <span class="me-4 h-1.5 w-1.5 shrink-0 rounded-full border border-brand-dark bg-transparent"></span>
          <span>Premier Pro</span>
        </li>
      </ul>
    </>
  );
}

export default Photo