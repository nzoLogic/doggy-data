import { useState } from "react";
import useBehavioralForm from "./hook";
import { StyledBehavior, StyledRoot } from './styles';
import { Typography } from '../../components';

const BehavioralForm = () => {
  const { behaviors, toggleActiveBehaviour } = useBehavioralForm();

  return (
    <StyledRoot>
      {
        behaviors.map((b, i) => (
          <StyledBehavior
            key={ i }
            modifiers={ { active: b.active } }
            onClick={ () => toggleActiveBehaviour(i)(behaviors) }
          >
            <Typography variant="body2">{ b.name }</Typography>
          </StyledBehavior>
        ))
      }
    </StyledRoot>
  );
};

export default BehavioralForm;