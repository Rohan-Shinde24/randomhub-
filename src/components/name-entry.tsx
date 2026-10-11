import { ListPlus, Trash2, Users } from "lucide-react";

export function NameEntry({
  value,
  onChange,
  names,
}: {
  value: string;
  onChange: (value: string) => void;
  names: string[];
}) {
  return (
    <section className="entry-panel" aria-labelledby="entry-heading">
      <div className="panel-heading">
        <div>
          <span className="eyebrow"><ListPlus size={14} /> YOUR LIST</span>
          <h2 id="entry-heading">Add your names</h2>
        </div>
        <span className="count-pill"><Users size={14} /> {names.length}</span>
      </div>
      <label className="sr-only" htmlFor="name-list">Names, one per line</label>
      <textarea
        autoCapitalize="words"
        className="name-input"
        id="name-list"
        onChange={(event) => onChange(event.target.value)}
        placeholder={"Add one name per line...\n\nAlex\nJordan\nSam\nTaylor"}
        spellCheck="false"
        value={value}
      />
      <div className="entry-footer">
        <span>One name per line</span>
        <button className="text-button" disabled={!value} onClick={() => onChange("")} type="button">
          <Trash2 size={14} /> Clear
        </button>
      </div>
    </section>
  );
}