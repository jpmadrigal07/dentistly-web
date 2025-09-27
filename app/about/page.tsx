import { Button } from "@/components/ui/button"
import { UnavailableTooltip } from "@/components/unavailable-tooltip"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, Users, Target, Heart, TrendingUp, Shield, Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: 'About Dentistly - Built by Dentists, for Dentists',
  description: 'Learn about Dentistly, our mission, values, and the team behind the leading dental practice management SaaS platform.',
  keywords: [
    'about Dentistly', 'dental SaaS', 'dental software', 'dental clinic management', 'practice management', 'Dentistly team', 'Philippines dentist', 'Philippines dental', 'AI dental', 'analytics', 'reports', 'healthcare software'
  ],
  openGraph: {
    title: 'About Dentistly - Built by Dentists, for Dentists',
    description: 'Learn about Dentistly, our mission, values, and the team behind the leading dental practice management SaaS platform.',
    url: 'https://dentistly.app/about',
    siteName: 'Dentistly',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        width: 2070,
        height: 1380,
        alt: 'Happy dental team and patients using Dentistly software',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dentistly - Built by Dentists, for Dentists',
    description: 'Learn about Dentistly, our mission, values, and the team behind the leading dental practice management SaaS platform.',
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    site: '@dentistly',
    creator: '@dentistly',
  },
  metadataBase: new URL('https://dentistly.app'),
};

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Dental clinics" },
    { number: "50K+", label: "Patients managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ]

  const team = [
    {
      name: "John Patrick Madrigal",
      role: "Chief Wizard",
    bio: "He doesn't do magic, but he works wonders with code and a little bit on Marketing, Sales and Business. As an all-around person in charge at the company, he added 'Wizard' to his title to show that titles don't matter—what truly matters is the value brought to the company and, most importantly, to the customers.",
      image: "/jp-image.jpg",
    },
        {
      name: "Dr. Harieth Miguel, DMD",
      role: "Dental Subject Matter Expert",
      bio: "She has an extensive experience in the dental field, with a focus on patient care and practice management. She worked in the Middle East for 20+ years and is proficient in aspects of automation and digital transformation in dentistry. She established dental clinics in the Philippines focusing on Dental and Aesthetic.",
      image: "/placeholder.svg",
    },
    // {
    //   name: "Dr. Kris Bernal",
    //   role: "Head of Product & Co-Founder",
    //   bio: "Former practicing dentist with 15+ years of experience. Passionate about improving dental practice efficiency.",
    //   image: "/placeholder.svg?height=300&width=300&text=Emily+Rodriguez+Head+of+Product",
    // },
  ]

  const values = [
    {
      icon: Heart,
      title: "Patient-centered",
      description: "Everything we build is designed to improve patient care and experience.",
    },
    {
      icon: Shield,
      title: "Security first",
      description: "DPA compliance and data security are built into every feature we create.",
    },
    {
      icon: Users,
      title: "Dental expertise",
      description: "Our team includes practicing dentists who understand your daily challenges.",
    },
    {
      icon: TrendingUp,
      title: "Continuous innovation",
      description: "We're constantly improving our platform based on user feedback and industry trends.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-lime-50 to-stone-100">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Our Story</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 young-serif-regular">
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
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
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
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Our Mission</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                    Transforming Dental practice management
                  </h2>
                  <p className="max-w-[600px] text-gray-600 text-base/relaxed">
                    We started Dentistly because we experienced firsthand the frustrations of outdated practice
                    management systems. Complicated interfaces, poor customer support, and features that didn't match
                    real-world workflows.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Simplify daily operations</h4>
                      <p className="text-gray-600">
                        Streamline appointment scheduling, patient management, and administrative tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Improve patient care</h4>
                      <p className="text-gray-600">
                        Give you more time to focus on providing excellent dental care to your patients.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Grow your practice</h4>
                      <p className="text-gray-600">
                        Provide insights and tools to help your practice thrive and expand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-white shadow-lg lg:order-last flex items-center justify-center">
                <Image
                  src="https://images.pexels.com/photos/12429162/pexels-photo-12429162.jpeg"
                  width="550"
                  height="400"
                  alt="Group of smiling people in a bright setting"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Our Values</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                  What drives us every day
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-sky-600" />
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
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Meet Our Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                  The People behind Dentistly
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 text-base/relaxed">
                  Our diverse team combines dental expertise with cutting-edge technology to create the best practice
                  management solution.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
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
                    <Badge variant="secondary" className="mb-3 bg-sky-100 text-sky-800">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white young-serif-regular">
                  Ready to join our Community?
                </h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of dental professionals who trust Dentistly to manage their practice efficiently.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                {/* Start Free button disabled with UnavailableTooltip */}
                <Link href={`${process.env.NEXT_PUBLIC_ACCOUNT_URL}/dashboard`} target="_blank" rel="noopener noreferrer">
                  <span>
                    <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                      Start Free
                    </Button>
                  </span>
                </Link>
                {/* Contact us button as Next.js Link, design preserved */}
                <Link href="/contact" passHref legacyBehavior>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-lime-600 bg-transparent"
                  >
                    <a>Contact us</a>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
