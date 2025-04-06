import Markers from "./markers/Markers";
import TextTools from "./text-tools/TextTools";

export default function SidebarRight() {
  return (
    <aside className="sidebar">
      <div className="sidebar-container container-flex-space-between">
        <Markers />

        <TextTools />

        <button id="downloadFile" className="form-button">
          <img className="form-img" src="assets/images/download.png" alt="download" />
          Download File
        </button>
      </div>
    </aside>
  );
}
