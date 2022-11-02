interface CheckboxType {
  label: string;
  name: string;
  id: string;
  onChange: any;
  checked: boolean;
}

const Checkbox = ({ label, name, id, onChange, checked }: CheckboxType) => {
  return (
    <div className="item-row">
      <label>
        <input
          type="checkbox"
          value={name}
          name={name}
          id={id}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
      {id}
    </div>
  );
};

export default Checkbox;
