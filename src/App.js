import "./App.css";

// imports from TippyJs
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "tippy.js/themes/light.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <h1>⚙️🛠️ Welcome To Tooltip React App By Ajeet 🛠️⚙️</h1>
      {/* Guide */}
      <h2>Hover To See The Tooltip</h2>

      {/* Container */}
      <div className="wrapper">
        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Thanks for hovering I'M a Tooltip"
            placement="left"
          >
            {/* for left tooltip */}

            <span className="span"> Hover Over Me for left tooltip! </span>
          </Tippy>
        </div>
        <div>
          {/* Tippy Component */}

          <Tippy
            theme="dark"
            animation="scale"
            content="Thanks for hovering I'M a Tooltip"
            placement="top"
          >
            {/* for top tooltip */}

            <span className="span">  Hover Over Me for top tooltip!  </span>
          </Tippy>
        </div>

        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Thanks for hovering I'M a Tooltip"
            placement="bottom"
          >
            {/* for bottom tooltip */}
            <span className="span">Hover Over Me for bottom tooltip!</span>
          </Tippy>
        </div>

        <div>
          {/* Tippy Component */}
          <Tippy
            theme="dark"
            animation="scale"
            content="Thanks for hovering I'M a Tooltip"
            placement="right"
          >
            {/* for right tooltip */}

            <span className="span"> Hover  Over  Me  for  right  tooltip! </span>
          </Tippy>
        </div>
      </div>
    </div>
  );
}

export default App;
