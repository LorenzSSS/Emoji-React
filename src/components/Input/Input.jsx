import s from './Input.module.css'

export const Input = ({value, onChange}) => {
    console.log(value);
    
    return (
        <input 
            className={s.placeholder} 
            placeholder ="Placeholder"
            value = {value} 
            onChange = {onChange}/>
    )
}

