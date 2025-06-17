'use client'

import { useState, useEffect, useTransition } from 'react'

export default function Home() {
  const [versionInfo, setVersionInfo] = useState({})

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [_, startTransition] = useTransition()

  useEffect(() => {
    startTransition(async () => {
      const respose = await fetch(`${process.env.NEXT_PUBLIC_IDENTITY_API_BASEURL}/version`)
      console.log(process.env)

      const info = await respose.json()

      setVersionInfo(info)
    })
  })

  return (
    <div className="flex h-screen">
      <div className="flex m-auto">
        <h1 className="text-2xl font-light">HORUS</h1>
        <span className="mx-1 font-bold">.</span>
        <h1 className="text-2xl font-bold">IDENTITY</h1>
      </div>
      <pre className="m-auto">
        {JSON.stringify(versionInfo, null, 2)}
      </pre>
    </div>
  )
}
