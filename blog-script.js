const posts = [
    {
        title: "Sample Text",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "2023-10-10",
        project: "Project A"
    },
    {
        title: "What I like",
        content: "orange",
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
            <div class="post-box">
                <h2>${post.title}</h2><p>${post.date}</p>
                <p>${post.content}</p>
                <p>Project: ${post.project}</p>
            </div>
            <br>
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

const showAllButton = document.createElement("button");
showAllButton.textContent = "All";
showAllButton.addEventListener("click", () => renderBlogPosts(posts));
projectList.appendChild(showAllButton);

projects.forEach(project => {
    const button = document.createElement("button");
    button.textContent = project;
    button.addEventListener("click", () => filterByProject(project));
    projectList.appendChild(button);
});
