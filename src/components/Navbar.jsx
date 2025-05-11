"use client"

import { useEffect, useState } from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Menu,
    ArrowLeft
} from 'lucide-react';
import Link from "next/link";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScroll && currentScrollY > 10) {
                setShowNavbar(false);
            } else if (currentScrollY < lastScroll) {
                setShowNavbar(true);
            }
            setLastScroll(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll])

    const closeSheet = () => {
        if (sheetRef.current) {
            sheetRef.current.close();
        }
    };

    return (
        <nav
            className={`w-full fixed bg-[#F4F3F2] dark:bg-[#0a0a0a] indent-0 z-50 pt-4 flex items-center   text-primary  
            ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'} 
            transition-all duration-700 ease-out`}
        >
            <MaxWidthWrapper className='w-full flex flex-row items-center justify-between '>
                <img
                    className=" h-12"
                    src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"></img>
                <Sheet >
                    <SheetTrigger className="cursor-pointer hover:bg-gray-200 py-2 px-2 rounded-full transition-colors duration-400"><Menu /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle> <img
                                className=" h-16"
                                src="//img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95"></img>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col text-lg font-sans-custom ">
                            <Link
                                className="group px-4 pr-8 py-2 flex flex-row items-center justify-between bg-transparent hover:bg-gray-100 transition-all duration-300"
                                href="/"
                                onClick={closeSheet}
                            >
                                Listings
                                <span className="group-hover:block hidden transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce-x">
                                    <ArrowLeft />
                                </span>
                            </Link>
                              <Link
                                className="group px-4 pr-8 py-2 flex flex-row items-center justify-between bg-transparent hover:bg-gray-100 transition-all duration-300"
                                href="/"
                                onClick={closeSheet}
                            >
                                Let's move
                                <span className="group-hover:block hidden transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce-x">
                                    <ArrowLeft />
                                </span>
                            </Link>
                              <Link
                                className="group px-4 pr-8 py-2 flex flex-row items-center justify-between bg-transparent hover:bg-gray-100 transition-all duration-300"
                                href="/"
                                onClick={closeSheet}
                            >
                                Services
                                <span className="group-hover:block hidden transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce-x">
                                    <ArrowLeft />
                                </span>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>

            </MaxWidthWrapper>
        </nav>

    )
}

export default Navbar