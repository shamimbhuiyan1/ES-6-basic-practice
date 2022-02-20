document.getElementById('add-border').addEventListener('click',function(){
    document.getElementById('friend-container').style.border='5px solid red';
    
});

function addBackgroundColor(){

    const friends=document.getElementsByClassName('friend');
    
    for(const friend of friends){
        friend.style.backgroundColor='indigo';
        friend.style.color='white';
    }
}



document.getElementById('add-friend').addEventListener('click',function(){
    const container = document.getElementById('friend-container');
    const newFriend=document.createElement('div');
    newFriend.classList.add('friend');
    newFriend.innerHTML= 
        `<h3 class="friend-name">Friend-$</h3>
        <p>Dolor, ducimus aperiam?</p>`;
        container.appendChild(newFriend);
})