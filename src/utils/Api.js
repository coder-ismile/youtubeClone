import axios from "axios";
const BASE_URL ="https://youtube138.p.rapidapi.com";
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'1f4fe90be2msh6e8212a75011073p110ddfjsn038ae591a602',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url)=>{
    const{ data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }