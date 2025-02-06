import { Nav } from "./Nav/Nav";
import { Banner } from "./Banner/Banner";
import { Main } from "./Landing-Main/Main";
import { NewsLetter } from "./NewsLetter";


export function Landing() {
    return (
        <>
            <Nav />

            <Banner />
        
            <Main />

            <NewsLetter />
        </>
    );
}