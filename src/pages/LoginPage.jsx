import { Link } from "react-router-dom"



export const LoginPage = () => {
    return (
        <div>
            <div>
                <form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Passowrd</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
            <p>If you do not have an account, <Link to="/register">register</Link></p>
        </div>
    )
}
