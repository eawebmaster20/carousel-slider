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