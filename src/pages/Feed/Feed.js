// import React from 'react';
// import styled from 'styled-components';
// import NameCard from '../../components/Card/NameCard/NameCard';
// import Post from './Post';

// const FeedContainer = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   margin: auto;
// `;

// const NameCardRow = styled.div`
//   display: flex;
//   overflow-x: scroll;
//   padding: 10px 0;
// `;

// const PostsContainer = styled.div`
//   margin-top: 20px;
// `;

// const Feed = () => {
//   const namecards = [
//     { id: 1, name: 'Alice', avatar: 'https://via.placeholder.com/80' },
//     { id: 2, name: 'Bob', avatar: 'https://via.placeholder.com/80' },
//     { id: 3, name: 'Charlie', avatar: 'https://via.placeholder.com/80' },
//     // Thêm các namecard khác nếu cần
//   ];

//   const posts = [
//     { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
//     { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
//     // Thêm các bài post khác nếu cần
//   ];

//   return (
//     <FeedContainer>
//       <NameCardRow>
//         {namecards.map(card => (
//           <NameCard key={card.id} avatar={card.avatar} name={card.name} />
//         ))}
//       </NameCardRow>
//       <PostsContainer>
//         {posts.map(post => (
//           <Post key={post.id} title={post.title} content={post.content} />
//         ))}
//       </PostsContainer>
//     </FeedContainer>
//   );
// };

// export default Feed;


