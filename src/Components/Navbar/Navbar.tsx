// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";

// type NavItem = {
//     label: string;
//     link?: string;
//     children?: NavItem[];
//     icon?: React.ReactNode;
// };

// const navItems: NavItem[] = [
//     {
//         label: "HOME",
//         link: "/",
//     },
//     {
//         label: "SERVICES",
//         link: "#",
//         children: [
//             {
//                 label: "History",
//                 link: "#",
//             },
//             {
//                 label: "Our Team",
//                 link: "#",
//             },
//             {
//                 label: "Blog",
//                 link: "#",
//             },
//         ], 
//     },
//     {
//         label: "BLOG",
//         link: "#",
//         children: [
//             {
//                 label: "History",
//                 link: "#",
//             },
//             {
//                 label: "Our Team",
//                 link: "#",
//             },
//             {
//                 label: "Blog",
//                 link: "#",
//             },
//         ],
//     },
//     {
//         label: "ABOUT",
//         link: "/About",
//     },
//     {
//         label: "CONTACTS",
//         link: "#",
//     },
// ];

// export default function Navbar() {
//     const [isSideMenuOpen, setSideMenu] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);

//     const handleScroll = () => {
//         if (typeof window !== "undefined") {
//             setIsSticky(window.scrollY > 50);
//         }    
//     };

//     useEffect(() => {
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     function openSideMenu() {
//         setSideMenu(true);
//     }

//     function closeSideMenu() {
//         setSideMenu(false);
//     }


//     return (
//         <div>
//             <div className={`fixed left-0 ${`top-${window.scrollY}`} z-50 flex w-full justify-between px-4 py-5 text-sm bg-backgroundgray transition-all duration-1000 ${isSticky ? 'shadow-md top-0' : ''}`}>
//                 <section className="flex items-center gap-10">
//                     <div className="block md:hidden">
//                         logo thing
//                     </div>
//                     {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
//                     <div className="hidden md:flex items-center gap-4 transition-all">
//                         {navItems.map((d, i) => (
//                             <Link key={i} href={d.link ?? "#"} className="relative group px-6 py-2 transition duration-300 ease-in-out hover:bg-gray-100 text-[16px]">
//                                 <p className="flex cursor-pointer items-center gap-2 text-secondaryblack hover:text-primary font-semibold">
//                                     <span>{d.label}</span>
//                                     {d.children && (
//                                         <IoIosArrowDown className="rotate-180 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
//                                     )}
//                                 </p>
//                                 {d.children && (
//                                     <div className="absolute top-9 hidden w-auto flex-col gap-2 rounded-lg bg-white py-3 shadow-md transition-opacity duration-300 ease-in-out group-hover:flex opacity-0 group-hover:opacity-100">
//                                         {d.children.map((ch, i) => (
//                                             <Link
//                                                 key={i}
//                                                 href={ch.link ?? "#"}
//                                                 className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-primary transition duration-300 ease-in-out"
//                                             >
//                                                 {ch.icon}
//                                                 <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 )}
//                             </Link>
//                         ))}
//                     </div>
//                 </section>
//                 <FiMenu
//                     onClick={openSideMenu}
//                     className="cursor-pointer text-4xl md:hidden"
//                 />
//             </div>
//         </div>

//     );
// }

// function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
//     return (
//         <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
//             <div className="h-full w-[65%] bg-white px-4 py-4 transition-transform duration-300 ease-in-out transform translate-x-0">
//                 <section className="flex justify-end">
//                     <AiOutlineClose
//                         onClick={closeSideMenu}
//                         className="cursor-pointer text-4xl "
//                     />
//                 </section>
//                 <div className="flex flex-col text-base gap-2 transition-all">
//                     {navItems.map((d, i) => (
//                         <SingleNavItem
//                             key={i}
//                             label={d.label}
//                             icon={d.icon}
//                             link={d.link}
//                         >
//                             {d.children}
//                         </SingleNavItem>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function SingleNavItem(d: NavItem) {
//     const [isItemOpen, setItem] = useState(false);
//     function toggleItem() {
//         return setItem(!isItemOpen);
//     }
//     return (
//         <Link
//             onClick={toggleItem}
//             href={d.link ?? "#"}
//             className="relative px-2 py-3 transition-all "
//         >
//             <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
//                 <span>{d.label}</span>
//                 {d.children && (
//                     <IoIosArrowDown
//                         className={`text-xs transition-transform duration-300 ease-in-out ${isItemOpen && "rotate-180"}`}
//                     />
//                 )}
//             </p>
//             {isItemOpen && d.children && (
//                 <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-opacity duration-300 ease-in-out flex opacity-0">
//                     {d.children.map((ch, i) => (
//                         <Link
//                             key={i}
//                             href={ch.link ?? "#"}
//                             className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black transition duration-300 ease-in-out"
//                         >
//                             {ch.icon}
//                             <span className="whitespace-nowrap pl-3 ">{ch.label}</span>
//                         </Link>
//                     ))}
//                 </div>
//             )}
//         </Link>
//     );
// }




'use client'

import { useState } from "react"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

type NavItem = {
    label: string
    link?: string
    children?: NavItem[]
    icon?: React.ReactNode
}

const navItems: NavItem[] = [
    {
        label: "HOME",
        link: "/",
    },
    {
        label: "SERVICES",
        link: "#",
        children: [
            {
                label: "History",
                link: "#",
            },
            {
                label: "Our Team",
                link: "#",
            },
            {
                label: "Blog",
                link: "#",
            },
        ],
    },
    {
        label: "BLOG",
        link: "#",
        children: [
            {
                label: "History",
                link: "#",
            },
            {
                label: "Our Team",
                link: "#",
            },
            {
                label: "Blog",
                link: "#",
            },
        ],
    },
    {
        label: "ABOUT",
        link: "/About",
    },
    {
        label: "CONTACTS",
        link: "/Contact",
    },
]

export default function Navbar() {
    const [isSideMenuOpen, setSideMenu] = useState(false)
    // const [isSticky, setIsSticky] = useState(false)

    // const handleScroll = () => {
    //     if (typeof window !== "undefined") {
    //         setIsSticky(window.scrollY > 50)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll)
    //     }
    // }, [])

    function openSideMenu() {
        setSideMenu(true)
    }

    function closeSideMenu() {
        setSideMenu(false)
    }

    return (
        <div>
            {/* <div className={`fixed left-0 top-100 z-50 flex w-full justify-between px-4 py-5 text-sm bg-gray-100 transition-all duration-1000 ${isSticky ? "shadow-md top-0" : ""}`}> */}
            <div className={`z-50 flex w-full justify-between px-4 py-5 text-sm bg-gray-100 transition-all duration-1000`}>
                <section className="flex items-center gap-10">
                    <div className="block md:hidden">logo thing</div>
                    {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
                    <div className="hidden md:flex items-center gap-5 transition-all">
                        {navItems.map((d, i) => (
                            <DesktopNavItem key={i} {...d} />
                        ))}
                    </div>
                </section>
                <FiMenu
                    onClick={openSideMenu}
                    className="cursor-pointer text-4xl md:hidden"
                />
            </div>
        </div>
    )
}

function DesktopNavItem({ label, link, children }: NavItem) {
    return (
        <div className="z-10 relative group px-6 py-2 transition duration-300 ease-in-out hover:bg-gray-200 text-[16px]">
            <Link href={link ?? "#"} className="flex items-center gap-2">
                <span className="text-gray-800 hover:text-primary font-semibold">
                    {label}
                </span>
                {children && (
                    <IoIosArrowDown className="rotate-180 transition-transform duration-300 ease-in-out group-hover:rotate-0" />
                )}
            </Link>
            {children && (
                <div className="absolute top-full left-0 hidden w-auto flex-col gap-2 rounded-lg bg-white py-3 shadow-md transition-opacity duration-300 ease-in-out group-hover:flex opacity-0 group-hover:opacity-100">
                    {children.map((ch, i) => (
                        <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-gray-600 hover:text-primary transition duration-300 ease-in-out"
                        >
                            {ch.icon}
                            <span className="whitespace-nowrap pl-3">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
    return (
        <div className="z-10 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
            <div className="h-full w-[65%] bg-white px-4 py-4 transition-transform duration-300 ease-in-out transform translate-x-0">
                <section className="flex justify-end">
                    <AiOutlineClose
                        onClick={closeSideMenu}
                        className="cursor-pointer text-4xl"
                    />
                </section>
                <div className="flex flex-col text-base gap-2 transition-all">
                    {navItems.map((d, i) => (
                        <SingleNavItem key={i} {...d} />
                    ))}
                </div>
            </div>
        </div>
    )
}
// icon, link
function SingleNavItem({ label, children }: NavItem) {
    const [isItemOpen, setItem] = useState(false)

    function toggleItem() {
        setItem(!isItemOpen)
    }

    return (
        <div className="relative px-2 py-3 transition-all">
            <div
                onClick={toggleItem}
                className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-black"
            >
                <span>{label}</span>
                {children && (
                    <IoIosArrowDown
                        className={`text-xs transition-transform duration-300 ease-in-out ${isItemOpen ? "rotate-180" : ""
                            }`}
                    />
                )}
            </div>
            {isItemOpen && children && (
                <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-opacity duration-300 ease-in-out flex">
                    {children.map((ch, i) => (
                        <Link
                            key={i}
                            href={ch.link ?? "#"}
                            className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-gray-600 hover:text-black transition duration-300 ease-in-out"
                        >
                            {ch.icon}
                            <span className="whitespace-nowrap pl-3">{ch.label}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}