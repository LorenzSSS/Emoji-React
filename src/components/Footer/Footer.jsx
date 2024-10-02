import s from './Footer.module.css'

export const Footer = () => {
    return <footer className = {s.Footer}>
        <hr className = {s.hr}/>
        <p className = {s.copyright}>2024 © Made with love by me</p>
    </footer>
}