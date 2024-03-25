import Completed from '@/components/svg/completed';

export default function orderCompleted() {
  return (
    <div className='flex justify-center items-center h-[100vh] '>
      <div className='flex items-center flex-col justify-center gap-[30px]'>
        <Completed />
        <div className='flex flex-col items-center gap-4 '>
          <h1 className='text-[36px] font-extrabold text-[#101750] '>Таны захиалга амжилттай</h1>
          <p className='flex text-center w-[75%] text-[#8D92A7]'>
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <div className=' w-[208px] h-[59px] text-white bg-[#FF1788] flex justify-center items-center rounded-[3px]'>Үргэлжлүүлэх</div>
        </div>
      </div>
    </div>
  );
}
