export default function Product() {
  return (
    <section id="product" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Product Highlights</h2>
      <p className="text-slate-600 mb-12 max-w-xl mx-auto">
        Godspeed simplifies backend and frontend development using declarative configurations, plug-and-play data sources, and rapid deployment tools.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          ['Rapid Prototyping', 'Get ideas into code quickly with prebuilt generators'],
          ['Built-in Auth & APIs', 'Save hours by scaffolding secure APIs out of the box'],
          ['Seamless Integrations', 'Connect with databases, SaaS, LLMs and more'],
        ].map(([title, desc], i) => (
          <div key={i} className="bg-slate-50 rounded-lg p-6 w-72 shadow hover:shadow-md transition text-left">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
