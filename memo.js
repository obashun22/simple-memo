// 'use strict';
{


  let fontSize = 1.3;

  // 要素の取得
  let count = document.getElementById('count');
  const largerButton = document.getElementById('larger-btn');
  const smallerButton = document.getElementById('smaller-btn');
  const clearButton = document.getElementById('clear-btn');
  const note = document.getElementById('note');

  // ボタンに機能を追加
  largerButton.onclick = function() {
    console.log("clicked lagerButton");
    fontSize += 0.2;
    note.style.fontSize =  fontSize + 'em';
  }
  smallerButton.onclick = function() {
    console.log("clicked smallerButton");
    fontSize -= 0.2;
    note.style.fontSize =  fontSize + 'em';
  }
  clearButton.onclick = function() {
    console.log("clicked clearButton");
    note.value = '';
  }
  note.addEventListener('input', () => {
    console.log("note was changed")
    const strlenFull = note.value.replace(/\r?\n/g,"").length;
    const strlen = note.value.replace( /[\p{C}\p{Z}]/gu, '').length;
    console.log(strlenFull);
    console.log(strlen);
    count.textContent = `文字数: ${strlenFull}  空白抜き: ${strlen}`;
  });

  // 画面を離れるときにメモがあれば警告
  window.onbeforeunload = () => {
    if (note.value != "") {
      return "本当に離れますか？";
    }
    return;
  }
}
