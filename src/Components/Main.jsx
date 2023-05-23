import img1 from '../../public/assets/img1.jpg'
import img2 from '../../public/assets/img2.jpg'
import img3 from  '../../public/assets/img3.jpg'
import img4 from '../../public/assets/img4.jpg'
import img5  from '../../public/assets/img5.jpg'
import img6 from '../../public/assets/img6.jpg'
import img7 from '../../public/assets/img7.jpg'


function Main() {
  return (
    <main className="bg-paisajeMain bg-no-repeat ">
    <div className="flex h-[1000px] ">
  <div className="w-3/10 flex justify-center items-center">
    <div  className="w-96 mb-[150px] ml-32 bg-primary-100 bg-opacity-50 flex flex-col gap-10  justify-center items-center">
    <h1 className='text-4xl rop-shadow-md hover:drop-shadow-xl font-bold w-80  text-center text-white'>Find the perfect destination</h1>
    <h2 className='text-2xl rop-shadow-md w-80 text-center text-white'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</h2>
    <button className='bg-primary-900 hover:bg-primary-100 text-white font-bold py-2 px-4 rounded-full w-40 text-center drop-shadow-md hover:drop-shadow-xl mb-12'>BUTON</button>
    </div>
  </div>
  <div className="w-7/10">
  <img
          className="object-contain h-72 absolute top-[400px] right-80 border-solid border-4 border-black z-10 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl "
          src={img1}
          alt="paris"
        />
        <img
          className="object-contain h-64 absolute top-[224px] right-[500px] transform rotate-2 border-solid border-4 border-black z-0 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img2}
          alt="asd2"
        />
        <img
          className=" h-64 absolute top-[630px] right-20 transform rotate-3 border-solid border-4 border-black z-10 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img3}
          alt="asd2"
        />
        <img
          className=" h-60  absolute right-8 top-[450px] border-solid border-4 border-black z-10 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img4}
          alt="japon"
        />
        <img
          className=" h-72  absolute top-[190px] right-12 transform -rotate-2 border-solid border-4 border-black z-30 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img5}
          alt="aurora"
        />
        <img
          className=" h-80 w-96 absolute top-[600px] right-[570px] transform -rotate-3 border-solid border-4 border-black z-10 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img6}
          alt=""
        />
         <img
          className=" h-80 absolute top-[630px] right-[300px] transform -rotate-3 border-solid border-4 border-black z-0 rounded-3xl transition duration-300 ease-in-out hover:scale-110 drop-shadow-2xl"
          src={img7}
          alt="nieve"
        />
  </div>
</div>
  </main>
  
  );
}

export default Main;


