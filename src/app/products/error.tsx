'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Error({
  error,
  // reset,
}: {
  error: Error & { digest?: string }
  // reset: () => void
  }) {
  const handleReset = () => {
    
  }
  const router = useRouter()
  return (
    <div className="h-[80vh] w-full flex flex-col  justify-center gap-4 items-center">
      <h2 className="text-lg">Oops, something went wrong !</h2>
      <button onClick={() => router.refresh()} className="px-6 bg-blue-context text-white py-2 shadow-sm  ">Try again</button>
    </div>
  )
}