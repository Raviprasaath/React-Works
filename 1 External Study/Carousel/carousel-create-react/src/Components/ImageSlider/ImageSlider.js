import React from 'react';

const ImageArr = [
    "https://live.staticflickr.com/8025/7184048493_6a8d9923a1_b.jpg",
    "https://cdn.wallpapersafari.com/48/11/BHiUzM.jpg",
    "https://free4kwallpapers.com/uploads/wallpaper/random-wallpaper-1024x768-wallpaper.jpg",
    "https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_lost_in_random_02_2560x1080.jpg&height=506&sharpen",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a7d5d4b-06c2-4bc6-a2cf-db6f575a65a2/d87vjsu-f0cfd4be-2ba1-4bd2-b8e2-38b15adc7aca.png/v1/fill/w_1192,h_670,q_70,strp/random_wallpaper_v1_____by_foxthekidbuilder_d87vjsu-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzBhN2Q1ZDRiLTA2YzItNGJjNi1hMmNmLWRiNmY1NzVhNjVhMlwvZDg3dmpzdS1mMGNmZDRiZS0yYmExLTRiZDItYjhlMi0zOGIxNWFkYzdhY2EucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5B55XI8LTgetXoZd7F1kFtJ0xU8elW84cZ2nKiyTCE4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgB1aMPK0VM7Cl22SR_ThY-cuzONnIHcc6Xw-3fcefFqsbiTmQQgDpbNS912SEj_S9J-4&usqp=CAU",
    "https://wallpapersmug.com/download/1024x768/56941d/random-spikes-abstract-texture.jpg"
]

const ImageSlider = () => {
    return (
        <>
            <button>HU</button>
            <img src={ImageArr[1]} className='w-[500px]' alt="im1" />
        </>
    )
}

export default ImageSlider;