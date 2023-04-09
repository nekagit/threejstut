import { Link, Outlet } from "react-router-dom";
import { AppRoutePaths } from "../appRoutePaths";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ArtWork from "../assets/2.png";
import Exhibitions from "../assets/3.png";
import Atelie from "../assets/4.png";
import Life from "../assets/5.png";
import Contacts from "../assets/6.png";
import { useState } from "react";
var rootStyles = {
  height: "90vh",
};

export default function Root() {
  const [showGreeting, setShowGreeting] = useState(true);
  const handleActive = (event: any) => {
    setShowGreeting(!showGreeting);
    console.log(event);
  };
  return (
    <>
      <div className="m-2" style={rootStyles}>
        <main className="p-2 bg-light h-75">
          {showGreeting ? <div>Hello Mf</div> : <Outlet />}
        </main>
        <div className="d-flex justify-content-around mb-3">
          <Link to={AppRoutePaths.ArtWork}>
            <Button
              className="shadow"
              onClick={(e) => {
                handleActive(e.target);
              }}
            >
              LinkButton
            </Button>
          </Link>
          <Link to={AppRoutePaths.Exhibitions}>
            <Button
              className="shadow"
              onClick={(e) => {
                handleActive(e.target);
              }}
            >
              LinkButton
            </Button>
          </Link>
          <Link to={AppRoutePaths.Atelie}>
            <Button
              className="shadow"
              onClick={(e) => {
                handleActive(e.target);
              }}
            >
              LinkButton
            </Button>
          </Link>
          <Link to={AppRoutePaths.Life}>
            <Button
              className="shadow"
              onClick={(e) => {
                handleActive(e.target);
              }}
            >
              LinkButton
            </Button>
          </Link>
          <Link to={AppRoutePaths.Contacts}>
            <Button
              className="shadow"
              onClick={(e) => {
                handleActive(e.target);
              }}
            >
              LinkButton
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
