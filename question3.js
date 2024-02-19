// 3. (4p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div> (skapa HTML-elementet med JavaScript eller lägg till dem i HTML-filen)
// Visa endast posts från användaren med userId: 1
// Använd async/await med felhantering. Använd dig av filter samt forEach eller map.


// Din kod här
async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        const list = posts.filter(post => post.id === 1);
        console.log(list);
        
        const postsList = document.getElementById("posts");
        posts.forEach(post => {
            const postItem = document.createElement("div");
            postItem.innerHTML = `
            <p> ${post.id}</p>
            <h3> ${post.title}</h3>
            <p> ${post.body}</p>
            `
            postsList.appendChild(postItem);
            
        });
    } catch (error) {
        console.error("Something went wrong", error)
    }
   
}
getPosts();


