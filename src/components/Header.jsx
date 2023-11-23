import Link from "next/link"


export const Header = () => {
  return (
    <header className="flex justify-between bg-cyan-500 p-5">
        <h1>App</h1>
        <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>    
        </div>
    </header>
  )
}
