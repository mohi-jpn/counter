window.addEventListener('load', () => {
    const download = document.getElementById('export');
    download.addEventListener('click', download_clicked);
});
  
function download_clicked(evt) {
    const EXPORT_DATA = JSON.stringify(data, null, 2);
    console.log("download clicked");
    console.log(EXPORT_DATA);
    evt.preventDefault();

    const blob = new Blob([EXPORT_DATA], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = 'export_data.json';
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}