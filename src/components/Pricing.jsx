export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Pricing Plans</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          ['Free', '$0/month', 'Ideal for personal projects and testing.'],
          ['Pro', '$29/month', 'Perfect for solo developers or early-stage startups.'],
          ['Enterprise', 'Contact us', 'Custom solutions with full support.'],
        ].map(([tier, price, desc], i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 w-72 text-left hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-1">{tier}</h3>
            <p className="text-blue-700 mb-2">{price}</p>
            <p className="text-slate-600 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
