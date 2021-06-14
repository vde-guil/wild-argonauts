import axios from 'axios';

const BASE_URL = 'https://wild-argonaut-vde-guil.herokuapp.com/api/';

export const getMembers = async (setMembers, setLoading) => {
  
    try {
      // we try to fetch the crew members from the api
      const { data } = await axios.get(BASE_URL + 'argonauts');
      // on succes we fill the state prop
      setMembers(data);
    } catch (error) {
      console.log(error);
    } finally {
      // when the fetching is done, we stop the loader
      setLoading(false);
    }

};

// This function generates a callback that post a crew member in db
// We use currying to be able to access all the hooks function to modify the state

export const addCrewMember = (setMembers, setLoading, setInput, setErrorMsg) => {
  

  return (async (newValue) => {

    // we set the loader to true to show spinner because we'll have to fetch the members once we add a new one
    setLoading(true);
    try {
      // we send a post request to server with axios.
      // We create the body of the request with newValue that is value from the controlled field we installed
      await axios.post(BASE_URL + 'argonaut', { name: newValue.trim() });
      
      // we empty the input value
      setInput('');
      // we empty the error message if there is still one from previous error
      setErrorMsg('');
      // we update the crew members
      await getMembers(setMembers, setLoading);
  
    } catch (error) {
      
      setErrorMsg(error.response.data);
    } finally {
      // everything is done, we can now hide the spinner
      setLoading(false);
    }
  });
};
