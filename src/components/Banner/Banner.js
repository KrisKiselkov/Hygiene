import React, { useState, useEffect } from "react";
import './Banner.css';

export function Banner() {
    const textOptions = [
        "измий си ръцете.",
        "измий си зъбите.",
        "вземи си душ.",
        "хапни нещо полезно.",
        "пий повече вода.",
        "следвай рутина.",
        "изгради си хигиенни навици."
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [transitionStage, setTransitionStage] = useState("entering");

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionStage("exiting");
            setTimeout(() => {
                setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
                setTransitionStage("entering");
            }, 500);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="banner">
            <div className="banner__banner-text">
                <p className="banner-text__no-change-p">Не бъди странен,</p>
                <p className={`banner-text__change-p ${transitionStage}`}>
                    {textOptions[currentTextIndex]}
                </p>
            </div>
        </section>
    );
}