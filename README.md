```markdown
# Image Compressor

This is a simple Node.js script to compress images. It uses the [Sharp](https://github.com/lovell/sharp) library for image processing.

## Usage

1. Install dependencies

```
npm install
```

2. Run the script

```
node image-compressor.js
```

3. Follow the prompts to enter input image path, output image path, and compression quality percentage.

4. Compressed image will be saved to the output path.

## How it works

- Uses Sharp library to read input image file.
- Checks image format (JPEG, PNG) from metadata.
- Compresses image as JPEG or PNG with specified quality.
- Sharp handles optimized compression for each format.
- Writes compressed image to output file path.

## Notes

- Supported input formats: JPEG, PNG
- enter a number between 1-100 for compression quality. Higher = better quality but less compression.
- Output format will match input format.

## License

This project is open source and available under the [MIT License](LICENSE).
```
