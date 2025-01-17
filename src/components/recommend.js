import image1 from "../images/pro image.jpg"
import image2 from "../images/pro image 2.jpg"
import image3 from "../images/pro image 3.jpg"
import image4 from "../images/pro image 4.jpg"

function Recommend ()
{
    return(
        <div class="recommended">
        <h1 class="recommended__title">Recommended For You</h1>
        <p>Pick The Best Fit</p>

        <div class="recommended__container">
            <div class="course-card">
                <img src={image1} alt="image1"></img>
                <h3>2024 Python Data Visualisation Masterclass</h3>
                <p>Col steele</p>
                <p>4.8 ⭐⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>

            <div class="course-card">
                <img src={image2} alt="image2"></img>
                <h3>Web Development Bootcamp 2024</h3>
                <p>Col steele</p>
                <p>3.5 ⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>

            <div class="course-card">
                <img src={image3} alt="image3"></img>
                <h3>Basic to Advance Programming With EMC</h3>
                <p>Col steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>

            <div class="course-card">
                <img src={image4} alt="image4"></img>
                <h3>Master UI/UX Desigining With Figma</h3>
                <p>Col steele</p>
                <p>4.2 ⭐⭐⭐⭐</p>
                <p>499 <del>999</del></p>
            </div>
        </div>
    </div>
    )
}

export default Recommend