import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'eblm6m06',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-01-29',
});
