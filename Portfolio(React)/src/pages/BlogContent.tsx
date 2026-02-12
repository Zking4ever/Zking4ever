import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import BlogCard, { type BlogDataType } from '../components/UI/BlogCard/BlogCard'
import { BlogDatasSample } from './Blog'
import { useEffect, useState } from 'react';


export default function BlogContent() {

  const param = useParams();
  const [currentBlog,setCurrentBlog] = useState<BlogDataType>({id:'',title:'',content:''});
  
  const fetchTheContent =()=>{
    // read and render the content
  }
  useEffect(()=>{
    const id = param.id;
    setCurrentBlog(BlogDatasSample.filter(b=>b.id==id)[0]);
  },[])

  return (
    <>
        <Header />
        <div className="blog-page" style={{width:'100%'}}>
            <div style={{textAlign:'left',marginLeft:80}}>
              <h2>{currentBlog.title}</h2>
                {currentBlog.content}

            </div>
        </div>
    </>
  )
}
