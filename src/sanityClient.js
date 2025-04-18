// src/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'yqe1h78z',   // ← match the projectId in your sanity.cli.js
  dataset:   'production',
  useCdn:    false,          // `false` if you always want fresh data
  apiVersion: '2023-01-01', // lock to a date for stability
});
