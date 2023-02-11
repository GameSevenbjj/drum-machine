function Switch({ enabled, setPowerState }) {
  return (
    <div className="switchs">
      <div>
        <button
          className={`switch ${enabled ? "btnOn" : "btnOff"}`}
          onClick={setPowerState}
        >
          <i className="fa-solid fa-power-off" id="btn">
            {" "}
            Power
          </i>
        </button>
      </div>
    </div>
  );
}

export default Switch;
