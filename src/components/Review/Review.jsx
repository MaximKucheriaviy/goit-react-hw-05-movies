export const Review = ({review}) => {
    const {author, content} = review;
    return <>
        <p>{"Autor "}<span>{author}</span></p>
        <p>{content}</p>
    </>
}