import {NavigationLink} from "../../utils/contentTypes.tsx";

interface DesktopDropdownProps {
    links?: NavigationLink[];
}
function DesktopDropdown({links}: DesktopDropdownProps) {
    return (
        <div>
            {/* absolute : when positing something absolute is positioned relative to the first parent that has non-static position prop*/}
            {/*top-full : it's relative to parent height so we shift the component down by 100 of the parent height */}
            <ul className="invisible absolute top-full -left-8 z-1 flex
             translate-y-2 transform flex-col gap-y-7
             rounded-tl-lg rounded-tr-2xl rounded-br-2xl rounded-bl-2xl
              bg-white pt-8 pr-16 pb-11 pl-8
               opacity-0 drop-shadow-[2px_4px_30px_rgba(0,0,0,.10)]
                transition-all duration-200 ease-out
                 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {links?.map(link => (
                    <li className="flex cursor-pointer
                                   items-center font-medium
                                   transition-all duration-200" key={link.text}>
                        <a className="text-grey-600 text-nowrap
                                      hover:text-black" href={link.href}>
                            {link.text}
                        </a>
                    </li>

                ))
                }
            </ul>
        </div>
    );
}

export default DesktopDropdown;
