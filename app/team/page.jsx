import React from "react";
import { teamAPI } from "../lib/services/api";
import BannerSection from "../../Components/TeamPage/BannerSection/BannerSection";
import FounderQuote from "../../Components/TeamPage/FounderQuote/FounderQuote";
import Celebration from "../../Components/TeamPage/Celebration/Celebration";
import FounderSection from "../../Components/TeamPage/FounderSection/FounderSection";
import TeamSection from "../../Components/TeamPage/TeamSection/TeamSection";
import WhyUs from "../../Components/TeamPage/WhyUs/WhyUs";
import Chairman from "../../Components/TeamPage/Chairman/Chairman";
import CooSection from "../../Components/TeamPage/CooSection/CooSection";
import TestimonialSection from "../../Components/TeamPage/TestimonialSection/TestimonialSection";

// Set revalidation time for ISR
export const revalidate = 3600; // Revalidate every hour

// Function to fetch team data from the backend
async function getTeamData() {
  try {
    console.log('Fetching team data from backend...');
    const response = await teamAPI.getAll();
    
    if (response && response.success && response.teamMembers) {
      const mappedTeamMembers = response.teamMembers.map(member => ({
        id: member.id || member.id_,
        name: member.tname || member.name || '',
        designation: member.tdesignation || member.designation || '',
        description: member.tdesc || member.description || '',
        image: member.timage || member.image || '/images/placeholder-team.jpg',
        department: member.tdepartment || member.department || '',
        experience: member.texperience || member.experience || '',
        email: member.temail || member.email || '',
        phone: member.tphone || member.phone || '',
        linkedin: member.tlinkedin || member.linkedin || '',
        twitter: member.ttwitter || member.twitter || '',
        facebook: member.tfacebook || member.facebook || '',
        status: member.status || 'active',
        order: member.torder || member.order || 0,
        isFounder: member.ttype === 'founder' || member.type === 'founder',
        isChairman: member.ttype === 'chairman' || member.type === 'chairman',
        isCoo: member.ttype === 'coo' || member.type === 'coo',
        isExecutive: member.ttype === 'executive' || member.type === 'executive'
      }));
      
      console.log(`Successfully mapped ${mappedTeamMembers.length} team members`);
      
      return {
        success: true,
        teamMembers: mappedTeamMembers,
        totalMembers: mappedTeamMembers.length
      };
    }
    
    console.warn('No team members found in response');
    return {
      success: false,
      teamMembers: [],
      totalMembers: 0
    };
  } catch (error) {
    console.error('Error fetching team data:', error);
    return {
      success: false,
      teamMembers: [],
      totalMembers: 0,
      error: error.message
    };
  }
}

// Generate metadata for the page
export async function generateMetadata() {
  return {
    title: 'Our Team | Big Boy Toyz - Meet Our Leadership',
    description: 'Meet the experienced team behind Big Boy Toyz - India\'s leading luxury car dealership. Get to know our founders, executives, and dedicated professionals.',
    keywords: 'Big Boy Toyz team, luxury car dealership team, automotive professionals, leadership team, founders, executives',
    openGraph: {
      title: 'Our Team | Big Boy Toyz',
      description: 'Meet the experienced team behind Big Boy Toyz - India\'s leading luxury car dealership.',
      type: 'website',
      images: [
        {
          url: '/images/team/team-og-image.webp',
          width: 1200,
          height: 630,
          alt: 'Big Boy Toyz Team'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Team | Big Boy Toyz',
      description: 'Meet the experienced team behind Big Boy Toyz - India\'s leading luxury car dealership.',
      images: ['/images/team/team-og-image.webp']
    }
  };
}

const Team = async () => {
  // Fetch team data
  const teamData = await getTeamData();
  
  // Separate team members by type for different sections
  const founderMembers = teamData.teamMembers.filter(member => member.isFounder);
  const chairmanMembers = teamData.teamMembers.filter(member => member.isChairman);
  const cooMembers = teamData.teamMembers.filter(member => member.isCoo);
  const executiveMembers = teamData.teamMembers.filter(member => member.isExecutive);
  const generalTeamMembers = teamData.teamMembers.filter(member => 
    !member.isFounder && !member.isChairman && !member.isCoo && !member.isExecutive
  );
  
  console.log('Team page data:', {
    total: teamData.totalMembers,
    founders: founderMembers.length,
    chairman: chairmanMembers.length,
    coo: cooMembers.length,
    executives: executiveMembers.length,
    general: generalTeamMembers.length
  });
  
  return (
    <>
      <BannerSection totalMembers={teamData.totalMembers} />
      <FounderQuote founderMembers={founderMembers} />
      <Celebration />
      <Chairman chairmanMembers={chairmanMembers} />
      <FounderSection founderMembers={founderMembers} />
      <CooSection cooMembers={cooMembers} />
      <TeamSection 
        teamMembers={generalTeamMembers} 
        executiveMembers={executiveMembers}
        isLoading={false}
        error={teamData.error}
      />
      <TestimonialSection />
      <WhyUs />
    </>
  );
};

export default Team;
