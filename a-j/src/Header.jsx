import './Header.css'

export default function Header() {
    return (
        <div id="header">
            <div className="header-list">
                <li className="header-element header-element-side"><a href="/"><b>CONTACT</b></a></li>
                <li className="header-element header-element-main"><a href="/"><b>AMJAD JANJOUN</b></a></li>
                <li className="header-element header-element-side"><a href="/"><b>ABOUT ME</b></a></li>
                <li className="header-burger-icon">+</li>
            </div>
        </div>
    )
}