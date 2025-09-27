import { auth, currentUser } from '@clerk/nextjs/server'

export default async function HomePage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }
  const user = await currentUser()

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome Home!.</h1>
      <br />
      <p>1. clerk authentication</p>
    </div>
  )
}
