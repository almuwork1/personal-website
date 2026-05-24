import { useState, useEffect } from "react";
import projectsBG from '../assets/images/projectsBG.jpg';
import payroll1 from '../assets/images/PayrollApp/img1.png';
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Project() {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handlePreviewOpen = (image) => {
    setPreviewImage(image);
  };

  const handlePreviewClose = () => {
    setPreviewImage(null);
  };

  return (
    // desktop
    <section className="h-full md:h-screen @container w-full bg-cover bg-center bg-[#FCF8F5] relative" id="projects">
    <img src={projectsBG} alt="Projects Background" className='hidden md:block absolute inset-0 w-full h-full object-cover opacity-70' />
    <div className='fixed top-0 left-0 w-full flex flex-col items-center justify-center py-5 z-30'>
      <Link to='/' className='group inline-flex border-2 w-19 hover:w-31 border-[#4B352A] items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-[#4B352A] transition-all duration-300 '>
        <svg className="w-10 h-10" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#4B352A" stroke="#4B352A"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#4B352A" d="M256 17c-62.5 0-124.8 16.55-153.6 45.36L99.72 65H72.99v62H439V65h-26.7l-2.7-2.64C380.8 33.55 318.5 17 256 17zM144 79h224v18H144zm-87.01 66v126h30v-96H169v96h46v-71c0-22 20.5-33 41-33s41 11 41 33v71h46v-96h82v96h30V145zM247 186.1c-7.8 1.9-14 6.6-14 13.9v23h14zm18 0V223h14v-23c0-7.3-6.2-12-14-13.9zM105 193v30h14v-30zm32 0v30h14v-30zm224 0v30h14v-30zm32 0v30h14v-30zm-288 48v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zm96 0v30h14v-30zm32 0v30h14v-30zM50.11 289l-28 14H489.9l-28-14zm-27.12 32v110h18V321zm50 0v110H119v-67.3L76.23 321zm28.71 0l17.3 17.3V321zm35.3 0v17.3l17.2-17.3zm42.8 0L137 363.7V431h62v-96h114v96h62v-67.3L332.2 321zm178 0l17.2 17.3V321zm35.2 0v17.3l17.2-17.3zm42.8 0L393 363.7V431h46V321zm35.2 0v110h18V321zm-254 32v27.9c3.3-1.3 7-3 11-5 8-3.9 17-8.9 27.9-8.9 10.8-.1 19.6 4.9 27.7 8.9 4.1 2 7.9 3.8 11.4 5.1v-28zm30 34.1c-3.3 1.3-7 3-11 5-5.7 2.9-11.9 6.2-19 7.8V431h30zm18 .1V431h30v-31.1c-7.2-1.7-13.5-5-19.4-7.9-3.8-1.9-7.4-3.5-10.6-4.8zM24.99 449v46H154.4l23-46zm172.61 0l-7 14h130.8l-7-14H199zm137 0l23 46H487v-46zm-153 32l-7 14h162.8l-7-14z"></path></g></svg>
        <p className='hidden group-hover:block'>Home</p>
      </Link>
    </div>
    <div className='lg:w-[1024px] w-[768px] hidden md:block bg-amber-100 relative mx-auto lg:scale-100 xl:scale-113 2xl:scale-125'>
      {/* middle */}
      <Link to={`/project/${projects[0].id}`}>
        <div id='project-1' className='absolute top-40 z-20 scale-80 lg:scale-100 left-1/2 -translate-x-1/2 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl rotate-3 ' style={{ fontFamily: "Lora, serif" }}> 
          <div className='flex justify-between w-full z-20'>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
          </div>
          <div className='w-full text-center text-[#4B352A]'>
            <h2 className='text-sm'>Project #{projects[0].number}</h2>
            <h1 className='text-2xl'>{projects[0].title}</h1>
          </div>
          <img src={payroll1} alt="Project Image" className='w-60 lg:w-80 object-cover border-2 border-[#C1B5A0]' />
        </div>
      </Link>
      <Link to={`/project/${projects[1].id}`}>
        <div id='project-2' className='absolute z-20 scale-80 lg:scale-100 -rotate-3 top-110 lg:top-120 left-1/2 -translate-x-1/2 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}> 
          <div className='flex justify-between w-full z-20'>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
          </div>
          <div className='w-full text-center text-[#4B352A] px-5'>
            <h2 className='text-sm'>Project #{projects[1].number}</h2>
            <h1 className='text-2xl'>{projects[1].title}</h1>
          </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-15 bg-white'>
            <img src={projects[1].thumbnail} alt="Project Image" className='h-30 object-cover' />
          </div>
        </div>
      </Link>

      {/* left */}
      <Link to={`/project/${projects[2].id}`}>
        <div id='project-3' className='absolute rotate-1 top-30 left-10 flex gap-y-2 flex-col w-fit max-w-[280px] items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}> 
          <div className='flex justify-between w-full z-20'>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
          </div>
          <div className='w-full text-center text-[#4B352A]'>
            <h2 className='text-sm'>Project #{projects[2].number}</h2>
            <h1 className='text-2xl'>{projects[2].title}</h1>
          </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-5 py-5 bg-white'>
            <img src={projects[2].thumbnail} alt="Project Image" className='h-20 object-cover' />
          </div>
        </div>
      </Link>
      <Link to={`/project/${projects[3].id}`}>
        <div id='project-4' className='absolute max-w-[270px] -rotate-1 top-110 left-10 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}> 
          <div className='flex justify-between w-full z-20'>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
          </div>
          <div className='w-full text-center text-[#4B352A]'>
            <h2 className='text-sm'>Project #{projects[3].number}</h2>
            <h1 className='text-2xl'>{projects[3].title}</h1>
          </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-5 py-5 bg-white'>
            <img src={projects[3].thumbnail} alt="Project Image" className='h-15 object-cover' />
          </div>
        </div>
      </Link>

      {/* right */}
      <Link to={`/project/${projects[4].id}`}>
        <div id='project-5' className='absolute -rotate-1 top-30 right-10  flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}> 
          <div className='flex justify-between w-full z-20'>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
            <div className='w-3 h-3 lg:w-4 lg:h-4  rounded-full bg-[#8B5E3C]'></div>
          </div>
          <div className='w-full text-center text-[#4B352A]'>
            <h2 className='text-sm'>Project #{projects[4].number}</h2>
            <h1 className='text-2xl'>{projects[4].title}</h1>
          </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-25 py-10 bg-white'>
            <img src={projects[4].thumbnail} alt="Project Image" className='h-10 object-cover' />
          </div>
        </div>
      </Link>

      {/* sertifikat */}
      <div id='sertifikat' className='absolute cursor-pointer -rotate-3 top-110 right-20 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' onClick={() => handlePreviewOpen(projects[5].thumbnail)}>
        <div className='w-15 h-5 absolute -rotate-45 bg-amber-100 translate-y-1 -translate-x-6'></div>
        <div className='w-15 h-5 absolute rotate-45 bg-amber-100 translate-y-2 translate-x-40'></div>
        <div className='w-15 h-5 absolute rotate-45 bg-amber-100 translate-y-65 -translate-x-4'></div>
        <div className='w-15 h-5 absolute -rotate-45 bg-amber-100 translate-y-65 translate-x-40'></div>
        <img src={projects[5].thumbnail} alt="Project Image" className='h-70 object-cover border-2 border-[#C1B5A0] ' />
      </div>
      <div id='sertifikat' className='absolute cursor-pointer rotate-1 top-165 left-20 2xl:-left-20 2xl:top-75 flex  flex-col w-fit items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }} onClick={() => handlePreviewOpen(projects[6].thumbnail)}> 
        <div className='w-10 h-7 bg-amber-100 translate-y-3'></div>
        <img src={projects[6].thumbnail} alt="Project Image" className='w-50 lg:w-60 object-cover border-2 border-[#C1B5A0]' />
      </div>
      <div id='sertifikat' className='absolute cursor-pointer rotate-1 top-165 right-20 2xl:-right-20 2xl:top-75 flex  flex-col w-fit items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }} onClick={() => handlePreviewOpen(projects[7].thumbnail)}> 
        <div className='w-10 h-7 bg-amber-100 translate-y-3'></div>
        <img src={projects[7].thumbnail} alt="Project Image" className='w-50 lg:w-60 object-cover border-2 border-[#C1B5A0]' />
      </div>
    </div>
    {previewImage && (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4' onClick={handlePreviewClose}>
        <div className='relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-3xl border-2 border-white bg-white' onClick={(e) => e.stopPropagation()}>
          <button onClick={handlePreviewClose} className='absolute right-3 top-3 z-10 rounded-full bg-black/75 px-3 py-1 text-sm text-white'>Close</button>
          <img src={previewImage} alt='Preview' className='max-h-[90vh] w-auto object-contain' />
        </div>
      </div>
    )}
    {/* end sertifikat */}

    {/* end desktop */}

    {/* mobile */}
    <div className='grid grid-cols-1 gap-y-10 py-5 items-center mx-auto max-w-[600px] md:hidden mt-30'>
      <div className='relative pl-5'>
        <Link to={`/project/${projects[0].id}`}>
          <div id='project-1' className=' rotate-1 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}>
            <div className='flex justify-between w-full z-20'>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
            </div>
            <div className='w-full text-center text-[#4B352A]'>
              <h2 className='text-sm'>Project #{projects[0].number}</h2>
              <h1 className='text-xl @min-[375px]:text-2xl'>{projects[0].title}</h1>
            </div>
            <img src={projects[0].thumbnail} alt="Project Image" className='w-50 object-cover @min-[375px]:w-60 @min-[425px]:w-70 @min-[500px]:w-80 border-2 border-[#C1B5A0]' />
          </div>
        </Link>
      </div>
      <div className='relative flex justify-end pr-5 @min-[500px]:pr-10 @min-[600px]:pr-15'>
        <Link to={`/project/${projects[1].id}`}>
          <div id='project-2' className=' -rotate-1 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}>
            <div className='flex justify-between w-full z-20'>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
            </div>
            <div className='w-full text-center text-[#4B352A]'>
              <h2 className='text-sm'>Project #{projects[1].number}</h2>
              <h1 className='text-xl @min-[375px]:text-2xl'>{projects[1].title}</h1>
            </div>
                      <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-15 bg-white'>
            <img src={projects[1].thumbnail} alt="Project Image" className='h-30 object-cover' />
          </div>
          </div>
        </Link>
      </div>
      <div className='relative pl-5'>
        <Link to={`/project/${projects[2].id}`}>
          <div id='project-3' className=' rotate-1 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}>
            <div className='flex justify-between w-full z-20'>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
            </div>
            <div className='w-full text-center text-[#4B352A]'>
              <h2 className='text-sm'>Project #{projects[2].number}</h2>
              <h1 className='text-xl @min-[375px]:text-2xl'>{projects[2].title}</h1>
            </div>
                      <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-5 py-5 bg-white'>
            <img src={projects[2].thumbnail} alt="Project Image" className='h-20 object-cover' />
          </div>
          </div>
        </Link>
      </div>
      <div className='relative flex justify-end pr-5'>
        <Link to={`/project/${projects[3].id}`}>
          <div id='project-4' className=' flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}>
            <div className='flex justify-between w-full z-20'>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
            </div>
            <div className='w-full text-center text-[#4B352A]'>
              <h2 className='text-sm'>Project #{projects[3].number}</h2>
              <h1 className='text-xl @min-[375px]:text-2xl'>{projects[3].title}</h1>
            </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-5 py-5 bg-white'>
            <img src={projects[3].thumbnail} alt="Project Image" className='h-15 object-cover' />
          </div>
          </div>
        </Link>
      </div>
      <div className='relative flex justify-start pl-5'>
        <Link to={`/project/${projects[4].id}`}>
          <div id='project-5' className=' -rotate-2 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center py-4 px-3 border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }}>
            <div className='flex justify-between w-full z-20'>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
              <div className='w-3 h-3 rounded-full bg-[#8B5E3C]'></div>
            </div>
            <div className='w-full text-center text-[#4B352A]'>
              <h2 className='text-sm'>Project #{projects[4].number}</h2>
              <h1 className='text-xl @min-[375px]:text-2xl'>{projects[4].title}</h1>
            </div>
          <div className='w-full border-2 border-[#C1B5A0] flex items-center justify-center px-25 py-10 bg-white'>
            <img src={projects[4].thumbnail} alt="Project Image" className='h-10 object-cover' />
          </div>
          </div>
        </Link>
      </div>
      <div className='relative flex justify-end pr-10'>
        <div id='sertifikat' className='cursor-pointer rotate-3 flex gap-y-2 flex-col w-fit items-center bg-[#FCF8F5] border-[#C1B5A0] justify-center border-2 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }} onClick={() => handlePreviewOpen(projects[5].thumbnail)}>
        <div className='w-15 h-5 absolute rotate-45 bg-amber-100 -right-5 top-1'></div>
                <div className='w-15 h-5 absolute -rotate-45 bg-amber-100 -right-5 bottom-1'></div>
        <div className='w-15 h-5 absolute -rotate-45 bg-amber-100 -left-5 top-1'></div>
        <div className='w-15 h-5 absolute rotate-45 bg-amber-100 -left-5 bottom-1'></div>
        <img src={projects[5].thumbnail} alt="Project Image" className='h-70 object-cover border-2 border-[#C1B5A0] ' />
     </div>
      </div>
      <div className='relative flex justify-center'>
        <div id='sertifikat' className='cursor-pointer flex gap-y-2 flex-col w-fit items-center justify-center transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }} onClick={() => handlePreviewOpen(projects[6].thumbnail)}>
          <div className='w-10 h-7 bg-amber-100 -translate-y-4 absolute top-0'></div>
          <img src={projects[6].thumbnail} alt="Project Image" className=' w-70 @min-[375px]:w-90 lg:w-60 object-cover border-2 border-[#C1B5A0]' />
        </div>
      </div>
      <div className='relative flex justify-center pr-5 @min-[500px]:pr-10 @min-[600px]:pr-15'>
        <div id='sertifikat' className='cursor-pointer flex gap-y-2 flex-col w-fit items-center justify-center transition-all duration-300 hover:-translate-y-4 hover:rotate-0 hover:scale-105 hover:shadow-2xl' style={{ fontFamily: "Lora, serif" }} onClick={() => handlePreviewOpen(projects[7].thumbnail)}>
          <div className='w-10 h-7 bg-amber-100 -translate-y-4 absolute top-0'></div>
          <img src={projects[7].thumbnail} alt="Project Image" className='w-60 @min-[375px]:w-80 lg:w-60 object-cover border-2 border-[#C1B5A0]' />
        </div>
      </div>
    </div>
    </section>
  );
}