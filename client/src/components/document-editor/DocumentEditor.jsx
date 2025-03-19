export default function DocumentEditor() {
//   document.addEventListener("DOMContentLoaded", () => {
//     const pages = document.querySelectorAll(".editor");

//     pages.forEach((p) => {
//       p.addEventListener("keydown", (e) => {
//         if (e.key == "Enter" || e.keyCode === 13) {
//           e.preventDefault();

//           const selection = window.getSelection();
//           const range = selection.getRangeAt(0);

//           const br = document.createElement("br");
//           range.insertNode(br);

//           range.setStartAfter(br);
//           range.setEndAfter(br);
//           selection.removeAllRanges();
//           selection.addRange(range);
//           e.stopPropagation();
//         }
//       });
//     });
//   });

//   document.getElementById("addMarker").addEventListener("click", () => {
//     const formGrid = document.getElementById("formGrid");

//     const newContent = document.createElement("div");
//     newContent.classList.add("form-content");

//     const newRow = document.createElement("div");
//     newRow.classList.add("form-row");

//     const newName = document.createElement("div");
//     newName.classList.add("form-name");
//     newName.contentEditable = "true";
//     newName.textContent = "New Field";

//     const newFields = document.createElement("div");
//     newFields.classList.add("form-fields");

//     const firstField = document.createElement("div");
//     firstField.classList.add("form-field");
//     firstField.contentEditable = "true";

//     // Add "+" button to add more fields in the same row
//     const addField = document.createElement("div");
//     addField.classList.add("add-field");
//     addField.textContent = "+";
//     addField.addEventListener("click", function () {
//       addNewField(newFields);
//     });

//     function addNewField(fieldContainer) {
//       const newField = document.createElement("div");
//       newField.classList.add("form-field");
//       newField.contentEditable = "true";

//       fieldContainer.insertBefore(newField, fieldContainer.lastElementChild);
//     }

//     newFields.appendChild(firstField);
//     newFields.appendChild(addField);

//     // Append everything
//     newRow.appendChild(newName);
//     newRow.appendChild(newFields);

//     newContent.appendChild(newRow);
//     formGrid.appendChild(newContent);
//   });

  return (
    <>
      {/* <!-- Ribbon --> */}
      <div className="ribbon">
        <button onClick="document.execCommand('undo')">Undo</button>
        <button onClick="document.execCommand('redo')">Redo</button>
        <button onClick="">Save</button>
        <button onClick="document.execCommand('copy')">Copy</button>
        <button onClick="document.execCommand('paste')">Paste</button>
        <select name="field-size" id="fieldSize">
          <option value="a4">A4</option>
          <option value="a3">A3</option>
        </select>
      </div>

      <div className="document-editor-container">
        {/* <!-- Folders --> */}
        <aside className="sidebar">
          <div className="sidebar-container container-flex-start">
            <input className="folder-search" type="text" name="search" placeholder="search" />

            <div className="folder-container">
              <div className="folder-structure">
                <div className="folder">
                  <div className="folder-icon-wrapper">
                    <img className="folder-icon" src="assets/images/folder.png" alt="Simple folder image" />
                  </div>
                  <p className="folder-name">Folder name</p>
                  <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
                </div>

                <div className="folder-structure nested">
                  <div className="folder">
                    <div className="folder-icon-wrapper">
                      <img className="folder-icon" src="assets/images/folder.png" alt="Simple folder image" />
                    </div>
                    <p className="folder-name">Folder name</p>
                    <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
                  </div>

                  <div className="folder-structure nested">
                    <div className="folder">
                      <div className="folder-icon-wrapper">
                        <img className="folder-icon" src="assets/images/clipboard.png" alt="Clipboard text image" />
                      </div>
                      <p className="folder-name">Project</p>
                      <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
                    </div>

                    <div className="project-structure nested">
                      <div className="folder">
                        <div className="folder-icon-wrapper">
                          <img className="folder-icon" src="assets/images/file.png" alt="File image" />
                        </div>
                        <p className="folder-name">File name</p>
                      </div>

                      <div className="folder">
                        <div className="folder-icon-wrapper">
                          <img className="folder-icon" src="assets/images/write.png" alt="File plus image" />
                        </div>
                        <p className="folder-name">Form</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="folder-structure nested">
                  <div className="folder">
                    <div className="folder-icon-wrapper">
                      <img className="folder-icon" src="assets/images/folder.png" alt="Simple folder image" />
                    </div>
                    <p className="folder-name">Folder name</p>
                    <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
                  </div>

                  <div className="folder-structure nested">
                    <div className="folder">
                      <div className="folder-icon-wrapper">
                        <img className="folder-icon" src="assets/images/clipboard.png" alt="Clipboard text image" />
                      </div>
                      <p className="folder-name">Project</p>
                      <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
                    </div>

                    <div className="project-structure nested">
                      <div className="folder">
                        <div className="folder-icon-wrapper">
                          <img className="folder-icon" src="assets/images/file.png" alt="File image" />
                        </div>
                        <p className="folder-name">File name</p>
                      </div>

                      <div className="folder">
                        <div className="folder-icon-wrapper">
                          <img className="folder-icon" src="assets/images/write.png" alt="File plus image" />
                        </div>
                        <p className="folder-name">Form</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="folder-structure">
                <div className="folder">
                  <div className="folder-icon-wrapper">
                    <img className="folder-icon" src="assets/images/folder.png" alt="Simple folder image" />
                  </div>
                  <p className="folder-name">Folder name</p>
                  <img className="folder-arrow right" src="assets/images/arrow right.png" alt="Arrow right" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* <!-- Document editor --> */}
        <div id="editor-container">
          <div id="page-count">0/10</div>
          <div contentEditable="true" id="editor" className="editor">
            Type your text here...
            <br />
          </div>
        </div>

        {/* <!-- Tools --> */}
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
                <input type="color" id="fontColor" onChange="changeColor(this.value)" />
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
      </div>
    </>
  );
}
