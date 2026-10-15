export interface FocusArea {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: "ShieldAlert" | "Lock" | "AlertTriangle" | "Zap" | "Users" | "Globe";
  href: string;
}

export const focusAreas: FocusArea[] = [
  {
    id: "cybersecurity-awareness",
    number: "01",
    title: "Cybersecurity Awareness",
    shortDescription: "Educating young people about online threats and digital safety.",
    detailedDescription:
      "Demystifying modern cyber risks including malware, malicious links, unverified downloads, and wireless vulnerabilities to help youth stay vigilant.",
    iconName: "ShieldAlert",
    href: "/initiatives#cybersecurity-awareness",
  },
  {
    id: "digital-safety-education",
    number: "02",
    title: "Digital Safety Education",
    shortDescription: "Teaching practical account security, privacy, and safe internet use.",
    detailedDescription:
      "Instilling everyday safety habits such as password managers, two-factor authentication (2FA), device encryption, and application privacy controls.",
    iconName: "Lock",
    href: "/initiatives#digital-safety-education",
  },
  {
    id: "online-fraud-awareness",
    number: "03",
    title: "Online Fraud Awareness",
    shortDescription: "Helping people recognize phishing, impersonation, and online scams.",
    detailedDescription:
      "Equipping youth and communities to spot deceptive emails, UPI scams, fake identity profiles, lottery traps, and social engineering attempts.",
    iconName: "AlertTriangle",
    href: "/initiatives#online-fraud-awareness",
  },
  {
    id: "youth-empowerment",
    number: "04",
    title: "Youth Empowerment",
    shortDescription: "Encouraging digital knowledge, leadership, and responsible technology use.",
    detailedDescription:
      "Nurturing peer ambassadors and student leaders who guide classmates and families toward proactive cyber defense and ethical innovation.",
    iconName: "Zap",
    href: "/initiatives#youth-empowerment",
  },
  {
    id: "responsible-digital-citizenship",
    number: "05",
    title: "Responsible Digital Citizenship",
    shortDescription: "Promoting ethical online behaviour, privacy, and respectful communication.",
    detailedDescription:
      "Advocating for constructive online discourse, anti-cyberbullying ethics, respect for intellectual property, and mindful sharing habits.",
    iconName: "Users",
    href: "/initiatives#responsible-digital-citizenship",
  },
  {
    id: "community-outreach",
    number: "06",
    title: "Community Outreach",
    shortDescription: "Encouraging knowledge sharing and cybersecurity awareness initiatives.",
    detailedDescription:
      "Extending digital safety knowledge beyond campus walls to elders, small businesses, schools, and local groups to build grassroot resilience.",
    iconName: "Globe",
    href: "/initiatives#community-outreach",
  },
];
