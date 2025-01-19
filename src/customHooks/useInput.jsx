import React, { useState } from 'react'

function useInput() {
    const [input, setInput] = useState('');

    function onChangeInput(inputan) {
        setInput(inputan)
    }

    return [input, onChangeInput]
}

export default useInput