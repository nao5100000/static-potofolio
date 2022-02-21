const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg  = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

imagemin(['src/images/**/*.{jpg,jpeg,png,gif,svg,ico,pdf}'], {
    plugins: [
        imageminMozjpeg({ quality: 80 }),
        imageminPngquant({ quality: [0.5, 0.8] }),
        imageminGifsicle(),
        imageminSvgo()
    ],
    replaceOutputDir: output => {
        return output.replace(/images\//, '../dist/images/')
    }
}).then(() => {
    console.log('Images optimized');
});