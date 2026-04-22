import { useState } from "react";
import asterisco from "../assets/asterisco.png";
import WebDevelopment from "./WebDevelopment";
import Design from "./Design";
import Modeling from "./Modeling";
import Creative from "./Creative";
import Photo from "./Photo";

function Skills() {
  const [qualifica, setQualifica] = useState("web");

  return (
    <>
      <div className="w-full py-30 px-60">
        <p className="font-wide-ex text-lg font-medium text-brand-dark/50 pb-20">
          SKILLS
        </p>
        <div className="flex">
          <div className="flex flex-col items-start w-1/2 font-medium text-lg">
            <div
              className={`${qualifica === "web" ? "bg-brand-dark/20" : "bg-transparent"} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica("web");
              }}
            >
              <div
                className={`${qualifica === "web" ? "opacity-100" : "opacity-80"} w-full opacity-80 hover:opacity-100 flex items-center px-6 py-2`}
              >
                <div className="w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-6"
                  />
                </div>
                <p>Web Development</p>
              </div>
            </div>

            <div
              className={`${qualifica === "design" ? "bg-brand-dark/20" : "bg-transparent"} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica("design");
              }}
            >
              <div
                className={`${qualifica === "design" ? "opacity-100" : "opacity-80"} w-full opacity-80 hover:opacity-100 flex items-center px-6 py-2`}
              >
                <div className="w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-6"
                  />
                </div>
                <p>Design & Motion Graphics</p>
              </div>
            </div>

            <div
              className={`${qualifica === "3d" ? "bg-brand-dark/20" : "bg-transparent"} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica("3d");
              }}
            >
              <div
                className={`${qualifica === "3d" ? "opacity-100" : "opacity-80"} w-full opacity-80 hover:opacity-100 flex items-center px-6 py-2`}
              >
                <div className="w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-6"
                  />
                </div>
                <p>3D Modeling & Rendering</p>
              </div>
            </div>

            <div
              className={`${qualifica === "creative" ? "bg-brand-dark/20" : "bg-transparent"} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica("creative");
              }}
            >
              <div
                className={`${qualifica === "creative" ? "opacity-100" : "opacity-80"} w-full opacity-80 hover:opacity-100 flex items-center px-6 py-2`}
              >
                <div className="w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-6"
                  />
                </div>
                <p>Creative Coding</p>
              </div>
            </div>

            <div
              className={`${qualifica === "photo" ? "bg-brand-dark/20" : "bg-transparent"} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica("photo");
              }}
            >
              <div
                className={`${qualifica === "photo" ? "opacity-100" : "opacity-80"} w-full opacity-80 hover:opacity-100 flex items-center px-6 py-2`}
              >
                <div className="w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-6"
                  />
                </div>
                <p>Photography & Video</p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="bg-olive-50 border border-brand-dark/30 rounded-3xl border-dashed p-15 font-light shadow-lg">
            {
                qualifica === 'web' && <WebDevelopment/>
            }
            {
                qualifica === 'design' && <Design/>
            }
            {
                qualifica === '3d' && <Modeling/>
            }
            {
                qualifica === 'creative' && <Creative/>
            }
            {
                qualifica === 'photo' && <Photo/>
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
