import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import logoEpicode from "../assets/logo epicode.png";

function Contact() {
  return (
    <div className="w-full py-30 px-60">
      <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
        CONTACT
      </p>
      <div className="flex">
        <div className="w-1/3 flex items-end">
          <p className="font-black text-3xl">
            Always looking for new challenges between code and design. If my
            journey sparks your interest, feel free to contact me!
          </p>
        </div>
        <div className="w-2/3 flex flex-col justify-end items-end">
        
         <div className="flex flex-col justify-end items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Linkedin</p>
              <FaLinkedin className="w-6 h-6" />
            </div>
            <p className="font-light text-end">
              https://www.linkedin.com/in/giada-tonni/
            </p>
          </div>

           <div className="flex flex-col justify-end items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">GitHub</p>
              <FaGithub className="w-6 h-6" />
            </div>
            <p className="font-light text-end">
              https://github.com/g-tonni
            </p>
          </div>

          <div className="flex flex-col justify-end items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Epicode Talent Profile</p>
              <img src={logoEpicode} alt="Logo Epicode" className="w-6 h-6" />
            </div>
            <p className="font-light text-end">
              https://talent.epicode.com/talent/<br />80df17aa-43d4-4c55-b5a3-2a93ffc5cba2
            </p>
          </div>

           <div className="flex flex-col justify-end items-end pb-6">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Phone</p>
              <FaPhoneFlip className="w-6 h-6" />
            </div>
            <p className="font-light text-end">
              +39 393 50 66 676
            </p>
          </div>

           <div className="flex flex-col justify-end items-end">
            <div className="flex items-center pb-1">
              <p className="text-lg font-bold pe-4">Email</p>
              <IoIosMail className="w-6 h-6" />
            </div>
            <p className="font-light text-end">
              tonni.giada.210802@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
