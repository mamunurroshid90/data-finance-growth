import React from "react";

export const Cards = () => {
  const cards = [
    {
      id: 1,
      img: "/assets/single.png",
      price: 149,
      title: "single user",
      lists: ["500 GB storage", "1 user allowed", "send up to 2GB"],
    },
    {
      id: 2,
      img: "/assets/double.png",
      price: 199,
      title: "Partnership",
      lists: ["1 TB storage", "3 user allowed", "send up to 10GB"],
    },
    {
      id: 3,
      img: "/assets/triple.png",
      price: 299,
      title: "Group Account",
      lists: ["5 TB storage", "10 user allowed", "send up to 20GB"],
    },
  ];

  return (
    <div name="card" id="card" className="w-full bg-white py-[10rem] px-4">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        {cards.map(({ id, img, price, title, lists }, i) => (
          <div
            key={id}
            className="my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-500 hover:scale-105"
          >
            <img
              className="mx-auto mt-[-3rem] w-20 bg-white"
              src={img}
              alt=""
            />
            <h2 className="py-8 text-center text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-center text-4xl font-bold">${price}</p>
            <ul className="text-center font-medium">
              {lists.map((item) => (
                <li className="mx-8 border-b py-2">{item}</li>
              ))}
            </ul>

            {i === 1 ? (
              <button className=" mx-auto my-6 w-[200px] rounded-md bg-black py-3 font-bold text-[#00df9a]">
                Start Trial
              </button>
            ) : (
              <button className="mx-auto my-6 w-[200px] rounded-md bg-[#00df9a] py-3 font-bold text-black">
                Start Trial
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
