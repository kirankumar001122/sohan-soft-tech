export interface JobOpening {
  slug: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const careersData = {
  introduction:
    "Build technology, solve business problems and grow your capabilities in a technology-focused environment.",

  whyWorkWithUs: [
    {
      title: "Build Real Solutions",
      description:
        "Work on technology solutions designed around practical business and operational requirements.",
    },
    {
      title: "Learn Across Technologies",
      description:
        "Explore software, automation, cloud, digital solutions and connected technology workflows.",
    },
    {
      title: "Solve Meaningful Problems",
      description:
        "Understand business requirements and translate them into practical technology solutions.",
    },
    {
      title: "Grow With the Work",
      description:
        "Develop technical and problem-solving capabilities through continuous project experience.",
    },
  ],

  culture: [
    {
      title: "Curiosity",
      description:
        "Stay open to learning new technologies, tools and ways of solving problems.",
    },
    {
      title: "Ownership",
      description:
        "Take responsibility for understanding requirements and delivering work thoughtfully.",
    },
    {
      title: "Collaboration",
      description:
        "Work across technology and business requirements to create connected solutions.",
    },
    {
      title: "Continuous Improvement",
      description:
        "Look for practical ways to improve systems, workflows and the way technology is delivered.",
    },
  ],

  technologyEnvironment: [
    "Web Development",
    "Mobile Development",
    "Cloud Technology",
    "Business Software",
    "AI & Automation",
    "APIs & Integrations",
    "Databases",
    "Digital Solutions",
    "Office & IT Technology",
  ],

  applicationProcess: [
    {
      step: "01",
      title: "Explore",
      description:
        "Review the available opportunity and understand the role requirements.",
    },
    {
      step: "02",
      title: "Apply",
      description:
        "Submit your application and relevant professional information.",
    },
    {
      step: "03",
      title: "Discuss",
      description:
        "Discuss your experience, skills and understanding of the role.",
    },
    {
      step: "04",
      title: "Evaluate",
      description:
        "Complete any role-specific discussions, assessments or technical evaluation where applicable.",
    },
    {
      step: "05",
      title: "Join",
      description:
        "Successful candidates proceed through the next steps of the hiring process.",
    },
  ],

  openings: [] as JobOpening[],
};