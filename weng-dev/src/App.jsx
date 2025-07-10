import DataImage from "./data"
import {listTools, listProyek} from "./data"
const App = () => {
  return (
    <>
    <div id="Home"className='hero grid item-center md:grid-cols-2 pt-10 xl:gap-0 gap-6 grid-cols-1'>
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src= {DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-2xl" loading="lazy"/>
          <q>Code yang Indah Lahir dari Ketekunan.</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Ridho Ismail</h1>
        <p className="text-base/loose mb-6 opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia labore voluptas natus sunt magni, quos ipsum magnam neque ipsam deleniti distinctio dicta. Id porro possimus doloremque quos expedita! Deserunt?</p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV<i className="ri-download-line ri-lg"></i></a>
          <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Proyek<i className="ri-arrow-down-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" loading="lazy"/>
    </div>
    {/* About */}
    <div id="About" className="Tentang mt-32 py-10">
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
        <img src = {DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm: hidden" loading="lazy"/>
        <p className="text-base/loose mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio beatae repellat blanditiis quisquam perferendis architecto impedit, voluptatum magnam sint officia similique vitae iure ratione error illum id consectetur inventore? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti fugit quaerat repellendus maxime delectus, blanditiis fugiat cum illum ducimus perspiciatis, consequatur mollitia maiores sequi suscipit, nesciunt laudantium consectetur omnis culpa.</p>
        <div className="flex items-center justify-between">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-4xl mb-1">45<span className="text-violet-500">+</span></h1>
            <p >Proyek Selesai</p>
          </div>
          <div>
            <h1 className="text-4xl mb-1">4<span className="text-violet-500">+</span></h1>
            <p>Tahun Pengalaman</p>
          </div>
        </div>
        </div>
      </div>
      <div className="tools mt-32 ">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:3/4 w-full text-base/loose opacity-50">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan website/desain:</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {listTools.map(tool => (
          <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key = {tool.id}>
            <img src= {tool.gambar} alt="tools-img" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    {/* About */}

    {/* Proyek */}
    <div id="Project" className="proyek mt-32 py-10">
      <h1 className="text-4xl text-center font-bold mb-2">Proyek</h1>
      <p className="text-base/loose text-center opacity-50">Berikut ini beberapa proyek yang telah saya buat</p>
      <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {listProyek.map(proyek => (
          <div className="p-4 bg-zinc-800 rounded-md"key = {proyek.id}>
            <img src= {proyek.gambar} alt="proyek image" loading="lazy" />
            <div>
              <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
              <p className="text-base/loose mb-4">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) =>(
                  <p className = "px-1 py-3 border border-zinc-500 rounded-md font-semibold bg-zinc-600" key = {index}>{tool}</p>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600" href="#">Lihat Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Proyek */}

    {/* Contact */}
    <div id="Contact" className="kontak mt-32 sm:p-10 p-0">
      <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
      <p className="text-base/loose text-center mb-10 opcacity-50">Mari terhubung dengan saya</p>
      <form action="https://formsubmit.co/ridhoismailn@gmail.com" method="POST" className="bg-zinc-800 p-10 mx-auto rounded-md sm:w-fit w-full" autoComplete="off">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold"htmlFor="">Nama Lengkap</label>
            <input className="border border-zinc-500 p-2 rounded-md" type="text" name="Nama" placeholder="Masukkan Nama..." required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Email</label>
            <input className="border border-zinc-500 p-2 rounded-md" type="email" name="email" placeholder="Masukkan Email..." required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Pesan</label>
            <textarea className="border border-zinc-500 p-2 rounded-md" name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..." required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full cursor-pointer">Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
    {/* Contact */}

    </>
  )
}

export default App