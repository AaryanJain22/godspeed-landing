export default function Team() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">The Team</h2>
      <p className="text-slate-600 mb-12 max-w-lg mx-auto">
        We’re a small, passionate team building the future of full-stack and AI tooling.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {['Michael Jordan'].map((name, i) => (
          <div key={i} className="w-48">
            <img
              className="rounded-full w-24 h-24 mx-auto mb-3 object-cover shadow"
              src={`https://picsum.photos/200`}
              alt={name}
            />
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-slate-500">Software Engineer</p>
          </div>
        ))}
      </div>
    </section>
  )
}
