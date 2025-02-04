import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-40 px-20">
                {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((items, index) => {
                    return (
                        <div className="masker" key={index}>
                            <div className="w-fit flex">
                                {index === 1 && (<motion.div initial = {{width: 0}} animate = {{width: "9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:2}} className="w-[9vw] h-[5vw] rounded-2xl relative top-[1.2vw] bg-red-500"></motion.div>)}
                                <h1 className="text-8xl leading-[7vw] tracking-tighter">{items}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="border-t-[1px] mt-25 flex justify-between items-center py-5 px-20 border-zinc-700">
                {["For public and private companies", "From the first pitch to IPO"].map((items, index) => {
                    return <p className="text-md leading-none font-light tracking-tight" key={index}>{items}</p>
                })}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] border-zinc-300 font-light text-md capitalize rounded-full">Start The Project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-300 rounded-full">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage