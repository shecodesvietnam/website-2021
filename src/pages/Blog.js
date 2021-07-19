import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import parse from "html-react-parser";

import { blogUrl } from "./../config.json";
import { simplify, replaceHashtag } from "./../utils/text";
import { pipe } from "./../utils/pipe";

function Blog() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const { data } = await axios.get(`${blogUrl}/posts`);
      setPosts(data);
    } catch (exc) {
      toast.error("Cannot retrieve posts!");
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <article className="bg-black-light px-5 sm:px-14 py-16 sm:py-24">
        {posts.map((post) => (
          <section
            key={post._id}
            className="text-gray-50 my-5 xl:my-10 xl:w-5/6 mx-auto rounded-3xl"
          >
            <Link
              to={`/blog/${post._id}`}
              className="grid grid-cols-1 sm:grid-cols-2 bg-black rounded-3xl hover:shadow-2xl gap-5 transition duration-500 ease-in-out transform hover:-translate-y-2"
            >
              <div>
                <img
                  className="block rounded-tl-3xl rounded-tr-3xl sm:rounded-bl-3xl sm:rounded-tr-none"
                  src={`${blogUrl}/media/image/${post.images[0]}`}
                  alt="a blog post"
                />
              </div>
              <div className="p-5">
                <p className="block sm:hidden md:block">
                  {parse(
                    pipe(post.content, [
                      (text) => simplify(text, 30),
                      replaceHashtag(/\B#\w\w+\b/g, {
                        color: "lightblue",
                      }),
                    ])
                  )}
                </p>
                <p className="hidden sm:block md:hidden">
                  {parse(
                    pipe(post.content, [
                      (text) => simplify(text, 10),
                      replaceHashtag(/\B#\w\w+\b/g, {
                        color: "lightblue",
                      }),
                    ])
                  )}
                </p>
              </div>
            </Link>
          </section>
        ))}
      </article>
    </>
  );
}

export default Blog;
