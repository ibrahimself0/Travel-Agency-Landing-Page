import Testimonial from "./Testimonial.tsx";
import { testimonials } from "../../../../../../../Downloads/GoTravelLandingPage-main/2 - Finished Static Page/src/utils/content.tsx";

export default function Testimonials() {
  return (
    <section className="px-24 py-36">
      <div className="m-auto max-w-389">
        <h2 className="mb-22 text-center text-[3.875rem] font-semibold">
          What Our Vacationers Says
        </h2>
        <ul className="flex gap-x-20">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
