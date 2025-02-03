const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-t-3xl">
        <h1 className="text-black leading-[4vw] tracking-tight text-[4vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className="w-full flex gap-5 border-t-[1px] mt-15 p-9 border-[#a1b562]">
            <div className="w-1/2">
                <h1 className="text-6xl text-black">Our Approach</h1>
                <button className="rounded-full flex gap-10 justify-center items-center px-10 mt-10 py-6 text-white bg-zinc-900">Read More <div className="w-2 h-2 rounded-full bg-white"></div></button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-black"></div>
        </div>
    </div>
  )
}

export default About