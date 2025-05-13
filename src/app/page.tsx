import styles from './styles/button.module.css'
// import { useState } from 'react'

export default function Home() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-[100vh] h-[100%] bg-gradient-to-b from-black to-blue-900 flex flex-col">
      {/* Navigation */}
      <nav className="py-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-14">
          <div className="text-white font-bold text-xl">CI/CD Demo fixed!</div>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#" className={styles.button}>
              <span>Home</span>
            </a>
            <a href="#" className={styles.button}>
              <span>About</span>
            </a>
            <a href="#" className={styles.button}>
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-600">CI/CD</span> test to Vercel
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
            Testing automated deployment pipeline with GitHub Actions
          </p>
        </section>

        {/* Bullet Points */}
        <section className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Automated Testing</h3>
              <p className="text-sm text-blue-200">
                Running Jest tests to ensure code quality and functionality
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Code Quality</h3>
              <p className="text-sm text-blue-200">
                Enforcing code standards with ESLint and Prettier
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Continuous Deployment</h3>
              <p className="text-sm text-blue-200">
                Automatic deployment to Vercel when tests pass
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-blue-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-white text-sm">© 2024 CI/CD Demo. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>Vercel</span>
              </a>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <span>Next.js</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
