import React from 'react';

import VideoPlayer from '../../../shared/UI/VideoPlayer';

import videoFHD from '../../../assets/videos/ecohomeFHD.mp4';
import videoSD from '../../../assets/videos/ecohomeSD.mp4';

import './SectionAboutCompany.css'
function SectionAboutCompany(props) {
    return (
        <div className="section_about-wrapper p-36" style={props.style}>
            <h3 className="section_about-title">
                Липецкая компания "ЭкоДом"
            </h3>
            <div className="section_about-content">
                <div className="section_about-video-wrapper">
                    <VideoPlayer video_FHD={videoFHD} video_HD={videoFHD} video_SD={videoSD} />
                </div>
                <p className="section_about-content-text">
                    В зависимости от пожеланий клиентов, мы можем построить дом любой сложности как по уже готовым, так и по индивидуальным проектам, разработку которых наши специалисты также предоставляют.
                </p>
                <p className="section_about-content-text">
                    работает в сфере строительства уже более 13 лет. На данный момент более 500 семей стали обладателями собственных домов благодаря нашей компании. За это время у нас накопился значительный опыт в работе эффективного и надежного строительства домов, что вызывает доверие у наших текущих и будущих клиентов.
                </p>
            </div>
        </div>
    );
}

export default SectionAboutCompany;