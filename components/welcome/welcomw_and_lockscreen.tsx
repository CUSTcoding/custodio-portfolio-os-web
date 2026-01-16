
"use client";

import Background from "../background/background";
import Clock from "../Clock";
import LanguageButton from "../language/languageButton";
import Translate from "../language/translate";
import Image from "next/image";
import React from "react";


export default function Welcome_and_Lockscreen(){
    type MenuItem= {
        label: string;
        link: string;
        pathImg: string;
    }

    const menuItems: MenuItem[] = [
        {
            label: "Fullstack",
            link: "/fullstack",
            pathImg: "/assets/img/full-stack.jpeg",
        },
       {
            label: "DevOps",
            link: "/devops",
            pathImg: "/assets/img/devops.jpeg",
        },
        {
            label: "Bitcoin Developer",
            link: "/bitcoin-developer",
            pathImg: "/assets/img/bitcoin.jpeg",
        },
        {
            label: "Data Scientist",
            link: "/data-scientist",
            pathImg: "/assets/img/data-scientist.jpeg",
        },
    ];

    return(<>
            <div className="absolute w-full h-full overflow-hidden -z-1">
                <div className="realtive ">
                    <Background/>
                </div>
            </div>

            <div className="w-[100vw] h-[100vh] z-50 relative bg-[#121212]/70 flex items-center flex-col justify-center gap-2 ">

            
            

            <div className="absolute top-3 right-4 flex ">
                <LanguageButton/>
            </div>

            <Clock/>
            <span className="my-2"></span>

            <h2 className="text-white text-center text-3xl font-bold md:text-5xl xl:text-7xl my-1">
                <Translate id="welcome"/>
            </h2>
            <h5 className="text-2xl w-[90%] text-center font-normal  md:font-semibold md:text-2xl">
                <Translate id="intro"/>
            </h5>

  
            <span className="my-2"></span>
            <p className="text-white text-2xl"><Translate id="escolhe"/></p>
            <span className="my-1"></span>
            <div className="flex justify-center gap-5">
                {menuItems.slice(0, 2).map((item) => (
                <a
                    key={item.label}
                    href={item.link}
                    className="flex flex-col items-center text-white hover:text-[#00ffcc] transition-colors hover:font-semibold"
                >
                    <div className="rounded-full">
                    <Image
                        src={item.pathImg}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="rounded-full mb-2 object-cover"
                    />
                    </div>
                    <span className="text-lg text-center font-semibold">
                    {item.label.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                        {word}
                        <br />
                        </React.Fragment>
                    ))}
                    </span>
                </a>
                ))}
            </div>

            <div className="flex justify-center gap-5">
                {menuItems.slice(2, 4).map((item) => (
                <a
                    key={item.label}
                    href={item.link}
                    className="flex flex-col items-center text-white hover:text-[#00ffcc] transition-colors hover:font-semibold"
                >
                    <div className="rounded-full">
                    <Image
                        src={item.pathImg}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="rounded-full mb-2 object-cover"
                    />
                    </div>
                    <span className="text-lg text-center font-semibold">
                    {item.label.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                        {word}
                        <br />
                        </React.Fragment>
                    ))}
                    </span>
                </a>
                ))}
            </div>

        </div>
    </>
        


            


    );
}
