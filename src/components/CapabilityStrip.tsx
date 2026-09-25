import { company } from "@/data/company";

export default function CapabilityStrip() {
  return (
    <section className="bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.capabilityStrip.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-meltz-blue/5 flex items-center justify-center mt-0.5">
                <svg
                  className="w-5 h-5 text-meltz-medium"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-meltz-charcoal mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-meltz-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
