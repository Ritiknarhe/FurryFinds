import React from "react";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

import Footer from "../Footer";

const Eat = () => {
  return (
    <div>
      <NavBar />  <br /><br />
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <h1 class=" py-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Fruits Dogs Can or Can’t Eat
            </h1>
            

            <img src="https://www.akc.org/wp-content/uploads/2015/12/Golden-Retriever-Peanut-Butter.jpg" className="mb-10" alt="" />
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Apples - YES (But No Seeds)
            </p>
            <p className="py-6  text-2xl text-gray-900  dark:text-white font-medium">
            Apples are a fantastic source of Vitamins A & C, and also fiber for your pup. It’s important to not let your pup eat the seeds or core, as they can be harmful and difficult to digest. <br /><br />
            Low in fat and protein, apples make a great snack for dogs of all ages. Want an extra enjoyable treat for your pup on a hot summer day? Freeze some apples, they’ll love it!
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Avocado - NO
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
            Although there is some debate in the online world whether avocados are safe for dogs, our answer is no. <br /><br />

Here are some reasons we don’t feed avocados to our dogs. <br /><br />
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Bananas
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat bananas. In moderation, bananas are a great
              low-calorie treat for dogs. They’re high in potassium, vitamins,
              biotin, fiber, and copper. They are low in cholesterol and sodium,
              but because of their high sugar content, bananas should be given
              as a treat, not part of your dog’s main diet. (You can also find
              banana dog treats that never get overripe!)
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Blueberries
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat blueberries. Blueberries are a superfood rich in
              antioxidants, which prevent cell damage in humans and canines
              alike. They’re packed with fiber and phytochemicals as well.
              Teaching your dog to catch treats in the air? Try blueberries! The
              powerhouse fruit is a popular ingredient for blueberry dog treats,
              sometimes in combination with other superfoods like yogurt.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>

      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Cucumbers
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat cucumbers. Cucumbers are especially good for
              overweight dogs, as they hold little to no carbohydrates or fat,
              and they are full of satiating hydration. They’re loaded with
              vitamins K, C, and B1, as well as potassium, copper, magnesium,
              and biotin. Cool cucumbers are an excellent hot weather treat if
              your dog enjoys them, and you can even freeze slices for a fun
              enrichment snack.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>

      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Mango
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat mangoes. This sweet and juicy tropical treat is
              packed with four different vitamins: A, B6, C, and E. Mangoes also
              have potassium and both beta-carotene and alpha-carotene. Just
              remember, as with most fruits, remove the hard pit first, as it
              contains small amounts of cyanide and can become a choking hazard.
              Mango is high in sugar, so use it as an occasional treat,
              especially for dogs who struggle with weight. A less messy option
              for getting the benefits of mango’s superfood nutrients is a chewy
              mango dog treat.
            </p>
          </div>

          
        </div>
      </div>
      <div  className="w-full   bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <h1 class="mb-4 py-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
               Vegetables Dogs Can or Can’t Eat
            </h1>
            <br />
            <br />
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Carrots
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat carrots. Carrots are an excellent low-calorie
              snack that is high in fiber and beta-carotene, which produces
              vitamin A. Plus, crunching on this orange root vegetable is great
              for your dog’s teeth. Carrots are included as an ingredient in
              many dog foods as well as plenty of carrot dog treats.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Brussels sprouts
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat Brussels sprouts. Brussels sprouts are loaded
              with nutrients and antioxidants that are great for humans and
              dogs, alike. Don’t overfeed them to your dog, however, because
              they can cause lots and lots of gas. Cabbage is also safe for
              dogs—since Brussels sprouts are basically tiny cabbages—but
              sharing cabbage with your dog comes with the same flatulence flag.
              Don’t say we didn’t warn you! If your dog is a big fan of Brussels
              sprouts or cabbage, and you’re cool with the results, you might
              want to consider some dehydrated dog foods that include these
              leafy greens as a component.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Spinach
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, dogs can eat spinach, but it’s not one of the top vegetables
              you’ll want to be sharing with you pup. Spinach is high in oxalic
              acid, which blocks the body’s ability to absorb calcium and can
              lead to kidney damage. While your dog would probably have to eat a
              very large amount of spinach to have this problem, it might be
              best to go with another vegetable. If you want to give your dog
              the benefits of the leafy green, you can find spinach dog treats
              for an occasional snack.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Onions
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              No, dogs should never eat onions. If you think your dog has eaten
              onions, call your veterinarian. Onions, leeks, and chives are part
              of a family of plants called Allium that is poisonous to most
              pets, and especially cats. Eating onions can cause your dog’s red
              blood cells to rupture, and can also cause vomiting, diarrhea,
              stomach pain, and nausea. Poisoning from onions is more serious in
              Japanese breeds of dogs like Akitas and Shiba Inus, but all dogs
              are very susceptible to it. If you have children in your
              household, be sure they aren’t sharing foods with onions with your
              dog, and secure your onion food scraps or leftovers where your dog
              cannot access them.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>

      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Broccoli
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              Yes, broccoli is safe for dogs to eat in small amounts, and is
              best served as an occasional treat. It is high in fiber and
              vitamin C and low in fat. However, broccoli florets contain
              isothiocyanates, which can cause mild-to-potentially-severe
              gastric irritation in some dogs. Tough broccoli stalks have been
              known to cause obstruction in the esophagus in dogs. So, if your
              dog likes broccoli, it’s better to offer them cooked broccoli to
              help avoid these issues. (Or, let them gnaw on a broccoli-shaped
              dog chew toy while you dig in to your beef & broccoli takeout.)
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>

      <div name="contact" className="w-full  bg-sky-50 text-gray-950">
        <div className="flex flex-col  justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Asparagus
            </p>
            <p className="py-6 text-2xl text-gray-900  dark:text-white font-medium">
              No, dogs should not eat asparagus. While asparagus isn’t
              necessarily unsafe for dogs, there’s really no benefit to feeding
              it to them. It’s too tough to be eaten raw, and by the time you
              cook it down so it’s soft enough for dogs to eat, asparagus loses
              much of its nutritional value. If you really want to share a
              veggie with your dog, there are plenty of other options that would
              be a better choice. But, if your dog really loves asparagus for
              some reason, it won’t harm them to eat it.
            </p>
          </div>

          <div className=" flex justify-center items-center"></div>
        </div>
      </div>
      <Link to='/guide'>
      <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex  rounded-md hover:scale-110 duration-300">
              Next Story
            </button>
            </Link>

      <Footer />
    </div>
  );
};

export default Eat;
