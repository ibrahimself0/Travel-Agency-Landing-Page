import CaretUp from "../Icons/CaretUp.tsx";
import {locations} from "../../utils/content.tsx";
import Location from "./Location.tsx";
import {useState} from "react";
import {LOCATION_CARDS_SHOWN} from "../../utils/constants.ts";
function ExploreMore() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const renderedLocations = locations.slice(currentIndex,currentIndex+6);
    function handleLeftArrow() {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex-LOCATION_CARDS_SHOWN);
        }

    }
    function handleRightArrow() {
        if(currentIndex < locations.length -1){
            console.log(currentIndex);
            setCurrentIndex(currentIndex+LOCATION_CARDS_SHOWN);
        }
    }
    return (
        <section className="px-24 py-26 ">
            <div className="m-auto max-w-389">
                <div className="flex items-end justify-between">
                    <div>
                        <h2 className="tracking-6 mb-4 text-[3.25rem] font-semibold">Explore More</h2>
                        <p className="tracking-6 text-grey-700 text[1.75rem] font-light">Let's go on in Adventure</p>
                    </div>
                    <div className="mb-2 flex gap-x-6">
                        <button className="bg-grey-300 not-disabled:hover:bg-grey-400 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed
                        disabled:opacity-50" onClick={handleLeftArrow}><CaretUp className="w-6 -rotate-90 fill-white "/></button>
                        <button className="bg-primary-700 not-disabled:hover:bg-primary-800 flex size-18 cursor-pointer place-content-center rounded-full transition-all duration-200 disabled:cursor-not-allowed
                        disabled:opacity-50" onClick={handleRightArrow}><CaretUp className="w-6 rotate-90 fill-white "/></button>
                    </div>
                </div>
                <ul className="mt-33 grid grid-cols-3 gap-x-29 gap-y-24 ">
                    {renderedLocations.map((location) => (
                        <Location location = {location} key={location.id} />
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default ExploreMore;