export default function TodoInput() {
    return (
      <div className="header">
        <input className="input-field" type="text" placeholder="Enter a todo" />
        <button type="submit" className="add">Add</button>
      </div>
    )
}