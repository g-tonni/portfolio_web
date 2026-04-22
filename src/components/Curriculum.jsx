import asterisco from "../assets/asterisco.png";

function Curriculum() {
  return (
    <div className="w-full py-30 px-60">
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CURRICULUM
      </p>
      <div className="w-1/2 flex flex-col items-start">
        <div className="w-15">
          <img src={asterisco} alt="Asterisco" className="w-full" />
        </div>

        <p className="py-20 font-medium text-3xl">
          Want to learn more about my background? Download my CV and explore my
          experience.
        </p>

        <div className="bg-brand-dark hover:bg-brand-dark/80 shadow-xl shadow-brand-dark/20 text-brand-light font-bold transition-colors duration-300 cursor-pointer rounded-full py-3 px-8">
            Download Curriculum
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
