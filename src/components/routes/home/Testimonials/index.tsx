import { TESTIMONIALS } from "@/utils/constants"
import { Testimonial } from "./Testimonial"

export const Testimonials = () => {
  return (
    <section className="bg-red-100 mx-4">
      <div className="container p-8">
        <div className="flex justify-center">
          {
            TESTIMONIALS.map(({ id, ...testimonial }) => <Testimonial key={id} {...testimonial} />)
          }
        </div>
      </div>
    </section>
  )
}
