import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the business, users, requirements and technology challenges before defining the solution.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Translate the requirements into a practical solution structure, priorities and implementation approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Design and develop the required digital products, software, automation or technology systems.",
  },
  {
    number: "04",
    title: "Test & Refine",
    description:
      "Review the implementation, identify issues and refine the solution before it moves into use.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "Prepare the solution for production and connect the required technology, systems and integrations.",
  },
  {
    number: "06",
    title: "Support & Evolve",
    description:
      "Continue improving the solution as business requirements, technology and users evolve.",
  },
];

export default function ProcessSection() {
  return (
    <Section className="bg-white">
      {/* Header */}
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#8B2346]">
          How We Work
        </p>

        <Heading as="h2" className="text-[#172033]">
          A structured approach from idea to implementation.
        </Heading>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#64748B] sm:text-lg">
          Every project starts with understanding the requirement and moves
          through planning, implementation, testing and deployment.
        </p>
      </div>

      {/* Process */}
      <div className="mt-14 grid gap-0 border-y border-[#E5E7EB] md:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <div
            key={step.number}
            className={`border-[#E5E7EB] p-7 sm:p-8 ${
              index !== 2 ? "lg:border-r" : ""
            } ${index < 3 ? "lg:border-b" : ""} ${
              index % 2 === 0 ? "md:border-r lg:border-r" : ""
            }`}
          >
            <span className="text-sm font-medium text-[#8B2346]">
              {step.number}
            </span>

            <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#172033]">
              {step.title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-[#64748B]">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="mt-10 border-l-2 border-[#8B2346] pl-5">
        <p className="max-w-3xl text-sm leading-7 text-[#64748B] sm:text-base">
          The approach can be adapted to the scope, complexity and technology
          requirements of each project.
        </p>
      </div>
    </Section>
  );
}