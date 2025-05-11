"use client";


import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { motion, useInView, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { cn } from "@/lib/utils";
export default function Home() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: '0px 0px -100px 0px' });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: '0px 0px -100px 0px' });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true, margin: '0px 0px -100px 0px' });


  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true, margin: '0px 0px -100px 0px' });

  const ref5 = useRef(null);
  const isInView5 = useInView(ref5, { once: true, margin: '0px 0px -100px 0px' });

  const ref6 = useRef(null);
  const isInView6 = useInView(ref6, { once: true, margin: '0px 0px -100px 0px' });

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="lg:pt-32 pt-24">
      <main className="">
        <MaxWidthWrapper className="flex flex-col h-[80%] w-full overflow-hidden">
          <h1 className="font-serif-custom font-extralight italic lg:text-6xl md:text-5xl text-3xl">
            {"Your Real Estate Partner"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block">
                  {word}
                </motion.span>
              ))}
          </h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.7,
            }}
            className="relative h-full overflow-hidden "
          >
            <img
              className="w-screen md:h-[42rem] h-[38rem] slow-zoom brightness-75 cursor-pointer"
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg/:/rs=w:1350,m"
              alt=""
            />
            <div className="absolute inset-0  flex items-center justify-start">
              <div className="w-full">
                <p className="font-sans-custom  xl:text-8xl lg:text-7xl  sm:text-6xl text-[2rem] text-white text-left lg:leading-none leading-tight break-words line-clamp-3 w-[16ch]">
                  MARCI METZGER - THE RIDGE REALTY GROUP
                </p>
                <motion.h3
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                  className="w-full font-semibold font-cinzel bg-white text-2xl px-4 py-3"
                >
                  Pahrump Realtor
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="font-sans-custom mt-10">
          <motion.div
            ref={ref1}
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={isInView1 ? {
              opacity: 1,
              y: 0,
            } : {}}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            className="flex items-center md:flex-row flex-col justify-between gap-5">
            <p className="font-bold md:w-[50%]  text-[0.9rem] md:text-left text-center leading-5.5">
              Welcome to MARCI METZGER Homes, your dedicated commercial real estate agency.
              We specialize in providing expert services such as site selection,
              market analysis, and personalized deal structuring for businesses.
              Let us tailor real estate solutions to meet your unique requirements</p>
            <Link
              href="tel:+1234567890"
              className="border border-black font-extrabold py-3 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors duration-400"
            >
              Call Now
            </Link>

          </motion.div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className="h-fit lg:mt-32 mt-24 w-screen bg-[#edebeb] ">
          <div className=" py-12">
            <h1 className="font-serif-custom font-extralight italic lg:text-6xl md:text-5xl text-3xl">
              {"Get It Sold"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    ref={ref2}
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={isInView2 ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block">
                    {word}
                  </motion.span>
                ))}
            </h1>
            <Carousel items={cards} />
          </div>

        </MaxWidthWrapper>
        <MaxWidthWrapper className="h-fit lg:mt-32 mt-24 w-screen ">
          <div className="pb-10">
            <h1 className="font-serif-custom font-extralight italic lg:text-6xl md:text-5xl text-3xl">
              {"Services"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    ref={ref3}
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={isInView3 ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block">
                    {word}
                  </motion.span>
                ))}
            </h1>
            <div className="py-10 border-b-2 border-black flex flex-row md:space-x-20 space-x-12 lg:text-xl md:text-lg text-sm font-semibold font-sans-custom ">
              <h4 className="lg:text-4xl md:text-2xl  w-96 text-lg">Our Offerings</h4>
              <p className="md:w-[50%] break ">At MARCI METZGER Homes, we offer a comprehensive range of services
                to meet your commercial real estate needs. From precise site
                selection to in-depth market analysis and strategic deal
                structuring, we are here to support your business growth</p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col  items-center  lg:space-x-20  md:space-x-24 space-x-0 space-y-5 ">
            <div className="flex flex-col items-center space-y-2">
              <img
                className="h-96 min-w-96   "
                src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true" alt="" />
              <p className="font-cinzel lg:text-2xl text-lg font-semibold">MARCI METZGER</p>
              <p className="font-sanz-custom lg:text-xl text-base font-semibold">REALTOR FOR NEARLY 3 DECADES!</p>
              <p className="font-sanz-custom lg:text-xl text-base font-semibold">206-919-6886</p>
            </div>
            <div className="w-full py-4">
              <StickyScroll content={content} />
            </div>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="h-fit lg:mt-32 mt-24 w-screen bg-[#edebeb]">
          <div className="py-12">
            <h1 className="font-serif-custom font-extralight italic lg:text-6xl md:text-5xl text-3xl">
              {"Gallery"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    ref={ref4}
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={isInView4 ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </h1>
            <QuiltedImageList items={cardsGrid} />
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className=" py-16 bg-white w-screen ">
          <ImageRow />
        </MaxWidthWrapper>
        <MaxWidthWrapper className="h-fit lg:mt-32 mt-24 w-screen ">
          <div className="pb-12">
            <h1 className="font-serif-custom font-extralight text-center italic lg:text-6xl md:text-5xl text-3xl">
              {"Find Your Dream Home"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    ref={ref5}
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={isInView5 ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block">
                    {word}
                  </motion.span>
                ))}
            </h1>
            <ListingSearchForm />
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="h-fit lg:mt-32 mt-24 w-screen bg-[#edebeb]">
          <h1 className="pt-12 font-serif-custom font-extralight text-center italic lg:text-6xl md:text-5xl text-3xl">
            {"Call or Visit"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  ref={ref6}
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={isInView6 ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block">
                  {word}
                </motion.span>
              ))}
          </h1>
          <ContactSection />
        </MaxWidthWrapper>
        <MaxWidthWrapper className=" pt-16 bg-white w-screen ">
          <FooterMap />
        </MaxWidthWrapper>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div >
  );
}



const DummyContent = ({ description, imageSrc }) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {description}
            </p>
            {imageSrc && (
              <img
                src={imageSrc}
                alt="Visual content"
                className="w-full max-w-2xl mx-auto object-contain mt-6"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Real Estate Performance",
    title: "Top Residential Sales Last 5 Years",
    src: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11…",
    content: (
      <DummyContent
        description={`We helped nearly 90 clients in 2021, and closed 28.5 million in sales!
          Our team works hard everyday to grow and learn, so that we may continue
          to excel in our market. Our clients deserve our best, & we want to make
          sure our best is better every year.`}
        imageSrc="https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11…"
      />
    ),
  },
  {
    category: "Marketing Strategy",
    title: "Enhance your productivity.",
    src: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600",
    content: (
      <DummyContent
        description={`Get it SOLD! We exhaust every avenue to ensure our 
          listings are at the fingertips of every possible buyer, getting you top dollar for your home.`}
        imageSrc="https://img1.wsimg.com/isteam/stock/107927/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
      />
    ),
  },
  {
    category: "Home Buying Support",
    title: "Guide to Buyers",
    src: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.3…",
    content: (
      <DummyContent
        description={`Nobody knows the market like we do. Enjoy having a pro at your
         service. Market analysis, upgrades lists, contractors on speed dial, & more!`}
        imageSrc="https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.3…"
      />
    ),
  },
];


const content = [
  {
    title: "Real Estate Done Right",
    description:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://img1.wsimg.com/isteam/stock/12792/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
          width={500}
          height={500}
          className="h-full w-full object-cover md:block hidden"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Commercial & Residential",
    description:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://img1.wsimg.com/isteam/stock/43920/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
          width={500}
          height={500}
          className="h-full w-full object-cover md:block hidden"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Rely on Expertise",
    description:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:730,h:730,cg:true,m/cr=w:730,h:730"
          width={500}
          height={500}
          className="h-full w-full object-cover md:block hidden"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

const QuiltedImageList = ({ items }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full p-4">
      {/* Grid of images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={cn(
              "relative overflow-hidden  cursor-pointer",
              selected?.id === item.id ? "z-50" : "z-0",
              item.className
            )}
            layoutId={`card-${item.id}`} // wrapper needs same layoutId as fullscreen version
            onClick={() => setSelected(item)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <motion.img
              src={item.thumbnail}
              alt={`Gallery image ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              layoutId={`image-${item.id}`} // image layoutId
            />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            {/* Match layoutId to thumbnail wrapper */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="relative bg-white max-w-5xl w-[90%] h-[90%] overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={selected.thumbnail}
                alt={`Full view of image ${selected.id}`}
                className="w-full h-[90%] object-fit"
                layoutId={`image-${selected.id}`}
              />

              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white bg-black/60 rounded-full px-3 py-1 text-xl font-bold hover:bg-black transition"
              >
                ✕
              </button>

              {/* Optional: description */}
              <div className="p-6">
                <p className="text-xl font-semibold">{selected.title}</p>
                {selected.description && (
                  <p className="text-sm mt-2 text-neutral-700">{selected.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const cardsGrid = [
  {
    id: 1,
    className: "md:col-span-2 row-span-2", // Spans 2 columns and 2 rows
    thumbnail: "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/",
    title: "Unlimited Options",
  },
  {
    id: 2,
    className: "col-span-1 row-span-1",
    thumbnail: "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25",
    title: "Spacious living area with natural lighting"
  },
  {
    id: 3,
    className: "col-span-1 row-span-1",
    thumbnail: "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:1023,h:681",
    title: "Great Neighborhood"
  },
];


const ImageRow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const images = [
    "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png/:/rs=h:100,cg:true,m",
    "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
    "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=h:100,cg:true",
    "//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg/:/rs=h:100,cg:true,m",
  ];

  return (
    <div className="">
      <div
        ref={ref}
        className="flex flex-wrap justify-evenly items-center gap-8  px-4"
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Logo ${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            className="h-24 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};


const ListingSearchForm = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-md shadow-2xl  px-8 py-10 md:px-12 max-w-7xl mx-auto mt-12"
    >
      <h2 className="text-4xl font-serif text-[#4B2E2E] mb-10 tracking-tight">
        Search Listings
      </h2>

      <form className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="text-sm text-gray-700 mb-1 block">Location</label>
          <select className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]">
            <option>Any</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-700 mb-1 block">Type</label>
          <select className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]">
            <option>Any</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-700 mb-1 block">Sort By</label>
          <select className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Bedrooms</label>
            <select className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1 block">Baths</label>
            <select className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]">
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-700 mb-1 block">Min Price</label>
            <input
              type="number"
              placeholder="$0"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 mb-1 block">Max Price</label>
            <input
              type="number"
              placeholder="$1,000,000"
              className="w-full border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4B2E2E]"
            />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-end mt-6">
          <button
            type="submit"
            className="border border-black font-semibold py-3 px-8 hover:bg-black hover:text-white cursor-pointer transition-colors duration-400"
          >
            Search Now
          </button>
        </div>
      </form>
    </motion.section>
  );
};


function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="font-sans-custom max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Form Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-gray-800">Send Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border bg-white border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="w-full border bg-white border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border bg-white border-gray-300 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full cursor-pointer bg-[#333333]  hover:bg-[#4e4d4d] text-white font-semibold py-3 rounded-sm transition duration-300"
          >
            SEND
          </button>
        </form>
        <p className="text-xs text-gray-500">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-6 text-gray-800"
      >
        <a
          href="https://wa.me/12069196886"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#333333] text-white rounded-sm hover:bg-[#4e4d4d] transition"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.01 2.99c-7.13 0-12.91 5.78-12.91 12.91 0 2.29.6 4.52 1.75 6.49L2 30l7.87-2.76a12.93 12.93 0 006.13 1.56h.01c7.13 0 12.91-5.78 12.91-12.91S23.14 2.99 16.01 2.99zm0 23.66h-.01a11.17 11.17 0 01-5.69-1.55l-.41-.24-4.67 1.63 1.57-4.55-.27-.47a11.16 11.16 0 01-1.63-5.79c0-6.19 5.03-11.22 11.22-11.22 6.19 0 11.22 5.03 11.22 11.22s-5.03 11.22-11.22 11.22zm6.2-8.52c-.34-.17-2.02-1-2.34-1.12s-.54-.17-.77.17c-.23.34-.88 1.12-1.08 1.35s-.4.26-.74.09-1.44-.53-2.75-1.7c-1.02-.91-1.71-2.03-1.91-2.38-.2-.34-.02-.52.15-.69.16-.16.34-.4.51-.6.17-.2.23-.34.34-.57s.06-.43-.03-.6c-.09-.17-.77-1.85-1.05-2.53-.28-.68-.56-.59-.77-.6l-.66-.01c-.23 0-.6.09-.91.43s-1.19 1.16-1.19 2.82 1.22 3.27 1.39 3.49c.17.23 2.4 3.67 5.81 5.15.81.35 1.44.56 1.93.72.81.26 1.55.22 2.13.14.65-.1 2.02-.82 2.3-1.61.28-.8.28-1.48.2-1.61-.08-.14-.3-.22-.63-.4z" />
          </svg>
          Message us on WhatsApp
        </a>

        <div>
          <p className="font-semibold text-lg">Marci Metzger - THE RIDGE REALTY GROUP</p>
          <p className="text-sm">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
          <p className="text-sm text-blue-600 mt-1">(206) 919-6886</p>
        </div>

        <div>
          <p className="font-semibold text-lg">Office Hours</p>
          <p className="text-sm">
            <span className="text-green-600 font-medium">Open today</span>{" "}
            08:00 am – 07:00 pm
          </p>
          <p className="text-sm">Open daily: 8:00 am – 7:00 pm</p>
          <p className="text-sm mt-1 text-gray-600">
            Appointments outside office hours available upon request. Just call!
          </p>
        </div>
      </motion.div>
    </div>
  );
}


function FooterMap() {
  return (
    <div className="w-full">

      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=3190+HW-160,+Pahrump,+Nevada"
        />
      </div>


      <footer className="w-screen bg-black text-white py-10 px-6 text-center relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg className="w-5 h-5 hover:fill-blue-500 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>

          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-5 h-5 hover:fill-pink-500 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.6.5.3.9.7 1.3 1.3.3.5.5 1.2.6 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.6 2.4a3.7 3.7 0 01-1.3 1.3c-.5.3-1.2.5-2.4.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.4-.6a3.7 3.7 0 01-1.3-1.3c-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.6-2.4a3.7 3.7 0 011.3-1.3c.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2 .4-.5.2-.9.5-1.2.9-.3.4-.5.9-.6 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2 .2.5.5.9.9 1.2.4.3.9.5 2 .6 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2-.4.5-.2.9-.5 1.2-.9.3-.4.5-.9.6-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2a2.4 2.4 0 00-.9-1.2c-.4-.3-.9-.5-2-.6-1.2-.1-1.6-.1-4.7-.1zM12 6.4a5.6 5.6 0 100 11.2 5.6 5.6 0 000-11.2zm0 9.3a3.7 3.7 0 110-7.4 3.7 3.7 0 010 7.4zm4.6-9.6a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6z" />
            </svg>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-5 h-5 hover:fill-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5A2.5 2.5 0 002.5 6c0 1.38 1.12 2.5 2.48 2.5h.02A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM9 9h3.6v1.71h.05c.5-.95 1.7-1.95 3.5-1.95 3.74 0 4.43 2.45 4.43 5.64V21h-4v-5.6c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.94V21H9z" />
            </svg>
          </a>
        </div>

        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Marci Metzger Homes – All rights reserved
        </p>
        <p className="text-xs text-gray-400">Powered by GoDaddy Airo</p>
      </footer>
    </div>
  );
}
