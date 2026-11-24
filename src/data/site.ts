// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Victor Owolabi',
  role: 'Network Security Engineer',
  location: 'Baltimore, MD',
  tagline:
    'I design and secure enterprise, multi-site, and AWS networks — firewall policy, segmentation, and Zero Trust access — and automate the boring parts with Python, Bash, and Ansible.',
  summary: [
    'Network Security Engineer with 4+ years securing enterprise, multi-site, and AWS environments through network design, firewall policy management, segmentation, and Zero Trust access control.',
    'I automate security validation, configuration reviews, and compliance checks with Python, Bash, and Ansible. I hold an M.S. in Cybersecurity (GPA 3.90) from Saint Louis University and am currently pursuing CCNP Security.',
  ],
  email: 'viktohtimmy@gmail.com',
  resume: '/Victor_Owolabi_Resume.pdf',
  links: {
    github: 'https://github.com/Viktohh',
    linkedin: 'https://www.linkedin.com/in/viktohtimmy/',
  },
};

export const highlights = [
  { value: '4+', label: 'years in network engineering' },
  { value: '4', label: 'industry certifications' },
  { value: '3.90', label: 'M.S. Cybersecurity GPA' },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: 'SpatialNode',
    role: 'Co-Founder & Chief Technology Officer',
    location: 'Remote',
    period: 'Jan 2026 — Present',
    points: [
      'Architect secure AWS environments with VPC segmentation, site-to-site VPN, security groups, and NACLs.',
      'Apply Zero Trust principles — identity-aware, context-driven access policies and microsegmentation — across cloud workloads.',
      'Build Python tooling to automate security validation, compliance verification, configuration checks, and vulnerability analysis across AWS.',
      'Run security design reviews and vulnerability research to find network-level weaknesses, assess risk, and drive remediation.',
      'Produce network diagrams, as-built documentation, and threat models that support design decisions and operational readiness.',
    ],
  },
  {
    company: 'Bitrix Resources',
    role: 'Network Engineer',
    location: 'Lagos, Nigeria',
    period: 'Mar 2020 — Aug 2024',
    points: [
      'Designed and maintained enterprise network infrastructure across 5+ branch locations using Cisco routers, switches, and firewalls (OSPF, BGP, VLANs, VRFs, ACLs, NAT).',
      'Managed Cisco ASA policies (NAT, ACLs, DACLs, security zones) to enforce least-privilege access.',
      'Automated firewall rule reviews and configuration management with Python and Bash, reducing manual effort by 50%.',
      'Built Wireshark and SolarWinds monitoring and alerting for a 300+ user environment, improving fault detection and SLA compliance.',
      'Configured EtherChannel (LACP) and STP for redundant LAN connectivity; tuned QoS to prioritize business-critical traffic.',
      'Troubleshot Layer 1–3 issues and maintained documentation and disaster recovery runbooks.',
    ],
  },
  {
    company: 'New Horizons Computer Learning Centers',
    role: 'IT Support Intern',
    location: 'Lagos, Nigeria',
    period: 'Jul 2019 — Jan 2020',
    points: [
      'Resolved hardware, software, and network connectivity issues for 100+ users; supported wireless optimization and device configuration.',
    ],
  },
];

export type Project = {
  title: string;
  context?: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'On-Premises SOAR Pipeline',
    description:
      'Python pipeline that ingests ASAv syslog, NetFlow, and SNMP traps, enriches events via the AbuseIPDB REST API, and drives automated alerting and incident triage.',
    tags: ['Python', 'Cisco ASAv', 'NetFlow', 'SNMP', 'Syslog', 'AbuseIPDB', 'n8n'],
    links: [
      { label: 'GitHub', href: 'https://github.com/viktohh/Network_ai_detection' },
      { label: 'Case study', href: '/projects/healthcare-iot-network/' },
    ],
  },
  {
    title: 'Multi-Site Healthcare Network & IoT Security',
    context: 'Presented at CCSC Central Plains 2026',
    description:
      'HIPAA-themed three-site healthcare network built in EVE-NG: VLAN segmentation with a dedicated IoT zone, least-privilege ACLs, IPsec/IKEv2 site-to-site VPN, FreeRADIUS AAA, and NetFlow + syslog feeding an AI triage pipeline.',
    tags: ['EVE-NG', 'Cisco ASAv', 'VLAN', 'IPsec/IKEv2', 'FreeRADIUS', 'NetFlow'],
    links: [
      { label: 'Case study', href: '/projects/healthcare-iot-network/' },
      { label: 'LinkedIn post', href: 'https://www.linkedin.com/posts/viktohtimmy_cybersecurity-networksecurity-hipaa-ugcPost-7450289503421857792-9eWX/' },
    ],
  },
  {
    title: 'AWS Site-to-Site VPN & Monitoring',
    description:
      'Hybrid cloud topology with CloudWatch and Python diagnostics validating traffic flow, connectivity health, and security control effectiveness.',
    tags: ['AWS VPC', 'Site-to-Site VPN', 'CloudWatch', 'Python'],
  },
  {
    title: 'SASE Lab',
    context: 'WWT Advanced Technology Center',
    description:
      'Cisco Viptela SD-WAN integrated with Zscaler SSE, with Zero Trust policy enforcement and identity-centric access.',
    tags: ['SD-WAN', 'Cisco Viptela', 'Zscaler', 'Zero Trust'],
  },
  {
    title: 'Proxmox, Ollama & n8n Lab',
    description:
      'Self-hosted virtualization lab running workflow automation and local AI experimentation on Linux.',
    tags: ['Proxmox', 'Ollama', 'n8n', 'Linux'],
    links: [{ label: 'Demo video', href: 'https://www.youtube.com/watch?v=5GhM7qo4vOQ' }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Network Security',
    items: ['Cisco ASA/FTD', 'ACLs/DACLs', 'NAT', 'IDS/IPS', 'Segmentation & microsegmentation', 'Zero Trust/ZTNA', 'Threat modeling', 'Vulnerability assessment', 'Security risk assessment'],
  },
  {
    group: 'Routing & Switching',
    items: ['BGP', 'OSPF', 'EIGRP', 'MPLS', 'SD-WAN', 'VRFs', 'VLANs', 'STP', 'EtherChannel/LACP', 'vPC', 'QoS', 'TCP/IP'],
  },
  {
    group: 'VPN & Access Control',
    items: ['IPsec/IKEv2', 'DMVPN', 'AnyConnect RA-VPN', 'Cisco ISE', 'Microsoft Entra ID', '802.1X', 'RADIUS/FreeRADIUS', 'TACACS+', 'Identity-aware access'],
  },
  {
    group: 'Cloud & Wireless',
    items: ['AWS VPC', 'Transit Gateway', 'Site-to-Site VPN', 'Security groups', 'NACLs', 'CloudWatch', 'Wireless site surveys'],
  },
  {
    group: 'Automation & Monitoring',
    items: ['Python', 'Bash', 'Ansible', 'Wireshark', 'SolarWinds', 'Splunk', 'NetFlow/NSEL', 'Syslog', 'SNMP'],
  },
];

// href = public Credly badge (verifiable by recruiters)
export const certifications: { name: string; date: string; href?: string }[] = [
  { name: 'Cisco Certified Specialist — Security Core (SCOR 350-701)', date: 'Nov 2026', href: 'https://www.credly.com/badges/4acd3130-91fc-4966-acb9-1608bb7c1b37/public_url' },
  { name: 'CompTIA Security+', date: 'Dec 2025', href: 'https://www.credly.com/badges/58c58a85-4da8-4495-9d8e-66cb7f608f28/public_url' },
  { name: 'AWS Certified Solutions Architect — Associate', date: 'Nov 2025', href: 'https://www.credly.com/badges/8bea1397-f63a-4839-92de-21b72b7fee42/public_url' },
  { name: 'Cisco Certified Network Associate (CCNA)', date: 'Sep 2025', href: 'https://www.credly.com/badges/3e1be5f9-3861-43dc-9f92-890568aa6322/public_url' },
  { name: 'CCNP Security (SDSI 300-745)', date: 'In progress' },
  { name: 'Udacity Cloud DevOps Nanodegree', date: '' },
  { name: 'Splunk eLearning', date: '' },
];

export const education = [
  {
    school: 'Saint Louis University',
    degree: 'M.S., Cybersecurity',
    period: 'Aug 2024 — May 2026',
    notes: ['GPA 3.90', 'Alpha Sigma Nu Honor Society'],
  },
  {
    school: 'Federal University of Technology, Akure',
    degree: 'B.E., Computer Engineering',
    period: 'Nov 2020',
    notes: [],
  },
];

export const speaking: { title: string; venue: string; place: string; date: string; href?: string }[] = [
  {
    title: 'Securing IoT Devices in Enterprise Networks',
    venue: 'Consortium for Computing Sciences in Colleges (CCSC) Central Plains',
    place: 'Springfield, IL',
    date: 'Apr 2026',
    href: '/projects/healthcare-iot-network/',
  },
];
