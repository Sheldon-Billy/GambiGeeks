import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import Logo from "../assets/Pictures";

// 🔥 Typing hook
const useTypedText = (
  texts,
  typingSpeed = 80,
  deletingSpeed = 15,
  pause = 1000
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return displayedText;
};

const Home = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]); // Zooms in as you scroll

  const texts = [
    "Hi 👋 ",
    "Start Now !",
    "Explore Now !",
    "Grow Now !",
    "@GambiGeeks",
  ];
  const typedText = useTypedText(texts);

  return (
    <>
      <section id="home">
        <div className="relative h-screen w-full ">
          {/* Animated Image */}
          <motion.img
            // src="https://w0.peakpx.com/wallpaper/94/612/HD-wallpaper-building-architecture-black-dark.jpg"
            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZVnulBbzJ0YW2rIwhNyQw_WuqT7cLQf49VpBDix1ZpZCHGZC6lwK_6HcUL5g0cWtKmg&usqp=CAU"

            src="https://img.freepik.com/free-vector/abstract-background-with-wireframe-design_1048-5743.jpg?semt=ais_hybrid&w=740"
            className="object-center h-screen w-full brightness-50"
            style={{ scale }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 px-6 text-white">
            {/* Navbar */}
            <div className="fixed left-0 right-0 flex justify-between p-4 px-24 bg-black/60 backdrop-blur-md z-50">
              <div className="text-2xl font-bold mt-3 bg-gradient-to-r from-[#0800ff] via-[#ffffff] to-[#0000e3] text-transparent bg-clip-text ">
                GambiGeeks <span className="text-[blue]">LTD.</span>
                <img
                  src={Logo}
                  className="h-36 rounded-[200px] w-36 absolute left-35 "
                />
              </div>

              <div className="text-[#cacaf3]  flex space-x-8 text-sm font-bold bg-gradient-to-t from-[#121289] via-[#000000] to-[black] px-3 py-2 rounded-[20px]">
                <a href="#home" className="hover:text-[white] hover:underline ">
                  <AiFillHome size={24} className="" /> Home
                </a>
                <a
                  href="#services"
                  className="hover:text-[white] hover:underline "
                >
                  <MdMiscellaneousServices size={24} className=" " /> Services
                </a>
                <a
                  href="#clients"
                  className="hover:text-[white] hover:underline"
                >
                  <FaHandshake size={24} className="" /> Clients
                </a>
                <a href="#" className="hover:text-[white] hover:underline">
                  <FaStar size={24} className="" />
                  Reviews
                </a>
                <a href="#" className="hover:text-[white] hover:underline">
                  <FaUsers size={24} className="" />
                  Our Team
                </a>
                <a href="#" className="hover:text-[white] hover:underline">
                  <MdContactPhone size={24} className="" />
                  Get in touch
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="font-semibold text-white hover:text-[green]"
                >
                  Log In
                </a>
                <button className="m-2 border border-[#f9bebe] rounded-[10px] p-2 bg-gradient-to-r from-[blue] via-[#cd06cd] to-[#d3d3f4] font-light">
                  Sign Up for free
                </button>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex ">
              <div className="top-50  absolute mb-50 left-50 max-w-4xl justify-center items-center flex flex-col">
                <h1 className="text-6xl font-bold leading-tight text-center font-serif">
                  <span className="">@GambiGeeks.</span> The only tech Art you
                  ever need. <br />
                  <span className="bg-gradient-to-r from-[white] to-[blue] text-transparent bg-clip-text text-[40px]">
                    {typedText}&nbsp;
                  </span>
                  <span className="animate-blink font-light text-[40px]">
                    |
                  </span>
                </h1>
                <p className="mt-4 text-lg md:text-xl font-light text-center">
                  Empowering Inovation. Join us now, sky rocket your Tech
                  abilities.
                  <br /> Engineering your dreams
                </p>
                <button className="mt-8 px-6 py-2 border border-white hover:bg-white hover:text-black transition rounded">
                  Explor Now
                </button>
              </div>

              <div className="absolute top-50 right-24 flex flex-col ">
                <h1 className="absolute right-15 w-40 font-extrabold ">
                  Quick Acess
                </h1>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-15 top-10 hover:scale-120 hover:shadow-[0_0_50px_blue] duration-100 ">
                  Terms & Conditions
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute hover:scale-120 right-10 top-20 hover:shadow-[0_0_50px_blue] ">
                  Pricing
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-5 top-30 hover:scale-120 hover:shadow-[0_0_50px_blue]  duration-100">
                  Contact Sales
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-0 top-40 hover:scale-120 hover:shadow-[0_0_50px_blue]  duration-100">
                  Consultants & Agencis
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-5 top-50 hover:scale-120 hover:shadow-[0_0_50px_blue]  duration-100">
                  Connect with us
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-10 top-60 hover:scale-120 hover:shadow-[0_0_50px_blue]  duration-100">
                  Support us
                </button>

                <button className="border-[blue] border rounded-[20px] p-1 w-50 shadow-[0_4px_10px_blue] absolute right-15 top-70 hover:scale-120 hover:shadow-[0_0_50px_blue]  duration-100">
                  Reviews
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen text-6xl text-white justify-center items-center flex">
          Just Continue dude
        </div>

        <div className="h-screen text-6xl text-white justify-center items-center flex">
          Just Continue dude
        </div>
        <div className="h-screen text-6xl text-white justify-center items-center flex">
          Just Continue dude
        </div>

        <div className="h-screen items-center justify-center flex bg-black">
          <div>
            <video
              className="h-[500px] rounded-[20px]"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle, white 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle, white 60%, transparent 100%)",
              }}
              controls
              autoPlay
              muted
              loop
            >
              <source
                src="src/assets/_storage_emulated_0_Android_data_com.fawazapp.blackhole_files_DCIM_blackhole_BZPPKPZ4YIWZSN4ADHMF.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* the second option */}
      </section>
    </>
  );
};

export default Home;
