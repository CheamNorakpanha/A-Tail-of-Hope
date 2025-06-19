import React from 'react';

const teamMembers = [
    {
        name: 'Visnow Navyra',
        role: 'Leader/Project Manager',
        image: require('../../img/vyra.png'),
        alt: 'Visnow Navyra',
        description:
            'Navyra, a senior at IFL and NUM, is passionate about education and volunteering. She’s currently leading a project to promote the value of canine life and looks forward to sharing the experience of rehabilitating stray dogs in Kampot with her teammates and participants.',
    },
    {
        name: 'An Sereypanharoth',
        role: 'Monitoring and Evaluation Officer',
        image: require('../../img/panharoth.png'),
        alt: 'An Sereypanharoth',
        description:
            'Panharoth, a student at IFL and RUPP, is dedicated to fighting the dog meat trade. Through the Tail of Hope project, she aims to raise awareness and inspire others to stand against cruelty to dogs.',
    },
    {
        name: 'Sry Thaiseang',
        role: 'Logistic Coordinator',
        image: require('../../img/thaiseang.png'),
        alt: 'Sry Thaiseang',
        description:
            'Thaiseang, a fourth-year IFL student and part-time worker, is passionate about dogs and eager to learn more about their care. He hopes to promote responsible pet ownership.',
    },
    {
        name: 'Cheam Norakpanha',
        role: 'Operation Coordinator',
        image: require('../../img/panha.png'),
        alt: 'Cheam Norakpanha',
        description:
            'Norakpanha, a senior at IFL, RUPP, is passionate about project coordination and animal welfare. He is committed to raising awareness about the dog meat trade and looks forward to collaborating on impactful initiatives for humane animal treatment.',
    },
    {
        name: 'Ngoun Panhapich',
        role: 'Project Finance Manager',
        image: require('../../img/pich.png'),
        alt: 'Ngoun Panhapich',
        description:
            'Panhapich, a senior at IFL and RULE, is a dedicated team player eager to join the Tail of Hope Project. She is committed to raising awareness about the health risks of consuming dog meat and strongly opposes the dog meat trade.',
    },
    {
        name: 'Sok Michell',
        role: 'Marketing and Communication Lead',
        image: require('../../img/michell.png'),
        alt: 'Sok Michell',
        description:
            'Michell, a senior at IFL, is deeply disturbed that the dog meat trade and consumption persist today. Through this project, she is determined to see a significant reduction in both this cruel practice and the number of stray dogs.',
    },
    {
        name: 'Bun Chandalys',
        role: 'Marketing and Communication lead',
        image: require('../../img/dalys.png'),
        alt: 'Bun Chandalys',
        description:
            'Dalys, a senior at IFL, is committed to a better society. Despite her fear of dogs, she values their lives and eagerly joins the "Tail of Hope" project to raise awareness and support rescuing stray dogs.',
    },
];

const Team: React.FC = () => {
    return (
        <section id="team" className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Meet the dedicated students behind A Tail of Hope initiative.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="text-center space-y-4">
                                <div className="w-24 h-24 mx-auto overflow-hidden rounded-full">
                                    <img
                                        src={member.image}
                                        width={96}
                                        height={96}
                                        alt={member.alt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-yellow-700 font-medium">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
