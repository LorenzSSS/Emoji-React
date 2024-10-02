import s from './Card.module.css'

export function Card({emoji, name, keywords}) {
    return (
    <div className={s.card}>
        <span className={s.img}>{emoji}</span>
        <p className={s.number}>{name}</p>
        <p className={s.text}>{keywords}</p>
    </div>)
}