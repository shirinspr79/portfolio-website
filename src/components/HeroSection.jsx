import React from "react";
const HeroSection = () => {
  return (
    <div
      class="hero"
      style={{
        backgroundImage: `url(${"/images/hero_bg_img.png"})`,
        height: "90%",
      }}
    >
      <div class="hero-overlay bg-opacity-50"></div>
      <div class="hero-content text-left text-neutral-content">
        <div class="max-w-3xl">
          <img
            width={120}
            height={120}
            src={"/images/girlavatar.png"}
            alt="portfolio-hero-pic"
          />
          <h1 class="mb-5 mt-4 text-4xl font-bold">
            {"Hi there, I’m Shirin..."}
          </h1>
          <p class="mb-5 text-xl">
            {
              "A software engineer who learned many programming languages and finally realized her interest is in ui/ux design."
            }
          </p>
          {/* <button class="btn border-hidden bg-blue-800 text-white hover:text-black">
            See Projects
          </button> */}
        </div>
      </div>
    </div>
  );
};

const HeroSection2 = () => {
  return (
    <>
      <div>
        <div
          id="carousel-example"
          class="relative w-full rounded-lg overflow-hidden"
        >
          <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
            <div id="carousel-item-1" class=" duration-700 ease-in-out">
              <img
                src="/images/hero_bg_img.jpeg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
              <img
                src="/images/hero_bg_img.jpeg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
              <img
                src="/images/hero_bg_img.jpeg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
            <div id="carousel-item-4" class=" duration-700 ease-in-out">
              <img
                src="/images/hero_bg_img.jpeg"
                class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>
          <button
            id="data-carousel-prev"
            type="button"
            class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          >
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                class="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="hidden">Previous</span>
            </span>
          </button>
          <button
            id="data-carousel-next"
            type="button"
            class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          >
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                class="h-4 w-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="hidden">Next</span>
            </span>
          </button>
        </div>

        {/* <div className="carousel carousel-center max-w p-4 space-x-4 rounded-box">

        <div className="carousel-item w-1/2">
          <img src="/images/hero_bg_img.jpeg" className="rounded-box" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/images/hero_bg_img.jpeg" className="rounded-box" />
        </div>
        <div className="carousel-item w-1/2">
          <img src="/images/hero_bg_img.jpeg" className="rounded-box" />
        </div>

      </div> */}
      </div>
    </>
  );
};
export default HeroSection;
