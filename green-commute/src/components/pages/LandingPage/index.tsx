/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import AQIIndex from '../../molecules/AQI';
import AQIIndexGroup from '../../molecules/AQIGroup';
import IllustrationData from '../../molecules/IllustrationData';
import MainCard from '../../organisms/MainCard';
import LandingPageTemplate from '../../templates/LandingPageTemplate';

export interface IUserLocationContext {
  userLocation: string;
  setUserLocation: React.Dispatch<React.SetStateAction<string>>;
}

export interface IJobLocationContext {
  jobLocation: string[];
  setJobLocation: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface IUserSkillsContext {
  userSkills: string[];
  setUserSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ICurrentPageContext {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const UserLocationContext = React.createContext<IUserLocationContext>({
  userLocation: '',
  setUserLocation: () => {
    /* This is intentional */
  },
});

export const JobLocationContext = React.createContext<IJobLocationContext>({
  jobLocation: [],
  setJobLocation: () => {
    /* This is intentional */
  },
});

export const UserSkillsContext = React.createContext<IUserSkillsContext>({
  userSkills: [],
  setUserSkills: () => {
    /* This is intentional */
  },
});

export const CurrentPageContext = React.createContext<ICurrentPageContext>({
  currentPage: 0,
  setCurrentPage: () => {
    /* This is intentional */
  },
});

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const currentPageValue = { currentPage, setCurrentPage };
  const [userLocation, setUserLocation] = useState<string>('');
  const userLocationValue = { userLocation, setUserLocation };
  const [jobLocation, setJobLocation] = useState<string[]>([]);
  const jobLocationValue = { jobLocation, setJobLocation };
  const [userSkills, setUserSkills] = useState<string[]>([]);
  const userSkillsValue = { userSkills, setUserSkills };

  const backClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log(jobLocation);
    }
  };

  const nextClickHandlerWrap = (_event: React.MouseEvent<HTMLButtonElement>) => {
    if (currentPage < 2) {
      setCurrentPage(currentPage + 1);
      console.log(jobLocation);
    } else {
      navigate('/jobs/initialView', { state: { userLocation:userLocation } });
    }
  };

  useEffect(() => {
    /* This is intentional */
  }, [userLocation, jobLocation, userSkills]);

  const renderFirstPage = () => {
    if (userLocation === '')
      return (
        <IllustrationData
          url='/assets/illustrations/illustration2.png'
          children={'Enter Location to know Time Air Quality Index(AQI)'}
        />
      );
    else return <AQIIndex index='984' children='Real time Air Quality Index(AQI) in this location' />;
  };

  const renderSecondPage = () => {
    if (jobLocation.length === 0)
      return (
        <IllustrationData
          url='/assets/illustrations/illustration4.png'
          children={'Enter Location to know Time Air Quality (AQI)'}
        />
      );
    else if (jobLocation.length === 1) {
      const subData = [
        {
          id: 'AQIL01',
          index: '894',
          location: jobLocation[0],
        },
      ];
      return <AQIIndexGroup children='Realtime Air Quality Index (AQI) in this location' data={subData} />;
    } else {
      const data = [
        {
          id: 'AQIL01',
          index: '894',
          location: jobLocation[0],
        },
        {
          id: 'AQIL02',
          index: '900',
          location: jobLocation[1],
        },
      ];
      return <AQIIndexGroup children='Realtime Air Quality Index (AQI) in this location' data={data} />;
    }
  };

  const renderThirdPage = () => {
    if (userSkills.length === 0 || jobLocation.length === 0)
      return (
        <IllustrationData
          url='/assets/illustrations/illustration3.png'
          children={'Enter your Skills to know how many jobs are in this Location'}
        />
      );
    else {
      if (jobLocation.length === 1) return <AQIIndex index='700' children={`Jobs found in ${jobLocation[0]}`} />;
      else return <AQIIndex index='1500' children={`Jobs found in ${jobLocation[0]} & ${jobLocation[1]}`} />;
    }
  };

  const renderChildren = () => {
    if (currentPage === 0) {
      return renderFirstPage();
    } else if (currentPage === 1) {
      return renderSecondPage();
    } else if (currentPage === 2) {
      return renderThirdPage();
    }
  };

  return (
    <UserLocationContext.Provider value={userLocationValue}>
      <JobLocationContext.Provider value={jobLocationValue}>
        <UserSkillsContext.Provider value={userSkillsValue}>
          <CurrentPageContext.Provider value={currentPageValue}>
            <LandingPageTemplate
              children={renderChildren()}
              logoChildren={<Logo url='assets/logos/logoGreen.png' />}
              cardChildren={
                <MainCard
                  currentPage={currentPage}
                  backClickHandlerWrap={backClickHandlerWrap}
                  nextClickHandlerWrap={nextClickHandlerWrap}
                />
              }
            />
          </CurrentPageContext.Provider>
        </UserSkillsContext.Provider>
      </JobLocationContext.Provider>
    </UserLocationContext.Provider>
  );
};

export default LandingPage;
