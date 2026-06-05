import { AnimatedSection } from "@/components/AnimatedSection";
import { LeadershipCard } from "@/components/LeadershipCard";
import type { LeadershipMember } from "@/data/leadership";
import { cn } from "@/lib/utils";

/** Same card width as Software Department; rows center when fewer than 4 members */
export const TEAM_MEMBER_GRID =
  "flex flex-wrap justify-center gap-6 max-w-6xl mx-auto";

export const TEAM_MEMBER_CARD =
  "w-full sm:w-[calc((100%-1.5rem)/2)] xl:w-[calc((100%-4.5rem)/4)]";

export function TeamMemberGrid({
  members,
  indexOffset = 0,
  className,
}: {
  members: LeadershipMember[];
  indexOffset?: number;
  className?: string;
}) {
  return (
    <div className={cn(TEAM_MEMBER_GRID, className)}>
      {members.map((person, i) => (
        <div key={person.name} className={cn(TEAM_MEMBER_CARD, "flex flex-col")}>
          <LeadershipCard person={person} index={indexOffset + i} />
        </div>
      ))}
    </div>
  );
}

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

              <TeamMemberGrid
                members={dept.members}
                indexOffset={deptIndex * 4}
                className={dept.gridClassName}
              />
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
  gridClassName = TEAM_MEMBER_GRID,
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
