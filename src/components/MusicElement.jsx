
export default function MusicElement({ filePath,setSrc }) {
  const parts = filePath.split(/[\\/]/);
  const fileName = parts[parts.length - 1];
  const songName = fileName.replace(/\.[^/.]+$/, "");
  function handleSelect(src){
    setSrc(src)
  }
  console.log(songName);
  return (
    <div onClick={()=>handleSelect(filePath)}>
      <h2>Title:</h2>
      <h3>{songName}</h3>
    </div>
  );
}
