import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Printer, FileText, Store, Shield, Palette, Compass, AlertTriangle, Search, FileSearch, Clock, Car } from 'lucide-react'
import Link from "next/link"
import { getBaseUrl } from './defaults'

export default function ServiceList() {

  const baseUrl = getBaseUrl();
  
  // Define services based on domain name
  let services = [];
  
  if (baseUrl.includes('autovinlookup')) {
    services = [
      {
        title: "Window Sticker",
        description: "Generate and print an authentic window sticker for any vehicle using its VIN.",
        icon: Printer,
        path: "/window-sticker-by-vin",
      },
      {
        title: "Build Sheet by VIN",
        description: "Obtain a comprehensive factory build sheet detailing all specifications for any Toyota using its VIN.",
        icon: FileText,
        path: "/build-sheet-by-vin",
      },
      {
        title: "Dealers",
        description: "Access unlimited vehicle history reports and detailed information for Toyota dealerships.",
        icon: Store,
        path: "/unlimited-vin-check-carfax-for-dealers",
      },
      {
        title: "Paint Code by VIN",
        description: "Find the exact paint code and color details for a Toyota by VIN.",
        icon: Palette,
        path: "/paint-code-by-vin",
      },
      {
        title: "Warranty Check",
        description: "Check the warranty status and coverage details of a Toyota by VIN.",
        icon: Shield,
        path: "/warranty-by-vin",
      },
    ];
  } else if (baseUrl.includes('toyotavindecoder')) {
    services = [
      {
        title: "Window Sticker",
        description: "Generate and print an authentic window sticker for any Toyota vehicle using its VIN.",
        icon: Printer,
        path: "/window-sticker",
      },
      {
        title: "Build Sheet by VIN",
        description: "Obtain a comprehensive factory build sheet detailing all specifications for any Toyota using its VIN.",
        icon: FileText,
        path: "/build-sheet-by-vin",
      },
      {
        title: "Dealers",
        description: "Access unlimited vehicle history reports and detailed information for Toyota dealerships.",
        icon: Store,
        path: "/unlimited-vin-reports",
      },
      {
        title: "Paint Code by VIN",
        description: "Find the exact paint code and color details for a Toyota by VIN.",
        icon: Palette,
        path: "/paint-code-by-vin",
      },
      {
        title: "Option By VIN",
        description: "Look up factory-installed options and packages for any Toyota by VIN.",
        icon: Compass,
        path: "/options-by-vin",
      },
      {
        title: "Warranty Check",
        description: "Check the warranty status and coverage details of a Toyota by VIN.",
        icon: Shield,
        path: "/warranty-by-vin",
      },
      {
        title: "Specs By VIN",
        description: "Retrieve detailed specifications, including engine, transmission, and dimensions, for any Toyota by VIN.",
        icon: AlertTriangle,
        path: "/specs-by-vin",
      }
    ];
  } else if (baseUrl.includes('chassisvin')) {
    services = [
      {
        title: "Window Sticker",
        description: "Print window sticker for your vehicle",
        icon: Printer,
        path: "/window-sticker",
      },
      {
        title: "VIN Decoder",
        description: "Decode any vehicle manufacturer",
        icon: Car,
        path: "/vin-decoder",
      },
      {
        title: "Classic VIN Lookup",
        description: "Decode VINs for classic and vintage vehicles",
        icon: Clock,
        path: "/classic-lookup",
      },
      {
        title: "License Plate Lookup",
        description: "Search license plate information",
        icon: Search,
        path: "/license-plate-lookup",
      },
      {
        title: "VIN Check",
        description: "Decode any vehicle in US states",
        icon: FileSearch,
        path: "/vin-check",
      },
      {
        title: "Build Sheet by VIN",
        description: "Get detailed build sheet for your vehicle",
        icon: FileText,
        path: "/build-sheet-by-vin",
      },
      {
        title: "Dealers",
        description: "Unlimited vehicle history reports",
        icon: Store,
        path: "/unlimited-vehicle-history-reports",
      },
      {
        title: "Paint Code by VIN",
        description: "Find your vehicle's exact paint color code",
        icon: Palette,
        path: "/paint-code-by-vin",
      },
      {
        title: "VIN Explorer",
        description: "Explore detailed vehicle information by VIN",
        icon: Compass,
        path: "/vin-explorer",
      },
      {
        title: "Warranty Check",
        description: "Check warranty information by VIN",
        icon: Shield,
        path: "/warranty-by-vin",
      },
      {
        title: "Vehicle Recalls",
        description: "Understanding Vehicle Recalls: A Complete Guide",
        icon: AlertTriangle,
        path: "/vehicle-recalls",
      }
    ];
  } else {
    // Default services if domain doesn't match any of the above
    services = [
      {
        title: "Window Sticker",
        description: "Generate and print an authentic window sticker for any vehicle using its VIN.",
        icon: Printer,
        path: "/window-sticker",
      }
    ];
  }

  return (
    <section className="bg-white">
      <div className="max-w-6xl py-8 mx-auto">
        <h2 className="text-3xl mb-6 text-left">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link href={service.path} key={index} className="block group">
              <Card className="h-full transition-all duration-300 hover:shadow-md border-100 overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-100 p-2 rounded-full">
                      <service.icon className="w-6 h-6 text-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-600 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm mt-1">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}