import s from './Input.module.css'

export function Input({ value, onChange }) {
    return (
        <input 
            className={s.placeholder} 
            placeholder ="Placeholder"
            value = {value} 
            onChange = {onChange}/>
    )
}
