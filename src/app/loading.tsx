import Navigation from "@/components/header/Navigation";

const Preloader = () => {
  return (
      <div className='flex justify-center items-center h-screen'>
          <Navigation />
        <div>loading...</div>
      </div>
  )
}

export default Preloader