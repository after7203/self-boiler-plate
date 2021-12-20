import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MainImage from './Sections/MainImage'
import {ImageURL} from '../../Config'

function LandingPage() {
	
	const [Movies, setMovies] = useState([])
	useEffect(()=>{
		getMovie(1)
	}, [])
	const getMovie = (page) => {
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=e91d961deba44fe0e7238bcb4c92ed80&page=${page}`)
			.then(res => {
				setMovies(res.data.results)
				console.log(Movies[0].poster_path)
		})
	}
    return (
        <>
			{Movies && <MainImage image={`${ImageURL}${Movies[0].poster_path}`}></MainImage>}
			<div style={{width:'85%', margin: '1rem auto'}}>
				<h2>영화 목록</h2>
				<hr/>
			</div>
		</>
    )
}

export default LandingPage