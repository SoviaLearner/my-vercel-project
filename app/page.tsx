import React from 'react';

// Professional Dashboard Component untuk Vercel Deployment Demo
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-400 ring-1 ring-inset ring-blue-500/20 mb-8">
              <span className="mr-2">🚀</span>
              Next.js 14 + Vercel Deployment
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Professional Vercel Deployment
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
              Aplikasi Next.js profesional dengan Tailwind CSS, TypeScript, dan App Router yang 
              siap di-deploy ke cloud platform Vercel dengan CI/CD otomatis.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://vercel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:scale-105"
              >
                Dokumentasi Vercel →
              </a>
              <a
                href="#features"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
              >
                Pelajari lebih lanjut <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gradient Glow Effect */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-400">
              Deployment Modern
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything You Need for Production
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Fitur-fitur profesional yang tersedia langsung dari Vercel platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-800/50 p-2 ring-1 ring-inset ring-gray-700/50 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Edge Network CDN
                  </h3>
                  <p className="text-sm text-gray-400">
                    Konten didistribusikan ke 100+ data centers global untuk latency minimal
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Automatic SSL
                  </h3>
                  <p className="text-sm text-gray-400">
                    HTTPS otomatis dengan sertifikat TLS valid untuk semua domain
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    CI/CD Auto Deploy
                  </h3>
                  <p className="text-sm text-gray-400">
                    Setiap git push trigger deployment otomatis tanpa downtime
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Framework Detection
                  </h3>
                  <p className="text-sm text-gray-400">
                    Auto-detect Next.js, React, Vue, Svelte dengan konfigurasi zero-setup
                  </p>
                </div>

                {/* Feature 5 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10">
                    <span className="text-2xl">🖼️</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Image Optimization
                  </h3>
                  <p className="text-sm text-gray-400">
                    Auto-optimize gambar dengan WebP conversion dan lazy loading
                  </p>
                </div>

                {/* Feature 6 */}
                <div className="relative rounded-lg bg-gray-900/80 p-6 ring-1 ring-gray-700 hover:ring-blue-500/50 transition-all duration-300">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Preview Deployments
                  </h3>
                  <p className="text-sm text-gray-400">
                    Unique URL untuk setiap pull request untuk testing sebelum production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technology Stack
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Modern technologies untuk production-ready application
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            {/* Tech 1 */}
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">N</span>
              </div>
              <span className="text-sm font-semibold text-white">Next.js 14</span>
              <span className="text-xs text-gray-500 mt-1">App Router</span>
            </div>

            {/* Tech 2 */}
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">✓</span>
              </div>
              <span className="text-sm font-semibold text-white">TypeScript</span>
              <span className="text-xs text-gray-500 mt-1">Type Safety</span>
            </div>

            {/* Tech 3 */}
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">⚡</span>
              </div>
              <span className="text-sm font-semibold text-white">Tailwind</span>
              <span className="text-xs text-gray-500 mt-1">CSS Framework</span>
            </div>

            {/* Tech 4 */}
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">V</span>
              </div>
              <span className="text-sm font-semibold text-white">Vercel</span>
              <span className="text-xs text-gray-500 mt-1">Cloud Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Praktikum 10: Implementasi Vercel -{' '}
              <span className="text-blue-400 font-semibold">Sovia Wahyuningtyas</span>{' '}
              <span className="text-gray-500">(NRP: 3324600007)</span>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              D4 Applied Data Science • Project SATRIA • 2026
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
