import styled from 'styled-components';
import imgSrc from 'assets/images/chippy_600.png';
import {Theme} from 'src/utils/themes';
import {getDarkenedColor} from 'src/utils/color-math';
import {getSelectedTheme} from 'src/store/settingsSlice';
import {useAppSelector} from 'src/store/hooks';

const defaultChippy = {
  width: 300,
  height: 300,
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
  background-color: var(--bg_icon);
  height: ${(props) => props.$containerHeight}px;
  width: ${(props) => props.$containerWidth}px;
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
      <rect x="0" y="0" width="601.77" height="601.77" rx="300.88" ry="300.88" fill="#f5a917"/>
  <g>
    <path d="M437.7,475.76c12.83-.75,24.13-7.97,30.18,7.59,10.29,26.44-31.23,29.17-48.17,27.47-3.21-.32-19.26-4.1-20.17-6.74-1.49-18.5,8.92-35.36,14.63-52.36,16.32-48.61,15.38-84.63-1.3-132.76-5.24-15.12-16.56-35.31-14.23-51.45,2.86-19.82,30.18-33.15,46.63-40.29,32.36-14.05,60.97-11.34,48.57-57.52-2.93-10.9-7.91-21.19-12.72-31.29-8.11,1.55-17.98,1.42-26.39,1.08-40.13-1.65-56.01-14.1-91-25.93-87.12-29.47-148.44,95.34-83.23,139.11,22.07,14.81,44.46,7.58,50.14-18.99,1.4-6.54,1.67-29.68,7.7-32.66,5.34-2.64,11.13,3.3,12.67,8.05,3.39,10.47-1.39,32.34-5.13,42.96-23.11,65.72-99.6,36.43-113.62-19.43-11.8-47.01,17.94-101.74,56.69-127.52,53.02-35.27,84.22,4.34,135.75,7.52,8.41.52,19.56.4,28.03,0,4.39-.21,18.2-1.08,21.49-2.31,1.27-.47,4.84-6.07,8.65-7.91,13.84-6.68,28.42,5.47,28.38,20.02-.05,19.14,2.54,21.83,7.07,39.4,19.19,74.47-20.52,71.02-73.35,95.15-5.58,2.55-26.37,13.38-27.82,18.82-1.32,4.93,16.29,41.67,19.25,49.7,6.56,17.79,13.51,40.87,14.74,59.77,1.99,30.44-5.45,61.44-13.44,90.53h.01Z" fill="#003235"/>
    <path d="M298.68,313.98c-3.99,4.04-15.62,4.41-21.39,6.04-45.76,12.94-77.8,56.72-90.76,100.68-5.36,18.19-9.13,38.76-4.44,57.42.84,1.62,7.72,2.41,9.97,2.7,22.38,2.85,72.37,1.52,93.53-5.55,20.84-6.97,26.94-39.46,12.94-55.38-7.03-7.99-19.32-8.97-23.03-20.19,13.35-13.53,36.36,5.53,45.25,16.6,14.9,18.56,12.36,37.67,7.27,59.48,10.16-1.47,24.79-6.31,31.07,4.63,7.35,12.81.03,24.63-13.47,27.98-20.37,5.06-48.38,1.51-69.91,1.49-39.7-.03-82.22,2.78-122.05.03-10.79-.74-24.31-3.98-34.33-8.1-59.07-24.28-43.69-94.8-17.92-138.83l2.06.51c.42,13.99-3.45,27.76-5.03,41.54-2.98,26.03-3.89,48.42,17.43,67.12,39.17,34.37,39.16-31.41,45.02-54.35,12.58-49.27,64.85-110.04,118-114.84,6.5-.59,31.47-.8,19.8,11h0Z" fill="#003235"/>
    <path d="M381.46,135.69c22.32-.93,21.99,32.86.9,33.23-21.41.38-22.2-32.34-.9-33.23Z" fill="#003235"/>
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