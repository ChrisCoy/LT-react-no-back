import { Text } from '@react-pdf/renderer';
import * as React from 'react';
import Html from 'react-pdf-html';

interface Props {
  html?: string;
}

const HtmlToReactPdf: React.FC<Props> = ({ html }) => {
  return (
    <Html
      stylesheet={[
        {
          p: {
            fontSize: 12,
            fontFamily: 'Courier',
            lineHeight: 1,
            flexWrap: 'wrap',
          },
          b: {
            fontSize: 12,
            fontFamily: 'Courier-Bold',
            lineHeight: 1,
          },
          strong: {
            fontSize: 12,
            fontFamily: 'Courier-Bold',
            lineHeight: 1,
          },
          br: {
            fontSize: 12,
            lineHeight: 1,
          },
          i: {
            fontSize: 12,
            fontFamily: 'Times-Italic',
            lineHeight: 1.2,
          },
        },
      ]}
      renderers={{
        br: ({ style }) => {
          return <Text style={style?.at(1)}>{'\n'}</Text>;
        },
        p: ({ children, style }) => {
          return (
            <Text style={style?.at(1)}>
              {children}
              {'\n\n'}
            </Text>
          );
        },
      }}
    >
      {`<div>${html}</div>`}
    </Html>
  );
};

export { HtmlToReactPdf };
