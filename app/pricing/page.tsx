import { Button } from "@/components/ui/button"
import { UnavailableTooltip } from "@/components/unavailable-tooltip"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Stethoscope, ArrowRight, Shield, Headphones, Zap, Star } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Dentistly Pricing - Simple, Transparent Plans',
  description: 'See Dentistly pricing for dental clinics. No setup fees, no contracts. Choose the plan that fits your practice and scale as you grow.',
  keywords: [
    'dentist pricing', 'dental SaaS pricing', 'dental software cost', 'Dentistly pricing', 'dental clinic management', 'practice management', 'Philippines dentist', 'Philippines dental', 'AI dental', 'analytics', 'reports', 'healthcare software'
  ],
  openGraph: {
    title: 'Dentistly Pricing - Simple, Transparent Plans',
    description: 'See Dentistly pricing for dental clinics. No setup fees, no contracts. Choose the plan that fits your practice and scale as you grow.',
    url: 'https://dentistly.app/pricing',
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
    title: 'Dentistly Pricing - Simple, Transparent Plans',
    description: 'See Dentistly pricing for dental clinics. No setup fees, no contracts. Choose the plan that fits your practice and scale as you grow.',
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    ],
    site: '@dentistly',
    creator: '@dentistly',
  },
  metadataBase: new URL('https://dentistly.app'),
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: 0,
      description: "Perfect for small dental practices just getting started",
      badge: null,
      features: [
        { name: "Up to 10 patients", included: true },
        { name: "2 staff users", included: true },
        { name: "Appointment scheduling", included: true },
        { name: "Basic patient records", included: true },
        { name: "Email reminders", included: true },
        { name: "Basic reporting", included: true },
        { name: "Email support", included: true },
        { name: "Multi-clinic support", included: false },
        { name: "Advanced analytics", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Professional",
      price: 449,
      description: "Ideal for growing practices with multiple staff members",
      badge: "Most Popular",
      features: [
        { name: "Up to 70 patients", included: true },
        { name: "10 staff users", included: true },
        { name: "Advanced scheduling", included: true },
        { name: "Complete patient records", included: true },
        { name: "SMS & email reminders", included: true },
        { name: "Advanced reporting", included: true },
        { name: "Phone & email support", included: true },
        { name: "Up to 3 clinic locations", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Basic integrations", included: true },
        { name: "Priority support", included: false },
        { name: "Dedicated account manager", included: false },
      ],
      cta: "Start 7-day Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 899,
      description: "For large practices and multi-location dental groups",
      badge: "Best Value",
      features: [
        { name: "Unlimited patients", included: true },
        { name: "Unlimited staff users", included: true },
        { name: "Advanced scheduling + AI", included: true },
        { name: "Complete patient records", included: true },
        { name: "SMS, email & voice reminders", included: true },
        { name: "Custom reporting", included: true },
        { name: "24/7 priority support", included: true },
        { name: "Unlimited clinic locations", included: true },
        { name: "Advanced analytics + AI", included: true },
        { name: "Custom integrations", included: true },
        { name: "Priority support", included: true },
        { name: "Dedicated account manager", included: true },
      ],
      cta: "Start 7-day Free Trial",
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a Free forever for all plans. No credit card required to get started.",
    },
    {
      question: "Can I change plans anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is my patient data secure?",
      answer: "Yes, we're fully DPA compliant and use enterprise-grade security to protect all patient information.",
    },
    {
      question: "Do you offer training?",
      answer:
        "Yes, we provide comprehensive onboarding and training for all new customers, plus ongoing support resources.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, ACH transfers, and can arrange annual billing for enterprise customers.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees! We'll help you get started and migrate your existing data at no additional cost.",
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
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">
                  Simple, Transparent Pricing
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 young-serif-regular">
                  Choose the perfect plan for your <span className="text-lime-600 font-bold">Dental Practice</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start with our ₱0/month plan. No setup fees, no long-term contracts. Scale as your practice grows.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
              {plans.map((plan, index) => (
                <UnavailableTooltip message="All features are free right now. Please create an account." key={plan.name}>
                  <div className="relative opacity-50 pointer-events-none select-none">
                    <Card className={`border-0 shadow-lg transition-all duration-300 ${plan.popular ? "ring-2 ring-lime-500 scale-105" : ""}`}>
                      {plan.badge && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                          <Badge className="bg-lime-500 text-white px-3 py-1">{plan.badge}</Badge>
                        </div>
                      )}
                      <CardHeader className="text-center pb-8 pt-6">
                        <h3 className="text-2xl font-bold text-gray-900 young-serif-regular">{plan.name}</h3>
                        <div className="mt-4">
                          <span className="text-4xl font-bold text-gray-900">₱{plan.price}</span>
                          <span className="text-gray-600">/month</span>
                        </div>
                        <p className="text-gray-600 mt-2">{plan.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <Button className="w-full" size="lg" disabled>
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <div className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              {feature.included ? (
                                <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                              ) : (
                                <X className="h-4 w-4 text-gray-300 flex-shrink-0" />
                              )}
                              <span className={`text-sm ${feature.included ? "text-gray-900" : "text-gray-400"}`}>
                                {feature.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </UnavailableTooltip>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-stone-50">
          <div className="container max-w-7xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">
                  Why Choose Dentistly
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                  Everything You Need, Nothing You Don't
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                    <Shield className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">DPA Compliant</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade security for all patient data</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                    <Zap className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Setup</h3>
                  <p className="text-sm text-gray-600">Get started in minutes, not weeks</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                    <Headphones className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-sm text-gray-600">Dedicated support from dental software experts</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="rounded-full bg-sky-100 p-3 w-fit mx-auto mb-4">
                    <Star className="h-6 w-6 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-sm text-gray-600">Trusted by 500+ dental practices</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-lime-100 px-3 py-1 text-sm text-lime-800 mb-6">
                  Frequently asked questions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 young-serif-regular">
                  Got questions? We've got answers
                </h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white young-serif-regular">Ready to get started?</h2>
                <p className="mx-auto max-w-[600px] text-lime-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join hundreds of dental professionals who trust Dentistly. Start your free trial today.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href={`${process.env.NEXT_PUBLIC_ACCOUNT_URL}/dashboard`} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="bg-white text-lime-600 hover:bg-stone-100">
                    Start Free
                    <ArrowRight className="ml-2 h-4 w-4" />
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
              <p className="text-xs text-lime-100">Free forever • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
