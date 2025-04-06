export default function FieldMarkers() {
  return (
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
  );
}
