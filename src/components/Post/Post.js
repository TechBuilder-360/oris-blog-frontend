import React from 'react'
import Circle from '../Circle/Circle'
import classes from './Post.module.css'

const Post=()=>{
      const post=[{
            image:<Circle/>,
                 name:'Folayan sola',
                          title:'Title one',
                          created_at:"2/2/2021"
          },
          {image:<Circle/>,
            name:'Okunade michael',
            title:'Title two',
            created_at:"2/2/2021"
          },
          {image:<Circle/>,
            name:'Gabriel Arteta',
            title:'Title three',
            created_at:"2/2/2021"},
            {image:<Circle/>,
                  name:'James Wonk',
                  title:'Title four',
                  created_at:"2/2/2021"}
        
        ]
          


      return(
<div>

{post.map((post,index)=>

<div className={classes.post_body}>
<div style={{float:'left'}}>
{post.image}
</div>
<div className={classes.post_sidebar}>
<span style={{fontWeight:'bold'}}>{post.title}</span>
<div className={classes.span}>
      {post.name}
<span style={{float:'right'}}>{post.created_at}</span>
</div>
</div>
</div>


)}


</div>

      )

}

export default Post