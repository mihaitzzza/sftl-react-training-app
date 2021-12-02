import React, {useEffect, useState} from 'react';
import List from "../components/List";
import AddButton from "../components/AddButton";

const Homepage = () => {
    const [arr, setArr] = useState([{
        id: 1,
    }, {
        id: 2,
    }, {
        id: 3,
    }, {
        id: 4,
    }, {
        id: 5,
    }]);

    // useEffect(() => {
    //     console.log('inside use effect');
    // }, []);

    useEffect(() => {
        console.log('new arr =', arr);
    }, [arr]);

    useEffect(() => {
        const onDocumentClick = (event: any) => {
            console.log('onDocumentClick');
        }

        console.log('Homepage component did mount!');
        document.addEventListener('click', onDocumentClick)

        return () => {
            console.log('Homepage will unmount!');
            document.removeEventListener('click', onDocumentClick);
        }
    }, []);

    const addNewElement = () => {
        const newArr = [
            {
                id: 0
            },
            ...arr,
        ]
        setArr(newArr);
    }

    return (
        <>
            <h1>First React App Component</h1>
            <List arr={arr} />
            <AddButton onClick={addNewElement} />
        </>
    )
};

export default Homepage;
