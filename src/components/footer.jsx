import "boxicons/css/boxicons.min.css"; 



const Footer =() =>{
    return(
<footer className="w-full bg-gradient-to-t from-[#181f2aee] via-[#2a2a7dcc] to-[#3a1a6a88] border-t border-violet-900/30 shadow-inner mt-12 py-8 flex flex-col items-center justify-center gap-4">
  <div className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 w-full px-1">
    <img className="h-8 md:h-10 drop-shadow-lg" src="public/images/illu-logo.png" alt="illu-logo" />
    <img className="h-5 md:h-7 opacity-90" src="public/images/illu-text.png" alt="illu-text" />
    <ul className="wrapper flex flex-row items-center gap-2 md:gap-4 mb-0">
   
      <li className="icon github group relative">
        <a href="https://github.com/anwerruziq" target="_blank" rel="noopener noreferrer">
          <span className="tooltip group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 opacity-0 invisible transition-all duration-300 absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-[#24292e] text-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap z-10">Github</span>
          <i className='bx bxl-github group-hover:shadow-[0_4px_24px_0_rgba(36,41,46,0.4)] group-hover:scale-110' style={{fontSize: '2.3em', color: '#24292e', transition: 'box-shadow 0.3s, transform 0.3s'}} ></i>
        </a>
      </li>
      <li className="icon instagram group relative">
        <a href="https://www.instagram.com/a_r.coder?igsh=MTFuMzhwdHRsb2t4dA==" target="_blank" rel="noopener noreferrer">
          <span className="tooltip group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 opacity-0 invisible transition-all duration-300 absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-[#e4405f] text-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap z-10">Instagram</span>
          <i className='bx bxl-instagram group-hover:shadow-[0_4px_24px_0_rgba(228,64,95,0.3)] group-hover:scale-110' style={{fontSize: '2.3em', color: '#e4405f', transition: 'box-shadow 0.3s, transform 0.3s'}} ></i>
        </a>
      </li>
      <li className="icon facebook group relative">
        <a href="https://www.facebook.com/anwar.ruziq?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <span className="tooltip group-hover:opacity-100 group-hover:visible group-hover:-translate-y-2 opacity-0 invisible transition-all duration-300 absolute left-1/2 -translate-x-1/2 bottom-full mb-2 bg-[#1877f3] text-white px-2 py-1 rounded shadow-lg text-xs whitespace-nowrap z-10">Facebook</span>
          <i className='bx bxl-facebook-circle group-hover:shadow-[0_4px_24px_0_rgba(24,119,243,0.4)] group-hover:scale-110' style={{fontSize: '2.3em', color: '#1877f3', transition: 'box-shadow 0.3s, transform 0.3s'}} ></i>
        </a>
      </li>
    </ul>
  </div>
  <div className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} AR.Coder جميع الحقوق محفوظة</div>
</footer>
    )
}

export default Footer