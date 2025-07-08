import React, { useState, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const videos = [
    { src: '/images/bento-card1.png', title: 'Glimmer', isImage: true },
    { src: '/videos/bento-card2.mp4', title: 'Playgraund' },
    { src: '/videos/bento-card3.mp4', title: 'SCORIOX' },
    { src: '/videos/bento-card4.mp4', title: 'STOIC' },
    { src: '/videos/bento-card5.mp4', title: 'TITANOR' }
    
];

const Arena = () =>{
    const [hoveredIdx, setHoveredIdx] = useState(null);

    const imageCard = videos.find(v => v.isImage);
    const videoCards = videos.filter(v => !v.isImage);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#2a2a7dcc] via-[#23234dee] to-[#181f2a] relative overflow-hidden py-12">
            <div className="absolute top-0 left-0 w-full h-16 md:h-24 pointer-events-none z-10" style={{background: 'linear-gradient(to bottom, #5f8fff22 0%, transparent 100%)'}} />
            <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, #2a5fff55 0%, transparent 70%)'}} />
            <h1 className="text-3xl md:text-5xl font-bold tracking-widest mb-8 md:mb-16 text-white drop-shadow-lg text-center px-2" style={{textShadow: "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167,139,250,0.5)"}}>
            Echo Player
            </h1>
            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 px-2 md:px-4 max-w-7xl mx-auto">
                {/* الصورة الكبيرة */}
                {imageCard && (
                    <motion.div
                        key={imageCard.src}
                        className="bg-gradient-to-br from-[#23234d] to-[#1a1a2e] rounded-3xl shadow-2xl border border-violet-400/30 p-0 flex flex-col items-center transition-transform hover:scale-105 duration-300 overflow-hidden min-h-[520px] min-w-[420px] lg:min-h-[600px] lg:min-w-[520px] w-full max-w-md"
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <img src={imageCard.src} alt={imageCard.title} className="w-full h-[80%] object-cover filter contrast-150 brightness-125 drop-shadow-[0_0_24px_#a78bfa] transition-all duration-300" />
                        <div className="w-full bg-black/70 py-4 flex items-center justify-center border-t border-violet-400/20">
                            <span className="text-xl font-bold text-white tracking-wide drop-shadow-md text-center">
                                {imageCard.title}
                            </span>
                        </div>
                    </motion.div>
                )}
                {/* شبكة الفيديوهات 2x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 items-stretch auto-rows-[1fr] max-w-2xl w-full justify-end">
                    {videoCards.map((video, idx) => {
                        const videoRef = useRef(null);
                        if (!video) return null;
                        const handleMouseEnter = () => {
                            setHoveredIdx(idx);
                            if (videoRef.current && videoRef.current.paused) {
                                videoRef.current.play().catch(() => {});
                            }
                        };
                        const handleMouseLeave = () => {
                            setHoveredIdx(null);
                            if (videoRef.current && !videoRef.current.paused) {
                                videoRef.current.pause();
                            }
                        };
                        return (
                            <motion.div
                                key={video.src}
                                className="bg-gradient-to-br from-[#23234d] to-[#1a1a2e] rounded-3xl shadow-2xl border border-violet-400/30 p-0 flex flex-col items-center transition-transform hover:scale-105 duration-300 overflow-hidden w-full h-full min-h-[320px] min-w-[240px] lg:min-h-[380px] lg:min-w-[300px]"
                                style={{flex: '1 1 0%'}}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                            >
                                <video
                                    ref={videoRef}
                                    src={video.src}
                                    className={`w-full h-[80%] object-cover transition-all duration-300 ${hoveredIdx !== null && hoveredIdx !== idx ? 'blur-sm' : ''}`}
                                    muted
                                    playsInline
                                    preload="none"
                                />
                                <div className="w-full bg-black/70 py-4 flex items-center justify-center border-t border-violet-400/20">
                                    <span className="text-xl font-bold text-white tracking-wide drop-shadow-md text-center">
                                        {video.title}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <div className="w-full flex justify-center mt-8 md:mt-16 px-2">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-[220px] sm:h-[320px] md:h-[400px]">
                <Spline scene="https://prod.spline.design/IPjBBYdPs6XpPJ6d/scene.splinecode" />
                </div>
            </div>
        </div>
    )
}

export default Arena