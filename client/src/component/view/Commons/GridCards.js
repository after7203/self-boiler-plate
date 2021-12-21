import React from 'react'
import {Col} from 'antd'

function GridCards(props){
	return (
		<Col span={6}>
			<div style={{position: 'relatvie'}}>
				<img style={{ width: '100%', height: '320px' }} src={props.image} alt={"alt"}/>
			</div>
		</Col>
	)
}

export default GridCards