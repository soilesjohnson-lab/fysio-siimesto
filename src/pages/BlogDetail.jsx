import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          title,
          content,
          publishedAt,
          "image": mainImage.asset->url
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (error) {
        console.error("Virhe artikkelin haussa:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <div className="text-center py-20">Ladataan...</div>;
  if (!post) return <div className="text-center py-20">Artikkelia ei löytynyt</div>;

  const textStyle = { fontFamily: "'Montserrat', sans-serif", color: "#333" };

  const components = {
    block: {
        normal: ({ children }) => (
        <p className="text-sm md:text-base font-light tracking-wide text-gray-600 leading-relaxed text-left mb-6" style={textStyle}>
            {children}
        </p>
        ),
        h1: ({ children }) => <h1 className="blog-h1">{children}</h1>,
        h2: ({ children }) => <h2 className="blog-h2">{children}</h2>,
        h3: ({ children }) => <h3 className="blog-h3">{children}</h3>,
    },
    list: {
        // Numeroidut listat
        number: ({ children }) => (
        <ol className="list-decimal ml-6 space-y-4 text-sm md:text-base font-light text-gray-600 mb-6">
            {children}
        </ol>
        ),
        // Bullet-listat
        bullet: ({ children }) => (
        <ul className="list-disc ml-6 space-y-4 text-sm md:text-base font-light text-gray-600 mb-6">
            {children}
        </ul>
        ),
    },
    listItem: {
        // Numerolistojen alkiot
        number: ({ children }) => <li className="mb-2 pl-2">{children}</li>,
        // Bullet-listojen alkiot
        bullet: ({ children }) => <li className="mb-2 pl-2">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-bold text-gray-800">{children}</strong>,
    },
    types: {
        image: ({ value }) => (
        <img 
            src={urlFor(value).width(800).url()} 
            alt="Blogikuva" 
            className="my-8 rounded-lg shadow-md"
        />
        ),
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {post.image && (
        <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <h1 className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white md:text-5xl font-light uppercase text-center hero-title px-4 w-full">
            {post.title}
          </h1>
        </div>
      )}

      {/* Sisältöalue */}
      <div className="max-w-3xl mx-auto py-24 px-6" style={textStyle}>
        
        <div className="space-y-6">
          <PortableText value={post.content} components={components} />
        </div>

        {/* Painike */}
        <div className="text-center mt-20 border-t border-gray-100 pt-8">
          <Link 
            to="/blog" 
            className="inline-block text-gray-600 text-[10px] tracking-[0.2em] uppercase hover:text-black hover:text-xs transition-all duration-[400ms]" 
            style={textStyle}
          >
            &larr; Takaisin blogiin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;