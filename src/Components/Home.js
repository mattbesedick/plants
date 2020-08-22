import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';
// import PlantsModel from './PlantsModel';
import { OrbitControls, softShadows, Html } from 'drei';
import Plane from './Plane';
import Model from './Model';
import Text from './Text';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	button: {
		position: 'absolute', 
		zIndex: 10, 
		top:window.innerHeight/ 2, 
		left: window.innerWidth / 2, 
		
	}
})

const Home = () => {
	// softShadows();
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 4000)
	})
	const classes = useStyles()
	
	if(!loading) {
		return (
			<>
				<Canvas concurrent shadowMap colorManagement camera={{ position: [ 1, 0.5, 14 ] }}>
					<ambientLight intensity={0.1}/>
					<spotLight position={[ 3, 3, 15 ]} color="white" intensity={0.4} castShadow />
					<pointLight position={[ -10, 5, 10 ]} color="white" intensity={0.5} />
					<Suspense
        fallback={
          <Html>
            <h1>loading...</h1>
          </Html>
        }>
						<group position={[ 3, 3, 15 ]}>
							<Text children="PLANTS" />
							<Model />
							<Plane />	
						</group>
					</Suspense>
					<OrbitControls />
				</Canvas>
			</>
		)
	} else {
		return <div style={{position: 'absolute', top:0, left: 0}}>loading</div>
	}
} 

export default Home;
