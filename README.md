# CyberGuard YUVA — Youth Cyber Defense Club

**Official Tagline:** `SECURE • EDUCATE • EMPOWER`  
**Brand Message:** `Youth for a Safer Digital India.`  
**Founder:** Hashim Bashir  
**Official Contact Email:** `cyberguardyuva@gmail.com`  
**Platform Association:** MY Bharat (Mera Yuva Bharat)  
**MY Bharat Referral Code:** `38YAZ6D0`  

---

## 1. Project Overview

**CyberGuard YUVA** is an educational, youth-driven cyber defense initiative dedicated to cybersecurity awareness, practical digital safety education, and responsible technology usage across India. 

The website is engineered using Next.js (App Router), React, TypeScript, and Tailwind CSS. It is designed to be modern, performant, mobile-responsive, trustworthy, and accessible.

### Core Sections & Pages
- **Homepage (`/`)**: Hero section with official club logo, brand message, 6 focus areas, guiding principles (`SECURE • EDUCATE • EMPOWER`), curriculum highlights, intermediate registration CTA ("Your Journey Towards a Safer Digital India Starts Here"), dedicated "Join CyberGuard YUVA" dual-registration section, verified events schedule, MY Bharat connection, and social media channels.
- **Join Us (`/join`)**: Dedicated membership onboarding page featuring the 4-step registration process, dual direct registration buttons (Google Forms + MY Bharat with referral code `38YAZ6D0`), responsive embedded Google Form, and fallback direct link.
- **About Us (`/about`)**: Organization mission, vision, core values (Security, Education, Responsibility, Empowerment, Community), Founder **Hashim Bashir**, and objectives.
- **Initiatives (`/initiatives`)**: 8 detailed awareness modules covering threat defense, digital hygiene, online fraud, social media safety, ethical digital citizenship, youth leadership, community outreach, and cybersecurity learning.
- **Events & Activities (`/events`)**: Verified schedule tracking with clean empty-state protection against fake announcements, plus session request guidance for institutions.
- **MY Bharat (`/my-bharat`)**: Dedicated platform overview with "Join MY Bharat" registration card, referral code `38YAZ6D0` copy button, direct link to `mybharat.gov.in/yuva_register`, and independence notice.
- **Contact Us (`/contact`)**: Official email (`cyberguardyuva@gmail.com`), verified social media links, and interactive validated contact form.
- **Privacy Policy (`/privacy`)**: Transparent data handling and privacy commitments.
- **Terms of Use (`/terms`)**: Guidelines for responsible use of cybersecurity educational material.

---

## 2. Registration Links & Configuration

Centralized in `src/lib/site-config.ts`:
- **CyberGuard YUVA Official Google Form:**  
  `https://docs.google.com/forms/d/e/1FAIpQLSenCuZzgjHvk-htI_woivJaE1YpPx2Wxp9yLOXvgr82LUIAqg/viewform?usp=sharing&ouid=112675183105543582726`
- **Google Form Embedded Iframe URL:**  
  `https://docs.google.com/forms/d/e/1FAIpQLSenCuZzgjHvk-htI_woivJaE1YpPx2Wxp9yLOXvgr82LUIAqg/viewform?embedded=true`
- **MY Bharat Registration Portal:**  
  `https://mybharat.gov.in/yuva_register`
- **MY Bharat Referral Code:**  
  `38YAZ6D0`

---

## 3. Prerequisites

- **Node.js**: v18.18+ or v20+ / v22+ / v24+
- **NPM**: v9+ / v10+ / v11+

---

## 4. Installation & Development Commands

1. Navigate to the project directory:
   ```bash
   cd cyberguard-yuva
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Build and typecheck for production:
   ```bash
   npm run build
   ```

5. Run ESLint verification:
   ```bash
   npm run lint
   ```

6. Start production server locally:
   ```bash
   npm run start
   ```

---

## 5. Brand Integrity & Transparency Guidelines

- **Logo Preservation:** The official circular navy-blue badge featuring the cybersecurity shield, guardian, padlock, Indian tricolor accent, and club tagline must be preserved without distortion, cropping, or modification.
- **Registration Separation:** Submitting the Google Form expresses interest in CyberGuard YUVA and does not automatically create an account on MY Bharat or guarantee club membership approval.
- **Official Contact:** Direct all inquiries to `cyberguardyuva@gmail.com`.
