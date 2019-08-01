import React from "react";
import Typography from "@material-ui/core/Typography";

const SettingsSection = props => {
  const { header, labels, toggleCheckbox } = props;
  console.log(labels);

  return (
    <div>
      <Typography component="h3">{header}</Typography>
      <div className="form-section vosotros">
        {labels.map(label => (
          <label>
            <input type="checkbox" id={label} onChange={toggleCheckbox} />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SettingsSection;
