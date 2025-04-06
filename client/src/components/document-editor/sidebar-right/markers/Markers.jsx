import { useEffect, useState } from "react";

const initialValues = [
  {
    markerName: "Marker Name",
    markerFields: [""],
  },
];

export default function Markers() {
  const [markers, setMarkers] = useState(initialValues);

  // TODO - fix this (put it in the parrent or change the fetch logic);
  // useEffect(() => {
  //   let ignore = false;

  //   // TODO: add fetch logic (check "use" hook);
  //   (async () => {
  //     console.log("Fetching Markers...");

  //     try {
  //       const receivedFolders = await new Promise((resolve, reject) => {
  //         setTimeout(() => resolve(mockData), 300);
  //       });

  //       if (!ignore) {
  //         setMarkers(receivedFolders);
  //       }

  //       console.log("Folders fetched", mockData);
  //     } catch (error) {
  //       console.log("Error");
  //       setMarkers(initialValues);
  //     }
  //   })();
  //   //

  //   return () => {
  //     ignore = true;
  //   };
  // }, [markers]);

  function handleAddMarker() {
    const deepCopy = JSON.parse(JSON.stringify(markers));
    deepCopy.push({ markerName: "Marker Name", markerFields: [""] });
    setMarkers(deepCopy);
  }

  function handleAddField(i) {
    const deepCopy = JSON.parse(JSON.stringify(markers));
    deepCopy[i].markerFields.push("");
    setMarkers(deepCopy);
  }

  function handleOnChangeName(e, i) {
    const updated = [...markers];
    updated[i].markerName = e.target.value;
    setMarkers(updated);
  }

  function handleFieldChange(e, markerIndex, fieldIndex) {
    const updated = [...markers];
    updated[markerIndex].markerFields[fieldIndex] = e.target.value;
    setMarkers(updated);
  }

  return (
    <div className="markers">
      <div className="markers-container">
        <div className="markers-grid" id="markersGrid">
          {markers.map((m, i) => {
            return (
              // TODO: fix keys once you implement the backend logic (_ID)
              <div className="marker-content" key={i}>
                <input
                  type="text"
                  name="markerName"
                  className="marker-name"
                  placeholder="Marker Name"
                  onChange={(e) => handleOnChangeName(e, i)}
                  value={m.markerName}></input>
                {m.markerFields &&
                  m.markerFields.map((f, fi) => {
                    return (
                      <input
                        className="marker-field"
                        type="text"
                        name="markerField"
                        placeholder=""
                        value={f}
                        onChange={(e) => handleFieldChange(e, i, fi)}
                        // TODO: fix keys once you implement the backend logic (_ID)
                        key={fi}></input>
                    );
                  })}
                <div onClick={() => handleAddField(i)} className="add-field">
                  +
                </div>
              </div>
            );
          })}
        </div>
        <button className="form-button" id="addMarker" onClick={handleAddMarker}>
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
