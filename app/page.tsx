import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plane, Truck, Ship, Warehouse, Package, ChevronLeft, ChevronRight, ArrowRight, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-800 text-white px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">GlobeFarer</div>
            <div className="w-6 h-6 bg-yellow-400 transform rotate-45"></div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Pages
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Services
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Blog
            </Link>
            <Link href="#" className="hover:text-yellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="bg-transparent border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-800"
            >
              📦 Track Your Order
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-slate-700 overflow-hidden">
        <Image src="/images/hero-airplane.jpg" alt="Airplane in flight" fill className="object-cover opacity-80" />
        <div className="absolute inset-0 bg-slate-800/50"></div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Fast and secure courier for all your packages
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Your packages will not be damaged with our expert courier services.
            </p>
            <Button size="lg" className="bg-yellow-400 text-slate-800 hover:bg-yellow-500 font-semibold">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation arrows */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2">
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2">
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </section>

      {/* Service Tabs */}
      <section className="bg-slate-700 py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="land" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-transparent h-auto p-0">
              <TabsTrigger
                value="ocean"
                className="text-white border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent rounded-none py-4"
              >
                Ocean Freight
              </TabsTrigger>
              <TabsTrigger
                value="land"
                className="text-white border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent rounded-none py-4"
              >
                Land Transport
              </TabsTrigger>
              <TabsTrigger
                value="air"
                className="text-white border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent rounded-none py-4"
              >
                Air Freight
              </TabsTrigger>
              <TabsTrigger
                value="warehouse"
                className="text-white border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:bg-transparent rounded-none py-4"
              >
                Warehousing
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Fast and Reliable Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Fast and reliable shipping services</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We provide comprehensive logistics solutions with cutting-edge technology to ensure your packages reach
                their destination safely and on time.
              </p>
              <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-500 font-semibold">
                ➤ View more about our services
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Yellow delivery trucks"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-yellow-400">
              <CardContent className="pt-6">
                <Plane className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                <p className="text-gray-600">Fast international shipping via air transport for urgent deliveries.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <CardContent className="pt-6">
                <Truck className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Rail Freight</h3>
                <p className="text-gray-600">
                  Cost-effective rail transport for bulk cargo and long-distance shipping.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
              <CardContent className="pt-6">
                <Package className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">LTL Freight</h3>
                <p className="text-gray-600">Less-than-truckload shipping for smaller cargo loads.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-cyan-500">
              <CardContent className="pt-6">
                <Ship className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Sea Freight</h3>
                <p className="text-gray-600">Ocean shipping for large cargo volumes and international trade.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-orange-500">
              <CardContent className="pt-6">
                <Truck className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Land Freight</h3>
                <p className="text-gray-600">Ground transportation for domestic and regional deliveries.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
              <CardContent className="pt-6">
                <Warehouse className="h-16 w-16 mx-auto mb-4 text-slate-600" />
                <h3 className="text-xl font-bold mb-2">Warehousing</h3>
                <p className="text-gray-600">Secure storage and distribution services for your inventory.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Secure Courier Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Truck className="h-12 w-12 text-slate-600 mb-4" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Truck className="h-12 w-12 text-slate-600 mb-4" />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
                  <Truck className="h-16 w-16 text-slate-600 mb-4" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Secure courier for small & big packages</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. No matter the size of your shipment, we provide
                secure handling and tracking for complete peace of mind.
              </p>
              <Button className="bg-yellow-400 text-slate-800 hover:bg-yellow-500 font-semibold">
                ➤ View more about our services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative py-20 bg-slate-800 text-white overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Courier delivering in city"
          fill
          className="object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8 max-w-4xl mx-auto">
            "GlobeFarer has transformed our logistics operations. Their reliable service and advanced tracking system
            give us complete confidence in our shipments."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
            <div>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-gray-300">Supply Chain Manager</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold">GlobeFarer</div>
                <div className="w-6 h-6 bg-yellow-400 transform rotate-45"></div>
              </div>
              <p className="text-gray-400">Your trusted partner for global logistics and courier services.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Land Transport
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Warehousing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-yellow-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@globefarer.com</p>
                <p>📍 123 Logistics Ave, City, State 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GlobeFarer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
