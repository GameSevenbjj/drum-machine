function Buttons({ playSound, sounds, enabled }) {
  return (
    <div className="btn-con">
      <div className="btns">
        {sounds.map((drumPad) => (
          <button
            disabled={!enabled}
            key={drumPad.id}
            onClick={() => {
              playSound(drumPad.key, drumPad.id);
            }}
            className="drum-pad"
            id={drumPad.id}
          >
            {drumPad.key}
            <audio
              className="clip"
              id={drumPad.key}
              src={drumPad.url}
              name={drumPad.id}
            ></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
