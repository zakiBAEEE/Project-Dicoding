import React, { useState } from 'react'

function useInput() {
    const [input, setInput] = useState('');

    function onChangeInput(e) {
        setInput(e.target.value); // Pastikan ini memanggil setInput dengan benar
    }

    return [input, onChangeInput]; // Mengembalikan input dan onChange
}


export default useInput