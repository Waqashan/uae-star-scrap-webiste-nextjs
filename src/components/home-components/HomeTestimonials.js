import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { FaStar, FaQuoteLeft, FaMapMarkerAlt } from "react-icons/fa";

export function HomeTestimonials() {
  return (
    <section className="bg-white py-24">
      <Container>
        <FadeIn className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-(--brand-blue)/10 px-4 py-2 text-sm font-bold text-(--brand-blue)">
            <FaStar className="size-4" />
            Customer Reviews
          </div>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-(--brand-blue) sm:text-5xl">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Customers</span> Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Trusted by homeowners and businesses across UAE
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Ahmed Al Mansouri",
              location: "Dubai",
              text: "Got my 1000L tank repaired with 6-month warranty. Fast service and fair price. Highly recommended!",
              rating: 5,
              avatar: "A",
            },
            {
              name: "Sarah Johnson",
              location: "Abu Dhabi",
              text: "Sold my old stainless steel tanks here. Got instant valuation on WhatsApp and quick pickup. Very professional.",
              rating: 5,
              avatar: "S",
            },
            {
              name: "Mohammed Raza",
              location: "Sharjah",
              text: "Bought a refurbished tank with warranty. Saved 40% compared to new tank. Will buy again.",
              rating: 5,
              avatar: "M",
            },
          ].map((review, idx) => (
            <FadeIn
              key={review.name}
              delay={idx * 0.15}
              className="group rounded-3xl bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-slate-100 hover:border-slate-300"
            >
              <FaQuoteLeft className="mb-6 text-4xl text-(--brand-teal)/20 group-hover:text-(--brand-teal)/50 transition-colors" />
              <p className="text-slate-700 text-lg italic tracking-wide leading-relaxed">"{review.text}"</p>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-(--brand-teal) to-(--brand-blue) text-xl font-bold text-white shadow-md">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">{review.name}</div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                    <FaMapMarkerAlt className="size-3 text-(--brand-orange)" />
                    {review.location}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="size-4 text-yellow-400 drop-shadow-sm" />
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
