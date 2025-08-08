'use client';

import { allCocktails } from "../../constants";
import { useRef, useState} from 'react';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);


    return(
        <section id="menu" aria-labelledby="menu-heading">
            <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
             <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

             <h2 id="menu-heading" className="sr-only">
		           Cocktail Menu
	         </h2>
            


        </section>
    )
}

export default Menu