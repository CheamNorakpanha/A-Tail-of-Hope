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