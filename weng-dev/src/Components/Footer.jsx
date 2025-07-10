const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        <div className="flex gap-7">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Project">Project</a>
        </div>
        <div className="flex gap-3 items-center">
            <a href="#">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-facebook-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer