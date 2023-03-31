import React from 'react'
import "./Blog.modules.css"
//img
import Bg1 from "../../assets/blog-1.png"
import Bg2 from "../../assets/blog-2.png"
import Bg3 from "../../assets/blog-3.png"

const Blog = () => {
  return (
    <div className="blog-page">
    {/* small header */}
    <div className="small-header">Our Blog</div>
    
    {/* big header */}
    <div className="big-header">
      <h1>Our Latest News</h1>
    </div>
    
    {/* blog posts */}
    <div className="blog-posts">
      <div className="blog-post">
        <img src={Bg1} alt="blog post" />
        <article>
          <h2 className='h-text'>Inland Fright a worthy Solution for your business</h2>
          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec volutpat, odio vel hendrerit tristique, velit est laoreet sem, 
          quis pellentesque justo libero quis dolor.</p>
          <a href="/">Read More</a>
        </article>
      </div>
      <div className="blog-post">
        <img src={Bg2} alt="blog post" />
        <article>
          <h2 className='h-text'>How technology can help redraw the supply map</h2>
          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec volutpat, odio vel hendrerit tristique, velit est laoreet sem,
           quis pellentesque justo libero quis dolor.</p>
          <a href="/">Read More</a>
        </article>
      </div>
      <div className="blog-post">
        <img src={Bg3} alt="blog post" />
        <article>
          <h2 className='h-text'>Five things you should have ready for your broker</h2>
          <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Donec volutpat, odio vel hendrerit tristique, velit est laoreet sem, 
          quis pellentesque justo libero quis dolor.</p>
          <a href="/">Read More</a>
        </article>
      </div>
    </div>
    
    {/* more blog button */}
    <footer>
      <button type='submit' className="more-blog">More Blog</button>
    </footer>
  </div>
  )
}

export default Blog
