import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../images/hero_image.svg';
import './hero.styles.css';

import { Fireworks } from 'fireworks/lib/react';

export default function Hero() {
    const [fireworks, setFireworks] = useState(false);
    let fxProps = {
        count: 3,
        interval: 500,
        colors: ['#00649F', '#01AAC1', '#97ECC5'],
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 300 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }
    const funkUp = () => {
        setFireworks(!fireworks);
    }
    return (
        <div className="hero__section">
            <div className="hero__container">
                <div className="hero__row">
                    <div className="hero__col">
                        <div className="hero__image">
                            <img src={HeroImage} alt="hero__image" />
                        </div>
                    </div>
                    <div className="hero__col">
                        <div className="hero__info">
                            <h1 className="hero__info-title">Only for Fun Kids</h1>
                            <p className="hero__info-subtitle">Because kids don't give a funk about education. <span>Funk you!</span></p>
                            <Link to="/">
                                <button className="button-big" onClick={funkUp}>FUUUNK ME UP</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                fireworks && <Fireworks {...fxProps} />
            }
        </div>
    )
}
