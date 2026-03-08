// src/pages/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 md:px-12 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Tietosuojaseloste</h1>

      <p className="mb-4">
        Tämä sivusto käsittelee henkilötietoja vain tarpeen mukaan. Alla kerrotaan, miten tietoja kerätään ja käytetään.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Yhteydenottolomake</h2>
      <p className="mb-4">
        Lomakkeella kerätään nimi, sähköposti ja viesti, jotta voimme vastata kyselyihisi tai varauksesi yhteydessä. Tietoja ei luovuteta kolmansille osapuolille, ja niitä säilytetään vain tarpeen mukaan.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Timma-ajanvaraus</h2>
      <p className="mb-4">
        Varauslomake upotetaan Timma-palvelusta (https://varaa.timma.fi). Timma voi asettaa evästeitä ja kerätä tietoja ajanvarauksesi mahdollistamiseksi. Lue lisää Timman tietosuojaselosteesta <a href="https://www.timma.fi/privacy" target="_blank" className="text-blue-600 underline">täältä</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Google reCAPTCHA</h2>
      <p className="mb-4">
        Sivulla käytetään Google reCAPTCHA-palvelua roskapostin estoon. reCAPTCHA voi kerätä tietoja käyttäjän selaimesta. Googlen tietosuojaseloste ja käyttöehdot ovat voimassa: <a href="https://policies.google.com/privacy" target="_blank" className="text-blue-600 underline">Tietosuojaseloste</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Evästeet</h2>
      <p className="mb-4">
        Sivustolla ei käytetä muita evästeitä tällä hetkellä. Kolmannen osapuolen palvelut (Timma ja reCAPTCHA) voivat asettaa evästeitä. 
      </p>

      <p className="mt-6">
        Päivitetty: 8.3.2026
      </p>
    </div>
  );
}