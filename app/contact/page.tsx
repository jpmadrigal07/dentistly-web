import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Stethoscope, Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Menu } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email support",
      description: "Get help via email within 24 hours",
      contact: "support@dentistly.com",
      action: "Send email",
    },
    {
      icon: Phone,
      title: "Phone support",
      description: "Speak with our support team",
      contact: "1-800-DENTIST",
      action: "Call now",
    },
    {
      icon: MessageSquare,
      title: "Live chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM EST",
      action: "Start chat",
    },
  ]

  const offices = [
    {
      city: "Paete",
      address: "123 Market Street, Suite 400",
      zipcode: "4016",
      phone: "+63 123 456 4898",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-lime-50 to-stone-100">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Get in Touch</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 young-serif-regular">
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
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                      <method.icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <p className="font-medium text-gray-900 mb-4">{method.contact}</p>
                    <Button className="bg-lime-500 hover:bg-lime-600 text-white">{method.action}</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">
                    Send us a Message
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 young-serif-regular">
                    Let's start a conversation
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              <Card className="border-0 shadow-lg lg:order-last">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 young-serif-regular">Contact Form</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="practice">Practice Name</Label>
                    <Input id="practice" placeholder="Enter your practice name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What can we help you with?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your needs..." className="min-h-[120px]" />
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">
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
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800">Our Offices</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 young-serif-regular">Visit us in person</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We have offices across the country to better serve our dental practice customers.
                </p>
              </div>
            </div>
            <div className="grid gap-6 grid-cols-1 max-w-xl mx-auto">
              {offices.map((office, index) => (
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white young-serif-regular">Ready to get started?</h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't wait - start your free trial today and see how Dentistly can transform your practice.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                  Start Free
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-lime-600 bg-transparent"
                >
                  Schedule demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
