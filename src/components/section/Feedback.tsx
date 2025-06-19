import React from 'react'

function Feedback() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">What People Are Saying</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Hear from supporters, volunteers, and advocates who believe in our mission.
                    </p>
                </div>

                {/* Feedback 1 */}
                <div className="grid gap-8 lg:grid-cols-2 mb-8">
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                        <div className="space-y-4">
                            <div className="text-yellow-700">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                                "A Tail of Hope is an inspiring student-led initiative that shines a light on a deeply overlooked
                                issue in Cambodia. Their compassionate approach, rooted in research and community involvement, is
                                exactly what's needed to change attitudes and protect animals. By raising awareness and working
                                alongside local partners, they're planting the seeds for real, lasting change. I'm excited to see
                                how far their impact will reach."
                            </blockquote>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <span className="text-yellow-700 font-semibold">S</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Sokun</p>
                                    <p className="text-sm text-gray-500">Animal welfare advocate and volunteer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback 2 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                        <div className="space-y-4">
                            <div className="text-yellow-700">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                                "If you're passionate about animal welfare and want to support a cause led by compassionate young
                                changemakers, A Tail of Hope is a fantastic initiative to get behind. Whether it's joining their
                                awareness campaigns, volunteering at events, or supporting their outreach in Kampot, there's a
                                meaningful way for everyone to contribute. Their dedication and collaboration with communities like
                                Dirty Paw Cambodia truly set them apart."
                            </blockquote>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                    <span className="text-yellow-700 font-semibold">R</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Rithy</p>
                                    <p className="text-sm text-gray-500">Volunteer and youth mentor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="text-center">
                    <button className="border border-yellow-700 text-yellow-700 bg-white hover:bg-yellow-50 px-6 py-2 rounded-md font-medium transition-colors">
                        Share Your Feedback
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default Feedback