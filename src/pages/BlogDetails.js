import { useState, useEffect, useCallback } from "react";
import parse from "html-react-parser";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { blogUrl } from "./../config.json";
import { pipe } from "./../utils/pipe";
import { replaceHashtag } from "./../utils/text";

function BlogDetails() {
  const { postId } = useParams();
  const [details, setDetails] = useState(null);

  const getPostDetails = useCallback(
    async function () {
      try {
        const { data } = await axios.get(`${blogUrl}/posts/${postId}`);
        setDetails(data);
      } catch (exc) {
        toast.error("Cannot retrieve post details");
      }
    },
    [postId]
  );

  useEffect(() => {
    getPostDetails();
  }, [getPostDetails]);

  return (
    <>
      <article className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-5 md:p-10">
        {details && (
          <>
            <section>
              <Carousel>
                {details.images.map((image, index) => (
                  <div key={index}>
                    <img src={`${blogUrl}/media/image/${image}`} alt={image} />
                  </div>
                ))}
              </Carousel>
            </section>
            <section>
              <p className="text-gray-50">
                {parse(
                  pipe(details.content, [
                    replaceHashtag(/\B#\w\w+\b/g, {
                      color: "lightblue",
                    }),
                  ])
                )}
              </p>
            </section>
          </>
        )}
      </article>
    </>
  );
}

export default BlogDetails;
