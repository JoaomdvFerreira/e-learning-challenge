import './header.styles.css';
import { House, BookOpen, SignIn } from "phosphor-react";
import { Link } from 'react-router-dom';
import FunKids from '../../FunKids-logo.svg';
export default function Header() {
    return (
        <div className="menu__container">
            <div className="logo__container">
                <img className="logo" src={FunKids} alt="FunKids" />
            </div>
            <div className="menu__list">
                <div className="menu__list__item">
                    <Link to="/"><House size={30} /></Link>
                </div>
                <div className="menu__list__item">
                    <Link to="/exercises"><BookOpen size={30} /></Link>
                </div>
                <div className="menu__list__item">
                    <Link to="/signin"><SignIn size={30} /></Link>
                </div>
            </div>
        </div>
    )
}
