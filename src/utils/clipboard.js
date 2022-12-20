import Clipboard from 'clipboard';
function clipboardSuccess() {
  window.$message.success('复制成功,ctrl+v进行粘贴');
}
function clipboardError() {
  window.$message.error('复制失败');
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  });
  clipboard.on('success', () => {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', () => {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}
