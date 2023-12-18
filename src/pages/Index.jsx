import Login from "./Login";
import "../css/index.css";

function Index() {
    const data = [
        {
            email: "ilan.defoucault@aios.sh",
            password: "password"
        },
        {
            email: "admin@aios.sh",
            password: "admin"
        }
    ]
    const checkIfLoged = () => {
        const params = new URLSearchParams(window.location.search);
        if (params.get("email") === null) return false;
        if (params.get("password") === null) return false;
        if (!data.find(d => d.password === params.get("password") && d.email === params.get("email"))) return { email: params.get("email"), msg: "Error: Invalid password"};
        return true;
    }
    return (checkIfLoged() === true ? <>Loged</> : <Login msg={checkIfLoged()}/>);
}

export default Index;