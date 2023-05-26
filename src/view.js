window.addEventListener('DOMContentLoaded', function() {
  if (!motion){ return }

  const container = document.querySelector( '.uncommon-careers-animated-gallery' ),
        containerCoords = container.getBoundingClientRect(),
        images = container.querySelectorAll( 'figure.wp-block-image' ),
        oneLoopDuration = 4,
        animdelay = 1,
        allLoopsDelays = animdelay * ( images.length) - oneLoopDuration;

  images.forEach( (image, index) => {
    if (index == images.length - 1) {
      image.style.zIndex = 0;
    } else {
      image.style.zIndex = images.length - index;
    }
    const imgCoords = image.getBoundingClientRect(),
          start = {
            x : containerCoords.x - imgCoords.width,
            y: 0,
            rotation: 5,
            scale: 0.25
          },
          mid = {
            x: containerCoords.width - 0.75 * imgCoords.width,
            y: containerCoords.height - imgCoords.height,
            rotation: 80,
            scale: 0.25
          },
          end = {
            x : start.x,
            y: 0,
            rotation: 0,
            scale: 1 
          };

    function animateImage(myDelay) {
      motion.animate( image, {
        x: [ `${start.x}px`, `${mid.x}px`, `${end.x}px` ],
        y: [ `${start.y}px`, `${mid.y}px`, `${end.y}px` ],
        rotate: [ `${start.rotation}deg`, `${mid.rotation}deg`, `${end.rotation}deg` ],
        scale: [ `${start.scale}`, `${mid.scale}`, `${end.scale}` ],
        zIndex: [ 0, 1, 100 ]
      }, {
        offset: [0, 0.1, 1],
        easing: 'linear',
        scale: {
          easing: ['linear', [.12,.53,.63,1]]
        },
        delay: myDelay,
        duration: oneLoopDuration,
      }).finished.then(()=>{
        // console.log(allLoopsDelays)
        animateImage(allLoopsDelays);
      })
    }
    animateImage(animdelay * index);
  })

})