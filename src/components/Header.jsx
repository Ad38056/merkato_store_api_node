import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const token = localStorage.getItem("token");
function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
}
{
    token ? (
        <button onClick={handleLogout}
            className="text-white hover:text-[#e8b84b] font-semibold text-base transitioncolors">
            Logout
        </button>
    ) : (
        <NavLink to="/login" className={linkClass}>Login</NavLink>
    )
}