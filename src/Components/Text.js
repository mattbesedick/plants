import React, { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

const Text = ({ children }) => {
	const font = useLoader(THREE.FontLoader, '/refuse.json');
	const config = useMemo(
		() => ({
			font,
			size: 60,
			height: 2
		}),
		[ font ]
	);
	return (
		<group scale={[ 0.007, 0.007, 0.007 ]} position={[ -5, -2, -4 ]}>
			<mesh>
				<textBufferGeometry attach="geometry" args={[ children, config ]} />
				<meshPhysicalMaterial attach="material" color="green" />
			</mesh>
		</group>
	);
};

export default Text;
