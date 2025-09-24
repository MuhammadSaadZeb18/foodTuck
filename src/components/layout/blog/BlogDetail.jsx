// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { blogs } from "../../layout/blog/blogsData";
// import classes from "../blog/blog.module.css";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const blog = blogs.find((b) => b.id === id);

//   if (!blog) {
//     return <div className="text-center text-red-500">Blog not found</div>;
//   }

//   const { productDetail } = blog;

//   const [comments, setComments] = useState(blog?.productDetail.comments || []);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");

//   const handleAddComment = (e) => {
//     e.preventDefault();

//     if (!name.trim() || !text.trim()) return;

//     const newComment = {
//       id: comments.length + 1,
//       name,
//       text,
//     };

//     setComments([...comments, newComment]);
//     setName("");
//     setText("");
//   };

//   return (
//     <div className={classes.blogDetail}>
//       {/* Blog Header */}
//       <h2 className="text-center">{productDetail.title}</h2>

//       {/* Content Blocks */}
//       {productDetail.content.map((block, i) => {
//         if (block.type === "paragraph") {
//           return <p key={i}>{block.text}</p>;
//         }
//         if (block.type === "image") {
//           return (
//             <figure key={i}>
//               <img src={block.src} alt={block.caption} />
//               <p>{block.caption}</p>
//             </figure>
//           );
//         }

//         return null;
//       })}
//       <p className="text-[#4F4F4F]">
//         At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
//         gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
//         ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
//         eirmod tempor invidunt ut labore et dolore magna aliquyam erat
//       </p>

//       {/* Author */}
//       <div className={classes.author}>
//         <img src={productDetail.author.img} alt={productDetail.author.name} />
//         <div>
//           <h6>{productDetail.author.name}</h6>
//           <p className={classes.role}>{productDetail.author.role}</p>
//           <p>{productDetail.author.bio}</p>
//         </div>
//       </div>

//       {/* Related Blogs */}
//       <div className={classes.related}>
//         <h2>Related Posts</h2>
//         <div className={classes.relatedGrid}>
//           {productDetail.related.map((r) => (
//             <div key={r.id} className={classes.relatedCard}>
//               <img src={r.img} alt={r.title} />
//               <h4>{r.title}</h4>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Comments Section */}
//       {/* Comments */}
//       <div className={classes.comments}>
//         <h3>Comments</h3>
//         <div className={classes.commentList}>
//           {comments.length > 0 ? (
//             comments.map((c) => (
//               <div key={c.id} className={classes.commentItem}>
//                 <p className={classes.commentName}>{c.name}</p>
//                 <p>{c.text}</p>
//               </div>
//             ))
//           ) : (
//             <p className={classes.noComment}>No comments yet. Be the first!</p>
//           )}
//         </div>

//         {/* Comment Form */}
//         <form onSubmit={handleAddComment} className={classes.form}>
//           <input
//             type="text"
//             placeholder="Your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             placeholder="Write your comment..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button type="submit">Add Comment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../layout/blog/blogsData";
import classes from "../blog/blog.module.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="text-center text-red-500">Blog not found</div>;
  }

  const { productDetail } = blog;

  const [comments, setComments] = useState(blog?.productDetail.comments || []);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) return;

    const newComment = {
      id: comments.length + 1,
      name,
      text,
    };

    setComments([...comments, newComment]);
    setName("");
    setText("");
  };

  return (
    <main className={classes.blogDetail}>
      <h2 className="text-center">{productDetail.title}</h2>
      {productDetail.content.map((block, i) => {
        <p key={i}>{block.text}</p>;

        return (
          <section key={i}>
            <img src={block.src} alt={block.caption} />
            <p>{block.caption}</p>
          </section>
        );
        // }

        return null;
      })}
      <p className="text-[#4F4F4F]">
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
        ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat
      </p>

      {/* Author */}
      <section className={classes.author}>
        <img src={productDetail.author.img} alt={productDetail.author.name} />
        <div>
          <h6>{productDetail.author.name}</h6>
          <p className={classes.role}>{productDetail.author.role}</p>
          <p>{productDetail.author.bio}</p>
        </div>
      </section>

      {/* Related Blogs */}
      <section className={classes.related}>
        <h2>Related Posts</h2>
        <div className={classes.relatedGrid}>
          {productDetail.related.map((r) => (
            <div key={r.id} className={classes.relatedCard}>
              <img src={r.img} alt={r.title} />
              <h4>{r.title}</h4>
            </div>
          ))}
        </div>
      </section>
      {/* Comments Section */}
      {/* Comments */}
      <section className={classes.comments}>
        <h3>Comments</h3>
        <div className={classes.commentList}>
          {comments.length > 0 ? (
            comments.map((c) => (
              <div key={c.id} className={classes.commentItem}>
                <p className={classes.commentName}>{c.name}</p>
                <p>{c.text}</p>
              </div>
            ))
          ) : (
            <p className={classes.noComment}>No comments yet. Be the first!</p>
          )}
        </div>

        {/* Comment Form */}
        <form onSubmit={handleAddComment} className={classes.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
      </section>
    </main>
  );
};

export default BlogDetail;
