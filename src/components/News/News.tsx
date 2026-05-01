
import { blogPosts } from "../../utils/content";
import { type BlogPost as IBlogPost}  from "../../utils/contentTypes.tsx";
import BlogPost from "./BlogPost.tsx";


export default function News() {
    return (
        <section className="px-24 py-36">
            <div className="m-auto max-w-389">
                <h2 className="tracking-6 mb-34 text-center text-[3.25rem] font-semibold">
                    Latest news from us
                </h2>
                <ul className="flex flex-col gap-y-34">
                    {blogPosts.map((post:IBlogPost ) => (
                        <BlogPost post={post} key={post.id} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
