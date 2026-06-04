import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          slug,
          excerpt,
          "image": mainImage.asset->url,
          publishedAt
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Virhe blogikirjoitusten haussa:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
    window.scrollTo(0, 0);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const textStyle = { fontFamily: "'Montserrat', sans-serif", color: "#333" };

  return (
    <>
      <SEO
        title="Blogi ja artikkeleita"
        description="Kirjoituksia psykofyysisestä fysioterapiasta, stressinhallinnasta ja kehon ja mielen yhteydestä."
        path="/blogi"
      />

      <div className="bg-white min-h-screen py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h1 className="section-title" style={textStyle}>Blogi</h1>
            <div className="mt-4 h-[1px] w-12 bg-gray-200 mx-auto mb-6"></div>
            <p className="text-style w-100">
              Ajankohtaisia kuulumisia, hyvinvointivinkkejä ja näkökulmia kehon ja mielen hyvinvointiin.
            </p>
          </div>

          {loading ? (
            <p className="text-center w-full font-light" style={textStyle}>Ladataan artikkeleita...</p>
          ) : posts.length === 0 ? (
            // TÄMÄ NÄYTETÄÄN, JOS BLOGEJA EI OLE
            <div className="text-center py-20">
              <p className="text-gray-500 font-light text-lg" style={textStyle}>
                Ei vielä julkaistuja artikkeleita. Tulethan pian uudestaan!
              </p>
            </div>
          ) : (
            <>
              {/* Artikkelilista */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {currentPosts.map((post) => (
                  <article key={post._id} className="flex flex-col rounded-md shadow-xl transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl">
                    {post.image && (
                      <div className="overflow-hidden rounded-t-md">
                        <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
                      </div>
                    )}
                    <div className='p-7'>
                      {post.publishedAt && (
                        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-medium">
                          {new Date(post.publishedAt).toLocaleDateString('fi-FI', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </span>
                      )}
                      <h2 className="text-2xl mb-4 font-light tracking-wide uppercase" style={{ fontFamily: "'Montserrat', sans-serif", color: "#777777" }}>
                        {post.title}
                      </h2>
                      <p className="mb-8 leading-relaxed font-light text-sm" style={{ fontFamily: "'Montserrat', sans-serif", color: "#777777" }}> 
                        {post.excerpt} 
                      </p>
                      <div className="mt-auto pt-2">
                        <NavLink to={`/blog/${post.slug.current}`} className="inline-block px-8 py-3 bg-gray-100 text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium rounded-sm hover:bg-gray-200 transition-colors duration-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                          Katso lisää
                        </NavLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-16 flex justify-center gap-4">
                  <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className="px-6 py-2 bg-gray-100 disabled:opacity-50 text-gray-600 uppercase text-[10px] tracking-[0.2em]"
                  >
                    Edellinen
                  </button>
                  
                  <span className="flex items-center text-sm text-gray-500">Sivu {currentPage} / {totalPages}</span>

                  <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 bg-gray-100 disabled:opacity-50 text-gray-600 uppercase text-[10px] tracking-[0.2em]"
                  >
                    Seuraava
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;