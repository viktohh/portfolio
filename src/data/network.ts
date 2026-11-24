// Content for the interactive network diagram.
// Coordinates are node centers inside a 1080 x 620 SVG viewBox.

export type IconKind =
  | 'cloud' | 'globe' | 'laptop' | 'key' | 'shield' | 'switch'
  | 'users' | 'lock' | 'directory' | 'router' | 'chart' | 'bolt';

export type NetNode = {
  id: string;
  label: string;
  sub: string;
  icon: IconKind;
  x: number;
  y: number;
  detail: {
    summary: string;
    skills: string[];
    proof: { text: string; href?: string }[];
  };
};

export type NetLink = { a: string; b: string; label: string };

export type Zone = { label: string; x: number; y: number; w: number; h: number; align?: 'start' | 'end' };

export type Scenario = {
  id: string;
  title: string;
  steps: { text: string; nodes: string[]; links: [string, string][] }[];
};

export const zones: Zone[] = [
  { label: 'Cloud & internet', x: 12, y: 24, w: 1056, h: 128 },
  { label: 'Branch sites', x: 12, y: 182, w: 200, h: 418 },
  { label: 'HQ · on-prem', x: 232, y: 182, w: 836, h: 418, align: 'end' },
];

export const nodes: NetNode[] = [
  {
    id: 'aws', label: 'AWS VPC', sub: 'Transit Gateway', icon: 'cloud', x: 112, y: 90,
    detail: {
      summary: 'Segmented AWS VPCs connected back to on-prem over site-to-site VPN, locked down with security groups and NACLs and monitored with CloudWatch.',
      skills: ['AWS VPC', 'Transit Gateway', 'Site-to-Site VPN', 'Security groups', 'NACLs', 'CloudWatch'],
      proof: [
        { text: 'SpatialNode — architect secure AWS environments (CTO)' },
        { text: 'Project: AWS Site-to-Site VPN & Monitoring' },
        { text: 'AWS Certified Solutions Architect — Associate' },
      ],
    },
  },
  {
    id: 'internet', label: 'Internet · SASE', sub: 'Zscaler SSE', icon: 'globe', x: 392, y: 90,
    detail: {
      summary: 'Security service edge in front of the internet: traffic is inspected and Zero Trust policy is enforced before users ever reach an application.',
      skills: ['SASE', 'Zscaler SSE', 'Cisco Viptela SD-WAN', 'Zero Trust/ZTNA'],
      proof: [
        { text: 'SASE Lab — WWT Advanced Technology Center' },
      ],
    },
  },
  {
    id: 'remote', label: 'Remote user', sub: 'AnyConnect · ZTNA', icon: 'laptop', x: 672, y: 90,
    detail: {
      summary: 'Remote workers get access to specific apps, not the whole network — via AnyConnect RA-VPN with AAA, or identity-aware ZTNA.',
      skills: ['AnyConnect RA-VPN', 'ZTNA', 'AAA', 'Identity-aware access'],
      proof: [
        { text: 'Project: Multi-Site Cisco Network (AnyConnect RA-VPN with AAA)' },
        { text: 'SpatialNode — identity-aware, context-driven access policies' },
      ],
    },
  },
  {
    id: 'idp', label: 'Entra ID', sub: 'SSO · MFA', icon: 'key', x: 952, y: 90,
    detail: {
      summary: 'Microsoft Entra ID as the cloud identity provider. Identity is the new perimeter: every access decision starts with who the user is, which device they are on, and the context of the request.',
      skills: ['Microsoft Entra ID', 'SSO', 'MFA', 'Zero Trust', 'Identity-aware policy'],
      proof: [
        { text: 'SpatialNode — Zero Trust, identity-aware access across cloud workloads' },
        { text: 'Speaker: Securing IoT Devices in Enterprise Networks (CCSC 2026)', href: '/projects/healthcare-iot-network/' },
      ],
    },
  },
  {
    id: 'firewall', label: 'Edge firewall', sub: 'Cisco FTD / ASA', icon: 'shield', x: 392, y: 250,
    detail: {
      summary: 'Least-privilege firewall policy — NAT, ACLs/DACLs, and security zones — with IDS/IPS, and Python-automated rule reviews.',
      skills: ['Cisco ASA/FTD', 'NAT', 'ACLs/DACLs', 'Security zones', 'IDS/IPS', 'IPsec/IKEv2'],
      proof: [
        { text: 'Bitrix Resources — managed Cisco ASA policies for least-privilege access' },
        { text: 'Automated firewall rule reviews with Python & Bash — 50% less manual effort' },
        { text: 'Cisco Certified Specialist — Security Core (SCOR 350-701)' },
      ],
    },
  },
  {
    id: 'core', label: 'Core switch', sub: 'L3 · VLANs · VRFs', icon: 'switch', x: 392, y: 390,
    detail: {
      summary: 'Redundant layer-3 core that keeps traffic separated with VLANs and VRFs, and stays up with EtherChannel, STP, and QoS for critical traffic.',
      skills: ['OSPF', 'BGP', 'EIGRP', 'VRFs', 'VLANs', 'EtherChannel/LACP', 'STP', 'QoS'],
      proof: [
        { text: 'Bitrix Resources — enterprise network across 5+ branch locations' },
        { text: 'Project: HIPAA-style segmentation across a three-site healthcare network', href: '/projects/healthcare-iot-network/' },
        { text: 'Cisco Certified Network Associate (CCNA)' },
      ],
    },
  },
  {
    id: 'endpoints', label: 'Endpoints', sub: 'Users · IoT', icon: 'users', x: 392, y: 530,
    detail: {
      summary: 'Every device — laptop, phone, or IoT sensor — must authenticate before it gets a network, and lands only in the segment it needs.',
      skills: ['802.1X', 'Microsegmentation', 'IoT security'],
      proof: [
        { text: 'Speaker: Securing IoT Devices in Enterprise Networks (CCSC 2026)', href: '/projects/healthcare-iot-network/' },
        { text: 'New Horizons — supported 100+ users and devices' },
      ],
    },
  },
  {
    id: 'nac', label: 'Cisco ISE', sub: 'NAC · 802.1X · AAA', icon: 'lock', x: 672, y: 390,
    detail: {
      summary: 'Network access control with Cisco ISE: switches ask ISE over RADIUS whether a device may connect, and which VLAN or DACL it gets. TACACS+ controls admin access to the network gear itself.',
      skills: ['Cisco ISE', '802.1X', 'RADIUS/FreeRADIUS', 'TACACS+', 'DACLs'],
      proof: [
        { text: 'Healthcare network project — AAA with FreeRADIUS, the open-source alternative to ISE', href: '/projects/healthcare-iot-network/' },
        { text: 'Bitrix Resources — DACLs and least-privilege access' },
      ],
    },
  },
  {
    id: 'ad', label: 'Active Directory', sub: 'Users · groups', icon: 'directory', x: 952, y: 390,
    detail: {
      summary: 'The on-prem source of truth for users and groups. Group membership drives ISE authorization and VPN policy, and syncs up to Entra ID so cloud and on-prem share one identity.',
      skills: ['Active Directory', 'Entra Connect sync', 'Group-based policy', 'ISE integration'],
      proof: [
        { text: 'Identity-aware access policies (SpatialNode, multi-site lab)' },
      ],
    },
  },
  {
    id: 'branch', label: 'Branch edge', sub: 'SD-WAN · DMVPN', icon: 'router', x: 112, y: 300,
    detail: {
      summary: 'Branches connect back to HQ over an encrypted SD-WAN or DMVPN overlay, with dynamic routing so traffic fails over automatically.',
      skills: ['SD-WAN', 'DMVPN', 'IPsec', 'OSPF', 'BGP', 'MPLS'],
      proof: [
        { text: 'Bitrix Resources — routed network across 5+ branch locations' },
        { text: 'SASE Lab — Cisco Viptela SD-WAN' },
      ],
    },
  },
  {
    id: 'branchlan', label: 'Branch LAN', sub: 'VLANs · QoS', icon: 'users', x: 112, y: 470,
    detail: {
      summary: 'Branch users get the same segmentation and policy as HQ, with QoS so business-critical apps stay fast.',
      skills: ['VLANs', 'QoS', 'Wireless site surveys'],
      proof: [
        { text: 'Bitrix Resources — QoS tuned for business-critical traffic' },
      ],
    },
  },
  {
    id: 'siem', label: 'SIEM', sub: 'Splunk', icon: 'chart', x: 672, y: 530,
    detail: {
      summary: 'Firewall logs, NetFlow, and SNMP traps all flow into one place, so faults and attacks show up fast.',
      skills: ['Splunk', 'Syslog', 'NetFlow/NSEL', 'SNMP', 'SolarWinds', 'Wireshark'],
      proof: [
        { text: 'Bitrix Resources — monitoring & alerting for a 300+ user environment' },
        { text: 'Splunk eLearning' },
      ],
    },
  },
  {
    id: 'soar', label: 'SOAR pipeline', sub: 'Python', icon: 'bolt', x: 952, y: 530,
    detail: {
      summary: 'My Python pipeline enriches suspicious IPs with threat intel (AbuseIPDB) and raises alerts automatically, so incidents arrive already triaged.',
      skills: ['Python', 'REST APIs', 'AbuseIPDB', 'Automation'],
      proof: [
        { text: 'Project: On-Premises SOAR Pipeline (GitHub)', href: 'https://github.com/viktohh/Network_ai_detectection' },
        { text: 'Case study: NetFlow + syslog feeding an AI triage pipeline', href: '/projects/healthcare-iot-network/' },
      ],
    },
  },
];

export const links: NetLink[] = [
  { a: 'remote', b: 'internet', label: 'ZTNA · RA-VPN' },
  { a: 'remote', b: 'idp', label: 'SSO · MFA' },
  { a: 'internet', b: 'firewall', label: 'Edge' },
  { a: 'firewall', b: 'aws', label: 'IPsec/IKEv2 · BGP' },
  { a: 'firewall', b: 'branch', label: 'SD-WAN/DMVPN' },
  { a: 'branch', b: 'branchlan', label: 'VLANs' },
  { a: 'firewall', b: 'core', label: 'Inside zone' },
  { a: 'core', b: 'endpoints', label: '802.1X' },
  { a: 'core', b: 'nac', label: 'RADIUS' },
  { a: 'nac', b: 'ad', label: 'LDAP' },
  { a: 'ad', b: 'idp', label: 'Entra Connect sync' },
  { a: 'core', b: 'siem', label: 'Syslog · NetFlow' },
  { a: 'siem', b: 'soar', label: 'Alerts' },
];

export const scenarios: Scenario[] = [
  {
    id: 'dot1x',
    title: 'Employee plugs in',
    steps: [
      { text: 'A laptop plugs into a switch port. The port stays closed — it only passes 802.1X (EAPoL) traffic until the device proves who it is.', nodes: ['endpoints', 'core'], links: [['endpoints', 'core']] },
      { text: 'The switch forwards the credentials to Cisco ISE as a RADIUS Access-Request.', nodes: ['core', 'nac'], links: [['core', 'nac']] },
      { text: 'ISE checks Active Directory: is this user real, and which groups are they in?', nodes: ['nac', 'ad'], links: [['nac', 'ad']] },
      { text: 'ISE replies Access-Accept with a VLAN and DACL for that role. The port opens — but only to the segment this user needs.', nodes: ['nac', 'core', 'endpoints'], links: [['nac', 'core'], ['core', 'endpoints']] },
    ],
  },
  {
    id: 'ztna',
    title: 'Remote access (Zero Trust)',
    steps: [
      { text: 'A remote employee opens an internal app. First they sign in through Microsoft Entra ID with SSO and MFA.', nodes: ['remote', 'idp'], links: [['remote', 'idp']] },
      { text: 'Entra ID knows this user because it is synced with on-prem Active Directory via Entra Connect — one identity, one set of groups.', nodes: ['idp', 'ad'], links: [['idp', 'ad']] },
      { text: 'Traffic goes through the security service edge, which checks user, device posture, and context before allowing anything.', nodes: ['remote', 'internet'], links: [['remote', 'internet']] },
      { text: 'The edge firewall only admits the connection to the one app segment this user is allowed — never the whole network.', nodes: ['internet', 'firewall', 'core'], links: [['internet', 'firewall'], ['firewall', 'core']] },
    ],
  },
  {
    id: 'hybrid',
    title: 'Branch to cloud',
    steps: [
      { text: 'A branch user requests an app hosted in AWS. Traffic leaves the branch LAN in its own VLAN, with QoS marking.', nodes: ['branchlan', 'branch'], links: [['branchlan', 'branch']] },
      { text: 'The branch edge sends it over an encrypted SD-WAN / DMVPN overlay to HQ, with OSPF picking the best path.', nodes: ['branch', 'firewall'], links: [['branch', 'firewall']] },
      { text: 'HQ forwards it through an IPsec/IKEv2 site-to-site tunnel to the AWS Transit Gateway, with routes exchanged over BGP.', nodes: ['firewall', 'aws'], links: [['firewall', 'aws']] },
      { text: 'Inside AWS, security groups and NACLs allow only the app port. CloudWatch and Python checks confirm the tunnel and controls are healthy.', nodes: ['aws'], links: [] },
    ],
  },
  {
    id: 'threat',
    title: 'Threat detected',
    steps: [
      { text: 'A compromised IoT device starts calling out to a suspicious IP address.', nodes: ['endpoints', 'core'], links: [['endpoints', 'core']] },
      { text: 'Syslog and NetFlow records for that traffic stream into the SIEM.', nodes: ['core', 'siem'], links: [['core', 'siem']] },
      { text: 'The SIEM raises an event, and my SOAR pipeline enriches the destination IP with AbuseIPDB threat intel.', nodes: ['siem', 'soar'], links: [['siem', 'soar']] },
      { text: 'The IP scores as malicious, so an alert fires with full context for triage — and segmentation means the device could never reach anything sensitive anyway.', nodes: ['soar', 'endpoints'], links: [] },
    ],
  },
];
