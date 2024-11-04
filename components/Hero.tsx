import NavBar from "./NavBar"

const Hero = () => {
  return (
    <section
    className='w-[100vw] h-[100vh]
    relative'>

        <NavBar className="absolute top-0 left-1/2 transform -translate-x-1/2" />

        <img src="/splash_one.jpg" className='
        h-[40vh] w-[15vw] object-cover rounded-xl
        absolute left-0 top-[10vh]' />

        <img src="/splash_two.jpg" className='
        h-[25vh] w-[35vw] object-cover rounded-xl
        absolute left-[10vw] bottom-0' />

        <img src="/splash_three.jpg" className='
        h-[40vh] w-[15vw] object-cover rounded-xl
        absolute right-0 bottom-[10vh]' />

        <img src="/splash_four.jpg" className='
        h-[22.5vh] w-[27.5vw] object-cover rounded-xl
        absolute left-[35vw] top-0' />

        <div className="
        max-w-[800px]
        absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
        flex flex-col justify-center items-center gap-y-4">
            <h3 className='
            text-6xl font-bold text-center
            '>Hi, I'm Micah! A full stack developer</h3>
            <p className='
            text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga natus nulla quos minima facere sit fugiat quam perferendis incidunt!</p>
        </div>

    </section>
  )
}

export default Hero