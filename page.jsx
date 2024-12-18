import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center">
          <Image
            src="/gurukilli-logo.png"
            alt="Gurukilli Logo"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          <h1 className="text-6xl font-bold mb-4">Learn Smarter, Not Harder!</h1>
          <p className="text-2xl mb-8">Gamified learning for Std X students</p>
          <div className="flex justify-center space-x-4">
            <Link href="/courses" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
              <Play className="mr-2" size={20} />
              Start Learning
            </Link>
            <Link href="/features" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Explore Features
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-purple-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Mathematics', 'Science', 'Social Science'].map((subject) => (
              <div key={subject} className="bg-purple-700 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-semibold mb-4">{subject}</h3>
                <p className="mb-4">Explore interactive lessons, quizzes, and games in {subject}.</p>
                <Link href={`/courses/${subject.toLowerCase().replace(' ', '-')}`} className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Gurukilli?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Gamified Learning', description: 'Make learning fun with points, badges, and leaderboards' },
              { title: 'Personalized Experience', description: 'Adaptive learning paths tailored to your needs' },
              { title: 'Expert-Crafted Content', description: 'Curriculum designed by experienced educators' },
            ].map((feature) => (
              <div key={feature.title} className="bg-indigo-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Learning?</h2>
          <p className="text-xl mb-8">Join thousands of students who are already learning smarter with Gurukilli.</p>
          <Link href="/signup" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  )
}

