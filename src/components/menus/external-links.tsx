import {faDiscord, faGithub} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {VIALogo} from '../icons/via';
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
        <VIALogo height="25px" fill="currentColor" />
        <CategoryMenuTooltip>备用地址</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://vial.jlkb.top/" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faDiscord} />
        <CategoryMenuTooltip>Via-JL</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
    <a href="https://github.com/the-via/app" target="_blank">
      <CategoryIconContainer>
        <FontAwesomeIcon size={'xl'} icon={faGithub} />
        <CategoryMenuTooltip>Github</CategoryMenuTooltip>
      </CategoryIconContainer>
    </a>
  </ExternalLinkContainer>
);
