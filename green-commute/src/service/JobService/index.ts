export const fetchAllJobs = async () => {
  return await fetch(`${window.location.origin}/api/` + 'jobs').then((response) => response.json());
};
export const fetchAllSavedJobs = async () => {
  return await fetch(`${window.location.origin}/api/` + 'saved').then((response) => response.json());
};

export const addJobToSaved = async (formData: any) => {
  console.log(formData);
  let requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body: formData,
  };
  return await fetch(`${window.location.origin}/api/saved`, requestOptions)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};
