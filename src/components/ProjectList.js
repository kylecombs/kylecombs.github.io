import React, { useState } from 'react';

export default function ProjectList(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '45%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        lineHeight: 0.5,
      }}
    >
      <h3>— projects</h3>
      <div
        className="project-div"
        onMouseEnter={() => props.setHoverElement(1)}
        onMouseLeave={() => props.setHoverElement(null)}
      >
        <h1
          style={{
            color: props.hoverElement === 1 ? '#' + props.color : 'black',
          }}
        >
          Webfluence
        </h1>
      </div>
      <hr />
      <div
        className="project-div"
        onMouseEnter={() => props.setHoverElement(2)}
        onMouseLeave={() => props.setHoverElement(null)}
      >
        <h1
          style={{
            color: props.hoverElement === 2 ? '#' + props.color : 'black',
          }}
        >
          Coda
        </h1>
      </div>
      <hr />
      <div
        className="project-div"
        onMouseEnter={() => props.setHoverElement(3)}
        onMouseLeave={() => props.setHoverElement(null)}
      >
        <h1
          style={{
            color: props.hoverElement === 3 ? '#' + props.color : 'black',
          }}
        >
          Chaotic Cheesecake
        </h1>
      </div>
      <hr />
      <h3 style={{ marginTop: '30px' }}>— Music</h3>
      <div
        className="project-div"
        onMouseEnter={() => props.setHoverElement(4)}
        onMouseLeave={() => props.setHoverElement(null)}
      >
        <h1
          style={{
            color: props.hoverElement === 4 ? '#' + props.color : 'black',
          }}
        >
          Sense in Parallel
        </h1>
      </div>
      <hr />
    </div>
  );
}