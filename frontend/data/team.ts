export type TeamMember = {
  name: string;
  role: string;
  image: string;
  alt: string;
  imagePosition?: string;
};

export const leadershipTeam: TeamMember[] = [
  {
    name: "Darshan Tejomaya M",
    role: "Founder",
    image: "/images/darshan-founder.jpg",
    alt: "Darshan Tejomaya M, Founder at Sohan Soft Tech",
  },
  {
    name: "Moulya Shree N",
    role: "Managing Director",
    image: "/images/moulya-managing-director.jpg",
    alt: "Moulya Shree N, Managing Director at Sohan Soft Tech",
  },
  {
    name: "Chalukya",
    role: "Team Lead",
    image: "/images/chalukya-team-lead.jpg",
    alt: "Chalukya, Team Lead at Sohan Soft Tech",
  },
];

export const deliveryTeam: TeamMember[] = [
  {
    name: "Kiran Kumar K R",
    role: "Fullstack Developer",
    image: "/images/kiran-fullstack.png",
    alt: "Kiran Kumar K R, Fullstack Developer at Sohan Soft Tech",
  },
  {
    name: "Manoj Kumar M",
    role: "System Design",
    image: "/images/manoj-system-design.jpg",
    alt: "Manoj Kumar M, System Design at Sohan Soft Tech",
  },
  {
    name: "Dega Parthiv",
    role: "Tester",
    image: "/images/parthiv.png",
    alt: "Dega Parthiv, Tester at Sohan Soft Tech",
    imagePosition: "center top",
  },
  {
    name: "Sumith Kumar",
    role: "UI/UX Developer",
    image: "/images/sumith-uiux%20.jpg",
    alt: "Sumith Kumar, UI/UX Developer at Sohan Soft Tech",
  },
];
