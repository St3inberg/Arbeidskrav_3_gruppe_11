// src/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'yqe1h78z',  
  dataset:   'production',
  useCdn:    false,         
  apiVersion: '2025-04-20', 
});
