import React from "react"


const Hero = () => {
    return (
        <main className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center mb-[0%] bg-gradient-to-b from-transparent via-[#1a003a88] to-[#0a0f1a]">
            <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none z-10" style={{background: 'linear-gradient(to bottom, transparent 0%, #a259ff22 80%, #1a1a4d88 100%)'}} />
            <video src="/videos/hero.mp4"
         autoPlay
         loop
            muted
            playsInline
            className="w-full h-[95%] object-cover
            absloute top-0 first-letter:left-0 -z-10"
            ></video>
            <div className="flex flex-col items-center justify-center w-full h-full p-5 absolute top-0 left-0">
                <img src="/images/illu-text.png" alt="illu-text" className="md:w-[30rem] w-[20rem] mb-4" />
                <h1 className="md:text-2xl text-lg font-bold text-center text-white mb-6 tracking-wide">Explore, Capture, Conquer</h1>
                <div className="w-[170px] h-[2px] bg-[#baba] mb-8 mx-auto"></div>
                <button className="h-12 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-semibold text-white text-xl hover:opacity-80 transition-all duration-300 shadow-md mb-8">PLAY NOW</button>
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <img className="md:h-16 h-12" src="/images/illu-logo.png" alt="illu-logo" />
                        <span className="text-2xl font-bold text-white">ZERO</span>
                    </div>
                </div>
                <p className="max-w-[90%] text-center text-xs text-[#babaff] mt-2">
                    Notice: Illuvium Games are in Beta. Participation involves risk. Read our full Disclaimer here.
                </p>
            </div>

    <div className="absolute bottom-40 lg:right-24 right-5 mt-24 animate-bounce sm:inline-block hidden">
        <div className="w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1">
            <div className="w-1 h-3 bg-[#babaff] 
            rounded-full animate-pulse"></div>
        </div>
        <p className="text-[#babaff] mt-2 text-center w-full">
اسحب للاعلى
        </p>
    </div>

            
        </main>
    )
}

export default Hero