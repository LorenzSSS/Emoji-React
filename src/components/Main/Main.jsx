import React, {useState, useEffect} from 'react';

import s from './Main.module.css'
import {Card} from '../Card/Card'
import {data} from '../../data.js'
import {Input} from '../Input/Input.jsx'

export const Main = () => {


    const [inputItem, setInputItem] = useState('');
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const test = data.filter(el => el.title.includes(inputItem))
        setFilterData(test)
    }, [inputItem])
    

    return <main>
        <Input 
            value = {inputItem}
            onChange = {(e)=> setInputItem(e.target.value)}/>
        <div className = {s.grid}>
        {filterData.map((el, index) => 
        (<Card key = {index} emoji = {el.symbol}
            name = {el.title}
            keywords = {el.keywords}/>)
        )}

    </div>
</main>
}


