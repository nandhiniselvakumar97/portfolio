import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ILeadershipSection {
    details: string[]
}

const LeadershipSection: FunctionComponent<ILeadershipSection> = ({details}: ILeadershipSection) => {
    return (
        <section className="projects-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Leadership</h3>
            <div className="item">
                <div className="item-content">
                    <ul className="resume-list">
                        {details.map(item => {
                            return (
                                <li key={uuidv4()} className='text-justify'>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;