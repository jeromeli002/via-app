import styled from 'styled-components';
import {VIALogo} from '../icons/via';
import {VIAL} from '../icons/vial';
import {JLKB} from '../icons/jlkb';
import {CategoryMenuTooltip} from '../inputs/tooltip';
import {CategoryIconContainer} from '../panes/grid';

const ExternalLinkContainer = styled.span`
  position: absolute;
  right: 1em;
  display: flex;
  gap: 1em;
`;

export const ExternalLinks = () => (
  <ExternalLinkContainer>
    <a href="https://jlkb.jlkb.top/" target="_blank">
      <CategoryIconContainer>
        <VIALogo height="25px" fill="currentColor" />
        <CategoryMenuTooltip>JLKB</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://lhfha.x3322.net:8100/" target="_blank">
      <CategoryIconContainer>
        <JLKB height="25px" fill="currentColor" />
        <CategoryMenuTooltip>备用地址</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://vial.jlkb.top/" target="_blank">
      <CategoryIconContainer>
        <VIAL height="25px" fill="currentColor" />
        <CategoryMenuTooltip>Via-JL</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
  </ExternalLinkContainer>
);
