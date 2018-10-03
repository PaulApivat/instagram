import React from 'react';

const DummyData = props => {
    return (
        <>
            {props.dummyData.map(e => (
                <>
                    <div>
                        {e.username}
                    </div>
                </>
            ))}
        </>
    )
}

export default DummyData;