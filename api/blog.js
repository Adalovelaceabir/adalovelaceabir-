module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      date: "June 15, 2023",
      readTime: "5 min read",
      content: "Learn how to use React Hooks to simplify your functional components and manage state effectively."
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox",
      date: "July 3, 2023",
      readTime: "7 min read",
      content: "Understanding when to use CSS Grid and when to use Flexbox for your layout needs."
    },
    {
      id: 3,
      title: "Building RESTful APIs with Node.js",
      date: "August 12, 2023",
      readTime: "10 min read",
      content: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express."
    }
  ];
  
  if (req.method === 'GET') {
    return res.status(200).json(blogPosts);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};
