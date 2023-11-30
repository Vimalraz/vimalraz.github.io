// Load blog content from a JSON file
fetch('blogs.json')
    .then(response => response.json())
    .then(data => {
        const blogSection = document.getElementById('blog');

        data.forEach(blog => {
            const blogPost = document.createElement('article');
            blogPost.innerHTML = `
                <h2>${blog.title}</h2>
                <p>${blog.content}</p>
            `;
            blogSection.appendChild(blogPost);
        });
    })
    .catch(error => console.error('Error fetching blogs:', error));

// Display liked designs as links or images
const likedDesignsSection = document.getElementById('liked-designs');

// Example content (replace this with your liked designs data)
const likedDesigns = [
    { type: 'link', content: 'Link 1', href: 'https://example.com/link1' },
    { type: 'image', content: 'Image 1', src: 'path/to/image1.jpg' },
    // Add more liked designs here...
];

likedDesigns.forEach(design => {
    if (design.type === 'link') {
        const link = document.createElement('a');
        link.textContent = design.content;
        link.href = design.href;
        likedDesignsSection.appendChild(link);
    } else if (design.type === 'image') {
        const image = document.createElement('img');
        image.src = design.src;
        likedDesignsSection.appendChild(image);
    }
});
