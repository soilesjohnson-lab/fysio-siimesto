export default function Booking() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://varaa.timma.fi/testi123?embed=true"
        title="Timma ajanvaraus"
        className="w-full h-full border-none"
        allow="payment"
        loading="lazy"
      />
    </div>
  );
}
