import React from 'react'
import "./Skills.css"
import Css from "../assets/Logos/css.3.svg"
import Tailwindcss from "../assets/Logos/css.3.svg"
import Git from "../assets/Logos/git.svg"
import Html from "../assets/Logos/html.svg"
import Javascript from "../assets/Logos/javascript.svg"
import Postman from "../assets/Logos/postman.png"
import ReactIcon from "../assets/Logos/react.svg"
import Bootstrap from "../assets/Logos/bootstrap.svg"
import Java from "../assets/Logos//java.svg"
import Sql from "../assets/Logos/sql.png"

const Skills = () => {

    const logos = [
        {
            logo: Html,
            text: "HTML 5"
        },
        {
            logo: Css,
            text: "CSS3"
        },
        {
            logo: Javascript,
            text: "JavaScript"
        },
        {
            logo: Tailwindcss,
            text: "Tailwind css"
        },
        {
            logo: Bootstrap,
            text: "Bootstrap"
        },
        {
            logo: ReactIcon,
            text: "React"
        },
        {
            logo: Java,
            text: "Java"
        },
        {
            logo: Sql,
            text: "SQL"
        },
        {
            logo: Postman,
            text: "Postman"
        },
        {
            logo: Git,
            text: "Git"
        },


    ]

    return (
        <section id='skills'>
            <h5 className="text-2xl font-semibold">Technical Skills</h5>
            <div className="container logos">

                {logos.map((item) => (

                    <div data-aos="zoom-in" data-aos-duration="1500" className='img-main'>
                        <img style={{ width: "80px" }} src={item.logo} alt="" />
                        <p style={{ color: "black", textAlign: "center", marginTop: "5px" }}>{item.text}</p>
                    </div>

                ))}
            </div>


        </section >
    )
}

export default Skills
