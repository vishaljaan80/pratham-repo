import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-white bg-[#1570EF] text-sm  px-12 py-5">
      <h1 className="text-4xl font-semibold mb-4">Sell Tech IND. Productions</h1>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis,
        laboriosam dolorum saepe, minima maxime, eum totam corporis cumque fuga
        commodi hic dolor id doloribus nostrum eius sed perferendis? Tempora,
        nam....
      </p>
      <p className="text-slate-200 mb-10">Read More</p>
      <div className="flex flex-col sm:flex-row gap-10 mb-14">
        <div className="mail flex gap-2">
          <i className="fa-regular fa-envelope text-2xl text-gray-400"></i>
          <div>
            <p className="mb-2" >Mail</p>
            <p>selltech@gmail.com</p>
          </div>
        </div>
        <div className="loc flex gap-2">
            <i className="fa-solid fa-location-dot text-2xl text-gray-400"></i>
          <div>
            <p className="mb-3" >Address</p>
            <p>706 Campfire Ave, jaipur, RAJ.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between border-t border-white pt-5">
        <div className="flex gap-10">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <p className="md:mt-0 mt-8 md:text-center text-right">© 2024-2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;