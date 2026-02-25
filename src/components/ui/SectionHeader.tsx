import React from "react";
import { motion } from "framer-motion";
import BrushStroke from "./BrushStroke";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    className = "",
    align = "center"
}) => {
    return (
        <div className={`relative w-full overflow-hidden my-20 ${className}`}>

            {/* The Text Block */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative z-10 px-4 mb-4 ${align === "center" ? "text-center" :
                    align === "right" ? "text-right" : "text-left"
                    }`}
            >
                <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] text-white mb-2">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-xs md:text-sm text-[#8b7d7b] tracking-[0.2em] opacity-70">
                        {subtitle}
                    </p>
                )}
            </motion.div>

            {/* Brush Stroke Divider */}
            <div className="relative h-3 w-full max-w-md mx-auto">
                <BrushStroke variant="horizontal" className="w-full h-full" />
            </div>
        </div>
    );
};

export default SectionHeader;
