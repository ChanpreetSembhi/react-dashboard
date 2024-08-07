import { RiStarFill } from "@remixicon/react";
import React from "react";

const feedbacks = [
  {
    id: 0,
    profile: "https://i.pravatar.cc/?img=11",
    name: "Jenny Wilson",
    stars: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum modi, dolorem ducimus quam repellat explicabo officia eos, perferendis illo doloribus fugiat esse rem dignissimos sequi deleniti at mollitia. Delectus, dicta.",
  },
  {
    id: 1,
    profile: "https://i.pravatar.cc/?img=12",
    name: "Jenny Wilson",
    stars: 1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum modi, dolorem ducimus quam repellat explicabo officia eos, perferendis illo doloribus fugiat esse rem dignissimos sequi deleniti at mollitia. Delectus, dicta.",
  },
  {
    id: 2,
    profile: "https://i.pravatar.cc/?img=13",
    name: "Jenny Wilson",
    stars: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum modi, dolorem ducimus quam repellat explicabo officia eos, perferendis illo doloribus fugiat esse rem dignissimos sequi deleniti at mollitia. Delectus, dicta.",
  },
  {
    id: 3,
    profile: "https://i.pravatar.cc/?img=14",
    name: "Jenny Wilson",
    stars: 2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum modi, dolorem ducimus quam repellat explicabo officia eos, perferendis illo doloribus fugiat esse rem dignissimos sequi deleniti at mollitia. Delectus, dicta.",
  },
];

const Feedback = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-5">
      <h1 className="text-xl font-bold pb-4">Customer's Feedback</h1>
      <div className="flex flex-col divide-y divide-gray-600">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="flex flex-col space-y-2 py-4">
            <div className="flex items-center gap-2">
              <img
                src={feedback.profile}
                alt="profile"
                className="size-9 rounded-full"
              />
              <p>{feedback.name}</p>
            </div>
            <div className="flex items-center space-x-2 *:size-5">
              <RiStarFill
                className={
                  feedback.stars >= 1 ? "text-yellow-400" : "text-gray-400"
                }
              />
              <RiStarFill
                className={
                  feedback.stars >= 2 ? "text-yellow-400" : "text-gray-400"
                }
              />
              <RiStarFill
                className={
                  feedback.stars >= 3 ? "text-yellow-400" : "text-gray-400"
                }
              />
              <RiStarFill
                className={
                  feedback.stars >= 4 ? "text-yellow-400" : "text-gray-400"
                }
              />
              <RiStarFill
                className={
                  feedback.stars >= 5 ? "text-yellow-400" : "text-gray-400"
                }
              />
            </div>
            <p className="text-xs text-gray-400">{feedback.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
