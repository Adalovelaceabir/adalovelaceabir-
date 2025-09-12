let blogPosts = [...]; // same data

 export default function (req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

   if (req.method === 'OPTIONS') {
     res.status(200).end();
     return;
   }

   if (req.method === 'GET') {
     const postId = parseInt(req.query.id);
     const post = blogPosts.find(post => post.id === postId);

     if (!post) {
       res.status(404).json({ error: 'Post not found' });
       return;
     }

     res.json(post);
   } else {
     res.status(405).end();
   }
}
