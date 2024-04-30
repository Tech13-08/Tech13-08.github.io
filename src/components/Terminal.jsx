import { useState, useEffect } from "react";
import { ReactTerminal } from "react-terminal";

export const Terminal = () => {
  //   const tree = {
  //     home: {
  //       projects: ["project1"],
  //     },
  //   };

  //   const [path, setPath] = useState("/home");

  //   useEffect(() => {
  //     const tempPath = localStorage.getItem("path");
  //     if (tempPath) {
  //       setPath(tempPath);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (path) {
  //       localStorage.setItem("path", path);
  //     } else {
  //       localStorage.setItem("path", path);
  //     }
  //   }, [path]);

  const [prompt, setPrompt] = useState(`guest@Tech13-08.github.com:~$`);

  //   const cd = (directory) => {
  //     const currentDirectory = path.substring(path.lastIndexOf("/") + 1);
  //     console.log(path);
  //     console.log(currentDirectory);
  //     if (directory in tree[currentDirectory]) {
  //       setPath(`${path}/${directory}`);
  //       setPrompt(`guest@Tech13-08.github.com:${path}`);
  //       console.log(path);
  //     } else if (directory == "..") {
  //       setPath(`${path.substring(0, path.lastIndexOf(currentDirectory) - 1)}`);
  //       setPrompt(`guest@Tech13-08.github.com:${path}`);
  //     } else {
  //       return `"${directory}" does not exist`;
  //     }
  //   };

  //   const ls = () => {
  //     const currentDirectory = path.substring(path.lastIndexOf("/") + 1);
  //     let subtree = "";
  //     for (let node in tree[currentDirectory]) {
  //       subtree += `${node}, `;
  //     }

  //     return subtree.substring(0, subtree.length - 2);
  //   };

  const help = () => {
    let listCommands = "";
    for (let command in commands) {
      listCommands += `${command}, `;
    }

    return listCommands.substring(0, listCommands.length - 2);
  };

  const commands = {
    help: help,
  };

  const welcome = (
    <>
      <h1> {`Welcome to my website! Run "help" for a list of commands.`}</h1>
      <br></br>
    </>
  );

  return (
    <div className="w-lvw h-dvh mt-[25px]">
      <ReactTerminal
        welcomeMessage={welcome}
        commands={commands}
        prompt={prompt}
        themes={{
          "ubuntu-theme": {
            themeBGColor: "#2b0220",
            themeToolbarColor: "#1c1c1c",
            themeColor: "#fffefe",
            themePromptColor: "#4d8811",
          },
        }}
        theme="ubuntu-theme"
        showControlButtons={false}
      />
    </div>
  );
};
