import { useState } from 'react';
import Card from "../card/card";
import './cardList.styles.css';
import { exercises } from '../../data/exercises';

import { ArrowLeft, Play } from 'phosphor-react';
export default function CardList() {
    const [category, setCategory] = useState('all');
    const filteredExercises = exercises.find(exercise => exercise.category === category);
    const handlerCategory = (category) => {
        setCategory(category);
    }

    const resetCategory = () => {
        setCategory('all');
    }
    return (
        <div className="cardList__section">
            <div className="cardList__container">
                {
                    category !== "all"
                    &&
                    <div className="cardList__button-container">
                        <button
                            className="cardList__button-reset button-big"
                            onClick={resetCategory}
                        ><ArrowLeft />Go Back
                        </button>
                    </div>
                }
                <div className="cardList__grid">
                    {
                        category === "all"
                            ? exercises.map((exercise) => (
                                <div className="card__wrapper" key={exercise.id}>
                                    <Card {...exercise} buttons={false} />
                                    <div
                                        className="cardList__button-choice button-big"
                                        type="button"
                                        onClick={() => handlerCategory(exercise.category)}
                                    ><Play weight="fill" />
                                    </div>
                                </div>
                            ))
                            : filteredExercises.exercises.map((exercise) => (
                                <div className="card__wrapper" key={exercise.id}>
                                    <Card key={exercise.id} {...exercise} buttons />
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
