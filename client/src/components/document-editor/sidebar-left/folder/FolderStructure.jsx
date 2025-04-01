export default function FolderStructure({ folders, isNested = false }) {
  return folders.map((f) => {
    return (
      <div className={`folder-structure ${isNested ? "nested" : ""}`} key={f._id}>
        <Folder key={f._id} folderName={f.folderName || f.projectName} img={f.img} />

        {f.subfolders?.length > 0 && <FolderStructure folders={f.subfolders} isNested={true} />}

        {f.projects?.length > 0 && <FolderStructure folders={f.projects} isNested={true} />}

        {f.fileName && f.formName && <ProjectContents fileName={f.fileName} formName={f.formName} />}
      </div>
    );
  });
}

function ProjectContents({ fileName, formName }) {
  return (
    <div className="project-structure nested">
      <Folder folderName={fileName} img="file.png" />
      <Folder folderName={formName} img="write.png" />
    </div>
  );
}

function Folder({ folderName, img }) {
  return (
    <div className="folder">
      <div className="folder-icon-wrapper">
        <img className="folder-icon" src={`assets/images/${img}`} alt={`An immage for ${img}`} />
      </div>
      <p className="folder-name">{folderName}</p>
      <img className="folder-arrow down" src="assets/images/arrow down.png" alt="Arrow down" />
    </div>
  );
}
