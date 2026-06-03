import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadershipCard } from "@/components/LeadershipCard";
import type { LeadershipMember } from "@/data/leadership";
import { cn } from "@/lib/utils";

export type TeamDepartment = {
  name: string;
  members: LeadershipMember[];
  gridClassName?: string;
};

type TeamWingSectionProps = {
  title: string;
  departments: TeamDepartment[];
  className?: string;
};

export function TeamWingSection({
  title,
  departments,
  className = "py-20 bg-background",
}: TeamWingSectionProps) {
  return (
    <section className={className}>
      <div className="page-container">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">{title}</h2>
        </AnimatedSection>

        <div className="space-y-16">
          {departments.map((dept, deptIndex) => (
            <div key={dept.name}>
              <AnimatedSection className="text-center mb-8">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest">
                  {dept.name}
                </p>
              </AnimatedSection>

              <div
                className={cn(
                  "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto",
                  dept.gridClassName
                )}
              >
                {dept.members.map((person, i) => (
                  <LeadershipCard
                    key={person.name}
                    person={person}
                    index={deptIndex * 4 + i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** @deprecated Use TeamWingSection for multi-department wings */
export function TeamDepartmentSection({
  title,
  department,
  members,
  className = "py-20 bg-background",
  gridClassName = "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto",
}: {
  title: string;
  department?: string;
  members: LeadershipMember[];
  className?: string;
  gridClassName?: string;
}) {
  return (
    <TeamWingSection
      title={title}
      departments={[{ name: department ?? title, members, gridClassName }]}
      className={className}
    />
  );
}
