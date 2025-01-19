import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function useSearch() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [keyword, setKeyword] = useState(searchParams.get('title') || '')

    function onChangeKeywords(inputan) {
        setKeyword(inputan)
        setSearchParams({ title: inputan })
    }

    return [keyword, onChangeKeywords]
}

export default useSearch