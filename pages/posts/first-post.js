import Link from 'next/link'

export default function FirstPost() {
    return (
        <>
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
            <h1>First Post</h1>
            <Link href="/">
            <a>Back to home</a>
            </Link>
        </>
    )
  }
  