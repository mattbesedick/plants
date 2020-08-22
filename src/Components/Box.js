import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
const Box = (props) => {
	let mesh = useRef();

	useFrame(() => {
		mesh.current.rotation.x += 0.01;
		mesh.current.rotation.y += 0.01;
	});
	return (
		<mesh ref={mesh}>
			<boxBufferGeometry attach="geometry" />
			<meshBasicMaterial attach="material" color="red" />
		</mesh>
	);
};

export default Box;
