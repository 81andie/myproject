import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// --- CONTADORES DE VISITAS ---
const today = new Date().toISOString().slice(0, 10); // yyyy-mm-dd
const week = (() => {
  const d = new Date();
  const firstDay = new Date(d.setDate(d.getDate() - d.getDay())); // lunes
  return firstDay.toISOString().slice(0, 10);
})();

// Inicializar contadores en localStorage
let visitasHoyData = JSON.parse(localStorage.getItem('visitasHoyData') || '{}');
let visitasSemanaData = JSON.parse(localStorage.getItem('visitasSemanaData') || '{}');

// Total
let totalVisits = parseInt(localStorage.getItem('totalVisits') || '0') + 1;
localStorage.setItem('totalVisits', totalVisits);

// Hoy y Semana
visitasHoyData[today] = (visitasHoyData[today] || 0) + 1;
visitasSemanaData[week] = (visitasSemanaData[week] || 0) + 1;

localStorage.setItem('visitasHoyData', JSON.stringify(visitasHoyData));
localStorage.setItem('visitasSemanaData', JSON.stringify(visitasSemanaData));

const visitasHoy = visitasHoyData[today];
const visitasSemana = visitasSemanaData[week];

// --- HTML ---
document.querySelector('#app').innerHTML = `
  <div class="bg-[url(/business-office.jpg)] bg-[#1a1a1a] bg-cover bg-center h-screen flex flex-col justify-center">

    <!-- Nombre -->
    <div class="h-16 rounded-sm flex flex-col text-center">
      <h1 class="text-4xl p-1 mt-1 rounded-xl text-emerald-50 font-bold flex flex-col">Andrea Hernández</h1>
    </div>

    <!-- Títulos -->
    <h1 class="ml-2 mr-2 mt-12 text-2xl bg-white/15 p-2 rounded-xl text-violet-50 text-center">
      <strong>Programadora Web Frontend</strong>
    </h1>
    <h1 class="ml-2 mr-2 mt-1 text-xs p-1 rounded-xl text-emerald-50 text-center">
      <strong>Licenciada en Pedagogia General de la Música <br> Conservatorio Superior del Liceo</strong>
    </h1>

    <!-- Enlaces sociales -->
    <div class="flex justify-center justify-items-center mt-2 mb-10">
      <!-- TikTok, GitHub, LinkedIn -->
      <a href="https://www.tiktok.com/@fioripoeticblog?lang=es-419">
        <svg class="hover:scale-90 hover:border hover:rounded-full hover:border-white transition-discrete"
          xmlns="http://www.w3.org/2000/svg" width="44px" height="44px" viewBox="0 0 48 48" fill="#ffffff">
          <path d="M33.5 12.7a9.3 9.3 0 0 1-3.2-7.1h-5.1v24a4.4 4.4 0 1 1-4.4-4.4
          4.4 4.4 0 0 1 1.4.2v-5.2a9.6 9.6 0 0 0-1.4-.1 9.6 9.6 0 1 0 9.6 9.6v-12
          a14.3 14.3 0 0 0 8.3 2.7V15a9.2 9.2 0 0 1-5.2-2.3z"/>
        </svg>
      </a>
      <a href="https://github.com/81andie">
        <svg class="hover:scale-90 hover:border hover:rounded-full hover:border-white transition-discrete"
          width="44px" height="44px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
          <defs>
            <style>
              .cls-1 { fill: none; stroke: #ffffff; stroke-linecap: round; stroke-linejoin: round; fill-rule: evenodd; }
            </style>
          </defs>
          <path class="cls-1"
            d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65
            c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31
            a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88
            c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69
            s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2
            a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77
            c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4
            c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/andrea-hern%C3%A0ndez-abbab9288">
        <svg class="hover:scale-90 hover:border hover:rounded-full hover:border-white transition-discrete"
          xmlns="http://www.w3.org/2000/svg" width="44px" height="44px" viewBox="0 0 48 48" fill="#ffffff">
          <path d="M12 19h5.3v17H12zM14.6 12a3.1 3.1 0 1 1 0 6.2 3.1 3.1 0 0 1 0-6.2zM20.6 19h5v2.3
            h.1a5.5 5.5 0 0 1 5-2.8c5.3 0 6.3 3.5 6.3 8v9.5h-5.3v-8.4c0-2-.1-4.6-2.8-4.6
            s-3.3 2.1-3.3 4.4v8.6h-5.3V19z"/>
        </svg>
      </a>
    </div>

    <!-- MINI BADGE CON TOTAL / HOY / SEMANA -->
      <span class="text-center text-white"><strong>Visitas</strong></span>
  
    <div class="flex justify-center mt-4 space-x-1 text-white text-sm">
  
      <div class="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm animate-fadeIn">Total: <strong>${totalVisits}</strong></div>
      <div class="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm animate-fadeIn">Hoy: <strong>${visitasHoy}</strong></div>
      <div class="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm animate-fadeIn">Semana: <strong>${visitasSemana}</strong></div>
    </div>

    <!-- PORTFOLIO / Fiori Poetic Blog -->
    <div class="mt-10">
      <div class="pulsate-bck-normal ml-2 mr-2 mb-4 p-1 rounded-xl flex justify-center place-items-center mt-2 h-12 bg-slate-50/25">
        <img src="Screenshot_20251018_130052_TikTok.jpg" class="h-10 w-10 object-contain rounded-xl"/>
        <a href="https://81andie.github.io/my-portfolio/">
          <p class="text-2xl font-bold text-violet-100 text-center">PORTFOLIO</p>
        </a>
      </div>

      <div class="scale-up-bottom-normal ml-2 mr-2 p-1 mb-20 rounded-xl flex justify-center place-items-center mt-2 h-12 bg-slate-50/25">
        <img src="Galaxy-Fold2-localhost (8).png" class="h-10 w-10 rounded-xl object-contain"/>
        <a href="https://fiori-jxm6.vercel.app/#/inicio">
          <p class="text-2xl font-bold text-violet-100 text-center">Fiori Poetic Blog</p>
        </a>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="p-1 bottom-0 text-violet-950 bg-violet-100 text-xs text-md font-thin flex text-center flex-col justify-center justify-items-center">
    <span class="mt-2">Esta web ha sido diseñada y desarrollada por:<br> <strong>Andrea Hernández</strong></span><br>
    <span>Todos los derechos reservados<br> Copyright © 2025</span>
  </div>
`

setupCounter(document.querySelector('#counter'))
