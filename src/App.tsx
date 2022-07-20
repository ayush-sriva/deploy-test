import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./components/pages/landingPage";
import theme from "./theme/index";
import "./styles.css";
import Sidebar from "./components/templates/sidebar";
import FindJobs from "./components/pages/findJobs";
import SavedJobs from "./components/pages/savedJobs";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const JobContext: any = createContext({});
export const App = () => {
  const history = useLocation();
  const [jobs, setJobs] = useState<any[]>([]);
  const [savedJobs, setSavedJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const [index, setIndex] = useState<number>(1);
  const [userLocation, getUserLocation] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const processor = async () => {
      let res = await axios.get(`http://3.145.122.114:4004/api/job`, {
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      let jobs = await res.data;
      setJobs(jobs);
    };
    processor();
    const savedJobprocessor = async () => {
      let res = await axios.get(`http://3.145.122.114:4004/api/savedjobs`, {
        headers: {
          "content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      let savedJobs = await res.data;
      setSavedJobs(savedJobs);
    };
    savedJobprocessor();
  }, []);
  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) => job.skill.name == skill && job.location.name == location
    );
    setFilteredJobs(filtered);
  };
  useEffect(() => {
    history.pathname === "/jobs/findjobs" ? setIndex(1) : setIndex(2);
  }, [history]);
  console.log("jobs=", jobs);
  return (
    <JobContext.Provider
      value={{
        savedJobs,
        setSavedJobs,
        setLocation,
        setSkill,
        handleSearch,
        setFilteredJobs,
        filteredJobs,
      }}
    >
      <MUIThemeProvider theme={theme}>
        <Routes>
          <Route
            index
            element={<LandingPage getUserLocation={getUserLocation} />}
          />
          <Route
            path="jobs"
            element={
              <Sidebar
                location={userLocation}
                setJobs={setJobs}
                jobs={jobs}
                savedJobs={savedJobs}
                setSavedJobs={setSavedJobs}
                index={index}
              />
            }
          >
            <Route
              path="savedjobs"
              element={<SavedJobs jobs={savedJobs} setJobs={setSavedJobs} />}
            ></Route>

            {filteredJobs.length > 0 ? (
              <>
                <Route
                  path="findjobs"
                  element={<FindJobs jobs={filteredJobs} setJobs={setJobs} />}
                ></Route>
              </>
            ) : (
              <>
                <Route
                  path="findjobs"
                  element={<FindJobs jobs={jobs} setJobs={setJobs} />}
                ></Route>
              </>
            )}
          </Route>
        </Routes>
      </MUIThemeProvider>
    </JobContext.Provider>
  );
};
