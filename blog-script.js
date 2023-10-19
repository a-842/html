const posts = [
    {
        title: "Post 1",
        content: "Content of Post 1",
        date: "2023-10-10",
        project: "Project A"
    },
    {
        title: "Post 2",
        content: "Content of Post 2",
        date: "2023-10-15",
        project: "Project B"
    },
    // Add more posts here
];

const postWall = document.getElementById("post-wall");

// Function to render blog posts
function renderBlogPosts(posts) {
    postWall.innerHTML = "";
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p>Date: ${post.date}</p>
            <p>Project: ${post.project}</p>
        `;
        postWall.appendChild(postElement);
    });
}

// Initial rendering of all posts
renderBlogPosts(posts);

const projectList = document.getElementById("project-list");

// Function to filter and render blog posts by project
function filterByProject(project) {
    const filteredPosts = posts.filter(post => post.project === project);
    renderBlogPosts(filteredPosts);
}

// Create project filter buttons
const projects = [...new Set(posts.map(post => post.project))]; // Extract unique project names
projects.forEach(project => {
    const button = document.createElement("button");
    button.textContent = project;
    button.addEventListener("click", () => filterByProject(project));
    projectList.appendChild(button);
});
