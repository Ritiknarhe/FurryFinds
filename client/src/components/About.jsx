import React from "react";

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-sky-50 text-gray-950">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div >
        <div className="font-semibold text-justify text-2xl">
        <p >
        Welcome to FURRY FINDS, where your journey to finding the ideal canine 
        companion begins. At FURRY FINDS, we understand that every dog lover is 
        unique, and so are their requirements in a furry friend. Our dedicated team of dog enthusiasts and experts has crafted an innovative platform that tailors breed recommendations to your lifestyle, ensuring a perfect match. 

        </p>
        <br />

        <p>
        With our personalized approach and expert guidance, you'll discover the dog that fits seamlessly into your life. Beyond breed suggestions, we offer a wealth of resources and local services, ensuring that your canine companion receives the best care possible. Thank you for choosing FURRY FINDS as your trusted partner in this exciting and heartwarming journey. Let's find your perfect match together.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
