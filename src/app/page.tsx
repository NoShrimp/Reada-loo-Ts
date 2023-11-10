'use client'

import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession()


  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (session) {
    return (
      <main>
        <div className='flex flex-col items-center mt-10 gap-3'>
          <img src={session.user?.image ?? ''} className='w-[50px] h-[50px] rounded-full' />
          <div className='text-left'>
            <p className='text-center font-semibold'>Signed in as</p>
            Email : {session.user?.email} <br />
            Name : {session.user?.name} <br />
          </div>
          <a href="/Test">Press here</a>
          <button onClick={() => signOut()} className='p-2 px-5 bg-red-100 rounded-full border-2 border-red-200 hover:border-red-500 dark:bg-red-900 dark:border-red-600 dark:hover:border-red-800'>Sign out</button>
        </div>
      </main>
    )
  }

  return (
    <>
      <div className='flex flex-col items-center mt-10 gap-3'>
        Not signed in <br />
        <button onClick={() => signIn()} className='p-2 px-5 bg-green-500 text-green-900 text-bold rounded-full border-2 border-green-200 hover:border-green-900'>Sign In</button>
        <a href="/Test">test pdf</a>
      </div>
    </>
  )


}


