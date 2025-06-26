import React from "react";

const Home = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Add Poppins font link to your HTML head in your actual project */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}

      <div className="flex h-full grow flex-col">
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-3 md:px-10 border-b border-solid border-b-[#eaedf1]">
          {/* Logo - Left */}
          <div className="flex items-center gap-4 text-[#101518] w-full md:w-auto justify-between">
            <div className="flex items-center gap-4">
              <div className="size-4">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em]">Campus Exchange</h2>
            </div>
            
            {/* Mobile Menu Button - Hidden on desktop */}
            <button className="md:hidden text-[#101518]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Search Bar - Center */}
          <div className="w-full md:w-auto md:flex-1 md:px-4">
            <label className="flex flex-col min-w-40 h-10 max-w-full md:max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <div className="text-[#5c748a] flex border-none bg-[#eaedf1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#101518] focus:outline-0 focus:ring-0 border-none bg-[#eaedf1] focus:border-none h-full placeholder:text-[#5c748a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value=""
                />
              </div>
            </label>
          </div>

          {/* Navigation and Buttons - Right */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Sell</a>
              <a className="text-[#101518] text-sm font-medium leading-normal" href="#">Help</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#56a6f2] text-[#f9fafb] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign up</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedf1] text-[#101518] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Log in</span>
              </button>
              <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#eaedf1] text-[#101518] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="px-4 md:px-10 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] w-full">
            <div className="w-full">
              <div className="md:p-4">
                <div
                  className="flex min-h-[300px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuASOfrY_qYU7fOJytb1ywKhgB8Tl9RXS7y0TNbhSawyN8NaZ7TV5wjURsuj0y5FjJ4D7-GpJj_Bw6ScJxsHEX1eyMIhy_O-jshVXwLFmw-HpWELtut9wnL_WvOTRQbTkWfQ67wnI93UUEG1xK6rIq65WN_J4Oll-te9ZQVqPDoIEVu7J_Rd7ef1Tq_hjafDW-q3ZFuz_k8WC8rtOJ_9aQcYJdQsAuy6CdWngmb3VR7rD-QwNw7HOnCpfbaxWYMJufUe1KXUhpAn1OE")'
                  }}
                >
                  <div className="flex flex-col gap-2 text-center px-2">
                    <h1 className="text-white text-3xl md:text-4xl font-bold md:font-black leading-tight tracking-[-0.033em]">
                      Buy and sell used items with your campus community
                    </h1>
                    <h2 className="text-white text-sm md:text-base font-normal leading-normal">
                      Find great deals on textbooks, electronics, furniture, and more.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#dce8f3] text-[#101518] text-sm md:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Browse items</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <h2 className="text-[#101518] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shop by category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                { name: "Books", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOcqrjhaLkhwdMH3mSCoCheyt3kIIuXxofc-dnfVDStdaSbkDWO4rOuAYpXsTr2n-9O476Fbm5BiUCuYYiEqEfoydfIXBdqzyDsvKMimHQbwy_Ka0G6D5Q7Ayrzf7AyhO0Fu3qjoMREVPSdrWi-jVojgt7agLD6BvP0rGCpn9zp8PAs20D5EzFmwqig2swKiiqftl8_CrBFk897j0PLq_xIMh4g6qgv8DnyoRZJyr-dxP5zTcprx6OESmRSaJR3GJA-sNFuGCoFTY" },
                { name: "Electronics", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwkgJFTfH35e9lh16J245th-l4yy2BSwiOWhruPOn71Aa3E1XSVqbqTaeOKf182hUTPb9DfxhKe23M5PEBkvYEpPJz8x71RR7UQPj5OcTy1l2-q9NC6IgNU6gBvr6yJ54FC_SjBbhyInD-91NDkvMAoJvWRnuk4CWhwYpPQCSlUsm-i7tBB9XjcOdHGItTNUeDGPCo-2G1tmDEs4VjQ-UizYDvJsOcT8W3popwEKz4d-EOgtdzSW5BaSFXi7zgJFl7LDGpa19NEbA" },
                { name: "Furniture", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFx-svaFUJh5zeWwHq-RZxlu8rX6ub7b4zH8yPcG7sdDQ5AoPHz3Z86_CsvKeQZQN68ZRRsZ2GavTPcwTD8NRSelAy16kPDgsXNimLS4HRfRSesvTflbvFvmhbbvXLTI80YFEeaDgaKWCIiF929eXyxYPprC_X1uVTS31DusDoEbz3X47nzW1nrNJ7aWd83toDBQ3_dKFWA9WO-S27zhP3Pq_StkYcyQA_2kGLJWqyQJg0VPawgFDd9lhjc99BCXOVWkIfndafAnU" },
                { name: "Clothing", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAu-Hh1NyvC--D4Bw98qBWVMoXy4RUDCRC68fqfU7diGqIv9gDYR1Jri329hE0ig1iLVsxrh0W4VPLGvjZ8Jobl00ny17PcoV0hcvPdku3y61LAnoV-qepvVPHVsFNwIdMPSXQcRP3X3JvHeq9EEiOeiAnlGATMMAT0o41wzrdzVAHGo5Jq6XLiBjfvU6OZGGDHQL1izDYYq0sFJU_1gO5R__0FE4B2FlWzOtaDxBr-TkCEBd5edooU6F80BE7pxIbwmC5Dgw-BS2Q" },
                { name: "Dorm Supplies", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKuEdRS6_ARrFYDvJzxCKJcsDZwEtTRJycSe1_CnUSjvluVWCrRyZAXG4Ab-65kXXBXsVYt_Xe4WHGJiTpOurXB6u_kzj1Kh7uhknx_KiQ0sbuv9LLh_EqmihLByLfinsVEYZ0xexgrHcZkzWn0m4k6_neoKeCafHXqRU3_bBp7oNcmaSxPo8BEhOYt0yZrmatqmwjqIiJ9ZwJzNI8PiA6_fcBjMo2kaojsdl3dPXfOs_k0qTieAA9mVgPBl4YgehjgGxItxYJ9W8" },
                { name: "Other", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ1paA_lwh4WCM8rSTYQvCUTc0TvvJO1axVPDWu3qKrzZys8-NJTiYzPvTe6hs_m7xef20XKkZ2x0jP_HqsNpRzo55juYPhUcZX1iCa2mCVH8Qoqk2WgwW_iA_-olmf7YrJp34RIx1kuvDOqUWTs3ZYukT_f8aizqeTYzaG9COjyEze3IhxfO5jaW9zzm05d_pxtKZ38TNkCyTJuuvf63in3-l7AVICIVJk3qdqG-QPobi1CyQSmJIocVjYuAnkRSiNqH-e6i044Q" }
              ].map((category, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                  <p className="text-[#101518] text-base font-medium leading-normal">{category.name}</p>
                </div>
              ))}
            </div>

            {/* Featured Items */}
            <h2 className="text-[#101518] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured items</h2>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {[
                  { name: "Calculus Textbook", price: "$25", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIT8PaVvzRxB6n9KiYEqF2CTq3bpVpfoenarlUlSvx0-P0GP_sZt2-CL7mAHq_lYp3Uxfbm7xV7hzgSl52TG5wa5r2qNUxLpJQT6apQUFeg70ljN-_ddI6g8FJZobACAQZn0VQrynZsq5o6VR1mjCQlNces3s9AxxW5NBZxChwrA6dZvFOfcEY_73X3JEcfRHGuDcRgmo_1QWO_D4dQRFj_r8GhpGHHoeTnWYt9dywJgw_5eJg_8SZ0yA2MonlLZHykfNhT89vp78" },
                  { name: "Laptop - Like New", price: "$450", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEEyKOPO8GxoHDxGUhTzy2XWIdNJTAgt2htifuqiAJHbDqzz0Nblo0YLQRXjB0_a9EfnjYki2D0APDdUm53IBNp30MMSBj7b-ClwUiqdJHcKwyGRan9LOaCD4lL6lg3dzadlPdQu4riBZjDyaTrgpfEZnybPHmFYaSsW9EWtyA4S0b1dp8dngiWcwkLI6gRFbTUnHcKimNeqhEv3lmJ99Kddg3QyL9PMmn_EZ2Zpg_u1_mVjNz3L1OYGaMTTcDUwBCCDr33gHB91c" },
                  { name: "Desk Lamp", price: "$15", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmg0PtA8epcmHStO9OLXzDxKkKljO-LL0eYxL8bxDgAo4S2Bs85BhdbEORicEG7mWGmTWx_50eB-HVgnsNascCpHtw70GACLIDA6aGdKu45QSW70wCEi5LsmaoAVJbe0drABMch0XeIZSbxgrokzR9SJ2wnRBKqomyuhPvV10BpTlu26De0qN4aacAFIGyL33uCpm4LRg0iGYYLyEVgyVRvFCQCP8LWs5Ys_npF35Gs6Xadgs6goRWRcFxtqyAzbFcwqqMNPMtGEE" },
                  { name: "Backpack", price: "$30", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyag0Kbjd_K06xPmuv_JgoK5PVBNssxz3ygB1EwzaYDQnV5Hfk4ZaIE0YR5uals0y_BWzKHhkouai6eSt7ma1r9ERZJTmVgroKWWbVl35PDoCHQVpSOI4sUg3i3K5XRpDhiQk1uvxyAOZ6SagECZ-M1y88-hj8AqJi_nExscR01agNf7L7M8Bpc1BWvGp3dYUjdeFfvn2Sc0_wN1UDe9gcIKnmviDLZvAABIZoXNy6seejDFpWOhRMRTr-RSTjXF7EP-Icfm-E764" },
                  { name: "Bike", price: "$100", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClxsYOgFKvoeDyAU5iY24lRkAUp6Wca0IrN5cR9TgCSuq4t_ErL6UZ--pJGrb4CTir_noxnnCOfLVngjdnj7lOQeVBn5xppCitVdS22I2_GPQi_pckM02ODciEt_005K1rGwthwCaWxK9zjcS4UoGnKGrSRkgxRxVQ18epKQ9-fSVTuxbPJtKn0uBGI0fNwy0TTo3oRBslDyke4JT0Z3q5y_AahF44FAaTv7ZyYMuBq--c2F_DwCc0BYndPBiPUWf3q3HVkxWx_DE" }
                ].map((item, index) => (
                  <div key={index} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-[150px] sm:min-w-40">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div>
                      <p className="text-[#101518] text-base font-medium leading-normal">{item.name}</p>
                      <p className="text-[#5c748a] text-sm font-normal leading-normal">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] w-full flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">About</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
                <a className="text-[#5c748a] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
              </div>
              <p className="text-[#5c748a] text-base font-normal leading-normal">@2024 Campus Exchange. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;