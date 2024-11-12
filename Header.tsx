
function Header () {
    return (
      <div className="h-[150px] w-[1920px] p-4 flex" style={{ backgroundColor:'rgb(162, 152, 117,1)'}}>
        <h1 className="w-[439px] h-[94px] font-bold text-white flex p-10 text-[35px]"> MANZARRI</h1>
  
        <div className='flex gap-4 items-center justify-center'>
          <input type='text'
            placeholder='Search for Gold & Diamond Jewellery and many more things...'
            className='p-4 rounded-lg text-black-950 w-[769.89px]  h-[56.24px]'>

          </input>
        </div>


      </div>
      
    )
  }
  
  export default Header
  