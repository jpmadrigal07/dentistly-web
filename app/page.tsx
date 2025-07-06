import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Users,
  Building2,
  Stethoscope,
  UserPlus,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Menu,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
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
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-lime-600 transition-colors">
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
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">
                    Trusted by 500+ Dental Clinics
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Streamline Your Dental Practice with <span className="text-lime-600">Dentistly</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    The complete SaaS solution for managing your dental clinic. Handle appointments, patients,
                    procedures, and team members all in one powerful platform.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-white shadow-2xl lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  width="600"
                  height="400"
                  alt="Happy dental team and patients using Dentistly software"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">
                  Powerful Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Everything You Need to Run Your Dental Practice
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From appointment scheduling to patient management, Dentistly provides all the tools you need to
                  operate efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-lime-100 p-3">
                    <Calendar className="h-8 w-8 text-lime-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Appointment Management</h3>
                  <p className="text-center text-gray-600">
                    Schedule, reschedule, and manage appointments with ease. Send automated reminders to reduce
                    no-shows.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-emerald-100 p-3">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Patient Records</h3>
                  <p className="text-center text-gray-600">
                    Maintain comprehensive patient records, treatment history, and medical information securely.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-sky-100 p-3">
                    <Building2 className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Multi-Clinic Support</h3>
                  <p className="text-center text-gray-600">
                    Manage multiple clinic locations from a single dashboard with centralized reporting.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-amber-100 p-3">
                    <Stethoscope className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Procedure Tracking</h3>
                  <p className="text-center text-gray-600">
                    Track dental procedures like cleanings, extractions, and treatments with detailed documentation.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-rose-100 p-3">
                    <UserPlus className="h-8 w-8 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Team Management</h3>
                  <p className="text-center text-gray-600">
                    Add and manage team members with role-based access control and permissions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-indigo-100 p-3">
                    <BarChart3 className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Analytics & Reports</h3>
                  <p className="text-center text-gray-600">
                    Get insights into your practice performance with detailed analytics and custom reports.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">
                    Why Choose Dentistly
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    Built Specifically for Dental Professionals
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We understand the unique challenges of running a dental practice. Our platform is designed with
                    dental professionals in mind.
                  </p>
                </div>
                <ul className="grid gap-4 py-4">
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">HIPAA Compliant</h4>
                      <p className="text-gray-600">
                        Your patient data is secure and compliant with healthcare regulations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Save Time Daily</h4>
                      <p className="text-gray-600">Automate routine tasks and focus more on patient care.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <BarChart3 className="h-5 w-5 text-lime-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Increase Revenue</h4>
                      <p className="text-gray-600">
                        Reduce no-shows and optimize scheduling to maximize your practice revenue.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl bg-white shadow-lg lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  width="550"
                  height="400"
                  alt="Smiling dental professionals and happy patients in modern clinic"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Loved by Dental Professionals
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Dentistly has transformed how we manage our practice. The appointment scheduling alone has saved us
                    hours each week."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center">
                      <span className="text-lime-600 font-semibold">DR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Smile Dental Clinic</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The patient management system is incredible. We can access complete treatment histories instantly."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">DM</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dr. Michael Chen</p>
                      <p className="text-sm text-gray-600">Downtown Dental</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Managing multiple locations is now effortless. The centralized dashboard gives us complete
                    visibility."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                      <span className="text-sky-600 font-semibold">EW</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dr. Emily Wilson</p>
                      <p className="text-sm text-gray-600">Family Dental Group</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lime-500">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Transform Your Dental Practice?
                </h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of dental professionals who trust Dentistly to manage their practice efficiently.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Enter your email" className="flex-1 bg-white border-white" />
                  <Button type="submit" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                    Start Free Trial
                  </Button>
                </form>
                <p className="text-xs text-lime-100">14-day free trial. No credit card required.</p>
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
