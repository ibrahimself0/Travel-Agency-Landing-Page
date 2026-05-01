import {steps} from "../../utils/content.tsx";
import swimmingDudes from "../../../public/swimmingDudes.webp"
import Rating from "./Rating.tsx";

function Steps() {
    return (
        <section className="px-24 py-36">
            <div className="m-auto max-w-432 px-21.5">
                <div className="mt-4 text-center">
                    <h2 className="tracking-6 mb-5 text-[3.25rem] font-semibold">Travel Tom Make Sweet Memories</h2>
                    <p className="tracking-6 text-grey-700 text-[1.75rem] font-light">Find The Perfect Vacation Getaway</p>
                </div>
                {/* justify-between makes the space between the elements as far as possible adding gap with it will ste the minimum gap */}
            <div className="flex items-start justify-between gap-x-44 pt-26">
                {/*shrink : its default value is 1,it's the speed of shrinking here we make the steps shrink faster than the photo*/}
                <div className="max-w-min shrink-5 ">
                    <ul className="mb-14 flex flex-col gap-y-14">
                        {
                            steps.map(step => (
                                <li key={step.id} className="flex flex-col gap-y-4.5">
                                    <span className="bg-primary-700 w-min rounded-[.5rem] px-5.5 py-0.5
                                    text-[1.375rem]/8 font-semibold text-white">{step.id}</span>
                                    <h3 className="tracking-6 w-max text-nowrap text-[1.75rem]/10.5 font-semibold ">{step.heading}</h3>
                                    <p className="tracking-6 text-grey-900 font-light text-base/8">{step.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <a href=" " className="bg-primary-700 hover:bg-primary-800 text-lg cursor-pointer rounded-[0.625rem] px-8 py-3.5
                                            font-medium text-white transition-all duration-200">
                        Start Your Explore
                    </a>
                </div>
                {/*C:\Users\Lenovo\Desktop\MyFiles\React Projects\9-Landing Page\public\headshots\tiffany.webp*/}
                    <figure  className="relative shrink-2 px-20 ">
                        <img src = {swimmingDudes} alt={swimmingDudes} className="max-h-[50.8rem] rounded-[3.25rem]"/>
                        <Rating name="Tiffany Miller" rating={4.6} image="/headshots/tiffany.webp" className="absolute top-28 left-8"/>
                        <Rating name="Amari Rio" rating={4.9} image="/headshots/amari.webp" className="absolute bottom-28 right-0"/>

                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Steps;