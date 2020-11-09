import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IParticipationSection {
    details: string[]
}

const ParticipationSection: FunctionComponent<IParticipationSection> = ({details}: IParticipationSection) => {
    return (
        <section className="skills-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Participation</h3>
            <div className="item">
                
                <ul className="list-unstyled resume-skills-list">
                    {details.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2 text-justify">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default ParticipationSection;