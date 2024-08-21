"use client";

import Image from "next/image";
import Header from "./Header";
import Card from "../ui/Card";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="flex flex-col overflow-x-hidden  items-center justify-center ">
      <Header />
      <div className="relative flex flex-col items-center justify-center ">
        <svg
          fill="none"
          height="500"
          width="500"
          viewBox="0 0 1014 1014"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[300px] h-[300px] md:w-full md:h-full"
        >
          <motion.circle
            class="animate-appear"
            cx="506.5"
            cy="506.5"
            r="140.75"
            stroke="url(#paint0_linear_1601_1334)"
            stroke-width="1.5"
          ></motion.circle>
          <motion.circle
            class="animate-[appear_0.6s_ease-in-out]"
            cx="506.5"
            cy="506.5"
            r="231.75"
            stroke="url(#paint1_linear_1601_1334)"
            stroke-width="1.5"
          ></motion.circle>
          <motion.circle
            class="animate-[appear_0.8s_ease-in-out]"
            cx="506.5"
            cy="506.5"
            r="377.75"
            stroke="url(#paint2_linear_1601_1334)"
            stroke-width="1.5"
          ></motion.circle>
          <motion.circle
            class="animate-[appear_1s_ease-in-out]"
            cx="507"
            cy="507"
            r="506.25"
            stroke="url(#paint3_linear_1601_1334)"
            stroke-width="1.5"
          ></motion.circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="659.5"
            cy="332.5"
            fill="black"
            r="11.5"
          ></circle>
          <motion.circle
            class="animate-[appear_1s_ease]"
            cx="659.5"
            cy="332.5"
            r="10.75"
            stroke="#fff"
            stroke-opacity="0.6"
            stroke-width="1.5"
          ></motion.circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="285.5"
            cy="200.5"
            fill="black"
            r="11.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="285.5"
            cy="200.5"
            r="10.75"
            stroke="#fff"
            stroke-opacity="0.6"
            stroke-width="1.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="129.5"
            cy="526.5"
            fill="black"
            r="11.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="129.5"
            cy="526.5"
            r="10.75"
            stroke="#fff"
            stroke-opacity="0.6"
            stroke-width="1.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="882.5"
            cy="549.5"
            fill="black"
            r="11.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="882.5"
            cy="549.5"
            r="10.75"
            stroke="#fff"
            stroke-opacity="0.6"
            stroke-width="1.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="408.5"
            cy="407.5"
            fill="black"
            r="11.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="408.5"
            cy="407.5"
            r="10.75"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="1.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="670.5"
            cy="165.5"
            fill="black"
            r="11.5"
          ></circle>
          <circle
            class="animate-[appear_1s_ease]"
            cx="670.5"
            cy="165.5"
            r="10.75"
            stroke="white"
            stroke-opacity="0.4"
            stroke-width="1.5"
          ></circle>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1601_1334"
              x1="506.5"
              x2="506.5"
              y1="365"
              y2="630"
            >
              <stop stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1601_1334"
              x1="506.5"
              x2="506.5"
              y1="274"
              y2="739"
            >
              <stop stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint2_linear_1601_1334"
              x1="506.5"
              x2="506.5"
              y1="128"
              y2="847.5"
            >
              <stop stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint3_linear_1601_1334"
              x1="507"
              x2="515.5"
              y1="-2.5332e-7"
              y2="1014"
            >
              <stop stop-color="white" stop-opacity="0.4"></stop>
              <stop offset="1" stop-color="white" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute flex flex-col justify-center items-center p-10 top-30 mt-20">
          <div className="relative p-6">
            <div className="w-20 -z-10 h-20 bg-white/20 blur-3xl absolute right-0 top-0"></div>
            <div className="w-20 -z-10 h-20 bg-white/20 blur-3xl absolute left-0 bottom-0"></div>
            <Image
              src={"/logo.svg"}
              alt="logo"
              className="z-10"
              width={100}
              height={100}
            ></Image>
          </div>
          <h1 class="mt-4 text-center text-nowrap  text-3xl font-extrabold text-black dark:text-white md:text-5xl">
            My Figma Designs
          </h1>
          <p class="mt-2 text-center text-lg flex md:flex text-white/50 font-medium">
            The power of Figma for banner design.
          </p>
        </div>

        
      </div>
     
      <div className="mt-10">
        <Button
        padding={"px-4 py-4"}
          sizeX={4}
          sizeY={4}
          onClick={openModal}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#fff"
              fill="none"
            >
              <path
                d="M21.0477 3.05293C18.8697 0.707363 2.48648 6.4532 2.50001 8.551C2.51535 10.9299 8.89809 11.6617 10.6672 12.1581C11.7311 12.4565 12.016 12.7625 12.2613 13.8781C13.3723 18.9305 13.9301 21.4435 15.2014 21.4996C17.2278 21.5892 23.1733 5.342 21.0477 3.05293Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M11.5 12.5L15 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        >
          Contact me
        </Button>
        <Modal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
       <Card />
    </main>
  );
}
