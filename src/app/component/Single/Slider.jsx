"use client";

import { useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import Icon from "../Icon";
import { Select, Input, Rate, Checkbox } from "antd";
import Round from "./Round";
import Review from "./Review";
import Form from "./Form";

import Added from "../Main/Added";
import See from "../Main/See";

export default function Banner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [size, setSize] = useState(0);
  const [size2, setSize2] = useState(0);
  const [nums, setNums] = useState(1);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [value, setValue] = useState("0");

  const handleChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setValue(value.replace(/^0+/, "") || "0");
    } else {
      setValue("0");
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const image = "/img/buk.png"; // Replace with your image path
  const slides = Array(4).fill(image); // Creates an array with the same image repeated 4 times

  return (
    <div className="pb-20">
      <div className="grid grid-cols-2 gap-5 text-lg single-flower">
        <div className="banner-slider">
          {/* Main Slider */}
          <div className="relative">
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Navigation, Thumbs]}
              navigation={{
                nextEl: ".custom-next-single",
                prevEl: ".custom-prev-single",
              }}
              className="main-slider"
              onActiveIndexChange={(swiper) =>
                setActiveIndex(swiper.activeIndex)
              } // Update active index
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      src={slide}
                      alt={`Slide ${index + 1}`}
                      className="w-full rounded-3xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute z-[2] flex justify-between w-full px-5 mx-auto transform -translate-y-1/2 top-1/2 text-white/20">
              <div className="flex items-center justify-center w-12 h-12 rotate-90 rounded-full bg-dark-400/20 custom-prev-single">
                <Icon type="chevron" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 -rotate-90 rounded-full bg-dark-400/20 custom-next-single">
                <Icon type="chevron" />
              </div>
            </div>
          </div>

          {/* Thumbnail Slider */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="mt-5 thumb-slider"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="relative ">
                  {/* Conditionally apply bg-black/40 only if the index matches activeIndex */}
                  <div
                    className={`absolute flex w-full h-full rounded-3xl ${
                      activeIndex === index ? "bg-black/40" : ""
                    } z-10 top-0`}
                  ></div>
                  <img
                    src={slide}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full rounded-3xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col gap-4 p-12 bg-gray-100 rounded-3xl">
          <div className="flex gap-4">
            <span className="text-3xl font-semibold text-dark-400">
              Букет из светло-персиковых кустовых роз Павлова
            </span>
            <span className="flex items-center justify-center h-12 text-xl text-red-500 bg-white rounded-full shadow-v min-w-12">
              <Icon type="heart" />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="p-1 text-xs text-white bg-red-500 rounded-sm">
                4890 ₽
              </span>
              <span className="font-semibold text-green-800 ">4290 ₽</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2.5 text-dark-400">
                <span className="text-sm">Cashback 10%</span>
                <span className="text-xl">
                  <Icon type="cashback" />
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-dark-400">
                <span className="text-sm">в наличии</span>
                <span className="flex items-center justify-center p-1 text-white bg-green-800 rounded-full">
                  <Icon type="check" />
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-12 h-12 gap-0 text-sm bg-white rounded-full text-dark-400 shadow-v ">
              <img src="/img/star.png" className="h-5" />
              <span>4.5</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center gap-6">
              <div className="font-medium min-w-36 text-dark-400">Упаковка</div>
              <Select
                defaultValue="Крафт бумага"
                style={{ width: 300, height: 40 }}
                suffixIcon={
                  <span className="bg-green-800 text-[8px] text-white w-5 h-5 flex justify-center items-center rounded-full">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.85671 0.70194C8.68607 0.701976 8.52244 0.76979 8.4018 0.890465L5.45102 3.84124C5.32868 3.95866 5.16568 4.02423 4.99612 4.02423C4.82655 4.02423 4.66355 3.95866 4.54121 3.84124L1.59043 0.890465C1.46908 0.773259 1.30655 0.708405 1.13784 0.70987C0.969135 0.711337 0.807754 0.779006 0.688457 0.898303C0.56916 1.0176 0.50149 1.17898 0.500024 1.34769C0.498558 1.51639 0.563413 1.67892 0.680619 1.80028L3.6314 4.75106C3.99919 5.10203 4.48805 5.29785 4.99644 5.29785C5.50483 5.29785 5.99368 5.10203 6.36148 4.75106L9.31161 1.80028C9.40157 1.71029 9.46283 1.59566 9.48764 1.47086C9.51246 1.34607 9.49972 1.21671 9.45103 1.09916C9.40234 0.981605 9.31989 0.881124 9.21411 0.810421C9.10832 0.739718 8.98394 0.701967 8.85671 0.70194Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                }
              >
                <Select.Option value="1">Крафт бумага</Select.Option>
                <Select.Option value="2">Крафт бумага2</Select.Option>
              </Select>
            </div>
            <div className="flex items-center gap-6">
              <div className="font-medium min-w-36 text-dark-400">
                Размер букета
              </div>

              <div className="flex gap-2.5 items-center">
                {sizes.map((name, i) => (
                  <span key={i} onClick={() => setSize(i)}>
                    <Round val={name} selected={size == i} />
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="font-medium min-w-36 text-dark-400">
                Количество
              </div>
              <div>
                <Input
                  style={{ height: 40 }}
                  value={value}
                  onChange={handleChange}
                  placeholder=""
                  maxLength={10}
                />
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <p className="">
                Продавец:
                <span className="font-semibold">“ООО 51 роза Аква”</span>
              </p>
              <Rate disabled allowHalf defaultValue={4.5} />
            </div>
            <p className="">
              Не реализованый товар: 34 упаковки с 21.03.2018 на бирже
            </p>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-0 bg-white rounded-3xl max-w-max">
                <Round
                  val={<Icon type="minus" />}
                  onClick={() => {
                    setNums((prev) => (prev > 1 ? prev - 1 : prev));
                  }}
                />
                <span className="flex justify-center min-w-10">{nums}</span>
                <Round
                  val={<Icon type="plus" />}
                  onClick={() => {
                    setNums((prev) => prev + 1);
                  }}
                />
              </div>
              <div className="flex items-center justify-center h-10 px-12 text-white bg-green-800 rounded-3xl max-w-max">
                Купить
              </div>
              <div className="flex items-center justify-center h-10 bg-transparent border border-dark-400 rounded-3xl max-w-max px-7">
                Купить в 1 клик
              </div>
            </div>
            <div className="flex flex-col gap-5 mt-4 text-dark-400">
              <div className="flex flex-col gap-3 p-5 bg-white rounded-xl">
                <div className="flex items-center justify-between w-full">
                  <Checkbox
                    checked={check1}
                    onChange={(e) => setCheck1(e.target.checked)}
                  >
                    <span
                      className={`${
                        check1 && "text-green-800 "
                      } font-medium tr-3`}
                    >
                      ХОЧУ ДОБАВИТЬ ВАЗУ В СВОЙ ЗАКАЗ
                    </span>
                  </Checkbox>
                  <span>1290 ₽</span>
                </div>
                {check1 && (
                  <div className="flex items-center gap-6 pl-4">
                    <span>Размер вазы</span>
                    <div className="gap-2.5 flex items-center">
                      {sizes.map((name, i) => (
                        <Round
                          color="gray"
                          val={name}
                          selected={size2 == i}
                          key={i}
                          onClick={() => setSize2(i)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between w-full p-5 bg-white rounded-xl">
                <Checkbox
                  checked={check2}
                  onChange={(e) => setCheck2(e.target.checked)}
                >
                  <span
                    className={`${
                      check2 && "text-green-800 "
                    } font-medium tr-3`}
                  >
                    ХОЧУ ДОБАВИТЬ открытку
                  </span>
                </Checkbox>
                <span>90 ₽</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="group py-2.5 px-4 bg-transparent border-2 border-white rounded-xl flex items-center gap-4">
                <Round
                  action={false}
                  val={
                    <span className="text-xl">
                      <Icon type="delivery" />{" "}
                    </span>
                  }
                />
                <span className="">Доставка</span>
              </div>
              <div className="group py-2.5 px-4 bg-transparent border-2 border-white rounded-xl flex items-center gap-4">
                <Round
                  action={false}
                  val={
                    <span className="text-xl">
                      <Icon type="cash" />{" "}
                    </span>
                  }
                />
                <span className="">Доставка</span>
              </div>
            </div>
            <div className="py-2.5 px-4 bg-white rounded-xl flex items-center justify-start gap-4">
              <Round
                val={
                  <span className="text-xl text-green-800">
                    <Icon type="flower" />{" "}
                  </span>
                }
                selected={true}
              />
              <span className="uppercase">Инструкция свежести</span>
            </div>
            <div className="mt-6">
              <span className="font-semibold">Описание</span>
              <p className="mt-5 text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="mt-6">
              <span className="font-semibold">Состав</span>
              <p className="mt-5 text-base">Розы, Лента, Бумага</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 py-6 mt-10 border rounded-3xl border-dark-400/50">
        <div className="flex items-center justify-between pb-6 border-b border-dark-400/50">
          <span className="text-4xl">Отзывы</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-yellow-500 border border-yellow-500 rounded-full w-14 h-14">
              4.5
            </div>
            <Rate disabled allowHalf defaultValue={4.5} />
            <span className="font-medium">На основании 3 отзывов</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-7">
          <div className="flex flex-col gap-7">
            <Review />
            <Review />
            <Review />
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20 mt-20">
        <Added />
        <See />
      </div>
    </div>
  );
}
