import { HeartPulse, Frown, Scale } from 'lucide-react'

function Issue() {
    return (
        <section id="issue" className="w-full py-12 md:py-16 lg:py-20 bg-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">The Issue</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The dog meat trade in Cambodia raises concerns related to health, emotional well-being, and the limited presence of clear regulations.
                        This practice continues in some communities and may affect both people and animals in different ways.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                    <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                            <HeartPulse className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Health Risks</h3>
                        <p className="text-gray-600">
                            Dog meat consumption can spread rabies and other diseases, especially when hygiene and safety standards are lacking.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Frown className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Emotional Impact</h3>
                        <p className="text-gray-600">
                            Many families experience distress when their pets are taken or lost to the trade, as dogs are often seen as companions.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm border text-center sm:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Scale className="h-6 w-6 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Lack of Regulation</h3>
                        <p className="text-gray-600">
                            The absence of clear laws and enforcement allows the trade to continue, raising concerns for both animal welfare and public health.
                        </p>
                    </div>
                </div>

                {/* <div className="text-center max-w-3xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold">Case Study: Kampot Province</h3>
                <p className="text-gray-600">
                  According to Khmer Times (2022), Kampot Provincial Police arrested multiple individuals for killing
                  three huskies for meat consumption. This case highlights the ongoing issue of dog meat trade in the
                  region.
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700">Read More Case Studies</button>
              </div> */}
            </div>
        </section>
    )
}

export default Issue