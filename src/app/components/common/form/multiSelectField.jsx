import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label, defaultValue }) => {
    const transformOptions = (options) => {
        return !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((opt) => ({
                  label: options[opt].name,
                  value: options[opt]._id
              }))
            : options.map((opt) => ({ label: opt.name, value: opt._id }));
    };

    const optionsArray = transformOptions(options);
    const defaultOptions = transformOptions(defaultValue);

    const handleChange = (value) => {
        onChange({ name: name, value });
    };
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            <Select
                isMulti
                closeMenuOnSelect={false}
                defaultValue={defaultOptions}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
            />
        </div>
    );
};
MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.array
};

export default MultiSelectField;
