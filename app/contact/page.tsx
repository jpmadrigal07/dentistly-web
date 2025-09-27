import { Button } from "@/components/ui/button"
import { UnavailableTooltip } from "@/components/unavailable-tooltip"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Menu } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Contact Dentistly - Get in Touch',
  description: 'Contact Dentistly for support, questions, or feedback. Our team is ready to help your dental practice succeed.',
  keywords: [
    'contact Dentistly', 'dental SaaS support', 'dental software help', 'dental clinic management', 'practice management', 'Dentistly support', 'Philippines dentist', 'Philippines dental', 'AI dental', 'analytics', 'reports', 'healthcare software'
  ],
  openGraph: {
    title: 'Contact Dentistly - Get in Touch',
    description: 'Contact Dentistly for support, questions, or feedback. Our team is ready to help your dental practice succeed.',
    url: 'https://dentistly.app/contact',
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
    title: 'Contact Dentistly - Get in Touch',
    description: 'Contact Dentistly for support, questions, or feedback. Our team is ready to help your dental practice succeed.',
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    site: '@dentistly',
    creator: '@dentistly',
  },
  metadataBase: new URL('https://dentistly.app'),
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email support",
      description: "Get help via email within 24 hours",
      contact: "contact@zkript.dev",
      action: "Send email",
      disabled: false,
    },
    {
      icon: Phone,
      title: "Phone support",
      description: "Speak with our support team",
      contact: "Not available now",
      action: "Call now",
      disabled: true,
    },
    {
      icon: MessageSquare,
      title: "Live chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM",
      action: "Start chat",
      disabled: true,
    },
  ]

  const offices: any = [
    // {
    //   city: "Paete",
    //   address: "123 Market Street, Suite 400",
    //   zipcode: "4016",
    //   phone: "+63 123 456 4898",
    // },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-lime-50 to-stone-100">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Get in Touch</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 young-serif-regular">
                  We're Here to <span className="text-lime-600">Help</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions about Dentistly? Need help getting started? Our team of dental software experts is
                  ready to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method, index) => {
                const isDisabled = method.disabled;
                return (
                  <Card
                    key={index}
                    className={`border-0 shadow-lg transition-shadow text-center ${isDisabled ? 'opacity-50 pointer-events-none select-none' : 'hover:shadow-xl'}`}
                    aria-disabled={isDisabled}
                  >
                    <CardContent className="p-6">
                      <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                        <method.icon className="h-6 w-6 text-sky-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                      <p className="font-medium text-gray-900 mb-4">{method.contact}</p>
                      {method.title === "Email support" ? (
                        <a href={`mailto:${method.contact}`} tabIndex={isDisabled ? -1 : 0} aria-disabled={isDisabled}>
                          <Button className="bg-lime-500 hover:bg-lime-600 text-white" disabled={isDisabled}>{method.action}</Button>
                        </a>
                      ) : (
                        <Button className="bg-lime-500 hover:bg-lime-600 text-white" disabled={isDisabled}>{method.action}</Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">
                    Send us a Message
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                    Let's start a conversation
                  </h2>
                  <p className="max-w-[600px] text-gray-600 text-base/relaxed">
                    Fill out the form and we'll get back to you within 24 hours. For urgent matters, please call our
                    support line.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Response time</h4>
                      <p className="text-gray-600">We typically respond within 2-4 hours during business hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="h-5 w-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert support</h4>
                      <p className="text-gray-600">Our team includes dental professionals who understand your needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-lg lg:order-last opacity-50 pointer-events-none select-none" aria-disabled="true">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 young-serif-regular">Contact Form</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" disabled />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="practice">Practice Name</Label>
                    <Input id="practice" placeholder="Enter your practice name" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What can we help you with?" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your needs..." className="min-h-[120px]" disabled />
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white" disabled>
                    Send message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">Our Office</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">Visit us in person</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have office in the country to better serve our dental practice customers.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 max-w-xl mx-auto">
              {offices.map((office: any, index: number) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-sky-600" />
                      <h3 className="font-semibold text-gray-900">{office.city}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{office.address}</p>
                      <p>{office.zipcode}</p>
                      <div className="flex items-center gap-2 pt-2">
                        <Phone className="h-4 w-4 text-sky-600" />
                        <span className="font-medium">{office.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-lime-500">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white young-serif-regular">Ready to get started?</h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't wait - start your free trial today and see how Dentistly can transform your practice.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href={`${process.env.NEXT_PUBLIC_ACCOUNT_URL}/dashboard`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                    Start Free
                  </Button>
                </Link>
                <UnavailableTooltip>
                  <span>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-lime-600 bg-transparent"
                      disabled
                    >
                      Schedule demo
                    </Button>
                  </span>
                </UnavailableTooltip>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
