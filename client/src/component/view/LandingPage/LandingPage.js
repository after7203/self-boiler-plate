import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row} from 'antd'
import MainImage from './Sections/MainImage'
import GridCards from '../Commons/GridCards'
import {ImageURL} from '../../Config'

function LandingPage() {
	
	const [Movies, setMovies] = useState(null)
	useEffect(()=>{
		getMovie(1)
	}, [])
	const getMovie = (page) => {
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e91d961deba44fe0e7238bcb4c92ed80&page=${page}`)
			.then(res => {
				setMovies(res.data.results)
				//console.log(Movies[0]);
		})
	}
    return (
        <>
			{Movies && <MainImage image={`${ImageURL}${Movies[0].poster_path}`} title={Movies[0].title} text={Movies[0].overview}></MainImage>}
			<div style={{width:'85%', margin: '1rem auto'}}>
				<h2>영화 목록</h2>
				<hr/>
				<Row gutter={[16, 16]}>
					{Movies && Movies.map((movie, index) => (
						<React.Fragment key={index}>
							<GridCards
								image={`${ImageURL}${movie.poster_path}`}
								//{/*detail={}*/}
							/>
						</React.Fragment>
					))}
				</Row>
			</div>
		</>
    )
}

export default LandingPage