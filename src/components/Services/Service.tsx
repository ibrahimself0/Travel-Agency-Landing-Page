import {type Service as IService} from "../../utils/contentTypes.tsx";

interface ServiceProps{
    service:IService
}
function Service({service}:ServiceProps) {

    return (
        <li className="h-90 flex flex-col justify-between max-w-90" key = {service.id}>
            <service.Icon className="h-26 place-self-center"/>
            <h3 className="text-center tracking-6 mb-9.5 text-[1.75rem]/10.5 font-semibold text-nowrap">{service.heading}</h3>
            <p className="text-center text-grey-900/85 tracking-6 font-rubik text-base/9.5">{service.description}</p>
        </li>
    );
}

export default Service;