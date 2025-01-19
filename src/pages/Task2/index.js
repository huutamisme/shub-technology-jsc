import Carousel from "./components/Carousel";

function Task2() {

    const image = [
        { src: "/task2/carousel1.png", alt: "carousel image 1" },
        { src: "/task2/carousel2.png", alt: "carousel image 2" },
        { src: "/task2/carousel3.png", alt: "carousel image 3" },
        { src: "/task2/carousel4.png", alt: "carousel image 4" },
        { src: "/task2/carousel5.png", alt: "carousel image 5" },
        { src: "/task2/carousel6.png", alt: "carousel image 6" },
    ]

    return (
        <>
            <div className="lg:px-80 justify-center flex flex-col items-center">
                <img src="/networking.gif" alt="networking gif" width={50} height={50} />
                <h1 className='text-4xl font-bold text-center m-2 break-words'>Hoạt động tiêu biểu từ cộng đồng giáo dục</h1>
                <h1 className="text-2xl text-center m-5 break-words">
                    Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
                </h1>
            </div>

            <div className="mt-5">
                <Carousel images={image} />
            </div>
        </>

    );
}
export default Task2;