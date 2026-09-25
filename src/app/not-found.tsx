import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-meltz-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="text-7xl font-bold text-meltz-medium/20 mb-6">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-meltz-charcoal mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-meltz-gray mb-8 max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Please navigate back to the homepage or contact our team.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <CTAButton label="BACK TO HOME" href="/" />
          <CTAButton label="CONTACT US" href="/contact" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
