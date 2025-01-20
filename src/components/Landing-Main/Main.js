import './Main.css';


export function Main() {
    return (
        <main className='landing-main'>
            <div className='landing-main__fh-graph'>
                <p className='fh-graph__p'>
                    Следването на всекидневна
                    <br></br>
                    <i><strong>хигиенна</strong> рутина</i>
                    <br></br>
                    те прави:
                </p>

                <div className='fh-graph__graphs'>
                    <div className='graphs__fr-graph'>
                        <p className='graphs__p'>По <i><strong>готин/а</strong></i></p>

                        <span className='graphs__span-num'>100%</span>
                        <div className='graphs__div-graph'>
                            <div className='div-graph__fr-graphs'></div>
                        </div>
                    </div>

                    <div className='graphs__sc-graph'>
                        <p className='graphs__p'>По <i><strong>удовлетворен/а</strong></i></p>
                        
                        <span className='graphs__span-num'>100%</span>
                        <div className='graphs__div-graph'>
                            <div className='div-graph__sc-graphs'></div>
                        </div>
                    </div>

                    <div className='graphs__th-graph'>
                        <p className='graphs__p'>По <i><strong>уверен/а</strong></i></p>
                        
                        <span className='graphs__span-num'>100%</span>
                        <div className='graphs__div-graph'>
                            <div className='div-graph__th-graphs'></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}