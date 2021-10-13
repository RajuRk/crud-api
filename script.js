const postList = document.querySelector("#postList");
const addPostForm = document.querySelector('.addPostForm');
const inputImage = document.querySelector('#inputImage');
let output = "";

const url = "https://api.thecatapi.com/v1/images/search?size=full";

const renderPost = (post) =>{
    post.forEach(post => {
        output += `<div class="card col-md-3">
                     <img class="card-img-top" src="${post.url}" alt="">
                     <div class="card-body">
                       <a href="#" class="">Edit</a>
                       <a href="#" class="">Delete</a>
                     </div>
                   </div>`; 
    });
    postList.innerHTML = output;
}

fetch(url)
  .then(res => res.json())
  .then(data => renderPost(data));

//Add

addPostForm.addEventListener('click', (e) =>{
    e.preventDefault();
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            
        })  
    })
})