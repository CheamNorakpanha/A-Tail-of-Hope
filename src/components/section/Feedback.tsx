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

                <div className="grid gap-8 lg:grid-cols-3 mb-8">

                    {/* Feedback 1 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                        <div className="space-y-4">
                            <div className="text-yellow-700">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                                "A Tail of Hope is doing essential work by addressing the emotional and health impacts of the dog meat trade. Their focus on Kampot brings much-needed
                                attention to an issue that’s often ignored. Their efforts show that change can start with awareness and compassion."
                            </blockquote>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-rose-300 rounded-full flex items-center justify-center">
                                    <span className="text-zinc-50 font-semibold">DP</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Dirty Paw</p>
                                    <p className="text-sm text-gray-500">Animal Welfare Partner</p>
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
                                "This project highlights a difficult topic with sensitivity and purpose. A Tail of Hope balances research with real community outreach, and that makes
                                their message stronger. It’s a powerful example of how students can drive social change."
                            </blockquote>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                                    <span className="text-zinc-50 font-semibold">TS</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Thann Sopheakboth</p>
                                    <p className="text-sm text-gray-500">Tail of Hope Supporter</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feedback 3 */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border">
                        <div className="space-y-4">
                            <div className="text-yellow-700">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                </svg>
                            </div>
                            <blockquote className="text-gray-700 leading-relaxed">
                                "A Tail of Hope is more than just a research project. It’s a voice for the voiceless. Their initiative sheds light on the hidden costs of the dog meat
                                trade and advocates for humane treatment of animals. I truly admire their dedication."
                            </blockquote>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                                    <span className="text-zinc-50 font-semibold">VI</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Vey Iengveng</p>
                                    <p className="text-sm text-gray-500">Animal lover</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback