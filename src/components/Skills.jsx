import { useState } from 'react'
import asterisco from '../assets/asterisco.png'
import WebDevelopment from './WebDevelopment'
import Design from './Design'
import Modeling from './Modeling'
import Creative from './Creative'
import Photo from './Photo'

function Skills() {
  const [qualifica, setQualifica] = useState('web')

  return (
    <>
      <div className="w-full py-20 px-6 sm:px-25 md:py-20 md:px-15 lg:py-30 lg:px-30 xl:py-30 xl:px-60 2xl:py-30 2xl:px-80 3xl:py-30 3xl:px-100 4xl:py-30 4xl:px-140">
        <p className="font-wide-ex md:text-lg font-medium text-brand-dark/50 pb-20">
          SKILLS
        </p>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full flex md:flex-col items-start md:w-1/3 lg:1/2 font-medium lg:text-lg overflow-x-auto mb-6 md:mb-0">
            <div
              className={`${qualifica === 'web' ? 'bg-brand-dark/20' : 'bg-transparent'} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2 me-2 md:me-0`}
              onClick={() => {
                setQualifica('web')
              }}
            >
              <div
                className={`${qualifica === 'web' ? 'opacity-100' : 'opacity-80'} w-full opacity-80 hover:opacity-100 flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">Web Development</p>
              </div>
            </div>

            <div
              className={`${qualifica === 'design' ? 'bg-brand-dark/20' : 'bg-transparent'} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2 me-2 md:me-0`}
              onClick={() => {
                setQualifica('design')
              }}
            >
              <div
                className={`${qualifica === 'design' ? 'opacity-100' : 'opacity-80'} w-full opacity-80 hover:opacity-100 flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">Design & Motion Graphics</p>
              </div>
            </div>

            <div
              className={`${qualifica === '3d' ? 'bg-brand-dark/20' : 'bg-transparent'} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2 me-2 md:me-0`}
              onClick={() => {
                setQualifica('3d')
              }}
            >
              <div
                className={`${qualifica === '3d' ? 'opacity-100' : 'opacity-80'} w-full opacity-80 hover:opacity-100 flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">3D Modeling & Rendering</p>
              </div>
            </div>

            <div
              className={`${qualifica === 'creative' ? 'bg-brand-dark/20' : 'bg-transparent'} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2 me-2 md:me-0`}
              onClick={() => {
                setQualifica('creative')
              }}
            >
              <div
                className={`${qualifica === 'creative' ? 'opacity-100' : 'opacity-80'} w-full opacity-80 hover:opacity-100 flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">Creative Coding</p>
              </div>
            </div>

            <div
              className={`${qualifica === 'photo' ? 'bg-brand-dark/20' : 'bg-transparent'} flex items-center hover:bg-brand-dark/30 rounded-lg transition-colors duration-200 cursor-pointer mb-2`}
              onClick={() => {
                setQualifica('photo')
              }}
            >
              <div
                className={`${qualifica === 'photo' ? 'opacity-100' : 'opacity-80'} w-full opacity-80 hover:opacity-100 flex items-center px-3 py-2 lg:px-6`}
              >
                <div className="w-7 lg:w-10">
                  <img
                    src={asterisco}
                    alt="Asterisco"
                    className="w-full pe-3 lg:pe-6"
                  />
                </div>
                <p className="whitespace-nowrap">Photography & Video</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/2 md:ps-10 lg:ps-0">
            <div className="bg-olive-50 border border-brand-dark/30 rounded-3xl border-dashed p-15 2xl:px-18 3xl:px-20 font-light shadow-lg shadow-brand-dark/20">
              {qualifica === 'web' && <WebDevelopment />}
              {qualifica === 'design' && <Design />}
              {qualifica === '3d' && <Modeling />}
              {qualifica === 'creative' && <Creative />}
              {qualifica === 'photo' && <Photo />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
