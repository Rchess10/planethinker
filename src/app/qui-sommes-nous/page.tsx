export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Qui sommes-nous</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Planethinker est un groupe de réflexion qui vise à éclairer et influencer le débat sur les défis de la transition écologique.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Notre mission</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Nous nous appuyons sur la rigueur scientifique pour éclairer les choix politiques et industriels nécessaires à la transition écologique. Notre approche combine analyse quantitative et qualitative pour proposer des solutions concrètes et réalisables.
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Notre approche</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Notre travail s'articule autour de publications approfondies, d'événements de sensibilisation et de propositions concrètes pour accompagner la transition écologique à toutes les échelles de la société.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Notre équipe</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Planethinker rassemble des experts, chercheurs et professionnels engagés dans la transition écologique. Notre réseau s'étend à travers différents secteurs : énergie, transport, industrie, numérique, agriculture, et bien d'autres.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
