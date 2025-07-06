import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Users, Target, Heart, TrendingUp, Shield, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Dental Clinics" },
    { number: "50K+", label: "Patients Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "CEO & Co-Founder",
      bio: "Former practicing dentist with 15+ years of experience. Passionate about improving dental practice efficiency.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+Sarah+Mitchell+CEO",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Software architect with expertise in healthcare technology and HIPAA-compliant systems.",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Chen+CTO",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      bio: "UX expert focused on creating intuitive interfaces for healthcare professionals.",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez+Head+of+Product",
    },
    {
      name: "Dr. James Wilson",
      role: "Clinical Advisor",
      bio: "Practicing dentist and advisor helping shape product features for real-world dental practices.",
      image: "/placeholder.svg?height=300&width=300&text=Dr.+James+Wilson+Clinical+Advisor",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Everything we build is designed to improve patient care and experience.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "HIPAA compliance and data security are built into every feature we create.",
    },
    {
      icon: Users,
      title: "Dental Expertise",
      description: "Our team includes practicing dentists who understand your daily challenges.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description: "We're constantly improving our platform based on user feedback and industry trends.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container max-w-7xl mx-auto flex items-center">
          <Link href="/" className="flex items-center justify-center">
            <Stethoscope className="h-8 w-8 text-lime-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Dentistly</span>
          </Link>
          <nav className="ml-auto hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-lime-600 font-semibold">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="ml-6 hidden md:flex gap-2">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-lime-500 hover:bg-lime-600">
              Start Free Trial
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="ml-4 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-lime-50 to-stone-100">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Our Story</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Built by Dentists, <span className="text-lime-600">for Dentists</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand the unique challenges of running a dental practice because we've been there. Our mission
                  is to simplify practice management so you can focus on what matters most - your patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-lime-600 mb-2">{stat.number}</div>
                    <p className="text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Our Mission</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Transforming Dental Practice Management
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We started Dentistly because we experienced firsthand the frustrations of outdated practice
                    management systems. Complicated interfaces, poor customer support, and features that didn't match
                    real-world workflows.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Simplify Daily Operations</h4>
                      <p className="text-gray-600">
                        Streamline appointment scheduling, patient management, and administrative tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Improve Patient Care</h4>
                      <p className="text-gray-600">
                        Give you more time to focus on providing excellent dental care to your patients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Grow Your Practice</h4>
                      <p className="text-gray-600">
                        Provide insights and tools to help your practice thrive and expand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-white shadow-lg lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=550&text=Dental+Team+Collaboration+with+Dentistly"
                  width="550"
                  height="400"
                  alt="Dental team using Dentistly"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  What Drives Us Every Day
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-lime-100 p-3 w-fit mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-lime-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Meet Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  The People Behind Dentistly
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse team combines dental expertise with cutting-edge technology to create the best practice
                  management solution.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-lime-100 mx-auto mb-4 overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        width="96"
                        height="96"
                        alt={member.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3 bg-lime-100 text-lime-800">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lime-500">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Join Our Community?
                </h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of dental professionals who trust Dentistly to manage their practice efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-lime-600 bg-transparent"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-stone-50">
        <div className="container max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center">
          <div className="flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-lime-600" />
            <span className="text-lg font-bold text-gray-900">Dentistly</span>
            <span className="text-sm text-gray-500">by</span>
            <Link
              href="https://zkript.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-lime-600 hover:text-lime-700 transition-colors"
            >
              Zkript
            </Link>
          </div>
          <p className="text-xs text-gray-600 sm:ml-4">© 2024 Dentistly. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
