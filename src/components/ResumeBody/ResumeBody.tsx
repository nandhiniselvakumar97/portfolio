import React, {FunctionComponent} from 'react';
import WorkSection from "./WorkSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";
import InterestSection from "./InterestSection";
import SkillsSection from "./SkillsSection";
import AreasOfInterestSection from "./AreasOfInterestSection";
import AchievementsSection from "./Achievements";
import LeadershipSection from "./Leadership";
import HobbiesSection from "./Hobbies";
import PositionsHeldSection from "./PositionsHeld";

export interface IEducation {
    "name": string;
    "duration": string;
    "degree": string;
    "score": string;
}

export interface ISkills {
    technical: string[];
    professional: string[]
}

export interface IPositionsHeld {
    university: string[];
    school: string[]
}

export interface IProjects {
    title: string;
    desc: string;
}

interface IResumeBodyProps {
    education: IEducation[];
    projects: IProjects[];
    interests: string[];
    skills: ISkills;
    areasOfInterest: string[];
    achievements: string[];
    leadership: string[];
    hobbies: string[];
    positionsHeld: IPositionsHeld;
    participation: string[]
}

const ResumeBody: FunctionComponent<IResumeBodyProps> = ({education, projects, interests, skills,areasOfInterest, achievements, leadership, hobbies, positionsHeld, participation}: IResumeBodyProps) => {
    return (
        <div className="resume-body">
            <div className="row">
                <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                    <EducationSection details={education}/>
                    <ProjectsSection details={projects}/>
                    <LeadershipSection details={leadership} />
                    <AchievementsSection details={achievements} />
                </div>
                <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                    <SkillsSection details={skills}/>
                    <AreasOfInterestSection details={areasOfInterest} />
                    <PositionsHeldSection details={positionsHeld} />
                    <HobbiesSection details={hobbies} />
                </aside>
            </div>
        </div>
    );
};

export default ResumeBody;