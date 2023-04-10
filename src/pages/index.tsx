import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div className="home-container">
        <p className="welcome">
          Hello, my name is J. Isaacs, Freelance Developer and Founder of <code className="font-mono font-bold">crate.digital</code>
        </p>
      </div>
    </main>
  )
}
