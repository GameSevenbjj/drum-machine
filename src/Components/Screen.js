function Screen({ displayKey, enabled }) {
  return (
    <div id="display">
      <header className="head">
        <div>
          <i className="fa-solid fa-music"> Drum Machine</i>
        </div>
      </header>
      <div className="screen-con">
        <div className="screen">
          <p className={`switch ${enabled ? "fa-solid" : "displayOff"}`}>
            {displayKey}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Screen;
