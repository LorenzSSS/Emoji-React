import {useState, useEffect} from 'react'; // Импортируем React с методами useState, useEffect

import s from './Main.module.css' // Импортируем стили из модуля Main.module.css
import {Card} from '../Card/Card' // Импортируем компонент катрочки Card.jsx
import {data} from '../../data.js' // Импортируем базу дата data.js
import {Input} from '../Input/Input.jsx' // Импортируем компонент Input.jsx

export const Main = () => { // Стрелочная функция??


    const [inputItem, setInputItem] = useState(''); // Изменяемая переменная в React (содержимое input)
    const [filterData, setFilterData] = useState([]); // Изменяемый / дополняемый массив

    useEffect(() => { 
        const test = data.filter(el => el.keywords.toLowerCase().includes(inputItem.toLowerCase())) 
        setFilterData(test)
    }, [inputItem])

    function delDuplicate (keyWords) {
        const keyWordsWithsDubles = keyWords.split(' ');
        const keyWordsNoDubles = Array.from(new Set(keyWordsWithsDubles)).join(' ');
        return keyWordsNoDubles;
    };

    return <main>
        <Input 
            value = {inputItem}
            onChange = {(e)=> setInputItem(e.target.value)}/>
        <div className = {s.grid}>
            {filterData.map((el, index) => 
            (<Card key = {index} 
                emoji = {el.symbol}
                name = {el.title}
                keywords = {delDuplicate(el.keywords)}
                />)
        )}

        </div>
</main>
}


