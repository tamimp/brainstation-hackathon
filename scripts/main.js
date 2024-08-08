// In this lab we are going to practice using the JavaScript module system within our project. We will try importing an external library. We will also create our own JS module so that we can also try exporting values from custom modules.


// ***********************************************//
// import householdTools, {business} from './utils/toolbelt.js';
import axios from './libs/axios.js';
// import {clang as noise} from './utils/toolbelt.js';

const spaceImage = document.querySelector(".television__screen");
const apiKey = 'dpeDZnCwP7h6XkTIJVnaujpDXOihooKySEhW5owl';

const imageId = 'iss070e052303';
const newImageId = [
  {url:'iss070e052303' }, 
  {url:'iss071e416851'}, 
  {url:'iss071e384199', },
  {url: 'iss071e439629'},
  {url: 'iss071e378491'},
  {url: 'iss071e418230'},
  {url: 'iss071e439624'},
  {url: 'iss071e416716'},
  {url: 'iss071e414058'},
  {url: 'iss071e364940'},
  {url: 'iss071e414639'},
  {url: 'jsc2024e052327'},
  {url: 'KSC-20240804-PH-SPX02_0003'},
  {url: 'GSFC_20171208_Archive_e001894'},
  {url: 'carina_nebula'},
  {url: 'iss071e418742'},
  {url: 'GRC-2024-C-02645'},
  {url: 'iss070e035253'},
  {url: 'ARC-1985-AC85-0199-5'},
  {url: 'jsc2024e052322'},
]


const fetchImage = async () => {
    try {
      // const response = await axios.get('https://images-api.nasa.gov/search?q=iss071e418230', {
         const response = await axios.get(`https://images-api.nasa.gov/search?q=${imageId}`, {
         headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const imageData = await fetchImage();
  const imageUrl = imageData.collection.items[0].href;
  
  const getImagePng = async () => {
    try {
      const response = await axios.get(imageUrl);
  
        console.log('stat', response.data[3])
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const imagePng = await getImagePng();
  console.log(imagePng)
  spaceImage.src = imagePng[3];




//Abraham
function handleFormSubmit(event) {
    // event.target.reset();
    getImagePng();

}
const btnEl = document.getElementById('button');

btnEl.addEventListener('submit', handleFormSubmit);