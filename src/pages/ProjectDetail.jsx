import { projects } from "../data/projects";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === id
  );
  return (
    <section
      className="min-h-screen bg-[#FCF8F5] text-[#4B352A] overflow-hidden"
      style={{ fontFamily: "Lora, serif" }}
    >
          <div className='fixed top-0 left-0 w-full flex flex-col items-center justify-center py-5 z-30'>
            <Link to='/' className='group inline-flex border-2 w-19 hover:w-31 border-[#4B352A] items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#4B352A] transition-all duration-300 '>
              <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#4B352A" stroke="#4B352A"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4B352A" d="M256 17c-62.5 0-124.8 16.55-153.6 45.36L99.72 65H72.99v62H439V65h-26.7l-2.7-2.64C380.8 33.55 318.5 17 256 17zM144 79h224v18H144zm-87.01 66v126h30v-96H169v96h46v-71c0-22 20.5-33 41-33s41 11 41 33v71h46v-96h82v96h30V145zM247 186.1c-7.8 1.9-14 6.6-14 13.9v23h14zm18 0V223h14v-23c0-7.3-6.2-12-14-13.9zM105 193v30h14v-30zm32 0v30h14v-30zm224 0v30h14v-30zm32 0v30h14v-30zm-288 48v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zM50.11 289l-28 14H489.9l-28-14zm-27.12 32v110h18V321zm50 0v110H119v-67.3L76.23 321zm28.71 0l17.3 17.3V321zm35.3 0v17.3l17.2-17.3zm42.8 0L137 363.7V431h62v-96h114v96h62v-67.3L332.2 321zm178 0l17.2 17.3V321zm35.2 0v17.3l17.2-17.3zm42.8 0L393 363.7V431h46V321zm35.2 0v110h18V321zm-254 32v27.9c3.3-1.3 7-3 11-5 8-3.9 17-8.9 27.9-8.9 10.8-.1 19.6 4.9 27.7 8.9 4.1 2 7.9 3.8 11.4 5.1v-28zm30 34.1c-3.3 1.3-7 3-11 5-5.7 2.9-11.9 6.2-19 7.8V431h30zm18 .1V431h30v-31.1c-7.2-1.7-13.5-5-19.4-7.9-3.8-1.9-7.4-3.5-10.6-4.8zM24.99 449v46H154.4l23-46zm172.61 0l-7 14h130.8l-7-14H199zm137 0l23 46H487v-46zm-153 32l-7 14h162.8l-7-14z"></path></g></svg>
              <p className='hidden group-hover:block'>Home</p>
            </Link>
          </div>
      {/* ====================== */}
      {/* HERO */}
      {/* ====================== */}
      <div className="px-6 sm:px-10 md:px-16 xl:px-24  mt-30">

        <div className="flex max-w-7xl mx-auto flex-col xl:flex-row justify-between gap-14 xl:gap-20">

          {/* TITLE */}
          <div>
            <h2 className="text-lg mb-4">
              Project #{project.number}
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight max-w-[500px]">
              {project.title}
            </h1>
          </div>

          {/* DETAILS */}
          <div className="flex flex-wrap gap-x-10 gap-y-8 xl:gap-16 pt-2 text-sm md:text-base">

            <div>
              <h3 className="font-semibold mb-2">
                Role:
              </h3>

              <p>{project.role}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Status:
              </h3>

              <p>{project.status}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Tools:
              </h3>

              <p>{project.tools.join(", ")}</p>
            </div>

          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* ABOUT */}
      {/* ====================== */}
      <div className="mt-24 md:mt-32 bg-[#474235] text-[#FCF8F5] px-6 sm:px-10 md:px-16 xl:px-24 py-16 md:py-24">

        {/* ABOUT TEXT */}
        <div className="text-left md:text-center max-w-[750px] mx-auto">
          <h1 className="text-3xl md:text-4xl xl:text-5xl mb-6 md:mb-8">
            About This Project
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[#F3EEE6]">
            {project.about}
          </p>
        </div>

        {/* FEATURES + CHALLENGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 xl:gap-40 mt-20 md:mt-28 max-w-[1100px] mx-auto">

          {/* FEATURES */}
          <div className="text-left md:text-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl mb-6 md:mb-8">
              Features
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#F3EEE6]">
              {project.features.join(", ")}
            </p>
          </div>

          {/* CHALLENGES */}
          <div className="text-left md:text-center">
            <h2 className="text-2xl md:text-3xl xl:text-4xl mb-6 md:mb-8">
              Challenges
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#F3EEE6]">
              {project.challenges}
            </p>
          </div>
        </div>
      </div>

      {/* ====================== */}
      {/* GALLERY */}
      {/* ====================== */}
      <div className="px-6 sm:px-10 md:px-16 xl:px-24 mt-20 md:mt-28">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight mb-12 md:mb-16">
            Gallery
          </h1>

          <div className={`grid grid-cols-1  gap-8 md:gap-10 ${project.width ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} `}>

            {/* ITEM */}
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className={`${project.border ? 'block' : 'hidden'} w-16 md:w-20 h-8 md:h-10 bg-gradient-to-b from-amber-200 to-amber-100 translate-y-4 md:translate-y-6 z-10`} />

                <img
                  src={item}
                  className={`max-h-[700px] ${project.width ? 'w-full' : 'w-auto'} ${project.border ? 'border-4 border-[#C1B5A0] shadow-md' : ''} `}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full my-20">
        <a href={project.source} target="_blank" rel="noopener noreferrer">
          <button className=" px-6 py-3 border-2 border-[#4B352A] font-bold text-[#4B352A] text-sm md:text-base transition-colors hover:bg-[#3A261E] hover:text-[#FCF8F5] ">
            View Source
            
          </button>
        </a>
      </div>

      {/* ====================== */}
      {/* FOOTER */}
      {/* ====================== */}
      <div className="px-6 sm:px-10 md:px-16 xl:px-24 mt-20 mb-10">

        <div className="max-w-7xl mx-auto">

          {/* BACK BUTTON */}
          <a href="/project">
          <button className="py-3 cursor-pointer text-[#4B352A] transition-colors flex items-center justify-center gap-x-1 text-sm md:text-base">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="-102.4 -102.4 1228.80 1228.80"
              fill="#4B352A"
              stroke="#4B352A"
            >
              <g>
                <path
                  fill="#4B352A"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                />
                <path
                  fill="#4B352A"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                />
              </g>
            </svg>

            Back to Projects
          </button>
          </a>

          {/* COPYRIGHT */}
          <div className="flex text-xs justify-between gap-4 md:gap-6 py-5 px-0 border-t-2 border-[#C1B5A0] mt-3 sm:text-sm md:text-base">

            <p>
              © 2026 Almutakin. All rights reserved.
            </p>

            <p>
              Designed and Built by Almutakin
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}