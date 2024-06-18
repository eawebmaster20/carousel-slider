let currentIndex=0;
let swipedFrom = 0
let swipedTo = 0
let imgList = [
    "Image/img1.jpg","Image/img1_a.jpg",
    "Image/img2.jpg","Image/img2_b.jpg",
    "Image/img3.jpg","Image/img3_c.jpg",
    "Image/img4.jpg","Image/img4_d.jpg",
]

function showImg (imgIndex){
    console.log(imgIndex);
    document.getElementById('carousel').innerHTML += `
    <div id="imgListContainer" class="list">
        <div class="item">
                <div id="imgContainer" class="image-container">
                <img src=${imgList[+imgIndex]} alt="carousel image ${imgIndex}">
                </div>
                <div class="content">
                    <div class="author">Amalitech Training</div>
                    <div class="title">LAB 1.4</div>
                    <div class="topic">IMAGE ${+imgIndex+1}</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                </div>
            </div>
        </div>
    `

addSwipeEvent();
}

const prevCarousel = ()=>{
    currentIndex = +currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = +currentIndex + 1;
        document.getElementById('prev').classList.add('d-none');
        return;
    }
    document.getElementById('prev').classList.remove('d-none');
    document.getElementById('imgListContainer').remove()
    showImg(currentIndex);
    addSwipeEvent()
}

const nextCarousel= ()=>{
    currentIndex = +currentIndex + 1;
    if (currentIndex > imgList.length-1) {
        currentIndex = +currentIndex - 1;
        console.log('prev');
        document.getElementById('prev').classList.add('d-none');
        return;
    }
    document.getElementById('prev').classList.remove('d-none');
    document.getElementById('imgListContainer').remove();
    showImg(currentIndex);
    addSwipeEvent()
    // 
}

const closeCarousel = ()=>{
    console.log('closed');
    document.getElementById('carousel').classList.add('d-none');
    document.getElementById('thumbnails').classList.remove('d-none');
    document.getElementById('showDialog').classList.remove('d-none');
}

const addNewImgUrl = (url)=>{
    imgList.push(url);
    document.getElementById('thumbnails').innerHTML = populateThumbnails();
    addThumbnailEventLst();
}

const deleteImg = (el)=>{
    let index = el.parentNode.id;
    imgList.splice(index, 1);
    console.log(index, imgList);
    document.getElementById('thumbnails').innerHTML = populateThumbnails();
    addThumbnailEventLst();
}

const populateThumbnails=()=> {
    let result = ''
    for (let i = 0; i < imgList.length; i++) {
        result = result + `
        <span id=${i} class="thumbnail-item">
        <i class="btn-delete-thumbnail" onClick ="deleteImg(this)"><img class="btn-icon" src="./Image/delete.svg" alt="" srcset=""></i>
            <img class="thumbnail-image" src="${imgList[i]}" alt="" srcset="">
        </span>
        `
    }
    return result;
}

const addThumbnailEventLst= ()=>{
    let thumbnailELs = document.getElementsByClassName('thumbnail-image');
    for (let i = 0; i < thumbnailELs.length; i++) {
        thumbnailELs[i].addEventListener('click', (el)=>{
            document.getElementById('carousel').classList.remove('d-none');
            document.getElementById('thumbnails').classList.add('d-none');
            document.getElementById('showDialog').classList.add('d-none');
            currentIndex = el.target.parentNode.id
            console.log(imgList[currentIndex],currentIndex, imgList);
            showImg(el.target.parentNode.id);
            addSwipeEvent();
        })
    }
}

const addSwipeEvent = ()=>{
    document.getElementById('imgContainer').addEventListener('touchstart', e => {
        swipedFrom = e.changedTouches[0].screenX
    });

    document.getElementById('imgContainer').addEventListener('touchend', e => {
        swipedTo = e.changedTouches[0].screenX
        if (swipedFrom > swipedTo) {
            nextCarousel();
            return;
        }
        prevCarousel;
        return
    })
}

document.getElementById('showDialog').addEventListener("click", () => {
    document.querySelector("dialog").showModal();
  });
document.getElementById('urlDialog').addEventListener("click", () => {
    let urlString = document.getElementById('url').value;
    document.getElementById('url').value = '';
    console.log(urlString);
    console.log(urlString.match(/^https?:\/\/(www.)?(\w+\.)?[A-z]+.[A-z]{2,8}\/\w+/));
    if (urlString.match(/^https?:\/\/(www.)?(\w+\.)?[A-z]+.[A-z]{2,8}\/\w+/)) {
        addNewImgUrl(urlString)
    }
});
document.getElementById('thumbnails').innerHTML = populateThumbnails()

addThumbnailEventLst()