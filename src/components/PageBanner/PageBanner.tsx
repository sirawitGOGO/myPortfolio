import React from "react";
import { motion } from "framer-motion";

export const PageBanner: React.FC = ()=> {
    return(
        <>
        <header className="banner w-screen h-screen flex flex-wrap flex-col justify-center items-center text-primary secondary font-titillium z-10 relative">
            <div className="flex flex-row flex-wrap w-2/3 justify-evenly items-center gap-16 lg:gap-56">
                <div className="flex flex-col items-start">
                    <h4 className="text-primary text-md md:text-xl pl-2 pr-2 md:pl-4 md:pr-4 pt-1  pb-1 md:pt-2 md:pb-2 rounded-t-xl rounded-r-xl primary w-max">
                        Hello, I'm
                    </h4>
                    <div className="flex item-start">
                        <motion.span 
                            className="absolute mx-auto flex border w-fit bg-[#76ABAE] blur-md bg-clip-text text-xl md:text-6xl box-content font-bold text-transparent text-center select-none"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.08, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
                        >
                            Sirawit Arsanok
                        </motion.span>
                        <motion.h1
                            className="relative top-0 justify-center flex bg-[#76ABAE] bg-clip-text text-xl md:text-6xl font-bold text-transparent text-center select-auto"
                        >
                            Sirawit Arsanok
                        </motion.h1>
                    </div>
                    <h3 className="text-sm md:text-lg">Intership Computer engineering KMUTT</h3>
                </div>
                <div>
                    <div className="absolute rounded-full bg-center blur-md border-8">
                        <motion.img 
                            src="public\images\IMG_7882_crop.JPG" 
                            className="object-cover rounded-full w-48 h-48 md:w-96 md:h-96"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                        >
                        </motion.img>
                    </div>
                    <div className="relative rounded-full top-0 bg-center">
                        <motion.img 
                            src="public\images\IMG_7882_crop.JPG" 
                            className="object-cover rounded-full w-48 h-48 md:w-96 md:h-96"
                            initial={{ scale: 1 }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                        >
                        </motion.img>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}