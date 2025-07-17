import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { thematiques } from '@/config/thematiques'

export default function Home() {
  return (
    <Layout>
      <Hero />

      {/* Thématiques Section */}
      <section className="relative isolate bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Nos thématiques
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Nos publications fournissent des analyses quantitatives et qualitatives. Elles mettent en avant des propositions pragmatiques et à la bonne échelle.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {thematiques.map((thematique) => (
                <div 
                  key={thematique.id} 
                  className="group relative overflow-hidden rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:bg-green-50 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-600 text-white mb-6">
                    {/* You can add icons here later */}
                    <span className="text-2xl">✦</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-green-700 transition-colors duration-200">
                    <a href={thematique.href}>
                      <span className="absolute inset-0" />
                      {thematique.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-base text-gray-600">{thematique.description}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    En savoir plus <span aria-hidden="true" className="ml-1">→</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
