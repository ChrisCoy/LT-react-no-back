import React from 'react';

interface ReactTemplate<T extends React.FunctionComponent<any>> {
  template: T;
  props: React.ComponentPropsWithoutRef<T>;
}