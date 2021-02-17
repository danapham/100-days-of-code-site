import React, { Component } from 'react';
import {
  Stage,
  Layer,
  Rect,
  Text,
} from 'react-konva';

export default class HomeAuthed extends Component {
  render() {
    return (
      <div>
        <h1>Home Authed</h1>
          <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
              <Text text="It's a red square! 99 more to go." fontSize={15} />
              <Rect
                x={20}
                y={50}
                width={100}
                height={100}
                fill="red"
                shadowBlur={10}
              />
            </Layer>
          </Stage>
      </div>
    );
  }
}
