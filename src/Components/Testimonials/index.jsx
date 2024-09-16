import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap'; // Assuming you've imported gsap library

const Testimonials = () => {
    const [currentPerson, setCurrentPerson] = useState(0);
    const [isChickenVisible, setIsChickenVisible] = useState(false);

    const people = [
        {
            photo: '/images/content3.jpg',
            name: "Susan Smith",
            profession: " Marketer",
            description: "Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
        },
        {
            photo: "/images/03.jpg",
            name: "Anna Grey",
            profession: "UFC FIGHTER",
            description: "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
        },
        {
            photo: "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
            name: "Branson Cook",
            profession: "ACTOR",
            description: "Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
        },
        {
            photo: "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
            name: "Julius Grohn",
            profession: "PROFESSIONAL CHILD",
            description: "Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
        }
    ];

    const reviewWrapRef = useRef(null);
    const imgDivRef = useRef(null);
    const personNameRef = useRef(null);
    const professionRef = useRef(null);
    const descriptionRef = useRef(null);
    const chickenRef = useRef(null);
    const surpriseMeBtnRef = useRef(null);

    useEffect(() => {
        const imgDiv = imgDivRef.current;
        const personName = personNameRef.current;
        const profession = professionRef.current;
        const description = descriptionRef.current;
        console.log(imgDiv,'image')

        if (imgDiv && personName && profession && description) {
            imgDiv.style.backgroundImage = `url(${people[currentPerson].photo})`;
            personName.innerText = people[currentPerson].name;
            profession.innerText = people[currentPerson].profession;
            description.innerText = people[currentPerson].description;
        }
    }, [currentPerson]);

    const slide = (whichSide, personNumber) => {
        const reviewWrap = reviewWrapRef.current;
        const imgDiv = imgDivRef.current;
        const personName = personNameRef.current;
        const profession = professionRef.current;
        const description = descriptionRef.current;
        const chicken = chickenRef.current;

        let reviewWrapWidth = reviewWrap.offsetWidth + "px";
        let descriptionHeight = description.offsetHeight + "px";
        //(+ or -)
        let side1symbol = whichSide === "left" ? "" : "-";
        let side2symbol = whichSide === "left" ? "-" : "";

        let tl = gsap.timeline();

        if (isChickenVisible) {
            tl.to(chicken, {
                duration: 0.4,
                opacity: 0
            });
        }

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 0,
            translateX: `${side1symbol + reviewWrapWidth}`
        });

        tl.to(reviewWrap, {
            duration: 0,
            translateX: `${side2symbol + reviewWrapWidth}`
        });

        setTimeout(() => {
            imgDiv.style.backgroundImage = people[personNumber].photo;
        }, 400);
        setTimeout(() => {
            description.style.height = descriptionHeight;
        }, 400);
        setTimeout(() => {
            personName.innerText = people[personNumber].name;
        }, 400);
        setTimeout(() => {
            profession.innerText = people[personNumber].profession;
        }, 400);
        setTimeout(() => {
            description.innerText = people[personNumber].description;
        }, 400);

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 1,
            translateX: 0
        });

        if (isChickenVisible) {
            tl.to(chicken, {
                duration: 0.4,
                opacity: 1
            });
        }
    };

    const setNextCardLeft = () => {
        if (currentPerson === 3) {
            setCurrentPerson(0);
            slide("left", 0);
        } else {
            setCurrentPerson(currentPerson + 1);
            slide("left", currentPerson + 1);
        }
    };

    const setNextCardRight = () => {
        if (currentPerson === 0) {
            setCurrentPerson(3);
            slide("right", 3);
        } else {
            setCurrentPerson(currentPerson - 1);
            slide("right", currentPerson - 1);
        }
    };

    const handleSurpriseMe = () => {
        const chicken = chickenRef.current;
        const imgDiv = imgDivRef.current;
        const surpriseMeBtn = surpriseMeBtnRef.current;

        if (!isChickenVisible) {
            chicken.style.opacity = "1";
            imgDiv.classList.add("move-head");
            setIsChickenVisible(true);
        } else {
            chicken.style.opacity = "0";
            imgDiv.classList.remove("move-head");
            setIsChickenVisible(false);
        }

        surpriseMeBtn.innerText = isChickenVisible ? "Surprise me" : "Remove the chicken";
        surpriseMeBtn.classList.toggle("hide-chicken-btn");
    };

    return (
        <div className="testimonial-section container d-flex align-item-center justify-content-center">
            <div className="content-wrapper">
                <h1 className='py-2'>Our Reviews</h1>
                <div className="blue-line" />
                <div className="wrapper-for-arrows pb-3">
                    <div style={{ opacity: 0 }} className="chicken" ref={chickenRef} />
                    <div id="reviewWrap" className="review-wrap" ref={reviewWrapRef}>
                        <div id="imgDiv" className="" ref={imgDivRef} />
                        <div id="personName" ref={personNameRef} />
                        <div id="profession" ref={professionRef} />
                        <div id="description" ref={descriptionRef} />
                    </div>
                    <div id="surpriseMeBtn" className="surprise-me-btn" onClick={handleSurpriseMe} ref={surpriseMeBtnRef}>
                        Surprise me
                    </div>
                    <div className="left-arrow-wrap arrow-wrap" onClick={setNextCardLeft}>
                        <div className="arrow" id="leftArrow" />
                    </div>
                    <div className="right-arrow-wrap arrow-wrap" onClick={setNextCardRight}>
                        <div className="arrow" id="rightArrow" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
