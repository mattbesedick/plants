/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Html } from 'drei';

export default function Model(props) {
	const group = useRef();
	const { nodes, materials } = useLoader(GLTFLoader, '/model.glb');

	return (
		<group ref={group} {...props} dispose={null}>
			<group position={[ 0.3, -2.8, -3.87 ]}>
				<group position={[ -0.3, -1.09, 3.87 ]}>
					<mesh
						castShadow
						receiveShadow
						material={materials.BlocksPaper}
						geometry={nodes['node_MeshObject-183377920-PolyPaper13'].geometry}
					/>
					<mesh
						castShadow
						receiveShadow
						material={materials.BlocksPaper}
						geometry={nodes['node_MeshObject388701184-PolyPaper20'].geometry}
					/>
					<mesh
						castShadow
						receiveShadow
						material={materials.BlocksPaper}
						geometry={nodes['node_MeshObject960780288-PolyPaper10'].geometry}
					/>
					<mesh
						castShadow
						receiveShadow
						material={materials.BlocksPaper}
						geometry={nodes['node_MeshObject1532859392-PolyPaper9'].geometry}
					/>
					<Html>
						<div>test</div>
					</Html>
				</group>
			</group>
		</group>
	);
}
