export const EmailSubscribe = () => {
  return (
    <>
      <div className="container-tips text-center mt-5 mb-5">
        <h1>Get Expert Writing Tips Here</h1>
        <p>
          Subscribe for free newsletters for updates on writing tips, discounts,
          and updates.
        </p>
        <div className="inputs d-flex align-items-center justify-content-center">
          <input
            className="p-2 px-5 text-start"
            type="email"
            name="email"
            placeholder="Enter a gmail address"
            pattern=".+@gmail.com"
          />
          <br />
          <br />
          <input
            className="p-2 ml-2 px-5 text-start bg-primary text-light"
            type="submit"
            defaultValue="Sign Up"
          />
        </div>
        <p className="mt-2">
          Projects Showcase Explore our diverse range of academic documents and
          writing projects.
        </p>
      </div>
    </>
  );
};
