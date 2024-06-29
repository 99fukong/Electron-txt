var dialog = null
function get_dialog() {
  if (dialog === null) {
    return require("@electron/remote").dialog
  }
  return dialog
}

// const {dialog} = require("@electron/remote")

// const electron = require('electron').remote
// const dialog = electron.dialog

const fs = require('fs');
const path = require('path');

function saveNote() {
  const noteText = document.getElementById('noteText').value;
  dialog = get_dialog()
  dialog.showSaveDialog({
    title: '保存记事本',
    defaultPath: path.join(__dirname, 'note.txt'),
    buttonLabel: '保存'
  }).then(result => {
    if (!result.canceled) {
      fs.writeFileSync(result.filePath, noteText);
    }
  }).catch(err => {
    console.error(err);
  });
}

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveNote);

// const { remote } = require('electron');
// const fs = require('fs');
// const path = require('path');

// function saveNote() {
//   const noteText = document.getElementById('noteText').value;
//   remote.dialog.showSaveDialog({
//     title: '保存记事本',
//     defaultPath: path.join(__dirname, 'note.txt'),
//     buttonLabel: '保存'
//   }).then(result => {
//     if (!result.canceled) {
//       fs.writeFileSync(result.filePath, noteText);
//     }
//   }).catch(err => {
//     console.error(err);
//   });
// }