import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import 'boxicons/css/boxicons.min.css';

const Charectur = () => {
    const [selectedAvatar, setSelectedAvatar] = useState("FURENA");

    const Avatar = {
        FURENA: {
            name: "FURENA",
            power: 75,
            stable: 38,
            penetrate: 60,
            portable: 80,
            stars: 5,
            img: "/images/furena.png",
        },
        wriothesley: {
            name: "wriothesley",
            power: 58,
            stable: 49,
            penetrate: 75,
            portable: 85,
            stars: 5,
            img: "/images/wriothesley.png",
        },
        nuvelate: {
            name: "nuvelate",
            power: 68,
            stable: 83,
            penetrate: 70,
            portable: 75,
            stars: 4,
            img: "/images/nuvelate.png",
        },
    };

    const currentAvatar = Avatar[selectedAvatar];

    return (
        <div className="relative w-full overflow-hidden mb-0 bg-gradient-to-b from-[#3a1a6a88] via-[#2a2a7dcc] to-[#181f2aee] min-h-screen">
            <div className="absolute top-0 left-0 w-full h-16 md:h-24 pointer-events-none z-10" style={{background: 'linear-gradient(to bottom, #b47cff22 0%, transparent 100%)'}} />
            <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 pointer-events-none z-10" style={{background: 'linear-gradient(to top, #5f8fff22 0%, transparent 100%)'}} />
            {/* العنوان */}
            <motion.div
                className="relative pt-6 md:pt-10 pb-4 md:pb-6 text-center w-full bg-transparent"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <h1
                    className="text-5xl font-bold tracking-widest mb-8 text-white drop-shadow-lg"
                    style={{ textShadow: "0 0 10px rgba(255,255,0,0.7)" }}
                >
                     Characters
                </h1>
            </motion.div>

            {/* محتوى الشخصية */}
            <div className="relative z-10 flex flex-col md:flex-row items-center w-full p-2 md:p-4 gap-4 md:gap-0">
                <motion.div
                    className="w-full md:w-2/4 flex flex-col md:ml-10"
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.div
                        className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    >
                        <h1 className="text-2xl font-semibold mb-2">{currentAvatar.name}</h1>
                        {/* عرض النجوم */}
                        <div className="flex items-center mb-4">
                            {Array.from({ length: currentAvatar.stars }).map((_, i) => (
                                <span key={`main-star-${currentAvatar.name}-${i}`} className="text-yellow-400 text-2xl">
                                    ★
                                </span>
                            ))}
                        </div>
                        <div className="space-y-3 mb-16">
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">Power</span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-600 to-white transition-all duration-500"
                                        style={{ width: `${currentAvatar.power}%` }}
                                    ></div>
                                </div>
                                <span className="ml-4 w-10 text-right text-white font-bold">{currentAvatar.power}%</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">Speed</span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-blue-500 to-white transition-all duration-500"
                                        style={{ width: `${currentAvatar.stable}%` }}
                                    ></div>
                                </div>
                                <span className="ml-4 w-10 text-right text-white font-bold">{currentAvatar.stable}%</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">Defense</span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-white transition-all duration-500"
                                        style={{ width: `${currentAvatar.penetrate}%` }}
                                    ></div>
                                </div>
                                <span className="ml-4 w-10 text-right text-white font-bold">{currentAvatar.penetrate}%</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-24 text-gray-400">Intelligence</span>
                                <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-yellow-400 to-white transition-all duration-500"
                                        style={{ width: `${currentAvatar.portable}%` }}
                                    ></div>
                                </div>
                                <span className="ml-4 w-10 text-right text-white font-bold">{currentAvatar.portable}%</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <button className="px-6 py-2 bg-violet-900 text-white rounded-md font-semibold text-lg hover:opacity-80 transition-all duration-300">
                                تفاصيل
                            </button>
                            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold text-lg hover:opacity-80 transition-all duration-300">
                                مشاركة
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex flex-row flex-nowrap gap-4 mt-8 overflow-x-auto sm:overflow-x-visible w-full justify-start sm:justify-center items-center pb-2"
                        style={{ WebkitOverflowScrolling: 'touch' }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                    >
                        {Object.values(Avatar).map((avatar, idx) => (
                            <motion.div
                                key={avatar.name}
                                className={`relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-5 border flex flex-col items-center justify-between cursor-pointer transition-all duration-300 w-48 h-60
                                hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(80,80,200,0.25)] hover:shadow-violet-400/40 hover:-translate-y-2
                                ${selectedAvatar === avatar.name ? 'ring-2 ring-violet-400' : ''}`}
                                onClick={() => setSelectedAvatar(avatar.name)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                            >
                                <div className="text-lg font-bold mb-2 text-white text-center w-full">{avatar.name}</div>
                                <div className="w-28 h-28 bg-gray-800/50 rounded-md flex items-center justify-center mb-3 overflow-hidden">
                                    <img src={avatar.img} alt={`${avatar.name}.img`} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mx-auto transition-all duration-300" style={{maxWidth: '100%', maxHeight: '100%'}} />
                                </div>
                                <div className="flex gap-1 mb-2 justify-center">
                                    {[...Array(avatar.stars)].map((_, i) => (
                                        <Star key={`card-star-${avatar.name}-${i}`} className="text-yellow-400 fill-yellow-400 w-7 h-7" />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
                {/* Spline 3D Model beside stats */}
                <motion.div
                    className="relative w-full flex items-center justify-center h-60 sm:h-72 md:h-[500px] order-first md:order-none mt-8 md:mt-0 min-h-[220px] sm:min-h-[300px] md:min-h-[500px]"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div
                        style={{ width: '100%', height: '100%', maxWidth: '420px', maxHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        className="h-52 sm:h-72 md:h-[500px] w-full max-w-xs sm:max-w-md md:max-w-full"
                    >
                        {selectedAvatar === "wriothesley" ? (
                                 <Spline scene="https://prod.spline.design/DxLeTQRtk2qFEbhG/scene.splinecode" />
                        ) : selectedAvatar === "nuvelate" ? (
                            <Spline scene="https://prod.spline.design/LIeem8qRLZLQoIZm/scene.splinecode" />
                        ) : selectedAvatar === "FURENA" ? (
                            <Spline scene="https://prod.spline.design/zgcYZnI203NO37EM/scene.splinecode" />
                        ) : (
                            <Spline scene="https://prod.spline.design/G8KKg2IQkQw5vQ2F/scene.splinecode" />
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Charectur;