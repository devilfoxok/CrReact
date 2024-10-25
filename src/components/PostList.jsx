import React, { useRef } from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    const nodeRefs = useRef(posts.map(() => React.createRef()));

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Posts not found
            </h1>
        )       
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
               {title}
            </h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            nodeRef={nodeRefs.current[index]}
                            timeout={300}
                            classNames="post"
                         >
                           <div ref={nodeRefs.current[index]}><PostItem remove={remove} number={index + 1} post={post} /></div> 
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
                
        </div>
    )
}

export default PostList;
