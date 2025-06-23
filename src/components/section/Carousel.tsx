import { ReactNode, useEffect, useCallback, useState } from "react";

type CarouselProps = {
    children: ReactNode | ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
};

export default function Carousel({
    children,
    autoSlide = true,
    autoSlideInterval = 3000,
}: CarouselProps) {
    const slides = Array.isArray(children) ? children : [children];
    const [curr, setCurr] = useState(0);

    const next = useCallback(
        () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
        [slides.length]
    );

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides}
            </div>
        </div>
    );
}

// import { ReactNode, useEffect, useCallback } from "react";
// import { useState } from "react";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// type CarouselProps = {
//     children: ReactNode | ReactNode[];
//     autoSlide?: boolean;
//     autoSlideInterval?: number;
// };

// export default function Carousel({ children, autoSlide = false, autoSlideInterval = 3000, }: CarouselProps) {
//     const slides = Array.isArray(children) ? children : [children];

//     const [curr, setCurr] = useState(0);

//     // const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//     const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides.length]);

//     useEffect(() => {
//         if (!autoSlide) return;
//         const slideInterval = setInterval(next, autoSlideInterval);
//         return () => clearInterval(slideInterval);
//     }, [autoSlide, autoSlideInterval, next]);

//     return (
//         <div className="overflow-hidden relative">
//             <div
//                 className="flex transition-transform ease-out duration-500"
//                 style={{ transform: `translateX(-${curr * 100}%)` }}
//             >
//                 {slides}
//             </div>
//             {/* <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 hover:bg-white">
//                     <ChevronLeft size={20} />
//                 </button>
//                 <button onClick={next} className="p-1 rounded-full shadow bg-white/80 hover:bg-white">
//                     <ChevronRight size={20} />
//                 </button>
//             </div> */}

//             {/* <div className="absolute bottom-4 right-0 left-0 ">
//                 <div className="flex items-center justify-center gap-2">
//                     {slides.map((_, i) => (
//                         <div
//                             className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? 'p-1' : 'bg-opacity-50'}`}>

//                         </div>
//                     ))}
//                 </div>
//             </div> */}
//         </div>
//     );
// }