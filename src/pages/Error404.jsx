/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Error404 = () => {
  document.title = `Argent Bank - 404`;
  return (
    <div id={"page404"}>
    <h1 className={"error404"}>404</h1>
    <p className={"sentence404"}>Oups! La page que vous demandez n'existe pas.</p>
    <Link className={"link404"} to="/">Retourner sur la page d'accueil</Link>
  </div>
  )
}

export default Error404