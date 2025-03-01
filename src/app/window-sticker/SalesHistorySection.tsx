import { BarChart2, AlertTriangle, CheckCircle } from "lucide-react"

export function SalesHistorySection() {
  const redFlags = [
    "Multiple owners in a short time",
    "Sold in different regions (possible flood damage)",
    "Inconsistent mileage records",
  ]

  return (
    <section className="w-full py-16 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-stone-800 text-center">
          Why Checking a Used Vehicle&apos;s Sales History is Crucial Before Purchase
        </h2>
        <div className="w-32 h-1 bg-stone-400 mx-auto mb-8"></div>

        <div className="bg-stone-50 p-8 shadow-lg">
          <div className="flex items-start mb-6">
            <BarChart2 className="w-12 h-12 text-primary mr-4 flex-shrink-0" />
            <p className="text-stone-700 leading-relaxed">
              A vehicle&apos;s sales history can reveal a lot about its life and its specifications listed on the window
              sticker. By checking the sales history through a VIN check, you can see if the car has a clean record or
              if it&apos;s been through rough times.
            </p>
          </div>
          <div className="vintage-card p-6 mb-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center text-stone-800">
              <AlertTriangle className="w-6 h-6 text-stone-600 mr-2" />
              Red Flags in Sales History
            </h3>
            <ul className="list-none space-y-2">
              {redFlags.map((flag, index) => (
                <li key={index} className="flex items-start text-stone-700">
                  <span className="text-stone-600 mr-2">•</span>
                  {flag}
                </li>
              ))}
            </ul>
          </div>
          <div className="vintage-card p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center text-stone-800">
              <CheckCircle className="w-6 h-6 text-stone-600 mr-2" />
              Benefits of Checking Sales History
            </h3>
            <p className="text-stone-700">
              By reviewing the sales history, you can make a more informed decision and potentially avoid purchasing a
              vehicle with hidden issues or a troubled past.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}