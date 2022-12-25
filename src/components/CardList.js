import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

    //! Uncomment to test ErrorBoundry.
    // if (true) {
    //     throw new Error('Some Error in CardList!');
    // }

    return (
        <div>
            {
                robots.map((robot, i) => {
                    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
                })
            }
        </div>
    );
}

export default CardList;