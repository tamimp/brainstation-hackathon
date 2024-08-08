// In this lab we are going to practice using the JavaScript module system within our project. We will try importing an external library. We will also create our own JS module so that we can also try exporting values from custom modules.


// ***********************************************//
// import householdTools, {business} from './utils/toolbelt.js';
import axios from './libs/axios.js';
// import {clang as noise} from './utils/toolbelt.js';

const spaceImage = document.querySelector(".television__screen");
const apiKey = 'dpeDZnCwP7h6XkTIJVnaujpDXOihooKySEhW5owl';

// const imageId = 'iss070e052303';
const newImageId = [
  'iss070e052303', 
  'iss071e416851', 
  'iss071e384199',
  'iss071e439629',
  'iss071e378491',
  'iss071e418230',
  'iss071e439624',
  'iss071e416716',
  'iss071e414058',
  'iss071e364940',
  'iss071e414639',
  'jsc2024e052327',
  'KSC-20240804-PH-SPX02_0003',
  'GSFC_20171208_Archive_e001894',
  'carina_nebula',
  'iss071e418742',
  'GRC-2024-C-02645',
  'iss070e035253',
  'ARC-1985-AC85-0199-5',
  'jsc2024e052322',
    'PIA26077',
  'iss071e418230',
  'iss064e041512',
  'PIA09579',
  'PIA24291',
  'iss070e044474',
  'iss070e052303',
  'S84-27031',
  'iss070e076676',
  'jsc2023e058642',
  'jsc2024e001999',
  'iss070e064005',
  'iss070e062746',
  'jsc2024e002001',
  'iss070e060613',
  'jsc2023e058644',
  'iss070e034016',
  'iss070e035253',
  'PIA26365',
  'PIA26367',
  'PIA26368',
  'PIA26370',
  'iss071e378491',
  'jsc2024e052329',
  'jsc2024e052322',
  'iss071e414062',
  'iss071e414639',
  'iss071e414661',
  'PIA2429',
  'PIA2429',
]


// debugger
const fetchImage = async () => {
  let pickImage = newImageId[(Math.floor(Math.random() * newImageId.length))];
    try {
      // const response = await axios.get('https://images-api.nasa.gov/search?q=iss071e418230', {
         const response = await axios.get(`https://images-api.nasa.gov/search?q=${pickImage}`, {
         headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      const imageUrl = response.data.collection.items[0].href;
      try {
        
          const response2 = await axios.get(imageUrl);
            return response2.data;
      } catch (error) {
        
      }
    } catch (error) {
      console.error(error);
    }
  };
//   const imageData = await fetchImage();
  
  const getImagePng = async () => {
    try {
  
        console.log('stat', response.data[3])
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const imagePng = await getImagePng();
  // console.log(imagePng)
  spaceImage.src = imagePng[3];



//Abraham
function handleSubmit(event) {
    // Jenani
    event.preventDefault();

    
    fetchImage();
    getImagePng();
    // event.target.reset();

}
const btnEl = document.querySelector('.television__button');

btnEl.addEventListener('click', handleSubmit);