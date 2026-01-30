import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'eblm6m06',   // <- tähän oikea ID
  dataset: 'production',    // <- yleensä production
  useCdn: false,             // nopeampi, välimuisti sallittu
  apiVersion: '2026-01-29', // nykyinen päivämäärä tai haluttu versionumero
});
