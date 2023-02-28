import React from 'react'
import 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js'
import '../css/slider.css'
import icons from '../utils/icons'


export default function Slider(){
    return(
        <swiper-container class="mySwiper" slides-per-view="2.5"
        space-between="15" centered-slides="false">
        <swiper-slide> <div className='cont-img-slides'>  <p>Bebidas</p> <img className='img-sliders' src={icons.bebidas} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Retiro en local</p> <img className='img-sliders' src={icons.retiro_en_local} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Helados</p> <img className='img-sliders' src={icons.helados} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Farmacias</p> <img className='img-sliders' src={icons.farmacia} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Cafe & Deli</p> <img className='img-sliders' src={icons.cafe_y_deli} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Mascotas</p><img className='img-sliders' src={icons.mascotas} alt="" /></div></swiper-slide>
        <swiper-slide> <div className='cont-img-slides'>  <p>Tiendas</p> <img className='img-sliders' src={icons.tiendas} alt="" /></div></swiper-slide>
    </swiper-container>
    )
}

// Bebidas
// Retiro en local
// Helados
// Farmacias
// Cafe & Deli
// Mascotas
// Tiendas

