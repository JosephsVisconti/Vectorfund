import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Vector Fund',
  description: 'Investing in the next generation of innovators',
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
              <span>VECTOR FUND</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
