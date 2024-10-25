import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

  return (
    <div>
      <h1>You have opened the post page with ID = {params.id}</h1>
      {
        isLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Comments</h1>
      {
        isComLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
        : <div>
            {comments.map(comm => 
                <div key={comm.id} style={{marginTop: '20px'}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>
      }
      
    </div>
  )
}

export default PostIdPage
