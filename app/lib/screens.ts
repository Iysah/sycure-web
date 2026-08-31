/**
 * Real Sycure app screenshots, imported statically so Next generates blur
 * placeholders and correct dimensions. Keyed for reuse across sections.
 */
import residentHome from "@/app/assets/app-screens/residents/home-page.png";
import residentAccess from "@/app/assets/app-screens/residents/access-page.png";
import residentGenerate from "@/app/assets/app-screens/residents/generate-code-page.png";
import residentEmergency from "@/app/assets/app-screens/residents/emergency-page.png";
import verifierOrganization from "@/app/assets/app-screens/verifiers/organization-page.png";
import verifierEmergency from "@/app/assets/app-screens/verifiers/emergency-page.png";

export const SCREENS = {
  residentHome,
  residentAccess,
  residentGenerate,
  residentEmergency,
  verifierOrganization,
  verifierEmergency,
} as const;

export type ScreenKey = keyof typeof SCREENS;
