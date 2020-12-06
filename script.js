document.addEventListener('DOMContentLoaded', () => {

    // Render slides

    let wrapperSlides = document.querySelector('.flexSlider__wrapper')

    fetch('slides.json', { mode: 'no-cors' })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            data.slides.forEach((item,key) => {
                wrapperSlides.innerHTML += `
                <a href="${item.href}" class="flexSlider__slide_link">
                    <div class="flexSlider__slide" style="background-image: url('${item.image}');">
                        <div class="flexSlider__slide_top">
                            <div class="flexSlider__slide_top--title">${item.text}</div>
                            <div class="flexSlider__slide_top--description">${item.description}</div>
                        </div>
                        <div class="flexSlider__slide_bottom">
                            <div class="flexSlider__slide_bottom--precent">${item.precent}</div>
                            <div class="flexSlider__slide_bottom--btn">${item.button}</div>
                        </div>
                    </div>
                </a>
                `                
            })            
        });



    // Slider
    let btnLeftSlide = document.querySelector('#slideLeft')
    let btnRightSlide = document.querySelector('#slideRight')
    let wrapper = document.querySelector('.flexSlider__wrapper')

    btnLeftSlide.addEventListener('click', () => {
        console.log('click left btn')
        wrapper.scrollBy(-550, 0)        
    })

    btnRightSlide.addEventListener('click', () => {
        console.log('click right btn')
        wrapper.scrollBy(550, 0)
    })

})