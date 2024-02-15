import React from "react";

const commentsData = [
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Harsh Raghav",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Harsh Raghav",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Harsh Raghav",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Harsh Raghav",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Harsh Raghav",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Harsh Raghav",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Harsh Raghav",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Harsh Raghav",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const {authorDisplayName,textDisplay,authorProfileImageUrl}=data.snippet.topLevelComment.snippet;


  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12 rounded-full"
        alt="user"
        src={authorProfileImageUrl}
      />
      <div className="px-3">
        <p className="font-bold">{authorDisplayName}</p>
        <p>{textDisplay}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {/* <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div> */}
    </div>
  ));
};

const CommentsContainer = ({items}) => {
  return (
    <div className="m-5 p-2 w-[800px]">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={items} />
    </div>
  );
};

export default CommentsContainer;
