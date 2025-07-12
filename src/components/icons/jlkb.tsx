import {SVGProps} from 'react';

export const JLKB = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // 根据原始图标的viewBox (0 0 525.74 268.41) 来调整文字的viewBox
      // 宽度和高度与原图标保持一致，这样文字可以填充相同的空间
      viewBox="0 0 525.74 268.41"
      {...props}
    >
      <defs>
        {/* 定义样式：填充颜色为当前颜色，设置字体，并大幅增加字体大小 */}
        {/* 字体大小需要足够大，才能在525.74x268.41的viewBox中显得大 */}
        {/* 调整 y 坐标以确保文字在垂直方向上居中或合适显示 */}
        <style>{'.cls-1{fill:currentColor; font-family: sans-serif; font-size: 210px; font-weight: bold;}'}</style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_2-2" data-name="Layer 2">
          {/* 将文字放置在视图框的中心附近 */}
          {/* x 和 y 坐标需要根据实际字体和字体大小进行微调，以达到最佳视觉效果 */}
          <text x="20" y="250" className="cls-1">备用</text>
        </g>
      </g>
    </svg>
  );
};