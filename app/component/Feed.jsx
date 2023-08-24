import { useEffect, useState } from "react"
const PromptCartList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {
                data.map()
            }
        </div>
    )
}
const Feed = () => {
    const [searchText, setSearchText] = useState(" ")
    const [posts, setPosts] = useState([])

    const handleSearchChange = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch('api/prompt');
            const data = await res.json();
            setPosts(data)
        }
        fetchPosts()
    }, [])
    return (
        <section className="feed" >
            <form className="relative w-full flex-center">
                <input type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                    placeholder="search for a taga a user name" />
            </form>
            <PromptCartList data={posts}
                handleTagClick={() => { }}
            />
        </section >
    )
}

export default Feed