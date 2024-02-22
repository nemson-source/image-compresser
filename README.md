```markdown
# Image Compressor 

This is a simple Node.js script to compress images using the Sharp image processing library.

## Usage

The script prompts for the following inputs:

- Input image path 
- Output image path
- Compression quality (1-100) 

Example:

```
Enter the input file with file path, name and extension: images/image.jpg
Enter the output file with file path, name and extension: compressed/image_compressed.jpg 
Enter the compression quality (1-100): 80
```

This will compress `images/image.jpg` to `compressed/image_compressed.jpg` at 80% quality.

Supported input formats are PNG, JPG/JPEG. The output will be in JPEG format.

## How it works

The script uses the Sharp library to read the input image and compress it with the specified quality. 

It gets the input image metadata to determine the format, and handles PNG and JPG images accordingly before writing the compressed image to the output path.

Input validation is done to ensure the quality is between 1-100.

## Dependencies

- Sharp - for image processing 
- readline - to get input from command line
