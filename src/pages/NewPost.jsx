import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

function NewPost() {
    const [postType, setPostType] = useState("Question");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [abstract, setAbstract] = useState("");
    const [articleText, setArticleText] = useState("");
    const [tags, setTags] = useState("");
    const [error, setError] = useState("");

    const handlePost = (e) => {
        e.preventDefault();
        setError("");

        const tagList = tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

        if (!title.trim()) {
            setError("Please enter a title.");
            return;
        }

        if (postType === "Question" && !description.trim()) {
            setError("Please describe your problem.");
            return;
        }

        if (
            postType === "Article" &&
            (!abstract.trim() || !articleText.trim())
        ) {
            setError("Please enter both the abstract and article text.");
            return;
        }

        if (tagList.length === 0) {
            setError("Please enter at least one tag.");
            return;
        }

        if (tagList.length > 3) {
            setError("You can enter a maximum of 3 tags.");
            return;
        }

        alert("Your post has been submitted successfully!");

        setTitle("");
        setDescription("");
        setAbstract("");
        setArticleText("");
        setTags("");
    };

    return (
        <>
            <Header />

            <main className="post-container">
                <h2 className="post-heading">New Post</h2>

                <div className="post-type">
                    <span>Select Post Type:</span>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            checked={postType === "Question"}
                            onChange={() => {
                                setPostType("Question");
                                setError("");
                            }}
                        />
                        Question
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="postType"
                            checked={postType === "Article"}
                            onChange={() => {
                                setPostType("Article");
                                setError("");
                            }}
                        />
                        Article
                    </label>
                </div>

                <h3 className="post-section-heading">
                    What do you want to ask or share
                </h3>

                <form onSubmit={handlePost}>
                    <div className="post-field">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder={
                                postType === "Question"
                                    ? "Start your question with how, what, why, etc."
                                    : "Enter a descriptive title"
                            }
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {postType === "Question" ? (
                        <div className="post-field post-description">
                            <label htmlFor="description">
                                Describe your problem
                            </label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            />
                        </div>
                    ) : (
                        <>
                            <div className="post-field">
                                <label htmlFor="abstract">Abstract</label>
                                <textarea
                                    id="abstract"
                                    placeholder="Enter a 1-paragraph abstract"
                                    value={abstract}
                                    onChange={(e) =>
                                        setAbstract(e.target.value)
                                    }
                                />
                            </div>

                            <div className="post-field post-description">
                                <label htmlFor="articleText">
                                    Article Text
                                </label>
                                <textarea
                                    id="articleText"
                                    placeholder="Write your article here"
                                    value={articleText}
                                    onChange={(e) =>
                                        setArticleText(e.target.value)
                                    }
                                />
                            </div>
                        </>
                    )}

                    <div className="post-field post-tags">
                        <label htmlFor="tags">Tags</label>
                        <input
                            id="tags"
                            type="text"
                            placeholder={`Please add up to 3 tags to describe your ${
                                postType === "Question"
                                    ? "question"
                                    : "article"
                            } e.g., Java`}
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </div>

                    {error && <p className="post-error">{error}</p>}

                    <button type="submit" className="post-submit">
                        Post
                    </button>
                </form>
            </main>

            <Footer />
        </>
    );
}

export default NewPost;