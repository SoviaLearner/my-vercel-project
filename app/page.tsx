import './globals.css'

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <div className="overlay"></div>

        <div className="content">
          <div className="badge">
            🚀 Next.js + Vercel Deployment
          </div>


        <h1>
          Professional Vercel Deployment - UPDATE LIVE
        </h1>

          <p>
            Aplikasi modern menggunakan Next.js yang siap deploy ke cloud
            platform Vercel dengan tampilan profesional dan responsive.
          </p>

          <div className="buttons">
            <a
              href="https://vercel.com/docs"
              target="_blank"
              className="btn-primary"
            >
              Dokumentasi
            </a>

            <a href="#features" className="btn-secondary">
              Features
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>

        <div className="grid">
          <div className="card">
            <span>⚡</span>
            <h3>Fast Deployment</h3>
            <p>Deploy aplikasi dengan sangat cepat menggunakan Vercel.</p>
          </div>

          <div className="card">
            <span>🔒</span>
            <h3>Secure</h3>
            <p>HTTPS dan SSL otomatis untuk semua project.</p>
          </div>

          <div className="card">
            <span>🌐</span>
            <h3>Global CDN</h3>
            <p>Content delivery network global untuk performa optimal.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>
          Sovia Wahyuningtyas • Applied Data Science • 2026
        </p>
      </footer>
    </main>
  )
}