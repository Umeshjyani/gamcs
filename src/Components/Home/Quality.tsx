import { MdPerson, MdChat, MdCheckCircle } from 'react-icons/md'

export default function Quality() {
    const features = [
        {
            icon: MdPerson,
            title: "Qualified Employees",
            description: "Our team consists of more than 20 qualified and experienced accountants, marketers, and managers."
        },
        {
            icon: MdChat,
            title: "Free Consultations",
            description: "Our acquaintance with a client always begins with a free consultation to find out possible solutions to their problems."
        },
        {
            icon: MdCheckCircle,
            title: "100% Guaranteed",
            description: "All results that you get from us are 100% guaranteed to bring you to a whole new level of profitability and financial success."
        }
    ]

    return (
        <section className="py-12  bg-backgroundgray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <feature.icon className="w-16 h-16 text-primary mb-4" />
                            <h3 className="text-xl font-semibold text-secondaryblack mb-2">{feature.title}</h3>
                            <p className="text-secondarytextgray">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}