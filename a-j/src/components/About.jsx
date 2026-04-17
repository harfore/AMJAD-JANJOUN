import about_amjad from '../assets/images/about.jpeg';
import '../styles/About.css';

function About() {
    const about_title = "Amjad - BRAND COMMUNICATON, IMAGE & PRESS RELATIONS"
    const about_paragraph = "Avec six mois de stage en relations presse chez Lucien Pagès, où j’ai commencé comme assistant showroom, puis une collaboration continue en freelance comme assistant presse pendant les Fashion Weeks, ainsi qu’un an d’alternance en image et relations presse chez Citizen, j’ai construit une solide expérience en communication et gestion d’image. Curieux et impliqué, je m’adapte facilement aux environnements exigeants, avec une vraie sensibilité pour les univers créatifs.";
    return (
        <div className='about_card'>
            <img src={about_amjad} alt="Amjad Janjoun" className='main_image' />
            <div className="dk-right">
                <h2 className='main_title'>{about_title}</h2>
                <p className='main_paragraph'>{about_paragraph}</p>
            </div>
        </div>
    )
}

export default About;