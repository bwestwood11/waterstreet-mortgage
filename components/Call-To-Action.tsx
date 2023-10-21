import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2
          className={cn(
            montserrat.className,
            "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          )}
        >
          Ready to dive in?
          <br />
          Contact us today.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-[#000080] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#000080] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000080]"
          >
            Let's talk
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
