import React, { useState } from 'react'
import {Pagination} from 'fwt-internship-uikit'
import './Paginator.scss'
import { useEffect } from 'react'

function Paginator({getPage, countPictures, darkVersion}) {

    const [activePage, setActivePage] = useState(1)
    const [pagesAmount, setPagesAmount] = useState(1)

    const makeSwitch = (currentPage) => {
        if (activePage !== currentPage) {
            setActivePage(currentPage)
        }
    }

    useEffect(() => {
        getPage(activePage)
    }, [activePage])

    useEffect(() => {
        setPagesAmount(Math.ceil(countPictures / 12))
    }, [countPictures])

    return (
        <div className="paginator">
            {pagesAmount > 1 ? 
            <Pagination pagesAmount={pagesAmount} currentPage={activePage} onChange={makeSwitch} isDarkTheme={darkVersion}/> 
            : null }
        </div>
    )
}

export default Paginator