let currentIndex=0;
let swipedFrom = 0
let swipedTo = 0
let imgList = [
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