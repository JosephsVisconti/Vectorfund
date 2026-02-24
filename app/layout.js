import './globals.css'
import Header from '../components/Header'
import LogoMark from '../components/LogoMark'

export const metadata = {
  title: 'Vector Fund',
  description: 'Vector Fund bridges experienced investors with AI-native technical founders. Pre-seed capital, legal infrastructure, and go-to-market support.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Header />
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <div className="footer-content">
              <LogoMark size={28} opacity={0.4} />
              <span className="footer-copy">&copy; {new Date().getFullYear()} Vector Fund</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
