const appMarkup = `
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 font-display">
<div class="layout-container flex h-full grow flex-col">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white px-10 py-3 shadow-sm sticky top-0 z-50">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">medical_services</span>
</div>
<h2 class="text-slate-900 text-xl font-bold leading-tight tracking-tight">CuidaLink</h2>
</div>
<div class="hidden flex-1 justify-end gap-8 md:flex">
<div class="flex items-center gap-9">
<a class="text-slate-600 hover:text-primary transition-colors text-sm font-medium" href="#">Sobre Nosotros</a>
<a class="text-slate-600 hover:text-primary transition-colors text-sm font-medium" href="#">Ayuda</a>
<a class="text-slate-600 hover:text-primary transition-colors text-sm font-medium" href="#">Contacto</a>
</div>
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all">
<span class="truncate">Iniciar Sesion</span>
</button>
</div>
<button class="md:hidden text-slate-900" aria-label="Abrir menu">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<main class="flex flex-1 flex-col justify-center">
<div class="px-4 py-10 md:px-10 lg:px-40 bg-white">
<div class="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
<div class="flex flex-1 flex-col gap-8 text-left">
<div class="flex flex-col gap-4">
<h1 class="text-slate-900 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                    Bienvenida a <span class="text-primary">CuidaLink</span>
</h1>
<h2 class="text-slate-600 text-lg font-normal leading-relaxed max-w-xl">
                                    Cuidando con amor y tecnologia. Conectamos cuidadores profesionales y pacientes de manera segura, eficiente y humana.
                                </h2>
</div>
<div class="flex flex-wrap gap-4 pt-4">
<button class="group relative flex min-w-[200px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-primary px-8 py-4 text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-primary-hover">
<span class="material-symbols-outlined">diversity_1</span>
<div class="flex flex-col items-start">
<span class="text-xs font-medium opacity-90">Busco trabajo</span>
<span class="text-lg font-bold">Soy Cuidador</span>
</div>
</button>
<button class="group relative flex min-w-[200px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl bg-white border-2 border-primary px-8 py-4 text-primary shadow-sm transition-all hover:-translate-y-1 hover:bg-primary-light hover:shadow-md">
<span class="material-symbols-outlined text-primary">elderly</span>
<div class="flex flex-col items-start">
<span class="text-xs font-medium text-primary/80">Busco ayuda</span>
<span class="text-lg font-bold">Soy Paciente</span>
</div>
</button>
</div>
<div class="flex items-center gap-2 text-sm text-slate-500">
<span class="material-symbols-outlined text-primary text-lg">check_circle</span>
<span>Registro gratuito y seguro</span>
</div>
</div>
<div class="flex-1 w-full lg:max-w-[500px]">
<div class="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
<img alt="Caring nurse holding hands with senior patient" class="h-full w-full object-cover" data-alt="Nurse holding senior patient's hands smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0nCUFpHq6tfnjl2RlwWTE7VS1MHWpHvYuJNs27GUpMAz3VI8iCaskUek8olUqOLxVoxRulUr86p7CcXY5tOFgTDGllJF6zI45F5_wRJE_QyGCbyFNj-DnaN5PwewYqGAkjX3q0g4e18EAGBfCMIgH8XZIYf4ElE3NFuZZOMIqLB7_WuXDwkv1JWqOHb0Vmx8d4E-2Jd241qFfcHSEqo8UlcpZf66FFFSUcfdCb1ulf3cgORZXv9UP4aKMnvFLbdKiiBYOCqSNL0Ti"/>
<div class="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm border border-slate-100">
<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-primary">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div>
<p class="font-bold text-slate-900">Verificacion 100%</p>
<p class="text-sm text-slate-500">Todos los perfiles son revisados manualmente.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="bg-background-light py-20 px-4 md:px-10">
<div class="mx-auto max-w-[1200px]">
<div class="mb-12 flex flex-col gap-4 text-center">
<h2 class="text-slate-900 text-3xl font-bold leading-tight sm:text-4xl">
                                ¿Por que elegir CuidaLink?
                            </h2>
<p class="mx-auto max-w-2xl text-slate-600 text-lg">
                                Ofrecemos una plataforma segura y facil de usar disenada especificamente para el bienestar de tus seres queridos.
                            </p>
</div>
<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
<div class="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-primary/20 hover:bg-primary-light/30 hover:shadow-lg">
<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary">
<span class="material-symbols-outlined text-3xl">favorite</span>
</div>
<div>
<h3 class="mb-2 text-xl font-bold text-slate-900">Atencion Personalizada</h3>
<p class="text-slate-600 leading-relaxed">
                                        Encuentra el cuidador perfecto filtrando por especialidad, horario y experiencia para tus necesidades especificas.
                                    </p>
</div>
</div>
<div class="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-primary/20 hover:bg-primary-light/30 hover:shadow-lg">
<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary">
<span class="material-symbols-outlined text-3xl">security</span>
</div>
<div>
<h3 class="mb-2 text-xl font-bold text-slate-900">Seguridad Garantizada</h3>
<p class="text-slate-600 leading-relaxed">
                                        Todos nuestros cuidadores pasan por un riguroso proceso de verificacion de antecedentes y referencias.
                                    </p>
</div>
</div>
<div class="flex flex-col items-start gap-4 rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-primary/20 hover:bg-primary-light/30 hover:shadow-lg">
<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light text-primary">
<span class="material-symbols-outlined text-3xl">support_agent</span>
</div>
<div>
<h3 class="mb-2 text-xl font-bold text-slate-900">Soporte 24/7</h3>
<p class="text-slate-600 leading-relaxed">
                                        Nuestro equipo esta disponible en cualquier momento del dia para resolver dudas o emergencias.
                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="bg-white py-20 px-4 md:px-10">
<div class="mx-auto max-w-[1200px]">
<div class="mb-16 text-center">
<span class="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Paso a paso</span>
<h2 class="text-slate-900 text-3xl font-bold leading-tight sm:text-4xl">Como Funciona</h2>
<p class="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Tu tranquilidad en solo cuatro sencillos pasos.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
<div class="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-0"></div>
<div class="relative z-10 flex flex-col items-center text-center bg-white">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-primary-light text-primary border-4 border-white shadow-lg mb-6">
<span class="material-symbols-outlined text-4xl">person_add</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3">Paso 1: Registro y Perfil</h3>
<p class="text-slate-600">Crea tu cuenta gratuita y completa tu perfil con tus necesidades o habilidades.</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center bg-white">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-primary-light text-primary border-4 border-white shadow-lg mb-6">
<span class="material-symbols-outlined text-4xl">handshake</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3">Paso 2: Vinculacion Rapida</h3>
<p class="text-slate-600">Nuestro algoritmo inteligente conecta pacientes con los cuidadores ideales.</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center bg-white">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-primary-light text-primary border-4 border-white shadow-lg mb-6">
<span class="material-symbols-outlined text-4xl">lock_open</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3">Paso 3: Configuracion de Seguridad</h3>
<p class="text-slate-600">Verifica documentos y establece preferencias de privacidad y geolocalizacion.</p>
</div>
<div class="relative z-10 flex flex-col items-center text-center bg-white">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-primary-light text-primary border-4 border-white shadow-lg mb-6">
<span class="material-symbols-outlined text-4xl">ecg_heart</span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-3">Paso 4: Monitorizacion 24/7</h3>
<p class="text-slate-600">Comienza el cuidado con seguimiento en tiempo real y soporte continuo.</p>
</div>
</div>
</div>
</div>
<div class="bg-background-light py-20 px-4 md:px-10">
<div class="mx-auto max-w-[1200px]">
<div class="mb-16 text-center">
<span class="text-primary font-bold text-sm uppercase tracking-wider mb-2 block">Tecnologia</span>
<h2 class="text-slate-900 text-3xl font-bold leading-tight sm:text-4xl">Funciones Avanzadas</h2>
<p class="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">Herramientas disenadas para mejorar la calidad de vida de todos.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">location_on</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Geovalla Inteligente</h3>
<p class="text-sm text-slate-600">Alertas automaticas si el paciente sale de una zona segura predefinida.</p>
</div>
</div>
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">record_voice_over</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Audioguia Familiar</h3>
<p class="text-sm text-slate-600">Recordatorios de voz grabados por familiares para momentos de confusion.</p>
</div>
</div>
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">psychology</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Gimnasia Cerebral</h3>
<p class="text-sm text-slate-600">Ejercicios cognitivos diarios adaptados al nivel del usuario.</p>
</div>
</div>
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">assignment</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Reportes para Medicos</h3>
<p class="text-sm text-slate-600">Informes detallados de salud y actividad listos para compartir.</p>
</div>
</div>
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">bedtime</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Deteccion de Inactividad</h3>
<p class="text-sm text-slate-600">Sensores de movimiento para alertar sobre falta de actividad inusual.</p>
</div>
</div>
<div class="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div class="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">groups</span>
</div>
<div>
<h3 class="font-bold text-slate-900 text-lg mb-1">Multicuidador</h3>
<p class="text-sm text-slate-600">Permite que varios familiares o profesionales gestionen un mismo perfil.</p>
</div>
</div>
</div>
</div>
</div>
<div class="bg-white py-20 px-4 md:px-10">
<div class="mx-auto max-w-[800px]">
<div class="mb-12 text-center">
<h2 class="text-slate-900 text-3xl font-bold leading-tight sm:text-4xl">Preguntas Frecuentes</h2>
<p class="mt-4 text-slate-600">Resolvemos tus dudas principales para que empieces con confianza.</p>
</div>
<div class="flex flex-col gap-4">
<details class="group bg-background-light rounded-xl overflow-hidden border border-slate-100 open:border-primary/30 open:ring-1 open:ring-primary/30 transition-all">
<summary class="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-slate-900 marker:content-none hover:bg-slate-50 transition-colors">
                                    ¿Necesito un dispositivo especial?
                                    <span class="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
</summary>
<div class="px-6 pb-6 text-slate-600">
                                    No, CuidaLink funciona perfectamente desde cualquier smartphone, tablet o computadora. Sin embargo, para funciones avanzadas de monitorizacion de salud, somos compatibles con la mayoria de relojes inteligentes del mercado.
                                </div>
</details>
<details class="group bg-background-light rounded-xl overflow-hidden border border-slate-100 open:border-primary/30 open:ring-1 open:ring-primary/30 transition-all">
<summary class="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-slate-900 marker:content-none hover:bg-slate-50 transition-colors">
                                    ¿Como se protegen los datos?
                                    <span class="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
</summary>
<div class="px-6 pb-6 text-slate-600">
                                    La seguridad es nuestra prioridad. Utilizamos encriptacion de grado bancario (AES-256) para todos los datos personales y medicos. Cumplimos estrictamente con las normativas de proteccion de datos (GDPR/LOPD) y nunca compartimos informacion con terceros sin tu consentimiento explicito.
                                </div>
</details>
<details class="group bg-background-light rounded-xl overflow-hidden border border-slate-100 open:border-primary/30 open:ring-1 open:ring-primary/30 transition-all">
<summary class="flex cursor-pointer items-center justify-between p-6 text-lg font-bold text-slate-900 marker:content-none hover:bg-slate-50 transition-colors">
                                    ¿Funciona sin internet?
                                    <span class="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
</summary>
<div class="px-6 pb-6 text-slate-600">
                                    La aplicacion requiere conexion a internet para la sincronizacion en tiempo real y alertas inmediatas. Sin embargo, ciertas funciones como la visualizacion de datos historicos o la agenda de medicacion guardada localmente pueden consultarse en modo offline y se sincronizaran cuando recuperes la conexion.
                                </div>
</details>
</div>
</div>
</div>
<div class="bg-background-light py-16 px-4 md:px-10">
<div class="mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
<div class="flex flex-col md:flex-row">
<div class="flex flex-1 flex-col justify-center p-10 md:p-16 relative overflow-hidden">
<div class="absolute inset-0 bg-gradient-to-br from-primary to-green-700 z-0"></div>
<div class="relative z-10 text-white">
<h2 class="mb-4 text-3xl font-bold md:text-4xl">¿Listo para empezar?</h2>
<p class="mb-8 text-green-50 text-lg">Unete a nuestra comunidad hoy mismo y descubre la tranquilidad de tener el mejor cuidado.</p>
<div class="flex flex-wrap gap-4">
<button class="rounded-xl bg-white px-6 py-3 font-bold text-primary hover:bg-green-50 transition-colors shadow-sm">
                                            Crear cuenta gratis
                                        </button>
</div>
</div>
</div>
<div class="relative min-h-[300px] flex-1 md:min-h-0 bg-green-100">
<div class="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent md:bg-gradient-to-t md:from-primary/90 md:to-transparent z-10"></div>
<img alt="Smiling doctor with tablet" class="h-full w-full object-cover mix-blend-multiply opacity-80" data-alt="Doctor smiling using a tablet device" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC27dal86MYqquLKCm500YMev-txgm996e2ZZa3TzEzxJydDj5MUeNWeeEXVI89lfRqKoLvH4eU5D4rNtS2JDzV0EhjAITXB6ewcSLQSuFD0cibjCoHIMYlfcwKGoY5kFQGG9sgQ3kr6pnbQ3gk3Lbj7ZhOXEjSi54kM7M_taF6pZmi5Vvm5IfsAc9pc-kudABjuzAQ62wAV1cvSn46J2IN2Su_cXSLq04XSDrposZI-it_rbMUMFjoOfrV9vakvroj5ydXesdkbSmp"/>
</div>
</div>
</div>
</div>
</main>
<footer class="bg-white border-t border-slate-200 py-12 px-5 text-center">
<div class="mx-auto max-w-[1200px]">
<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-2xl">medical_services</span>
<span class="text-slate-900 text-lg font-bold">CuidaLink</span>
</div>
<div class="flex flex-wrap items-center justify-center gap-8">
<a class="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="#">Politica de Privacidad</a>
<a class="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="#">Terminos de Servicio</a>
<a class="text-slate-500 hover:text-primary transition-colors text-sm font-medium" href="#">Contacto</a>
</div>
<div class="flex gap-4">
<a class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" href="#" aria-label="Facebook">
<svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-all" href="#" aria-label="Instagram">
<svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-2.37 6.37a5.376 5.376 0 105.376 5.376 5.376 5.376 5.376 5.376 5.376 5.376 5.376 5.376 5.376z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
<div class="mt-8 border-t border-slate-100 pt-8">
<p class="text-slate-400 text-sm font-normal">© 2023 CuidaLink. Todos los derechos reservados.</p>
</div>
</div>
</footer>
</div>
</div>
`

function App() {
    return <div dangerouslySetInnerHTML={{ __html: appMarkup }} />
}

export default App
