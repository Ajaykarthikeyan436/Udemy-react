import sale from "../images/sale image.jpg"

function Banner()
{
    return(
        <div class="sale-image">
        <img src={sale} alt="Sale"></img>
        <div class="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours To Save.</h2>
            <p>Get the top Cpurses For just 499.Just one day to save but a lifetime to learn</p>
        </div>
    </div>
    )
}

export default Banner