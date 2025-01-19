//Icons
import { MdSearch } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Navbar()
{
    return(
        <div class="navbar">

        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>

        <div class="navbar__s2">
            <MdSearch className="Searchicon"></MdSearch>
            <input type="text" placeholder="Search For Anything Here"></input>
        </div>

        <div class="navbar__s3">
            <p>Trending Courses</p>
            <p>My Learning</p>
            <FaShoppingCart className="shoppingicon"></FaShoppingCart>
            <FaBell className="bellicon"></FaBell>
            <FaUser className="usericon"></FaUser>
        </div>

        <div class="navbar__s4">
            <FaBars className="menuicon"></FaBars>
        </div>
    </div>
    )
}

export default Navbar