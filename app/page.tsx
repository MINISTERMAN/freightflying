import { ChevronLeft, ChevronRight, Facebook, Linkedin, Mail, Phone, Star, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function TruckPlusWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span>info@truckplus.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Phone className="h-4 w-4" />
            <span>+61 1234 567 123</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TRUCK PLUS</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                HOME
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                ABOUT US
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                SERVICES
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                PROJECTS
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                BLOG
              </Link>
              <Link href="#locations" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                LOCATIONS
              </Link>
              <Link href="#pages" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                PAGES
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
                CONTACT US
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=400&width=1200" alt="Airplane in sky" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-5xl font-bold text-white">ABOUT US</h1>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Logistics professionals"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">WHAT WE ARE</h2>
              <p className="text-gray-600 leading-relaxed">
                Truck Plus is a leading delivery and of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">CONTACT US</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">OUR PARTNERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="flex justify-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt={`Partner ${partner}`}
                    width={60}
                    height={60}
                    className="opacity-60"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">HAPPY CLIENTS</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client 1"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">CLIENT NAME</h4>
                    <p className="text-sm text-gray-600">Designation</p>
                    <div className="flex space-x-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Client 2"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">CLIENT NAME</h4>
                    <p className="text-sm text-gray-600">Designation</p>
                    <div className="flex space-x-1 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Logistics trucks on highway"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-md">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">FEATURED PROJECT 1</h3>
                <p className="text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">FULL PROJECTS</Button>
              </CardContent>
            </Card>
          </div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex space-x-4">
            <Button size="icon" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">CONTACT US</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text printing and typesetting industry.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">CONTACT NOW</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Social */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">TRUCK PLUS</span>
              </div>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                <Mail className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">SERVICES</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    PLANNING
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    CONSULTING
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    TRANSPORTATION
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    MAINTENANCE
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    CLEANING
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-6">NAVIGATION</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">CONTACT US</h4>
              <div className="space-y-4 text-gray-400">
                <p>ADDRESS: 123 Main Street Suite 100 New York, NY 10001</p>
                <p>PHONE: +61 1234 567 123</p>
                <p>EMAIL: info@truckplus.com</p>
                <div className="mt-6">
                  <h5 className="text-white font-semibold mb-3">NEWSLETTER</h5>
                  <div className="flex">
                    <Input
                      placeholder="Your Email"
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button className="bg-green-600 hover:bg-green-700 ml-2">SUBSCRIBE</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TRUCK PLUS. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
