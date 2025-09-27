"use client"
import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/5 via-transparent to-[#7c3aed]/5 pointer-events-none" />

      <header className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-balance bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            DrawTogether
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto">
            Collaborate. Create. Connect.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div>
              <Link
                href="/auth/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-[#8b5cf6] px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-white shadow-lg shadow-[#8b5cf6]/25 transition-all duration-200 hover:bg-[#7c3aed] hover:shadow-[#7c3aed]/30 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/50 active:scale-95"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <Link
                href="/auth/login"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-[#8b5cf6] bg-transparent px-6 sm:px-8 py-3 sm:py-3.5 font-medium text-[#8b5cf6] transition-all duration-200 hover:bg-[#8b5cf6]/10 hover:border-[#7c3aed] hover:text-[#7c3aed] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5cf6]/50 backdrop-blur-sm"
              >
                Log In
              </Link>
            </div>
          </div>

        </div>
      </header>

      <section className="relative container mx-auto px-4 pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group rounded-xl bg-[#1a1a1a] p-6 sm:p-8 border border-gray-800/50 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-[#8b5cf6]/10 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Real-time Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Draw together on the same canvas with instant updates across devices.</p>
            </div>

            <div className="group rounded-xl bg-[#1a1a1a] p-6 sm:p-8 border border-gray-800/50 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-[#8b5cf6]/10 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Intuitive Drawing Tools</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Simple, powerful tools that stay out of your way so ideas can flow.</p>
            </div>

            <div className="group rounded-xl bg-[#1a1a1a] p-6 sm:p-8 border border-gray-800/50 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:bg-[#1f1f1f] hover:shadow-lg hover:shadow-[#8b5cf6]/10 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Instant Chat</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Coordinate with teammates in real time without leaving the canvas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#8b5cf6]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </main>
  )
}