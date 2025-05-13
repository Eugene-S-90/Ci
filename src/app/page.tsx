'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // asdsa
    console.log('rener')
    setCount(count + 1)
    return () => {
      console.log('return')
    }
  }, [setCount])
  console.log(count)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js</h1>
        <h2 className="text-2xl font-bold mb-8">Hello! again</h2>
      </div>
    </main>
  )
}
