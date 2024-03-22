import Dollar from "./images/Dollar";

export default function FilterByPrice() {
 return(
    <div className="flex h-[44px] items-center bg-[white] px-[10px] rounded-md">
    <Dollar/>
    <select className="py-[8px] px-[12px]" id="Ерөнхий ангилал">
        <option value="" disabled selected>Үнэ</option>
        <option value="Үнэ өсөхөөр">Үнэ өсөхөөр</option>
        <option value="Үнэ буурахаар">Үнэ буурахаар</option>
    </select>
</div>
 )   
}