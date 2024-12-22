import React from "react";

export const Navbar: React.FC = () => {
    const navbarlinkStyle = `text-primary text-md md:text-xl pl-2 pr-2 md:pl-4 md:pr-4 pt-1 pb-1 md:pt-2 md:pb-2 
                        rounded-full hover:bg-[#76ABAE] hover:text-[#EEEEEE] 
                        transition-colors duration-300`;

    // Function to handle smooth scrolling
    const handleScroll = (id: string) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="fixed w-screen secondary z-50">
            <nav className="flex justify-center font-titillium font-bold bg-transparent px-6 pt-3">
                <ul className="flex mt-3 gap-4">
                    <li>
                        <button
                            className={navbarlinkStyle}
                            onClick={() => handleScroll("aboutme")}
                        >
                            About me
                        </button>
                    </li>
                    <li>
                        <button
                            className={navbarlinkStyle}
                            onClick={() => handleScroll("experiences")}
                        >
                            Experience
                        </button>
                    </li>
                    <li>
                        <button
                            className={navbarlinkStyle}
                            onClick={() => handleScroll("projects")}
                        >
                            Projects
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
