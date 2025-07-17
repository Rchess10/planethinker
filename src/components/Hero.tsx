export function Hero() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-900/80 mix-blend-multiply" />
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Le think tank
            <br />
            de la transition écologique
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Notre mission : éclairer et influencer le débat sur les défis environnementaux
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/publications"
              className="rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-all duration-200"
            >
              Découvrir nos projets
            </a>
            <a href="/qui-sommes-nous" className="text-sm font-semibold leading-6 text-white hover:text-green-200 transition-colors duration-200">
              En savoir plus <span aria-hidden="true" className="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="relative isolate -mt-12 sm:-mt-16 mb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 backdrop-blur-lg bg-white/10 rounded-xl p-8">
            <div className="flex flex-col text-center">
              <dt className="text-sm font-semibold leading-6 text-gray-200">Publications</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">100+</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="text-sm font-semibold leading-6 text-gray-200">Experts</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">50+</dd>
            </div>
            <div className="flex flex-col text-center">
              <dt className="text-sm font-semibold leading-6 text-gray-200">Impact médiatique</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white">1M+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
