import Image from 'next/image'

export default function Fewwords() {
    return (
        <section className="w-full p-8 md:py-16">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 space-y-6 order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl text-secondaryblack">A Few Words About Us</h2>
                    <p className="text-secondarytextgray">
                        COST Accountant was founded in 1995 and since that time has grown into the largest CPA firm in the area. We are an assertive firm providing our clients a full range of services.
                    </p>
                    <p className="text-secondarytextgray">
                        Our offices are located in the Intermountain West because this is where we chose to live. However, we serve a wide variety of clients located throughout the United States and even some European countries.
                    </p>
                    <button className='w-[160px] p-2 text-secondarytextwhite font-semibold bg-primary hover:bg-primaryhover hover:text-secondarytextwhite transition-all duration-300 ease-in-out'>
                        LEARN MORE
                    </button>
                </div>
                <div className="w-full md:w-1/2 order-2 md:order-1 mb-6 md:mb-0">
                    <Image
                        src="/image10.jpg"
                        alt="Team meeting"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>
            </div>
        </section>
    )
}