import React, { useState } from 'react';
import classes from '../Tables/Tables.module.scss';
import {Picturies} from "../../../../assets/Fhoto.js"; // Это файл для стилей (необязательно)

function Table() {
    // 1. Создаем состояние (state) для отслеживания, открыт блок или закрыт
    const [showMore, setShowMore] = useState(false);

    // 2. Функция, которая меняет состояние при клике на кнопку
    const handleClick = () => {
        setShowMore(!showMore);
    };

    return (
        <div className={classes.container}>
            {/* 3. Всегда видимый контент */}
            <div className={classes.table}>
                <div className={classes.conttext}>
                    <div className={classes.Title}>
                        <div className={classes.hyi}>
                            <img src={Picturies.S3card1} alt=""/>
                            <div className={classes.conthui}>
                                <p>Web Designer</p>
                                <p>Mumbai, India</p>
                            </div>
                        </div>
                        <button onClick={handleClick} className="my-button">
                            {showMore ? 'Show Less' : 'Show More'}
                            <img src={Picturies.Arrowbut} alt=""/>
                        </button>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.bot1}>
                            <img src={Picturies.Careers1} alt=""/>
                            <p>Experience - Minimum 1 year of professional web design experience.</p>
                        </div>
                        <div className={classes.bot1}>
                            <img src={Picturies.Careers2} alt=""/>
                            <p>Experience - Minimum 1 year of professional web design experience.</p>
                        </div>
                        <div className={classes.bot1}>
                            <img src={Picturies.Careers3} alt=""/>
                            <p>Experience - Minimum 1 year of professional web design experience.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* 5. Блок, который показывается только если showMore = true */}
            {showMore && (
                <div className={classes.hiddenblock}>
                    <div className={classes.text}>
                        <p>Project Description</p>
                        <p>A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.</p>
                        <p>Application Deadline: 30th September 2025</p>
                    </div>
                    <div className={classes.cat}>
                        <p>Responsibilities</p>
                        <ul>
                            <li>Design and create visually appealing website layouts, graphics, and icons.</li>
                            <li>Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.</li>
                            <li>Conduct user research to understand user behaviors and preferences for optimized design decisions.</li>
                            <li>Stay updated with industry trends and emerging design tools and techniques.</li>
                            <li>Present design concepts and prototypes to internal teams and clients for feedback and approval.</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;