import React from "react";
import PropTypes from "prop-types";

function HelloName ({name}) {
    return (
        <div>
            <h2>Hello, {name}!</h2>
        </div>
    );
}

HelloName.propTypes = {
    name: PropTypes.string.isRequired,
};

export default HelloName;