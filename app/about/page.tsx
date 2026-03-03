export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold mb-8">Our Mission</h1>
          <p className="text-2xl text-primary font-medium mb-12 leading-tight">
            To make the world a safer place to do business by transforming how financial institutions manage risk.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-left">
            Founded in 2009, One Constellation has grown into the global leader in Client Lifecycle Management (CLM). We work with
            over 300 of the world's largest financial institutions to automate regulatory compliance and deliver
            seamless digital client journeys.
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Global Presence</h2>
              <p className="text-muted-foreground leading-relaxed">
                With offices in Dublin, New York, London, Sydney, and Singapore, our team of experts provides
                round-the-clock support to our global client base.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["15+ Global Offices", "850+ Employees", "30+ Jurisdictions", "24/7 Support"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <img src="/modern-office-building.png" alt="One Constellation Global HQ" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
