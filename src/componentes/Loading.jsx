import React, { Fragment } from "react";

import {
  Spinner,
} from "reactstrap";


const Loading = () => {
    
    return (

<>
  <Spinner color="primary">
    Loading...
  </Spinner>
  <Spinner color="secondary">
    Loading...
  </Spinner>
  <Spinner color="success">
    Loading...
  </Spinner>
  <Spinner color="danger">
    Loading...
  </Spinner>
  <Spinner color="warning">
    Loading...
  </Spinner>
  <Spinner color="info">
    Loading...
  </Spinner>
  <Spinner color="light">
    Loading...
  </Spinner>
  <Spinner color="dark">
    Loading...
  </Spinner>
</>
    )}

export default Loading;