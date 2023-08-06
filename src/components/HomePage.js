import React from "react";
import {
  Carousel,
  HomePageCard,
  CarouselCategory,
  CarouselProduct,
} from "../components";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto  ">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={" See terms & conditions"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse kindle unlimited"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomePageCard
            title={"We have a surprise for you"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />

          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt=""
            />
          </div>
        </div>
        <CarouselCategory />
        <CarouselProduct />
        <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="#"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
