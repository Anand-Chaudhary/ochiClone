import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-10 rounded-t-3xl bg-[#004D43] overflow-hidden">
            <div className="border-t-2 border-b-2 border-zinc-300">
                <motion.div
                    className="flex gap-15 whitespace-nowrap pr-20"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
                >
                    <h1 className="text-[15vw] leading-none pb-5 font-semibold">WE ARE OCHI</h1>
                    <h1 className="text-[15vw] leading-none pb-5 font-semibold">WE ARE OCHI</h1>
                    <h1 className="text-[15vw] leading-none pb-5 font-semibold">WE ARE OCHI</h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
