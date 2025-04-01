export default function SidebarRight() {
  return (
    <aside className="sidebar">
      <div className="sidebar-container container-flex-space-between">
        <div className="field-markers">
          <div className="form-container">
            <div className="form-grid" id="formGrid">
              <div className="form-content">
                <div className="form-row">
                  <div className="form-name" contentEditable="true">
                    Field Name
                  </div>
                </div>
                <div className="form-fields">
                  <div className="form-field" contentEditable="true"></div>
                  <div className="add-field">+</div>
                </div>
              </div>
            </div>
            <button className="form-button" id="addMarker">
              <img className="form-img" src="assets/images/plus.png" alt="Download" />
              add marker
            </button>
          </div>
          <button className="form-button">
            <img className="form-img" src="assets/images/form_download.png" alt="Download" />
            Generate Form
          </button>
        </div>

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

        <button id="downloadFile" className="form-button">
          <img className="form-img" src="assets/images/download.png" alt="download" />
          Download File
        </button>
      </div>
    </aside>
  );
}
