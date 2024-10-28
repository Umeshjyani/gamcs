// 'use client';

// import { useState, useEffect } from 'react'
// import Image from 'next/image'

// const slides = [
//     {
//         image: "/image1.jpg",
//         text: 'Tunnel of Light',
//     },
//     {
//         image: "/image2.jpg",
//         text: 'Architectural Wonder',
//     },
//     {
//         image: "/image7.jpg",
//         text: 'Path to Enlightenment',
//     },
// ]

// export default function Slider() {
//     const [currentSlide, setCurrentSlide] = useState(0)

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
//         }, 10000) // Change slide every 1 second

//         return () => clearInterval(timer)
//     }, [])

//     return (
//         <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
//             {slides.map((slide, index) => (
//                 <div key={index}
//                     className={`absolute inset-0 w-full h-[400px] transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
//                     <Image
//                         src={slide.image}
//                         alt={slide.text}
//                         layout="fill"
//                         objectFit="cover"
//                         priority={index === 0}
//                     />
//                     <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
//                         <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 py-2 rounded bg-black bg-opacity-50">
//                             {slide.text}
//                         </h2>
//                     </div>

//                     <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 sm:space-x-4">
//                         {slides.map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => setCurrentSlide(index)}
//                                 className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-white font-semibold text-sm sm:text-base transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-primary/50'
//                                     }`}
//                             >
//                                 {(index + 1).toString().padStart(2, '0')}
//                             </button>
//                         ))}
//                     </div>

//                 </div>
//             ))}
//         </div>
//     )
// }











'use client';

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
    {
        image: "/image2.jpg",
        text: 'Do You Need an Accountant?',
    },
    {
        image: "/image4.jpg",
        text: 'Do You Need an Accountant?',
    },
    {
        image: "/image7.jpg",
        text: 'Do You Need an Accountant?',
    },
]

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full h-[200px]  md:h-[400px] lg:h-[450px] overflow-hidden">
            {slides.map((slide, index) => (
                <div key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    <Image
                        src={slide.image}
                        alt={slide.text}
                        layout="responsive"
                        width={1920}
                        height={1080}
                        priority={index === 0}
                        className='h-[200px]'
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-80 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.6) 25%, rgba(255, 255, 255, 0) 50%)' }} />
                    {/* <div className="absolute top-5 left-5 bg-black bg-opacity-30 flex items-center justify-center">
                        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4 py-2 rounded bg-black bg-opacity-50">
                            {slide.text}
                        </h2>
                    </div> */}

                    <span className="absolute top-2 md:top-14 left-5 md:left-14 text-[25px] md:text[60px]">Do Yo Need</span>
                    <span className="absolute top-8 md:top-32 left-5 md:left-14 text-[25px] md:text[60px] font-extrabold">an Accountant?</span>
                    <button
                        className='z-[2] absolute top-20 md:top-60 left-5 md:left-14  w-[150px] md:w-[250px] p-1 md:p-4 text-secondarytextwhite font-semibold bg-primary hover:bg-primaryhover hover:text-secondarytextwhite transition-all duration-300 ease-in-out'
                    >
                        Free consultation
                    </button>
                    <div className="absolute bottom-8 left-5 md:left-14 flex justify-center space-x-2 sm:space-x-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full text-white font-semibold text-sm sm:text-base transition-colors duration-300 ${index === currentSlide ? 'bg-primary' : 'bg-primary/50'}`}
                            >
                                {(index + 1).toString().padStart(2, '0')}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
