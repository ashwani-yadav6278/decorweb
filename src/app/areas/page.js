export default function Areas() {
  const sectors = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,14,15,16,17,18,19,
    21,22,23,24,25,27,28,
    29,30,31,32,33,34,35,
    37,38,39,41,42,43,44,
    45,46,47,48,49,50,
    55,56,57,58,59,
    61,62,63,64,65,
    70,75,76,77,78,79,
    80,81,82,83,84,85,
    86,87,88,89,
  ];

  const gradients = [
    "from-pink-400 to-rose-500",
    "from-purple-400 to-indigo-500",
    "from-yellow-400 to-orange-500",
    "from-green-400 to-emerald-500",
    "from-blue-400 to-cyan-500",
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">
        Areas We Serve in <span className="text-pink-500">Faridabad</span>
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Balloonza provides professional balloon decoration services in
        <strong> all sectors of Faridabad</strong>, including Old Faridabad,
        NIT, New Faridabad, and Greater Faridabad.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {sectors.map((sector, index) => (
          <div
            key={sector}
            className={`bg-gradient-to-br ${
              gradients[index % gradients.length]
            } text-white rounded-2xl p-6 text-center shadow-lg
            transform transition hover:scale-105 hover:shadow-2xl`}
          >
            <p className="text-sm opacity-90">Balloon Decoration</p>
            <h3 className="text-xl font-bold mt-2">
              Sector {sector}
            </h3>
            <p className="text-sm mt-1">Faridabad</p>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-12">
        🎈 Don’t see your sector? <strong>We cover all sectors in Faridabad.</strong>
      </p>
    </section>
  );
}
