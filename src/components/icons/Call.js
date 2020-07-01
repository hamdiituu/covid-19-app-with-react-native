import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCall(props) {
  return (
    <Svg width="24" height="24" viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19.888 14.92v3a2 2 0 01-2.18 2 19.791 19.791 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 011.998 0h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.574 2.81.7a2 2 0 011.72 2.03z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgCall;
