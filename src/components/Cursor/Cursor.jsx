import { useEffect } from "react";
import { gsap } from "gsap";
import "./Cursor.css";

export default function Cursor() {
  useEffect(() => {
    const $bigBall = document.querySelector('.cursor__ball--big');
    const $smallBall = document.querySelector('.cursor__ball--small');
    const $hoverables = document.querySelectorAll('.hoverable');

    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener('mouseenter', onMouseHover);
      $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      gsap.to($bigBall, {
          duration: 0.001,
          x: e.clientX - 15,
          y: e.clientY - 15,
          overwrite: "auto" // To avoid any potential overwrite issues
      });
      gsap.to($smallBall, {
          duration: 0.005,
          x: e.clientX - 5,
          y: e.clientY - 7,
          overwrite: "auto"
      });
  }
    // Hover an element
    function onMouseHover() {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 4
      });
    }

    function onMouseHoverOut() {
      gsap.to($bigBall, {
        duration: 0.3,
        scale: 1
      });
    }

    gsap.set($bigBall, {
      x: 0,
      y: 0
    });
    gsap.set($smallBall, {
      x: 0,
      y: 0
    });
  }, []); // Run once after component is mounted

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>

        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
    </>
  );
}
