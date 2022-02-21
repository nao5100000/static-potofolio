import imagemin from "imagemin-keep-folder";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminGifsicle from "imagemin-gifsicle";
import imageminSvgo from "imagemin-gifsicle";

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