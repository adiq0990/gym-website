import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="just-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            eveniet quos qui laboriosam rerum deleniti deserunt sequi itaque
            suscipit!
          </p>
          <p>Copy Right</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">Lorem ipsumasd</p>
          <p className="mt-5">Lorem ipsuadipisicing elit.</p>
          <p className="mt-5">+48 827 198 283</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
