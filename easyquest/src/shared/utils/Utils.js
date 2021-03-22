export const NumberToLetter = (number) => {
  switch (number) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
    case 4:
      return 'E';

    default:
      return '';
  }
};

export const DownloadXmlFile = (data, filename) => {
  const dataStr = `data:text/xml;charset=utf-8,${encodeURIComponent(data)}`;
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', filename);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};
