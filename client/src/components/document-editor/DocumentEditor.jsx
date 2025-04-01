import Ribbon from "./ribbon/Ribbon";
import SidebarLeft from "./sidebar-left/SidebarLeft";
import SidebarRight from "./sidevar-right/SidebarRight";

export default function DocumentEditor() {
  return (
    <>
      <Ribbon></Ribbon>

      <div className="document-editor-container">
        <SidebarLeft></SidebarLeft>

        <div id="editor-container">
          <div id="page-count">0/10</div>
          <div contentEditable="true" id="editor" className="editor">
            Type your text here...
            <br />
          </div>
        </div>

        <SidebarRight></SidebarRight>
      </div>
    </>
  );
}
