import React from "react";


export interface IJobLocationContext {
    jobLocation: string[],
    setJobLocation: React.Dispatch<React.SetStateAction<string[] | unknown>>
  }
  export interface IToggleSaveJobs {
    savedJobs: boolean,
    setSavedJobs: React.Dispatch<React.SetStateAction<boolean>>
  }
  
  export interface IUserSkillsContext {
    userSkills: string[],
    setUserSkills: React.Dispatch<React.SetStateAction<string[] | unknown>>
  }

  export const JobLocationContext = React.createContext<IJobLocationContext>({
    jobLocation: [],
    setJobLocation: () => {}
  });
  
  export const SavedJobsContext = React.createContext<IToggleSaveJobs>({
    savedJobs: false,
    setSavedJobs: () => {}
  });
  

  export const UserSkillsContext = React.createContext<IUserSkillsContext>({
    userSkills: [],
    setUserSkills: () => {}
  });