import {useState} from 'react'
import i1 from "../assets/i1.png"
import r1 from "../assets/r1.png"
import i2 from "../assets/i2.png"
import r2 from "../assets/r2.png"
import i3 from "../assets/i3.png"
import r3 from "../assets/r3.png"

import a1 from "../assets/a1.jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.jpg"
import m1 from "../assets/m1.jpg"
import m2 from "../assets/m2.jpg"
import m3 from "../assets/m3.jpg"
import m4 from "../assets/m4.jpg"

import arrow from "../assets/arrow-2.png"
import star from "../assets/star.svg"
import ReviewCard from './ReviewCard'

function Reviews() {

  const reviewData = [
    {
      id: 1,
      bgImage: r3,
      profileImg: m1,
      name: "Rahul Sharma",
      title: "Software Engineer, Bengaluru",
      reviewMsg: "The quality of the bed exceeded my expectations. Delivery was prompt and the installation team was very professional.",
      rating: 5
    },
    {
      id: 2,
      bgImage: r2,
      profileImg: a1,
      name: "Priya Singh",
      title: "Interior Designer, Mumbai",
      reviewMsg: "Elegant design and sturdy build. My clients are extremely happy with the new sofa set. Highly recommended!",
      rating: 5
    },
    {
      id: 3,
      bgImage: r1,
      profileImg: m2,
      name: "Amit Patel",
      title: "Business Owner, Ahmedabad",
      reviewMsg: "The wardrobe is spacious and the finish is premium. Customer support was responsive throughout the process.",
      rating: 4
    },
    {
      id: 4,
      bgImage: r2,
      profileImg: a2,
      name: "Sneha Nair",
      title: "Architect, Kochi",
      reviewMsg: "Beautiful dining table, perfect for family gatherings. The craftsmanship is top-notch.",
      rating: 5
    },
    {
      id: 5,
      bgImage: r1,
      profileImg: m3,
      name: "Vikram Mehra",
      title: "Marketing Manager, Delhi",
      reviewMsg: "Very comfortable and stylish furniture. The after-sales service was excellent.",
      rating: 4
    },
    {
      id: 6,
      bgImage: r3,
      profileImg: a3,
      name: "Neha Kulkarni",
      title: "HR Consultant, Pune",
      reviewMsg: "I am impressed with the durability and look of the products. Will definitely purchase again.",
      rating: 5
    },
    {
      id: 7,
      bgImage: r1,
      profileImg: m4,
      name: "Suresh Iyer",
      title: "Banker, Chennai",
      reviewMsg: "The sofa is very comfortable and fits perfectly in my living room. Great value for money.",
      rating: 4
    },
    {
      id: 8,
      bgImage: r2,
      profileImg: a2,
      name: "Anjali Verma",
      title: "Teacher, Lucknow",
      reviewMsg: "Excellent service and beautiful furniture. My family loves the new look of our home.",
      rating: 5
    },
    {
      id: 9,
      bgImage: r3,
      profileImg: m2,
      name: "Rohit Gupta",
      title: "Entrepreneur, Hyderabad",
      reviewMsg: "High quality products at reasonable prices. The team was very helpful during selection and delivery.",
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  // handler fucniton for handling this thing idk but imma learn it
  const handleNext = () => {
    console.log("next tbn press")
    if(currentIndex < reviewData.length - 3){
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    console.log("prev btn ")
    // to check if its possible to go back 
    if(currentIndex > 0) {
      setCurrentIndex(currentIndex -1)
    }
  }

  return (
    <section className=" p-2 my-10">
      {/* main flex kinda container */}
      <div className=" space-y-6 ">

          {/* text wrapper div */}
          <div className="space-y-4">
              <h3 className="text-xl font-bold mt-6 text-red-900 text-center ">TESTIMONIALS</h3>
              <h1 className="text-[36px] font-bold text-center">Our Client Reviews</h1>
          </div>




          {/* MAIN CONTTENT */}
          <div className="bg-gray-100 font-raleway flex justify-center items-center mx-20 rounded-2xl gap-8 mt-12">

            {/* button arro */}
            <button 
            onClick={handlePrev}
            className="p-2 border rounded-full flex justify-center items-center cursor-pointer">
              <img src={arrow} alt="" />
            </button>

            {/* THE WINDOW which hides overflwoiong cards  */}
            <div className="overflow-hidden py-10">
              {/* the FILMSTRIP it will slide horizontally */}
              <div className="flex transition-transform duration-500 ease-in-out "
              style={{
                transform: `translateX(-${currentIndex * 33.33}% )`,
                // width: `${(reviewData.length * 100)/3}% `
              }}
              >
                {/* {map over all reives not gonna just lisce it idk } */}
                {reviewData.map((item) => (
                  <div 
                  key={item.id}
                  className="w-1/3 shrink-0 px-2 "
                  >
                    <ReviewCard
                      key={item.id}
                      bgImage={item.bgImage}
                      profileImg={item.profileImg}
                      name={item.name}
                      title={item.title}
                      reviewMsg={item.reviewMsg}
                      rating={item.rating}
                    />
                  </div>
                ))}

              </div>

            </div>


            {/*GRID conatainer for that card ig */}
            {/* <div className=" grid grid-cols-3 gap-8 py-10 ">
              {displayedReviews.map((item) => (
                <ReviewCard 
                key={item.id}
                bgImage={item.bgImage}
                profileImg={item.profileImg}
                name={item.name}
                title={item.title}
                reviewMsg={item.reviewMsg}
                rating={item.rating}

                />
              ))}
            </div> */}

              {/* button arrow */}
              <button 
              onClick={handleNext}
              className="p-2 border rounded-full flex justify-center items-center cursor-pointer">
                <img src={arrow} alt="" className='rotate-180 ' />
              </button>

          </div>



        </div>

    </section>
  )
}

export default Reviews