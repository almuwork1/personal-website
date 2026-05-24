import smoke from "../../assets/images/smoke.png";
import ashtray from "../../assets/images/ahstray.png";
import PhotoProfileS from "../../assets/images/fotoProfilSkecth.jpg";
import PhotoProfile from "../../assets/images/fotoProfil.jpeg";
import { useState } from "react";

export default function AboutSection() {
  const [showMore, setShowMore] = useState(false);
  const [flip, setFlip] = useState(false);
  
  return (
    <>
      <div className="text-center flex scale-85 @min-[425px]:scale-100 flex-col gap-y-3 border-[3px] bg-[#FCF8F5] border-[#948C78] text-black w-full max-w-sm md:max-w-md px-4 py-6">
        <div className="items-center border-b-[3px] border-[#948C78] ">
          <p className="uppercase m-0 text-[#948C78] mb-2">
            <span className="text-[3rem] md:text-[4rem] font-semibold m-0" style={{ fontFamily: "Lora, serif" }}>wanted</span>
            <span className="text-[1rem] md:text-[1.5rem] block m-0" style={{ fontFamily: "Lora, serif" }}>dead or alive</span>
          </p>
        </div>
        <div>
          <div className="items-center mb-4">
            <h2
              className="text-[2rem] md:text-[2.5rem] uppercase text-[#948C78]"
              style={{ fontFamily: "Lora, serif" }}
            >
              ALMUTAKIN
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
          <div className="flex justify-center shrink-0 [perspective:1000px]">
<svg className="absolute bottom-0 right-0 z-20 cursor-pointer hover:opacity-60 -translate-x-15" onClick={() => setFlip(!flip)} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 3.29289C16.6834 2.90237 17.3166 2.90237 17.7071 3.29289L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L17.7071 10.7071C17.3166 11.0976 16.6834 11.0976 16.2929 10.7071C15.9024 10.3166 15.9024 9.68342 16.2929 9.29289L17.5857 8.00006H7.85181C5.70703 8.00006 4 9.75511 4 12C4 12.5523 3.55228 13 3 13C2.44772 13 2 12.5523 2 12C2 8.72205 4.53229 6.00006 7.85181 6.00006H17.5858L16.2929 4.70711C15.9024 4.31658 15.9024 3.68342 16.2929 3.29289ZM21 11C21.5523 11 22 11.4477 22 12C22 15.3283 19.2275 18.0001 15.9578 18.0001H6.41427L7.70711 19.2929C8.09763 19.6834 8.09763 20.3166 7.70711 20.7071C7.31658 21.0976 6.68342 21.0976 6.29289 20.7071L3.29289 17.7071C2.90237 17.3166 2.90237 16.6834 3.29289 16.2929L6.29289 13.2929C6.68342 12.9024 7.31658 12.9024 7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071L6.41415 16.0001H15.9578C18.1524 16.0001 20 14.1945 20 12C20 11.4477 20.4477 11 21 11Z" fill="#4B352A"></path> </g></svg>    {/* FRONT */}
  <div
    onClick={() => setFlip(!flip)}
    className="relative w-60 h-60 duration-700 cursor-pointer"
    style={{
      transformStyle: "preserve-3d",
      transform: flip ? "rotateY(180deg)" : "rotateY(0deg)",
    }}
  >
    <div
      className="absolute inset-0 border-2 border-[#948C78] bg-cover bg-center"
      style={{
        backgroundImage: `url(${PhotoProfileS})`,
        backfaceVisibility: "hidden",
      }}
    ></div>

    {/* BACK */}
    <div
      className="absolute inset-0 border-2 border-[#948C78] bg-cover bg-center"
      style={{
        backgroundImage: `url(${PhotoProfile})`,
        transform: "rotateY(180deg)",
        backfaceVisibility: "hidden",
      }}
    ></div>
  </div>
</div>
            <div className="flex items-center justify-center ">
              <p className="text-center  text-xs md:text-sm capitalize text-[#948C78]">
                Hi! Saya almutakin Saya seorang junior programmer dan web designer yang senang membangun website interaktif dan pengalaman digital yang menarik. <span className=" text-[#4B352A] hover:text-[#aa7b63] cursor-pointer" onClick={() => setShowMore(!showMore)}>
                  ...lebih banyak
                </span> <br /> <span>{showMore ? "Saya banyak menggunakan JavaScript dan Laravel dalam proses development, serta menggunakan Figma untuk mendesain tampilan sebelum diubah menjadi website yang nyata. Saya suka menggabungkan desain yang modern dengan fitur yang fungsional agar setiap project terasa hidup dan nyaman digunakan" : ""}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-b-[3px] border-t-[3px] border-[#948C78] py-3">
          <div
            className="uppercase text-[2.5rem] text-[#948C78]"
            style={{ fontFamily: "Lora, serif" }}
          >
            <p>$500000 reward</p>
          </div>
        </div>
      </div>
      
      {/* Decorative images - hidden on small screens */}
      <img
        src={ashtray}
        className="bottom-5 right-10 w-30 md:w-40 lg:w-55 @min-[1440px]:w-60 @min-[1440px]:right-40 absolute" 
        alt="ashtray"
      />
      <img
        src={smoke}
        className="absolute bottom-20 right-10 w-10 lg:bottom-30 lg:right-20 lg:w-15 @min-[1440px]:right-50 "
        alt="smoke1"
      />
      <img
        src={smoke}
        className="absolute bottom-30 -right-10 w-20 rotate-12 lg:bottom-40 lg:-right-10 lg:w-25 lg:rotate-10 @min-[1440px]:right-20"
        alt="smoke1"
      />
      <img
        src={smoke}
        className="absolute bottom-15 -right-35 w-25 -rotate-12 lg:bottom-60 lg:-right-40 lg:w-30 @min-[1440px]:-right-10 "
        alt="smoke1"
      />
      <img
        src={smoke}
        className="absolute bottom-35 -right-70 w-30 rotate-5 lg:bottom-80 lg:-right-80 lg:w-35 @min-[1440px]:-right-50"
        alt="smoke1"
      />
    </>
  );
}
