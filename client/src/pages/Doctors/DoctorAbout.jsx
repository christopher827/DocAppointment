function DoctorAbout() {
  return (
    <div>
<div >
<h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
About of
<span className='text-irisBlueColor font-bold text-[24px] leading-9'>
Muhibir Rahman
</span>
</h3>
<p className='text_para'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, ad hic! Eveniet inventore quisquam debitis illum, dolorum a adipisci error nisi deleniti aliquam, esse nobis animi qui laboriosam tenetur provident vel illo voluptatem. Exercitationem nesciunt, enim est, asperiores sunt perferendis atque eveniet architecto, adipisci quam accusamus et vitae pariatur provident?  
</p>
</div>
<div className="mt-12">
    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
    <ul className="pt-4 md:p-5">
<li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
<div>
<span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
Sept 13,2014-Sept 13,2016
</span>
<p className='text-[15px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>
</div>
<p className='text-[16px] leading-5 text-textColor font-medium'>New Apollo hospital, New York</p>
</li>

<li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
<div>
<span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
06 July, 2010 -Sept 13,2014 
</span>
<p className='text-[16px] leading-6 text-textColor font-medium'>PHD in Surgeon</p>
</div>
<p className='text-[16px] leading-5 text-textColor font-medium'>New Apollo hospital, New York</p>

</li>

    </ul>
</div>

<div className="mt-12">
<h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
<li className='pt-4 rounded bg-[#fff9ea]'>
<span className='text-yellowColor text-[15px] leading-6 font-semibold'>
07 July, 2010 -Aug 13,2014 
</span>
<p className='text-[16px] leading-6 text-textColor font-medium'>Sr. Surgeon</p>
<p className='text-[14px] leading-5 text-textColor font-medium'>New Apollo hospital, New York</p>

</li>

<li className='pt-4 rounded bg-[#fff9ea]'>
<span className='text-yellowColor text-[15px] leading-6 font-semibold'>
07 July, 2010 -Aug 13,2014 
</span>
<p className='text-[16px] leading-6 text-textColor font-medium'>Sr. Surgeon</p>
<p className='text-[14px] leading-5 text-textColor font-medium'>New Apollo hospital, New York</p>

</li>

</ul>
</div>

    </div>
  )
}

export default DoctorAbout
