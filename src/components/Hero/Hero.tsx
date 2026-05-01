import { heroBenefits } from "../../utils/content";
import HeroBenefit from "./HeroBenefit";

export default function Hero() {
    return (
        <section className="relative m-auto max-w-[108rem]">
            {/*if I have a container and the image is bigger than it use bg-bottom to make it align*/}
            {/*and bg-cover to make it fit*/}
            {/*
              pb-[56.25%] creates a 16:9 aspect ratio box
              - Width = 100% of parent (.relative container)
              - Height = 56.25% of that width
              - This forces the background image to maintain 16:9 proportions
              - The actual content is positioned absolute inside (or needs relative positioning)
              */}
            <div className="relative flex items-center justify-center rounded-[2.25rem] bg-[url('/public/hero.webp')] bg-cover bg-bottom pb-[43.25%]">
                <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center text-center">
                    <div>
                        <h1 className="mb-4 pt-54 text-[6.5rem]/34 font-semibold text-white">
                            Start Your Memorable <br /> Journey Here
                        </h1>
                    </div>
                </div>
                <ul className="absolute -bottom-23 mx-21.5 flex gap-x-18 rounded-[1.5rem] bg-white px-16 py-15 drop-shadow-[0_2px_40px_rgba(0,0,0,0.06)]">
                    {heroBenefits.map((benefit) => (
                        <HeroBenefit benefit={benefit} key={benefit.id} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
