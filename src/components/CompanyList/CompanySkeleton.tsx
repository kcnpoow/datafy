import style from './style.module.css';

export default function CompanySkeleton() {
  return (
    <div className='p-4 bg-panel rounded-xl shadow'>
      <div className='animate-pulse'>
        <div className='h-8 mb-3 bg-primary rounded-sm'></div>

        <div className='flex w-full mb-3'>
          <div className='w-10 h-5 mr-2 bg-primary rounded-sm'></div>

          <div className='w-10 h-5 bg-primary rounded-sm'></div>
        </div>

        <div className='grid grid-cols-[1fr_1fr_3fr_2fr] gap-x-2 max-w-[400px] mb-3'>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </div>

        <div className='grid grid-cols-[1fr_8fr] gap-x-2 max-w-[700px] mb-3'>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </div>

        <div className='grid grid-cols-[1fr_3fr] gap-x-2 max-w-[800px] mb-3'>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </div>

        <div className='grid grid-cols-[1fr_3fr] gap-x-2 max-w-[500px]'>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </div>
      </div>
    </div>
  );
}
