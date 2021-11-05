import React from 'react';

interface AddButtonType {
    onClick: () => void
}

const AddButton = (props: AddButtonType) => {
    const { onClick } = props;

    return (
        <button onClick={onClick}>
            Add new element
        </button>
    );
};

export default AddButton;
