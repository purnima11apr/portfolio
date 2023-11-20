import React from "react";
import image from "../imgs/IMG_20220807_173506.jpg"



const AboutMe = () => {
    return(
        <div className="aboutMe">
            <h2>About Me</h2>

              {/* <img src="https://cdn.pixabay.com/photo/2023/11/02/11/32/woman-8360355_1280.jpg" alt="A girl pic" /> */}
              <img src={image} alt="my image" class="myImage"/>

            <p>Hello! I'm Purnima Chaudhary, a passionate and aspiring frontend developer. Currently, I am honing my skills in React.js, HTML, CSS, and more. My journey in the world of web development is just beginning, and I'm excited about the possibilities.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam doloremque voluptatem beatae vitae veniam unde! Impedit officia optio id temporibus esse eveniet vero beatae repellat magnam delectus, explicabo aliquam magni totam, rerum adipisci deserunt recusandae ab nulla. Accusamus aut tenetur dolor atque, sunt ut nemo. Sapiente quidem officia id expedita nemo dicta fugit vero magnam nisi necessitatibus voluptates quibusdam sunt porro doloribus, voluptatibus recusandae nobis repellendus excepturi nostrum commodi culpa sint repudiandae aspernatur iusto! Corrupti consequuntur ab nam excepturi beatae dolores modi fugit illum animi laudantium vel deleniti ipsa dicta similique odio quod libero, minus perspiciatis odit voluptatibus, mollitia at sunt sit sed. Nihil ipsum hic quis iste facilis placeat odit exercitationem eos cum assumenda, non accusamus voluptas ducimus deleniti doloribus dolorem culpa, ipsa aliquid officia impedit, qui numquam? Accusantium, fugit ratione voluptate perspiciatis, libero dolorem culpa voluptatum ad
            </p>
        </div>
    )
}

export default AboutMe;