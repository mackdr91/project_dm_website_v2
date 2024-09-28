// components/AnimatedSection.jsx (client-side component)

'use client'; // Required for client components in Next.js

import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function AnimatedSection({ children }) {
  return (
    <Fade triggerOnce>
      {children}
    </Fade>
  );
}