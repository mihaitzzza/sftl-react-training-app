import React, {useState, useEffect, useRef} from 'react';

/* Controlled component */
// const AddProduct = () => {
//     const [name, setName] = useState('');
//     console.log('name', name);
//
//     const onChange = (event: any) => {
//         setName(event.target.value);
//     }
//
//     const submit = () => {
//         console.log('SEND TO SERVER NAME =', name);
//     }
//
//     return (
//         <div style={{ padding: '20px' }}>
//             <label>Product name</label>
//             <input type="text" value={name} onChange={onChange} />
//             <button onClick={submit}>Submit</button>
//         </div>
//     );
// };

/* Uncontrolled component */
const AddProduct = () => {
    const [name, setName] = useState('');
    const inputRef = useRef<any>(null);

    console.log('name', name);

    useEffect(() => {
        console.log('inputRef', inputRef);

        if (inputRef && inputRef.current) {
            console.log('focus');
            inputRef.current.focus();
        }
    }, []);

    // const onBlur = (event: any) => {
    //     setName(event.target.value);
    // }

    const submit = () => {
        console.log('SEND TO SERVER NAME =', inputRef.current.value);
        setName(inputRef.current.value);
    }

    return (
        <div style={{ padding: '20px' }}>
            <label>Product name</label>
            {/*<input type="text" defaultValue={name} onBlur={onBlur} />*/}
            <input ref={inputRef} type="text" defaultValue={name} />
            <button onClick={submit}>Submit</button>
        </div>
    );
};

export default AddProduct;
