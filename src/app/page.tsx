import { type ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/constants';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-grid-primary/5 [mask-image:linear-gradient(0deg,transparent,black)]" />
        <div className="container relative space-y-8 py-24 md:py-32">
          <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Expand Your Mind with{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
            <p className="max-w-[42rem] text-lg leading-normal text-foreground/70 sm:text-xl sm:leading-8 md:text-2xl">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link
                href="/videos"
                className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Start Watching
              </Link>
              <Link
                href="/podcasts"
                className="inline-flex h-11 items-center rounded-md border border-primary/20 bg-background px-8 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
              >
                Listen Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="container space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Our Content</h2>
          <Link href="/videos" className="text-sm font-medium text-primary hover:text-primary-dark">
            View All →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Video Card */}
          <Link href="/videos" className="group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M4 4.5v15A1.5 1.5 0 005.5 21h13A1.5 1.5 0 0020 19.5v-15A1.5 1.5 0 0018.5 3h-13A1.5 1.5 0 004 4.5zm4.768 10.284l6-4a.75.75 0 000-1.248l-6-4a.75.75 0 00-1.168.62v8a.75.75 0 001.168.62z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Video Content</h3>
                  <p className="text-sm text-white/80">Watch thought-provoking videos on various topics</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Podcast Card */}
          <Link href="/podcasts" className="group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">Podcast Series</h3>
                  <p className="text-sm text-white/80">Listen to engaging discussions and interviews</p>
                </div>
              </div>
            </div>
          </Link>

          {/* Analysis Card */}
          <Link href="/analysis" className="group relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">In-Depth Analysis</h3>
                  <p className="text-sm text-white/80">Read comprehensive analysis and insights</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
