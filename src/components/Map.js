export default function Map() {
  return (
    <section className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Location</h2>

      <iframe
        src="https://www.google.com/maps?q=Faridabad&output=embed"
        width="100%"
        height="300"
        loading="lazy"
      ></iframe>
    </section>
  );
}
