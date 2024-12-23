import React from "react";
import { motion } from "framer-motion";
import myself from "../../../public/images/myself/myself.png"

export const PageBanner: React.FC = ()=> {
    return(
        <>
        <header className="banner w-screen min-h-screen flex flex-wrap flex-col justify-center items-center text-primary secondary font-titillium z-10 relative">
            <div className="flex flex-col md:flex-row flex-wrap w-2/3 justify-evenly items-center gap-16">
                <div className="flex flex-col items-start">
                    <h4 className="text-primary text-sm md:text-md lg:text-lg pl-2 pr-2 md:pl-4 md:pr-4 pt-1  pb-1 md:pt-2 md:pb-2 rounded-t-xl rounded-r-xl primary w-max">
                        Hello, I'm
                    </h4>
                    <div className="flex item-start">
                        <motion.span 
                            className="absolute mx-auto flex border w-fit bg-[#76ABAE] blur-md bg-clip-text text-lg md:text-4xl lg:text-5xl box-content font-bold text-transparent text-center select-none"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                        >
                            Sirawit Arsanok
                        </motion.span>
                        <motion.h1
                            className="relative top-0 justify-center flex bg-[#76ABAE] bg-clip-text text-lg md:text-4xl lg:text-5xl font-bold text-transparent text-center select-auto"
                        >
                            Sirawit Arsanok
                        </motion.h1>
                    </div>
                    <h3 className="text-xs md:text-sm lg:text-md">Intership Computer engineering KMUTT</h3>
                </div>
                <div>
                        <div className="relative rounded-full top-0">
                            <motion.img
                                src={myself}
                                className="object-cover rounded-full w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 2,
                                  delay: 0.5,
                                  ease: [0, 0.71, 0.2, 1.01]
                                }}
                            />
                        </div>
                </div>
            </div>
        </header>
        </>
    );
}