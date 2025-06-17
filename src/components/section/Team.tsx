// src/components/team/Team.tsx

import React from 'react';

const teamMembers = [
    {
        name: 'Visnow Navyra',
        role: 'Leader/Project Manager',
        image: require('../../img/vyra.png'),
        alt: 'Visnow Navyra',
        description:
            'Navyra is a senior student at IFL and NUM, who determines in studying and joining volunteer in promoting educational programs. Currently, she is interested about understanding the value of canine life and excited to make this project come to life with her teammates. She expects to share this experience with everyone who participate in rehabilitating stray dogs in Kampot Province.',
    },
    {
        name: 'An Sereypanharoth',
        role: 'Monitoring and Evaluation Officer',
        image: require('../../img/panharoth.png'),
        alt: 'An Sereypanharoth',
        description:
            'Panharoth is a student at IFL and RUPP who is strongly fighting against the dog meat trade. Concerned about the treatment of dogs, Panharoth is dedicated to raising awareness and promoting change through the Tail of Hope project. Excited to work with his team, she hopes to inspire more people to stand against the cruelty of the dog meat trade.',
    },
    {
        name: 'Sry Thaiseang',
        role: 'Logistic Coordinator',
        image: require('../../img/thaiseang.png'),
        alt: 'Sry Thaiseang',
        description:
            'Thaiseang is currently a fourth-year student at IFL and also works part-time at a company. He has a deep passion for dogs and is dedicated to learning more about their behavior, training, health, and well-being. He hopes to raise awareness about responsible pet ownership.',
    },
    {
        name: 'Cheam Norakpanha',
        role: 'Operation Coordinator',
        image: require('../../img/panha.png'),
        alt: 'Cheam Norakpanha',
        description:
            'Norakpanha is a senior student at the IFL, RUPP. With a strong passion for project coordination, he is dedicated to creating impactful initiatives, including raising awareness about the dog meat trade and supporting animal welfare. He is excited to collaborate humane treatment of animals and share meaningful experiences with those committed to making a difference for animal welfare.',
    },
    {
        name: 'Ngoun Panhapich',
        role: 'Project Finance Manager',
        image: require('../../img/pich.png'),
        alt: 'Ngoun Panhapich',
        description:
            'Panhapich is a senior student at Institute of Foreign Languages in Department Of English, and also a Senior Student at Royal University of Law and Economics. She is a dedicated and a Team Player who strives and eager to take part in a Tail of Hope Project. She is committed to raise health awareness of consuming dog meat and is strongly against the trading of dog meat.',
    },
    {
        name: 'Sok Michell',
        role: 'Marketing and Communication Lead',
        image: require('../../img/michell.png'),
        alt: 'Sok Michell',
        description:
            'This is Michell, a senior at IFL. It is hard to believe that the action of trading and eating dog meat still continues these days. So at the end of this project, I would want to see the decline of this activity as well as the number of strays.',
    },
    {
        name: 'Bun Chandalys',
        role: 'Marketing and Communication lead',
        image: require('../../img/dalys.png'),
        alt: 'Bun Chandalys',
        description:
            'Dalys is a senior student at IFL who dedicated in her studying and thriving for the better future of the society. Though she is a bit afraid of canines, but the way she values canines’ life has shown in her action in participating in this project “A Tail of Hope.” She is excited to help raising awareness to the citizen to have compassionate  for stray dog and support rescuing dog for new shelters.',
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

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
