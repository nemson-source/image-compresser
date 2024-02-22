const sharp = require('sharp');
const readline = require('readline');

async function compressImage(inputPath, outputPath, quality) {
  try {
    const image = sharp(inputPath);
    const imageMetadata = await image.metadata();
    const { format } = imageMetadata;

    if (format === 'png', 'jpg', 'jpeg') {
      await image.png({ quality }).toFile(outputPath);
    } else {
      await image.jpeg({ quality }).toFile(outputPath);
    }

    console.log('Image compressed successfully!');
  } catch (error) {
    console.error('Error occurred while compressing the image:', error);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the imput file with file path, name and extention: ', (inputImagePath) => {
  rl.question('Enter the output file with file path, name and extention: ', (outputImagePath) => {
    rl.question('Enter the compression quality (0-100): ', (compressionQuality) => {
      const quality = parseInt(compressionQuality, 10);
      if (isNaN(quality) || quality < 1 || quality > 100) {
        console.error('Invalid compression quality. Please enter a number between 1 and 100.');
        rl.close();
        return;
      }
      compressImage(inputImagePath, outputImagePath, quality)
        .then(() => {
          rl.close();
        })
        .catch((error) => {
          console.error('Error occurred while compressing the image:', error);
          rl.close();
        });
    });
  });
});
