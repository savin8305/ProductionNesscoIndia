"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import DecorativeImg1 from "../../../public/assets/OurExpertise/DecorativeImg1.svg";
import DecorativeImg2 from "../../../public/assets/OurExpertise/DecorativeImg2.svg";
import BackgroundSvg from "../../../public/assets/OurExpertise/BackgroundSvg.svg";
import { HomeData } from "./types/constant";

interface KnowMoreLayoutProps {
  heroData: HomeData;
}

export default function Component({ heroData }: KnowMoreLayoutProps) {
  const knowMoreData = heroData?.home[6]?.data?.knowmore;
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 3000); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative container mx-auto py-8 px-4 lg:px-14 mb-20 sm:mb-32 md:mb-44">
      <Image
        alt="Decorative Image"
        src={DecorativeImg1}
        className="w-24 sm:w-32 md:w-40 absolute top-20 right-0"
      />
      <Image
        alt="Decorative Image"
        src={DecorativeImg2}
        className="w-24 sm:w-32 md:w-40 absolute -bottom-24 sm:-bottom-32 md:-bottom-48 left-4 sm:left-8 md:left-12"
      />
      <Image
        alt="Decorative Image"
        src={BackgroundSvg}
        className="w-full scale-80 opacity-10 absolute top-10 left-0 right-0"
      />
      <div className="mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-[#483d73]">
          Our Expertise
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 md:gap-8 relative">
        {knowMoreData.map((item, index) => (
          <div
            key={index}
            className={`group relative transition-transform duration-500 ease-in-out ${
              isScrolled && index % 2 !== 0
                ? "translate-y-10 sm:translate-y-20"
                : ""
            }`}
          >
            {index % 2 !== 0 && (
              <div className="group-hover:shadow-2xl  w-full max-w-[300px] mx-auto bg-white p-2 rounded-[1.2rem] shadow-lg transition-all duration-300 mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm ml-4 w-[12.5rem]">{item.title}</h3>
                  {item.description.split(" ").length > 20 && (
                    <Dialog
                    
                      open={openModal === index}
                      onOpenChange={(isOpen) =>
                        setOpenModal(isOpen ? index : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <svg
                          className="h-10 w-10 bg-black p-1.5 rounded-full text-white transform transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:bg-[#483d73]"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent className="bg-green-300 z-[99999]">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            )}
            <Card
              className={`group-hover:shadow-2xl  transition-all duration-300 bg-white rounded-3xl shadow-md w-full max-w-[300px] h-[320px] mx-auto relative`}
            >
              <CardContent className="p-3 h-full">
                {index % 2 === 0 ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-36 object-cover rounded-2xl"
                    />
                    <div className="p-1">
                      <p className="text-sm text-gray-600 line-clamp-6">
                        {item.description}
                      </p>
                      {item.description.split(" ").length > 20 && (
                        <Dialog
                          open={openModal === index}
                          onOpenChange={(isOpen) =>
                            setOpenModal(isOpen ? index : null)
                          }
                        >
                          <DialogTrigger asChild>
                            <Button
                              variant="link"
                              className="mt-1 p-0 h-auto hover:text-[#483d73]"
                            >
                              Read More
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-white">
                            <DialogHeader>
                              <DialogTitle>{item.title}</DialogTitle>
                            </DialogHeader>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </DialogContent>
                        </Dialog>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-sm  text-gray-600  line-clamp-6">
                      {item.description}
                    </p>
                    {item.description.split(" ").length > 40 && (
                      <Dialog
                        open={openModal === index}
                        onOpenChange={(isOpen) =>
                          setOpenModal(isOpen ? index : null)
                        }
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="mt-1 p-0 h-auto hover:text-[#483d73]"
                          >
                            Read More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white">
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                          </DialogHeader>
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        </DialogContent>
                      </Dialog>
                    )}
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-36 object-cover rounded-2xl mt-2"
                    />
                  </>
                )}
              </CardContent>
            </Card>
            {index % 2 === 0 && (
              <div className="mt-4 group-hover:shadow-2xl w-full max-w-[300px] mx-auto text-black rounded-[1.2rem] shadow-lg">
                <div className="flex items-center justify-between p-2 bg-white rounded-[1.2rem] shadow-2xl">
                  <h3 className="text-sm w-[12.5rem] ml-4">{item.title}</h3>
                  {item.description.split(" ").length > 40 && (
                    <Dialog
                      open={openModal === index}
                      onOpenChange={(isOpen) =>
                        setOpenModal(isOpen ? index : null)
                      }
                    >
                      <DialogTrigger asChild>
                        <svg
                          className="h-10 w-10 bg-black p-1.5 rounded-full text-white transform transition-transform duration-300 ease-in-out group-hover:rotate-45 group-hover:bg-[#483d73]"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </DialogTrigger>
                      <DialogContent className="bg-white">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
