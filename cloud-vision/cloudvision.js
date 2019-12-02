
async function detect() {
    
    try {

        const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        key: "./dsc-workshop.json"

    });
  
    // Performs label detection on the image file
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