import {type Service as IService}from "../../utils/contentTypes.tsx"
import Service from "./Service.tsx";
import {services} from "../../utils/content.tsx";

const  customizedPackages: IService = services[0]!;
const  culinaryTours: IService = services[1]!;
const  destinationExperites: IService = services[2]!;
function Services() {
    return (
        <section className="bg-primary-100 px-24 py-36 ">
            <ul className="border-gray-500/40 m-auto flex max-w-389
            justify-between border-y-1 py-24 ">
                <Service service = {customizedPackages}/>
                <li className="bg-grey-500/40 block w-0.25 self-stretch" aria-label="a grey divider element"/>
                <Service service={culinaryTours}/>
                <li className="bg-grey-500/40 block w-0.25 self-stretch" aria-label="a grey divider element"/>
                <Service service={destinationExperites}/>

            </ul>
        </section>
    );
}

export default Services;