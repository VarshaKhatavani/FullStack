import { COLORS_BY_THEME } from './constants';
import {
  range,
  normalize,
  convertPolarToCartesian,
} from './utils';

function Circle({ index, colors }) {
  return (
    <circle
      cx={100}
      cy={50}
      r={index * 7.5 + 5}
      stroke={
        colors.lineColors[
          index %
            colors.lineColors.length
        ]
      }
    />
  );
}

function Polygon({ index, colors }) {
  const pointDistance = index * 9 + 5;
  const numOfPoints = 5;
  const angles = range(numOfPoints).map((index) =>
    normalize(
      index,
      0,
      numOfPoints,
      0,
      Math.PI * 2
    )
  );

  const points = angles.map(angle => {
    const twistyAngle = angle + index * -0.15;
    const [x, y] = convertPolarToCartesian(
      [twistyAngle, pointDistance]
    );

    return [
      x + 100,
      y + 50
    ];
  }).join(' ')

  return (
    <polygon
      points={points}
      stroke={
        colors.lineColors[
          index % colors.lineColors.length
        ]
      }
    />
  );
}

function GenerativeArt({
  numOfLines,
  colorTheme,
  shape,
}) {
  const colors = COLORS_BY_THEME[colorTheme];

  return (
    <div
      className="art-wrapper"
      style={{
        background: colors.background,
        borderColor: colors.background,
      }}
    >
      <svg
        viewBox="0 0 200 100"
        fill="none"
      >
        {range(numOfLines).map(
          (index) => {
            const Shape = shape === 'circles'
              ? Circle
              : Polygon;

            return (
              <Shape
                key={index}
                index={index}
                colors={colors}
              />
            );
          }
        )}
      </svg>
    </div>
  );
}

export default GenerativeArt;