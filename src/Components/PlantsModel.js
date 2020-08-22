// import React, { useRef } from 'react';
// import { useLoader } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const PlantsModel = () => {
// 	const mesh = useRef();
// 	const gltf = useLoader(GLTFLoader, '/model.glb');
// 	return gltf ? (
// 		<mesh>
// 			<primitive
// 				ref={mesh}
// 				object={gltf.scene}
// 				position={[ 0, -5, 20 ]}
// 				scale={[ 5, 5, 5 ]}
// 				castShadow
// 				receiveShadow
// 			/>
// 		</mesh>
// 	) : null;
// };

// export default PlantsModel;
