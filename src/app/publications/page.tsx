import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const publications = [
  {
    id: 1,
    title: 'Décarbonons les Industries de Santé : rapport final',
    date: new Date(2025, 5, 17),
    category: 'Publication',
    excerpt: 'Rapport final sur les médicaments et dispositifs médicaux',
    href: '/publications/decarbonons-industries-sante-medicaments-dm'
  },
  {
    id: 2,
    title: 'Le Shift soutient le nouveau rapport sur la transition énergétique',
    date: new Date(2025, 5, 13),
    category: 'Blog',
    excerpt: 'Analyse des enjeux et recommandations pour la transition énergétique',
    href: '/publications/shift-transition-energetique-rapport'
  },
  {
    id: 3,
    title: 'Anticiper les conflits d'usage des ressources',
    date: new Date(2025, 4, 22),
    category: 'Publication',
    excerpt: 'Au service de la transition sur les territoires',
    href: '/publications/atlas-2050-ressources-territoires'
  }
];

export default function Publications() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nos publications</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Découvrez nos dernières analyses et propositions pour la transition écologique.
          </p>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {publications.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date.toISOString()} className="text-gray-500">
                    {format(post.date, "d MMM. yyyy", { locale: fr })}
                  </time>
                  <span className="text-green-700">{post.category}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
