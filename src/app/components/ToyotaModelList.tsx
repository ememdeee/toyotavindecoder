const toyotaModels = [
  { model: "Avalon", yearAvailable: "1995+" },
  { model: "Camry", yearAvailable: "1982+" },
  { model: "Corolla", yearAvailable: "1966+" },
  { model: "Highlander", yearAvailable: "2000+" },
  { model: "Land Cruiser", yearAvailable: "1951+" },
  { model: "Prius", yearAvailable: "1997+" },
  { model: "RAV4", yearAvailable: "1994+" },
  { model: "Sequoia", yearAvailable: "2000+" },
  { model: "Sienna", yearAvailable: "1997+" },
  { model: "Tacoma", yearAvailable: "1995+" },
  { model: "Tundra", yearAvailable: "1999+" },
  { model: "Venza", yearAvailable: "2008+" },
  { model: "4Runner", yearAvailable: "1984+" },
  { model: "86", yearAvailable: "2012+" },
  { model: "C-HR", yearAvailable: "2016+" },
  { model: "Mirai", yearAvailable: "2014+" },
  { model: "Supra", yearAvailable: "1978+" },
  { model: "Yaris", yearAvailable: "1999+" },
  { model: "Yaris Cross", yearAvailable: "2020+" },
  { model: "GR Corolla", yearAvailable: "2022+" },
  { model: "GR Yaris", yearAvailable: "2020+" },
]

export default function ToyotaModelList() {
  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">List of Toyota Models</h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>

        <div className="prose prose-lg max-w-none mb-8">
          <p>
            Toyota offers a wide array of models that cater to different preferences and needs. From the iconic Corolla
            to the rugged Land Cruiser, each model is designed with precision and reliability in mind. Whether you&apos;re a
            fan of sedans or SUVs, Toyota delivers quality. By referencing the VIN, one can determine the exact model
            year and specs of a vehicle, ensuring that the information matches the vehicle&apos;s actual features and
            assisting in making informed decisions about purchasing or owning a vehicle.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 [&_.toggle-model]:hidden [&:has(#show-all:checked)_.toggle-model]:flex">
            {toyotaModels.map((model, index) => (
              <div
                key={index}
                className={`flex justify-between items-center border-b border-gray-200 py-2 ${index >= 110 ? "toggle-model" : ""}`}
              >
                <span className="font-medium">{model.model}</span>
                <span className="text-sm text-gray-600">{model.yearAvailable}</span>
              </div>
            ))}
          </div>
          <div className="items-center space-x-2 mt-4 hidden">
            <input
              type="checkbox"
              id="show-all"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label
              htmlFor="show-all"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              Show all models
            </label>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-foreground/60 italic font-serif">
            &apos;From compact to luxury, Toyota&apos;s diverse lineup has a model for every driver.&apos;
          </p>
        </div>
      </div>
    </section>
  )
}

