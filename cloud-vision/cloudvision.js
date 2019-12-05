const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient({
    key: "./dsc-workshop.json"

});


async function detect() {
    
    try {
  
    const [result] = await client.labelDetection('./image.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));

    }
    catch(error) {

        console.log(error)

    }
  }

  detect()