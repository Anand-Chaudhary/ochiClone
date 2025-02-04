import { motion, useAnimation } from "framer-motion"

const Features = () => {
    const cards = [useAnimation(), useAnimation()]
    const handleHover = (index) =>{
        cards[index].start({y : "0"})
    }
    const handleHoverEnd = (index)=>{
        cards[index].start({y : "100%"})
    }
    return (
        <div className="w-full py-10">
            <div className="w-full px-10 border-b-2 border-zinc-700 pb-15">
                <h1 className="text-6xl tracking-tighter">Featured Project</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex mt-10 gap-10">
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2  h-[80vh]">
                        <div className="absolute left-full flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter text-[#CDEA68]">
                            {"FYDE".split('').map((item, index) => <motion.span className="inline-block" initial={{y : "100%"}} animate={cards[0]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} key={index}>{item}</motion.span>)}
                        </div>
                        <div className="card w-full rounded-xl h-full overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer relative w-1/2  h-[80vh]">
                        <div className="absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-9xl leading-none tracking-tighter text-[#CDEA68]">
                            {"VISE".split('').map((item, index) => <motion.span className="inline-block" initial={{y : "100%"}} animate={cards[1]} transition={{ease: [0.22, 1, 0.36, 1], delay: index*.05}} key={index}>{item}</motion.span>)}
                        </div>

                        <div className="card w-full rounded-xl h-full overflow-hidden">
                            <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Features