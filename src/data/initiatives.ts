export interface InitiativeItem {
  id: string;
  title: string;
  category: string;
  iconName:
    | "Shield"
    | "Smartphone"
    | "AlertOctagon"
    | "Share2"
    | "HeartHandshake"
    | "GraduationCap"
    | "Building"
    | "BookOpen";
  summary: string;
  description: string;
  keyTopics: string[];
  actionableTips: string[];
}

export const initiativesData: InitiativeItem[] = [
  {
    id: "cybersecurity-awareness",
    title: "Cybersecurity Awareness",
    category: "Threat Defense",
    iconName: "Shield",
    summary:
      "Understanding core online threats, attack vectors, and developing proactive cyber hygiene habits.",
    description:
      "The foundational initiative of CyberGuard YUVA focuses on educating young minds about the nature of the cyberspace environment. From recognizing malicious software, unverified browser extensions, and public Wi-Fi risks to understanding encryption, we provide straightforward guidance on navigating connected environments securely.",
    keyTopics: [
      "Understanding Malware, Spyware, and Ransomware mechanisms",
      "Public Wi-Fi hazards and secure VPN usage",
      "Device security updates, patching, and configuration hygiene",
      "Data backup principles (the 3-2-1 rule)",
    ],
    actionableTips: [
      "Always verify software sources and avoid downloading files from untrusted third-party portals.",
      "Keep operating systems and applications updated with the latest security patches.",
      "Disable auto-connect for public Wi-Fi networks in device settings.",
    ],
  },
  {
    id: "digital-safety-education",
    title: "Digital Safety Education",
    category: "Practical Hygiene",
    iconName: "Smartphone",
    summary:
      "Teaching actionable steps for personal account protection, multi-factor authentication, and data privacy.",
    description:
      "A pragmatic approach to locking down personal accounts, mobile applications, and devices. This initiative translates technical privacy settings into everyday routines that anyone can apply to prevent unauthorized account access and identity takeover.",
    keyTopics: [
      "Multi-Factor Authentication (MFA/2FA) implementation using authenticator apps",
      "Strong password practices and password manager adoption",
      "Granular app permission auditing on Android and iOS",
      "Safe cloud synchronization and personal data backups",
    ],
    actionableTips: [
      "Switch from SMS-based OTP to app-based authenticator codes wherever supported.",
      "Use passphrases with 16+ characters combining unique words and symbols.",
      "Audit smartphone permissions monthly and revoke unnecessary microphone, camera, and location access.",
    ],
  },
  {
    id: "online-fraud-awareness",
    title: "Online Fraud Awareness",
    category: "Financial Safety",
    iconName: "AlertOctagon",
    summary:
      "Spotting phishing scams, UPI transaction deception, fake customer support numbers, and social engineering.",
    description:
      "With India's digital payments and banking ecosystem expanding rapidly, fraud techniques have grown more deceptive. This initiative dissects real-world scam methods, giving students and citizens the reflexes needed to protect their financial resources and personal identity.",
    keyTopics: [
      "Spotting fraudulent UPI payment requests (Remember: PIN is only required to SEND money, never to receive)",
      "Smishing (SMS phishing) and WhatsApp impersonation scams",
      "Fake job offers, lottery notifications, and work-from-home investment traps",
      "Verifying genuine financial customer support channels vs search engine ads",
    ],
    actionableTips: [
      "Never enter your UPI PIN to receive a payment or cashback prize.",
      "Inspect sender domain names carefully in emails claiming urgent bank or tax actions.",
      "Report cyber fraud immediately on the national cybercrime portal or 1930 helpline.",
    ],
  },
  {
    id: "social-media-safety",
    title: "Social Media Safety",
    category: "Platform Privacy",
    iconName: "Share2",
    summary:
      "Safeguarding personal reputation, preventing account takeovers, and controlling digital footprints.",
    description:
      "Youth spend significant time connecting across social networks. This initiative focuses on managing personal exposure, recognizing catfishing and impersonation accounts, preventing cyberbullying, and establishing boundaries that protect mental well-being and future careers.",
    keyTopics: [
      "Configuring strict privacy settings on Instagram, LinkedIn, and social networks",
      "Preventing oversharing and location tagging that exposes offline routines",
      "Handling online harassment, cyberbullying, and reporting mechanisms",
      "Recognizing deepfake videos and manipulated media",
    ],
    actionableTips: [
      "Keep personal social profiles private to friends and verified acquaintances.",
      "Avoid posting live location check-ins; share memories after departing the location.",
      "Do not accept friend requests from unknown accounts claiming to be friends who 'lost access'.",
    ],
  },
  {
    id: "responsible-digital-citizenship",
    title: "Responsible Digital Citizenship",
    category: "Online Ethics",
    iconName: "HeartHandshake",
    summary:
      "Promoting ethical online behavior, media literacy, truth verification, and civil digital culture.",
    description:
      "Being safe online is not merely about defense; it is also about what we put into the digital commons. This initiative inspires youth to be constructive, empathetic, and discerning netizens who check sources before forwarding information and champion digital civility.",
    keyTopics: [
      "Fact-checking viral forwards and combating misinformation",
      "Intellectual property respect and ethical creative attribution",
      "Digital empathy and supporting peers against toxic internet culture",
      "Building a professional and positive digital identity for academic and career growth",
    ],
    actionableTips: [
      "Verify sensational news through official fact-checking platforms before forwarding in WhatsApp groups.",
      "Respect creative commons licenses and give proper attribution to original creators.",
      "Practice mindful communication and refrain from engaging in targeted harassment.",
    ],
  },
  {
    id: "youth-empowerment",
    title: "Youth Empowerment",
    category: "Leadership",
    iconName: "GraduationCap",
    summary:
      "Encouraging youth to take leadership roles as peer cyber guardians in their colleges and communities.",
    description:
      "Young people are early adopters and the most effective educators among their friends and families. We facilitate frameworks for youth to lead cybersecurity clubs, host peer discussion circles, and advocate safe technology habits in their local environments.",
    keyTopics: [
      "Peer-to-peer digital literacy coaching techniques",
      "Organizing campus cybersecurity discussion clubs",
      "Youth leadership in digital safety advocacy",
      "Career pathways in cybersecurity and information assurance",
    ],
    actionableTips: [
      "Help elderly family members audit their phone privacy settings and UPI apps.",
      "Start or participate in a technology ethics discussion group at your institution.",
      "Explore foundational certifications and free learning roadmaps in network security.",
    ],
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    category: "Public Impact",
    iconName: "Building",
    summary:
      "Extending cybersecurity awareness to schools, senior citizens, and neighborhood communities.",
    description:
      "Cyber safety is a shared public responsibility. This initiative focuses on bridging generational and access divides by bringing practical, jargon-free security education to community centers, high schools, and local groups who may be more vulnerable to scams.",
    keyTopics: [
      "Elder digital security: shielding seniors from banking scams and pension fraud",
      "School-level cyber safety modules for young teens",
      "Local language awareness materials and accessible security guides",
      "Collaborative awareness drives with local organizations",
    ],
    actionableTips: [
      "Assist local senior citizens with setting up screen locks and biometric security.",
      "Share simplified bilingual safety advisories with neighborhood associations.",
      "Encourage schools to include digital hygiene in regular extracurricular activities.",
    ],
  },
  {
    id: "cybersecurity-learning",
    title: "Cybersecurity Learning",
    category: "Skill Development",
    iconName: "BookOpen",
    summary:
      "Guiding students through foundational security concepts, ethical research, and educational resources.",
    description:
      "For students passionate about technology, this initiative outlines clear paths to learn ethical cybersecurity, understanding networking basics, secure coding principles, and the distinction between defensive information security and illegal hacking activities.",
    keyTopics: [
      "Foundational networking concepts (TCP/IP, DNS, SSL/TLS, firewalls)",
      "Ethical vs unethical security research and legal boundaries under Indian law (IT Act)",
      "Open-source learning resources, Capture the Flag (CTF) platforms, and practice labs",
      "Developing defensive engineering skills and secure code principles",
    ],
    actionableTips: [
      "Learn fundamental Linux command line and networking protocols through reputable free platforms.",
      "Strictly practice on authorized sandbox platforms like OverTheWire or TryHackMe, never on live unauthorized targets.",
      "Read the IT Act provisions to understand legal boundaries governing computer systems in India.",
    ],
  },
];
