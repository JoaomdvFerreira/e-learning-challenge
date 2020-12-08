import { Info, Play } from "phosphor-react";
import './card.styles.css';
export default function Card({ category, title, description, range, difficulty, img, buttons }) {

    return (
        <div className="card__container">
            <div className="card__column">
                <div className="card__header">
                    <div className="card__image">
                        <img src={img} alt={title} />
                    </div>
                </div>
                <div className="card__info">
                    <div className="card__category">{category}</div>
                    <div className="card__title">{title}</div>
                    <div className="card__description">{description}</div>
                    <div className="card__range">{range}</div>
                    <div className="card__difficulty">
                        {
                            difficulty === 'easy'
                                ? <span className="green-bg">{difficulty}</span>
                                : difficulty === 'medium'
                                    ? <span className="blue-green-bg">{difficulty}</span>
                                    : difficulty === 'expert'
                                        ? <span className="dark-blue-bg">{difficulty}</span>
                                        : <h2>{difficulty}</h2>
                        }
                    </div>
                </div>
            </div>
            {
                buttons
                &&
                <div className="card__row">
                    <button className="card__button-info button-medium"><Info /></button>
                    <button className="card__button-start button-medium"><Play /></button>
                </div>
            }

        </div>
    )
}
