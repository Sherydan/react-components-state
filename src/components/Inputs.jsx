import PropTypes from 'prop-types'
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Inputs = ({ name, setName, password, setPassword }) => {
    return (
        <Row>
            <Col>
                <div className="mt-4">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        className="form-control mb-2"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control mb-2"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </Col>
        </Row>
    );
};

// in order to make the code more robust, we can set a type for every prop
Inputs.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func
}


export default Inputs;
