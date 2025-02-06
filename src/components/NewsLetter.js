import { useState } from "react";


export function NewsLetter () {
    const [input, setInput] = useState('');

    const inputText = (e) => {
        setInput(e.target.value);
    }


    return (
        <section className="news-letter">
            <h2 className="news-letter__h2">Subscribe To Our Newsletter<br></br>
            GET -10% OFF!</h2>

            <div className="news-letter__sub-container">
                <input type="text" placeholder="example@gmail.com" value={input} onChange={inputText} required></input>
                <button id="sub-container__inp-btn" type="submit" onClick={() => setInput('')}>Subscribe</button>
            </div>
        </section>
    );
}