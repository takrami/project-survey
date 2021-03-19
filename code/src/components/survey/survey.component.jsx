import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormContainer } from "./survey.style";
import Name from "../name/name.component";
import SelectBox from "../select-box/select-box.component";

function Survey() {
  return (
    <FormContainer>
      <Switch>
        <Route path="/step-1" component={Name} />
        <Route path="/step-2" component={SelectBox} />

      </Switch>
    </FormContainer>
  );
}

export default Survey;
