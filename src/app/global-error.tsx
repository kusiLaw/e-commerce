'use client'
import Nav from "@/components/nav"
import Footer from "@/components/footer/footer"


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <Nav/>
        <div className="flex flex-col justify-center items-center py-20 ">
          <h2>Something went wrong!</h2>
          <button onClick={() => reset()}>Try again</button>
        </div>
        <Footer/>
      </body>
    </html>
  )
}