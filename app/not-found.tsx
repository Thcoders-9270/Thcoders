import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl sm:text-9xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-3">Page Not Found</h1>
        <p className="text-zinc-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
