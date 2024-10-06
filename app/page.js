import Postcard from "@/component/Postcard"
import getPostMetadata from "@/utils/getPostMetadata";


export default function Home() {
  const postMetadata= getPostMetadata('recipes')
  return (
    <main>
        <div clasName='postContainer'>
            {postMetadata.map((post, postIndex)=>{
                return(
                    <Postcard key={postIndex} post={post}/>
                )
            })}
        </div>
    </main>
  );
}
