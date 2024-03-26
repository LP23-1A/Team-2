export default function OrderNavbar() {
    return (
        <div className="flex gap-8 text-[14px] px-4 py-4">
            <button className=" font-semibold border-b-2 border-black ">
                Бүгд
            </button>
            <button>Шинэ захиалга</button>
            <button>Бэлтгэгдэж байна</button>
            <button>Хүргэлтэнд гарсан</button>
            <button>Хүргэгдсэн</button>
            <button>Цуцлагдсан</button>
        </div>

    );
}