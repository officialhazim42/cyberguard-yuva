export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  id: "instagram" | "twitter" | "facebook";
  name: string;
  handle: string;
  url: string;
  actionText: string;
  ariaLabel: string;
  description: string;
}

export interface RegistrationConfig {
  googleFormUrl: string;
  googleFormEmbedUrl: string;
  myBharatRegisterUrl: string;
  myBharatReferralCode: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  brandMessage: string;
  description: string;
  founder: {
    name: string;
    role: string;
  };
  contact: {
    email: string;
    address: string;
  };
  platformAssociation: {
    name: string;
    url: string;
    description: string;
  };
  registration: RegistrationConfig;
  logo: {
    src: string;
    alt: string;
  };
  navItems: NavItem[];
  socialLinks: SocialLink[];
}

/**
 * Centralized Site, Social Media, and Registration Configuration for CyberGuard YUVA.
 * Edit this file to update official profile links, registration URLs, branding, or contact data.
 */
export const siteConfig: SiteConfig = {
  name: "CyberGuard YUVA",
  title: "CyberGuard YUVA | Youth Cyber Defense Club",
  subtitle: "Youth Cyber Defense Club",
  tagline: "SECURE • EDUCATE • EMPOWER",
  brandMessage: "Youth for a Safer Digital India.",
  description:
    "CyberGuard YUVA is a youth-focused initiative dedicated to cybersecurity awareness, digital safety education, and responsible technology use. We aim to encourage young people to build their digital knowledge and contribute to a safer, more responsible digital India.",
  founder: {
    name: "Hashim Bashir",
    role: "Founder, CyberGuard YUVA",
  },
  contact: {
    email: "cyberguardyuva@gmail.com",
    address: "India",
  },
  platformAssociation: {
    name: "MY Bharat (Mera Yuva Bharat)",
    url: "https://mybharat.gov.in/",
    description:
      "Aligned with the vision of Mera Yuva Bharat to foster youth-led development, leadership, and digital literacy across India.",
  },
  registration: {
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSenCuZzgjHvk-htI_woivJaE1YpPx2Wxp9yLOXvgr82LUIAqg/viewform?usp=sharing&ouid=112675183105543582726",
    googleFormEmbedUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSenCuZzgjHvk-htI_woivJaE1YpPx2Wxp9yLOXvgr82LUIAqg/viewform?embedded=true",
    myBharatRegisterUrl: "https://mybharat.gov.in/yuva_register",
    myBharatReferralCode: "38YAZ6D0",
  },
  logo: {
    src: "/images/cyberguard-yuva-logo.png",
    alt: "CyberGuard YUVA Official Logo - Youth Cyber Defense Club",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Initiatives", href: "/initiatives" },
    { label: "Events", href: "/events" },
    { label: "Join Us", href: "/join" },
    { label: "MY Bharat", href: "/my-bharat" },
    { label: "Contact", href: "/contact" },
  ],
  // Verified official social media profiles
  socialLinks: [
    {
      id: "instagram",
      name: "Instagram",
      handle: "@cyberguardyuva",
      url: "https://www.instagram.com/cyberguardyuva/",
      actionText: "Follow on Instagram",
      ariaLabel: "Follow CyberGuard YUVA on Instagram (opens in new tab)",
      description: "Visual security tips, infosec alerts, and youth campaign highlights.",
    },
    {
      id: "twitter",
      name: "X (Twitter)",
      handle: "@CyberGuardYuva",
      url: "https://x.com/CyberGuardYuva",
      actionText: "Follow on X",
      ariaLabel: "Follow CyberGuard YUVA on X / Twitter (opens in new tab)",
      description: "Real-time cyber safety advisories, scam alerts, and tech updates.",
    },
    {
      id: "facebook",
      name: "Facebook",
      handle: "CyberGuard YUVA",
      url: "https://www.facebook.com/share/1CBCWnWj6Z/",
      actionText: "Follow on Facebook",
      ariaLabel: "Follow CyberGuard YUVA on Facebook (opens in new tab)",
      description: "Community updates, outreach initiatives, and educational articles.",
    },
  ],
};
