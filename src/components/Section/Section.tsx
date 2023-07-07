import React from 'react';

interface ISection {
    children: React.ReactNode
}

const Section = ({children}: ISection) => {
    return (
        <section>
            {children}
        </section>
    );
};

export default Section;
