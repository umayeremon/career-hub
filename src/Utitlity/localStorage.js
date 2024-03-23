const getAppliedJobs=()=>{
  const getLocalStorage=localStorage.getItem('job-application');
  if(getLocalStorage){
    return JSON.parse(getLocalStorage)
  }
  return []
}

const setAppliedJobs= id=>{
  const setLocalStorage=getAppliedJobs();
  const isExist=setLocalStorage.find(jobId=> jobId===id);
  if(!isExist){
    setLocalStorage.push(id);
    localStorage.setItem('job-application', JSON.stringify(setLocalStorage))
  }
}



export {getAppliedJobs, setAppliedJobs }