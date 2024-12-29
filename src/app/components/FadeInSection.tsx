import React from "react";
import { useInView } from "react-intersection-observer";

interface FadeInSectionProps {
    children: React.ReactNode;
}

const FadeInSection:React.FC<FadeInSectionProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Анимация срабатывает только один раз
        threshold: 0.2, // 20% элемента должно быть видно
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
