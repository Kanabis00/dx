import React, { useState } from 'react';
import classes from './table.module.scss';
import {Picturies} from "../../../assets/Fhoto.js"; // Это файл для стилей (необязательно)

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
                <img src={Picturies.FhotoPage4} alt=""/>
                <div className={classes.conttext}>
                    <div className={classes.Title}>
                        <p>E-Commerce Revolution</p>
                        <button onClick={handleClick} className="my-button">
                            {showMore ? 'Show Less' : 'Show More'}
                            <img src={Picturies.Arrowbut} alt=""/>
                        </button>
                    </div>
                    <div className={classes.bot}>
                        <div className={classes.bot1}>
                            <img src={Picturies.Icon6} alt=""/>
                            <p>E-commerce</p>
                        </div>
                        <div className={classes.bot2}>
                            <img src={Picturies.Icon6} alt=""/>
                            <p>Web Design & Development</p>
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
                    </div>
                    <div className={classes.cat}>
                        <div className={classes.card1}>
                            <p>Category</p>
                            <p>E-commerce</p>
                        </div>
                        <div className={classes.card1}>
                            <p>Time Taken</p>
                            <p>4 Months</p>
                        </div>
                        <div className={classes.card1}>
                            <p>Start Date</p>
                            <p>January 15, 2023</p>
                        </div>
                        <div className={classes.card1}>
                            <p>Completed Date</p>
                            <p>May 15, 2023</p>
                        </div>
                    </div>
                    <div className={classes.messeg}>
                        <p>Technologies Used</p>
                        <img src={Picturies.icon1} alt=""/>
                        <img src={Picturies.icon2} alt=""/>
                        <img src={Picturies.icon3} alt=""/>
                        <img src={Picturies.icon6} alt=""/>
                    </div>
                    <div className={classes.team}>
                        <p>Team Members</p>
                        <div className={classes.card1}>
                            <div className={classes.per}>
                                <p>Web Developers</p>
                                <div className={classes.xex}>
                                    <img src={Picturies.image1} alt=""/>
                                    <p>Web Developers</p>
                                </div>
                            </div>
                            <div className={classes.per}>
                                <p>Web Developers</p>
                                <div className={classes.xex}>
                                    <img src={Picturies.image1} alt=""/>
                                    <p>Web Developers</p>
                                </div>
                            </div>
                            <div className={classes.per}>
                                <p>Web Developers</p>
                                <div className={classes.xex}>
                                    <img src={Picturies.image1} alt=""/>
                                    <p>Web Developers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.met}>
                        <p>Methods Used</p>
                        <div className={classes.conttt}>
                            <p>Agile Development</p>
                            <p>User Testing</p>
                            <p>A/B Testing</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Table;