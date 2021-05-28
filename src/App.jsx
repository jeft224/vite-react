import React, { useState } from "react";

import { Switch, Route, Router, Link } from "react-router-dom";
import { Button, DatePicker,List } from "antd-mobile";


import routes from "./routes";

function App(props) {
  const [count, setCount] = useState(0);
  const date = new Date();
  return (
    <div className="App">
      <List>
        <DatePicker value={date}>
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
      </List>
      
      
      <Button type='primary'>play</Button>
    </div>
  );
}

export default App;
