import React from 'react';
import PropTypes from 'prop-types';

interface ListType {
    arr: Array<{ id: number }>,
}

const List = (props: ListType) => {
    const {arr} = props;

    return (
        <>
            <p>This is list component</p>
            <ul>
                {
                    arr.map((element: any, index: number) => (
                        <li key={element.id}>{element.id}</li>
                    ))
                }
            </ul>
        </>
    );
};

List.propTypes = {
    arr: PropTypes.array.isRequired,
};

export default List;
