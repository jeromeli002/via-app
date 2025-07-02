import styled from 'styled-components';
import imgSrc from 'assets/images/chippy_600.png';
import {Theme} from 'src/utils/themes';
import {getDarkenedColor} from 'src/utils/color-math';
import {getSelectedTheme} from 'src/store/settingsSlice';
import {useAppSelector} from 'src/store/hooks';

const defaultChippy = {
  width: 450,
  height: 450,
  src: imgSrc,
};

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleContainer = styled.div<{
  $containerHeight: number;
  $containerWidth: number;
  $progress: number | null;
  $progressColor: string;
}>`
  border-radius: 50%;
  background-color: #70707000;
  height: 450px;
  width: 450px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-duration: 1.5s;
  animation-name: roll;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;

  &::after {
    height: ${(props) => props.$containerHeight}px;
    width: ${(props) => props.$containerWidth}px;
    position: absolute;
    content: '';
    background-color: ${(p) => p.$progressColor};
    top: ${(props) => props.$containerHeight + 1}px;
    left: 0;
    right: 0;
    transition: transform 0.4s ease-out;
    transform: translate3d(
      0,
      ${(props) => -(props.$progress || 0) * props.$containerHeight}px,
      0
    );
  }
`;

type Props = {
  progress: number | null;
  width?: number;
  height?: number;
  theme: Theme;
};

const SvgComponent: React.FC<any & {theme: Theme}> = (props) => {
  const {theme} = props;

  const darkAccent = getDarkenedColor(theme.accent.c, 0.8);
  const colorMap = {
    'upper-body': theme.mod.t,
    'lower-body': theme.mod.c,
    accent: darkAccent,
    bowtie: darkAccent,
    pins: darkAccent,
    feet: '#000',
  };
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 600 600"
      style={{
        enableBackground: 'new 0 0 600 600',
      }}
      xmlSpace="preserve"
      {...props}
    >
      <style>
        {`.st3{fill:#fdfefe}.st4{fill:${colorMap.bowtie}}.st5{fill-rule:evenodd;clip-rule:evenodd;fill:${colorMap.accent}}.st7,.st9{fill-rule:evenodd;clip-rule:evenodd}.st10,.st9{fill:#fff}`}
      </style>
      <rect x="0" y="0" width="601.77" height="601.77" rx="300.88" ry="300.88" display="none" fill="#f5a917"/>
  <polygon points="560.89 381.9 593.5 374.07 600.89 332.19 572.91 313.68 572.21 313.56 572.21 288.21 572.91 288.09 600.89 269.57 593.5 227.7 560.89 219.87 559.84 220.05 551.21 196.35 552.13 195.82 572.09 168.85 550.83 132.03 517.5 135.83 516.28 136.53 500.14 117.3 501.05 116.22 510.57 84.06 478 56.73 447.98 71.7 446.89 72.99 425.24 60.49 425.82 58.9 423.77 25.42 383.81 10.87 360.72 35.21 360.08 36.98 335.98 32.73 335.98 30.76 335.52 30.76 322.14 0 279.62 0 266.25 30.76 266.25 32.73 241.72 37.05 241.04 35.21 217.95 10.87 178 25.42 175.95 58.9 176.61 60.71 155.02 73.17 153.79 71.7 123.77 56.73 91.19 84.06 100.72 116.22 101.86 117.58 85.8 136.71 84.27 135.83 50.94 132.03 29.68 168.85 49.63 195.82 50.94 196.57 42.37 220.13 40.88 219.87 8.26 227.7 .88 269.57 28.85 288.09 30.02 288.29 30.02 313.47 28.85 313.68 .88 332.19 8.26 374.07 40.88 381.9 41.7 381.76 50.35 405.53 49.63 405.95 29.68 432.91 50.94 469.74 84.27 465.94 84.69 465.7 101.03 485.17 100.72 485.54 91.19 517.71 123.77 545.04 153.79 530.07 153.92 529.92 176.02 542.68 175.95 542.87 178 576.35 217.95 590.89 241.04 566.56 241.05 566.55 266.25 571 266.25 571 266.25 572.96 267.1 572.96 279.62 601.77 322.14 601.77 334.67 572.96 335.98 572.96 335.98 571 360.78 566.62 383.81 590.89 423.77 576.35 425.82 542.9 448.01 530.09 478 545.04 510.57 517.71 501.05 485.54 500.97 485.45 517.39 465.88 517.5 465.94 550.83 469.74 572.09 432.91 552.13 405.95 551.8 405.75 560.51 381.83 560.89 381.9" fill="#f5a917"/>
  <g>
    <path d="M410.37,440.82c10.27-.6,19.31-6.38,24.15,6.08,8.24,21.16-24.99,23.34-38.55,21.98-2.57-.26-15.41-3.28-16.14-5.39-1.19-14.81,7.14-28.3,11.71-41.9,13.06-38.9,12.3-67.73-1.04-106.24-4.19-12.1-13.25-28.26-11.39-41.18,2.29-15.86,24.15-26.53,37.31-32.24,25.89-11.25,48.79-9.08,38.87-46.03-2.34-8.72-6.33-16.95-10.18-25.04-6.49,1.24-14.39,1.14-21.12.86-32.12-1.32-44.82-11.28-72.83-20.75-69.72-23.58-118.79,76.29-66.6,111.32,17.66,11.86,35.58,6.06,40.13-15.2,1.12-5.23,1.34-23.75,6.16-26.14,4.28-2.11,8.91,2.64,10.14,6.44,2.71,8.38-1.11,25.88-4.1,34.38-18.49,52.59-79.7,29.15-90.92-15.55-9.44-37.62,14.36-81.42,45.36-102.05,42.43-28.22,67.4,3.47,108.63,6.02,6.73.42,15.66.32,22.43,0,3.51-.17,14.56-.86,17.2-1.85,1.01-.38,3.87-4.86,6.92-6.33,11.08-5.35,22.74,4.38,22.71,16.02-.04,15.32,2.03,17.47,5.66,31.53,15.36,59.59-16.42,56.84-58.7,76.14-4.47,2.04-21.1,10.71-22.26,15.06-1.06,3.95,13.03,33.34,15.4,39.77,5.25,14.23,10.81,32.7,11.79,47.83,1.59,24.36-4.36,49.17-10.76,72.44h.01Z" fill="#003235"/>
    <path d="M299.12,311.37c-3.19,3.24-12.5,3.53-17.11,4.83-36.62,10.35-62.26,45.39-72.63,80.57-4.29,14.55-7.31,31.02-3.55,45.95.67,1.29,6.18,1.93,7.98,2.16,17.91,2.28,57.92,1.22,74.84-4.44,16.68-5.58,21.56-31.58,10.35-44.32-5.63-6.39-15.46-7.18-18.43-16.15,10.68-10.83,29.1,4.43,36.21,13.28,11.92,14.85,9.89,30.15,5.82,47.6,8.13-1.17,19.84-5.05,24.86,3.71,5.88,10.25.03,19.71-10.78,22.39-16.3,4.05-38.71,1.21-55.94,1.2-31.77-.03-65.8,2.22-97.67.03-8.64-.59-19.46-3.19-27.47-6.48-47.27-19.43-34.96-75.86-14.34-111.09l1.65.41c.34,11.19-2.76,22.21-4.02,33.24-2.39,20.83-3.11,38.75,13.95,53.72,31.34,27.5,31.34-25.14,36.03-43.49,10.07-39.43,51.9-88.06,94.42-91.9,5.2-.47,25.18-.64,15.85,8.81h0Z" fill="#003235"/>
    <path d="M365.36,168.69c17.86-.75,17.6,26.3.72,26.59-17.13.3-17.77-25.88-.72-26.59Z" fill="#003235"/>
  </g>
    </svg>
  );
};

export default function ChippyLoader(props: Props) {
  const width = props.width || defaultChippy.width;
  const height = props.width || defaultChippy.height;
  const containerPadding = width * 0.25;
  const [containerHeight, containerWidth] = [
    height + containerPadding * 2,
    width + containerPadding * 2,
  ];
  const selectedTheme = useAppSelector(getSelectedTheme);

  return (
    <LoaderContainer>
      <CircleContainer
        $progress={props.progress}
        $progressColor={getDarkenedColor(selectedTheme.accent.c, 0.9)}
        $containerHeight={containerHeight}
        $containerWidth={containerWidth}
      >
        <div
          style={{
            zIndex: 1,
            width: width,
          }}
        >
          <SvgComponent theme={props.theme} />
        </div>
      </CircleContainer>
    </LoaderContainer>
  );
}