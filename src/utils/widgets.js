export const loadGoogleMap = () => {
  const mapContainer = document.getElementById("google-map");
  if (!mapContainer) return;

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.4475470008892!2d29.77498327725519!3d62.59203997530666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469ba90f77241371%3A0x7d0f393855a80572!2sTeollisuuskatu%2011%2C%2080100%20Joensuu!5e0!3m2!1sfi!2sfi!4v1709900000000!5m2!1sfi!2sfi";

  mapContainer.innerHTML = `
    <iframe
      src="${mapUrl}"
      title="Fysio Siimestö sijainti"
      class="absolute top-0 left-0 w-full h-full border-0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>`;
};

export const loadTimmaWidget = () => {
  const timmaContainer = document.getElementById("timma-booking-widget");
  if (!timmaContainer) return;

  timmaContainer.innerHTML = ""; 
  const iframe = document.createElement("iframe");
  iframe.src = "https://varaa.timma.fi/reservation/fysiosiimesto?embed=true";
  iframe.title = "Timma ajanvaraus";
  
  iframe.style.width = "100%";
  iframe.style.height = "600px";
  iframe.style.border = "none";
  
  iframe.allow = "payment";
  iframe.loading = "lazy";

  timmaContainer.appendChild(iframe);
};