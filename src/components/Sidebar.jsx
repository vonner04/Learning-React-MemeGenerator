export default function Sidebar({ memeImage }) {
  return (
    <div className="sidebar--tools" style={memeImage ? { width: 0 } : {}}>
      <img
        className="sidebar--imageupload"
        src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698977-icon-130-cloud-upload-512.png"
      />
    </div>
  );
}
