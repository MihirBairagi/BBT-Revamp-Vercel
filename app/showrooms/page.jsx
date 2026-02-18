import React from 'react';
import BannerSection from '../../Components/ShowroomsPage/BannerSection/BannerSection';
import ShowroomThumbs from '../../Components/ShowroomsPage/ShowroomThumbs/ShowroomThumbs';
import UspSection from '../../Components/ShowroomsPage/UspSection/UspSection';
import ShowroomsSection from '../../Components/ShowroomsPage/ShowroomsSection/ShowroomsSection';
import VisitSection from '../../Components/ShowroomsPage/VisitSection/VisitSection';
import RecentUploads from '../../Components/CommonComponents/RecentUploads/RecentUploads'
import MeetTheTeam from '../../Components/ShowroomsPage/MeetTheTeam/MeetTheTeam';

const Showrooms = () => {
  return (
    <>
        <BannerSection />
        <ShowroomThumbs />
        <UspSection />
        <ShowroomsSection />
        {/* <VisitSection /> */}
        <RecentUploads />
        <MeetTheTeam />
    </>
  )
}

export default Showrooms;