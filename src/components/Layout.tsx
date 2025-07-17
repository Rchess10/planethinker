import { Header } from './header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <footer className="bg-gray-50 mt-16">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Plan du site</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="/qui-sommes-nous" className="text-sm text-gray-600 hover:text-green-700">
                    Qui sommes-nous
                  </a>
                </li>
                <li>
                  <a href="/publications" className="text-sm text-gray-600 hover:text-green-700">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="/thematiques" className="text-sm text-gray-600 hover:text-green-700">
                    Thématiques
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="/contact" className="text-sm text-gray-600 hover:text-green-700">
                    Nous contacter
                  </a>
                </li>
                <li>
                  <a href="/presse" className="text-sm text-gray-600 hover:text-green-700">
                    Espace presse
                  </a>
                </li>
                <li>
                  <a href="/rejoindre" className="text-sm text-gray-600 hover:text-green-700">
                    Nous rejoindre
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Légal</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="/mentions-legales" className="text-sm text-gray-600 hover:text-green-700">
                    Mentions légales
                  </a>
                </li>
                <li>
                  <a href="/confidentialite" className="text-sm text-gray-600 hover:text-green-700">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Réseaux sociaux</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <a href="https://linkedin.com" className="text-sm text-gray-600 hover:text-green-700">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" className="text-sm text-gray-600 hover:text-green-700">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" className="text-sm text-gray-600 hover:text-green-700">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Planethinker. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
