export default function TextTools() {
  return (
    <div className="text-tools">
      <div className="font-container">
        <label htmlFor="fontFamily">Font</label>
        <select name="fontFamily" id="fontFamily">
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>
      </div>

      <div className="font-container">
        <label htmlFor="fontSize">Font Size</label>
        <select name="fontSize" id="fontSize">
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px">16</option>
          <option value="18px">18</option>
        </select>
      </div>

      <div className="font-container">
        <label htmlFor="fontColor">Font Color</label>
        <input type="color" id="fontColor" />
      </div>

      <div className="container-flex-center">
        <div className="font-buttons-style">
          <button onClick="formatText('bold')">
            <b>B</b>
          </button>
          <button onClick="formatText('italic')">
            <i>I</i>
          </button>
          <button onClick="formatText('underline')">
            <u>U</u>
          </button>
        </div>

        <div className="font-buttons-position">
          <button onClick="formatText('justifyLeft')">Left</button>
          <button onClick="formatText('justifyCenter')">Center</button>
          <button onClick="formatText('justifyRight')">Right</button>
        </div>
      </div>
    </div>
  );
}
