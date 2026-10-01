import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

/** Shared motion curves so GSAP matches the CSS / Framer easing used elsewhere */
CustomEase.create('enter', '0.22, 1, 0.36, 1');
CustomEase.create('move', '0.25, 1, 0.5, 1');

/** Only run motion when the user hasn't asked to reduce it */
export const MOTION_OK = '(prefers-reduced-motion: no-preference)';

export { gsap, ScrollTrigger, useGSAP };