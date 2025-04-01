export default function Ribbon() {
  return (
    <div className="ribbon">
      <button>Undo</button>
      <button>Redo</button>
      <button>Save</button>
      <button>Copy</button>
      <button>Paste</button>
      <select name="field-size" id="fieldSize">
        <option value="a4">A4</option>
        <option value="a3">A3</option>
      </select>
    </div>
  );
}
