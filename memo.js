'use strict';
{
  let fontSize = 1.3;

  // 要素の取得
  let count = document.getElementById('count');
  const largerButton = document.getElementById('larger-btn');
  const smallerButton = document.getElementById('smaller-btn');
  const copyButton = document.getElementById('copy-btn');
  const clearButton = document.getElementById('clear-btn');
  const memo = document.getElementById('memo');

  // ボタンに機能を追加
  // 拡大ボタン
  largerButton.onclick = function() {
    console.log("clicked lagerButton");
    fontSize += 0.2;
    memo.style.fontSize =  fontSize + 'em';
  };
  // 縮小ボタン
  smallerButton.onclick = function() {
    console.log("clicked smallerButton");
    fontSize -= 0.2;
    memo.style.fontSize =  fontSize + 'em';
  };
  // 全消去ボタン
  clearButton.onclick = function() {
    console.log("clicked clearButton");
    memo.value = '';
  };
  // コピーボタン
  copyButton.onclick = function() {
    console.log("clicked copyButton");
    if(navigator.clipboard){
      navigator.clipboard.writeText(memo.value);
    }
  };

  // メモが変更されたときの処理
  memo.addEventListener('input', () => {
    console.log("memo was changed")

    // 文字数をカウント
    const strlenFull = memo.value.replace(/\r?\n/g,"").length;
    const strlen = memo.value.replace( /[\p{C}\p{Z}]/gu, '').length;
    // console.log(strlenFull);
    // console.log(strlen);
    count.textContent = `文字数: ${strlenFull}  空白抜き: ${strlen}`;

    // // メモをlocalStrageに保存
    // localStorage.setItem('memo', memo.value);
  });

  // // localStrageに保存してあるメモを復元
  // if (localStorage.memo == null) {
  //   localStorage.setItem('memo', "");
  // } else {
  //   memo.value = localStorage.getItem('memo');
  // }

  // 画面を離れるときにメモがあれば警告
  window.onbeforeunload = () => {
    if (memo.value != "") {
      return "本当に離れますか？";
    }
    return;
  }
}
