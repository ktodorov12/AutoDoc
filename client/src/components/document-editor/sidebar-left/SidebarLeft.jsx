import { useEffect, useState } from "react";
import FolderStructure from "./folder-structure/FolderStructure";

const initialValues = [
  {
    _id: "",
    folderName: "",
    subfolders: [
      {
        _id: "",
        folderName: "",
        subfolders: [],
        projects: [],
      },
    ],
    projects: [
      {
        _id: "",
        projectName: "",
      },
    ],
  },
];

const mockData = [
  {
    _id: "1",
    folderName: "Main",
    img: "folder.png",
    subfolders: [
      {
        _id: "2",
        folderName: "Sub",
        img: "folder.png",
        subfolders: [
          {
            _id: "3",
            folderName: "Sub Sub",
            img: "folder.png",
            subfolders: [],
            projects: [],
          },
          {
            _id: "9",
            folderName: "Sub Mub",
            img: "folder.png",
            subfolders: [],
            projects: [],
          },
        ],
        projects: [
          {
            _id: "5",
            projectName: "Some",
            img: "clipboard.png",
            fileName: "11111",
            formName: "22222",
          },
        ],
      },
      {
        _id: "27",
        folderName: "Sub Dub",
        img: "folder.png",
        subfolders: [],
        projects: [
          {
            _id: "58",
            projectName: "Some H",
            img: "clipboard.png",
            fileName: "33333",
            formName: "44444",
          },
        ],
      },
    ],
    projects: [
      {
        _id: "6",
        projectName: "Some some",
        img: "clipboard.png",
        fileName: "55555",
        formName: "66666",
      },
    ],
  },
  {
    _id: "11",
    folderName: "Main",
    img: "folder.png",
    subfolders: [],
    projects: [],
  },
];

export default function SidebarLeft() {
  const [folders, setFolders] = useState(initialValues);

  useEffect(() => {
    let ignore = false;

    // TODO: add fetch logic (check "use" hook);
    (async () => {
      console.log("Fetching folders...");

      try {
        const receivedFolders = await new Promise((resolve, reject) => {
          setTimeout(() => resolve(mockData), 300);
        });

        if (!ignore) {
          setFolders(receivedFolders);
        }

        console.log("Folders fetched", mockData);
      } catch (error) {
        console.log("Error");
        setFolders(initialValues);
      }
    })();
    //

    return () => {
      ignore = true;
    };
  }, [folders]);

  return (
    <aside className="sidebar">
      <div className="sidebar-container container-flex-start">
        <input className="folder-search" type="text" name="search" placeholder="search" />

        <div className="folder-container">
          <FolderStructure folders={folders} />
        </div>
      </div>
    </aside>
  );
}
